import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import PostsDB from "data/postsDB";

console.log("Create Posts DB for Blog");
const db = new PostsDB("blog");

//////////////////////////////////////////////////////////////////////////////////////////////////
// Runs only on the server side, at build time.
// Figure out all the paths Next.js will pre-render.
export const getStaticPaths: GetStaticPaths = async () => {
    return db.getStaticPathsForNextJS();
};

//////////////////////////////////////////////////////////////////////////////////////////////////
// Runs only on the server side, at build time.
// Determine the data that will be served to each URL path.
// This data will be baked into the files that we prerender via Next.js.
export const getStaticProps: GetStaticProps = async (context) => {
    return db.getStaticPropsForNextJS(context);
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
