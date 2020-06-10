import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import glob from "glob";
import { GetStaticProps, GetStaticPaths } from "next";
import PostsDB from "data/postsDB";

console.log("Create Posts DB for Camp");
const db = new PostsDB("camp");

//////////////////////////////////////////////////////////////////////////////////////////////////
// Runs only on the server side, at build time.
// Figure out all the paths Next.js will pre-render.
export const getStaticPaths: GetStaticPaths = async () => {
    const urlPaths = db.getAllURLPaths();

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
};

//////////////////////////////////////////////////////////////////////////////////////////////////
// Runs only on the server side, at build time.
// Determine the data that will be served to each URL path.
// This data will be baked into the files that we prerender via Next.js.
export const getStaticProps: GetStaticProps = async (context) => {
    const params = context.params;
    const urlPath:string = params.id as string;
    const filePath = db.getFilePathForURLPath(urlPath);
    const content = fs.readFileSync(filePath, "utf8");
    const markdown = matter(content);
    return {
        props: {
            id: params.id,
            frontmatter: markdown.data,
            body: markdown.content,
        },
    };
};

//////////////////////////////////////////////////////////////////////////////////////////////////

export default function Post({ id, frontmatter, body }) {
    const router = useRouter();
    const { route, pathname, query, asPath, basePath } = router.query;
    console.log(JSON.stringify(router));
    return (
        <>
            <div>
                <div>
                    <div className="title">{frontmatter.title}</div>
                    <h2>{frontmatter.author}</h2>
                    <h3>{frontmatter.date}</h3>
                    <h3>[{id}]</h3>
                    <pre>{JSON.stringify(router, null, 4)}</pre>
                </div>
                <div>
                    <ReactMarkdown source={body} />
                </div>
            </div>
            <style jsx global>{`
                body {
                    font-family: sans-serif;
                    margin: 30px;
                }
                .title {
                    font-size: 40px;
                    margin-bottom: 20px;
                }
                h1 {
                    font-size: 20px;
                    margin: 10px 0px 4px;
                }
                h2 {
                    font-size: 20px;
                }
                h3 {
                    font-size: 16px;
                }
                pre {
                    font-size: 18px;
                }
            `}</style>
        </>
    );
}
