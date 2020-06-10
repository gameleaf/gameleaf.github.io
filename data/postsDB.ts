import glob from "glob";

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
        const mapping = {};
        this.urlToFileMap = mapping;

        // Get a list of all *.md files under posts/camp/....
        const absoluteFilePaths = glob.sync(`posts/${this.folder}/*/*.md`, { absolute: true });
        this.filePaths = absoluteFilePaths;

        const urlPaths = absoluteFilePaths.map((absoluteFilePath) => {
            const pathParts = absoluteFilePath.split("_");
            const partAfterTheUnderscore = pathParts[pathParts.length - 1]; // Keep the part of the file name after the underscore.
            const urlPath = partAfterTheUnderscore.replace(/\.md$/, ""); // Erase the .md extension.

            mapping[urlPath] = absoluteFilePath;

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
}
