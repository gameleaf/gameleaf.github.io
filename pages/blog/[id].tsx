import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

// See:
// https://dev.to/tinacms/creating-a-markdown-blog-with-next-js-52hk
// https://github.com/vercel/next.js/tree/canary/examples/blog-starter


export async function getStaticProps({ ...ctx }) {
    const { slug } = ctx.params;
    const content = await import(`./posts/2020/06_04_LearnNextJS.md`);
    const data = matter(content.default);

    return {
        props: {
            frontmatter: data.data,
            body: data.content,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { id: "page1" },
            },
            {
                params: { id: "page2" },
            },
            {
                params: { id: "page3" },
            },
        ],
        fallback: false,
    };
}

export default function Post({ frontmatter, body }) {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <div>
                <div>
                    <div className="title">{frontmatter.title}</div>
                    <h2>{frontmatter.author}</h2>
                    <h3>{frontmatter.date}</h3>
                    <h3>{id}</h3>
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
            `}</style>
        </>
    );
}
