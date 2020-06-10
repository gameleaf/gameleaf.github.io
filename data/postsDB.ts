import glob from "glob";
import fs from "fs";
import matter from "gray-matter";
import chalk from "chalk";

export default class PostsDB {
    // We can organize our posts under different folders. We currently support:
    // /blog/
    // /camp/
    folder: string;

    filePaths: string[];
    urlPaths: string[];
    urlToFileMap: Record<string, string>;

    constructor(parentFolder: string) {
        this.folder = parentFolder;

        // Build up a dictionary that maps URL paths to file paths.
        // Remember to spit out an error if there is a collision!
        const mapping: Record<string, string> = {};
        this.urlToFileMap = mapping;

        // Get a list of all *.md files under posts/camp/....
        const absoluteFilePaths = glob.sync(`posts/${this.folder}/*/*.md`, { absolute: true });
        this.filePaths = absoluteFilePaths;

        const urlPaths = absoluteFilePaths.map((absoluteFilePath) => {
            const pathParts = absoluteFilePath.split("_");
            const partAfterTheUnderscore = pathParts[pathParts.length - 1]; // Keep the part of the file name after the underscore.
            const urlPath = partAfterTheUnderscore.replace(/\.md$/, ""); // Erase the .md extension.

            if (urlPath in mapping) {
                // Throw a build error when we have multiple files with the same URL path.
                const errorMessage = `
                =================================================
                Multiple posts share the same URL Path!         |
                                                                |
                ${chalk.reset.redBright(mapping[urlPath])}
                                                                |
                ${chalk.reset.redBright(absoluteFilePath)}
                                                                |
                =================================================`;

                console.log(chalk.bgMagenta.bold(errorMessage));
                throw new Error(errorMessage);
            } else {
                mapping[urlPath] = absoluteFilePath;
            }

            return urlPath;
        });
        this.urlPaths = urlPaths;
    }

    getAllFilePaths() {
        return this.filePaths;
    }

    // Convert absolute file paths into URL paths:
    // - remove the YEAR folder
    // - remove the MONTH and DAY prefix
    // - keep everything after the underscore
    // - remove the .md extension
    //
    // Our resulting URL will look like https://www.gameleaf.com/camp/summer-camp-at-home
    getAllURLPaths() {
        return this.urlPaths;
    }

    getFilePathForURLPath(urlPath: string) {
        return this.urlToFileMap[urlPath];
    }

    getStaticPathsForNextJS() {
        const urlPaths = this.getAllURLPaths();

        // Next.js expects the results to be in a particular format.
        // {
        //     paths: [
        //         { params: { id: 'page-1-path' } },
        //         { params: { id: 'page-2-path' } }
        //     ],
        //     fallback: ...
        // }
        const nextJSURLPaths = urlPaths.map((urlPath) => {
            return {
                params: {
                    id: urlPath,
                },
            };
        });

        return {
            paths: nextJSURLPaths,
            fallback: false,
        };
    }

    getStaticPropsForNextJS(context) {
        const params = context.params;
        const urlPath: string = params.id as string;
        const filePath = this.getFilePathForURLPath(urlPath);
        const content = fs.readFileSync(filePath, "utf8");
        const markdown = matter(content);
        return {
            props: {
                id: urlPath,
                frontmatter: markdown.data,
                body: markdown.content,
            },
        };
    }
}
