import Head from "next/head";
import Link from "next/link";
import { theme } from "../styles/theme";

export default () => {
    return (
        <>
            <Head>
                <title>GameLeaf</title>
                <meta name="description" content="GameLeaf, Inc." />
                <meta name="author" content="Ron B. Yeh" />
                <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400" rel="stylesheet" />
            </Head>
            <div className="centered">
                <div className="title">GameLeaf</div>
                <div className="leaf"></div>
            </div>
            <style jsx>{`
                .centered {
                    font-family: ${theme.body.fontFamily.gameleafLogo}, ${theme.body.fontFamily.system};
                    background-color: #fcfcfb;
                    color: #666;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    text-align: center;
                    z-index: 0;
                }

                .title {
                    position: absolute;
                    font-size: max(8vh, 40px);
                    margin: 45vh 50vw;
                    transform: translate(-50%, -50%);
                    z-index: 2;
                }

                .leaf {
                    opacity: 0.45;
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-image: url("/s/i/leaf.svg");
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-size: contain;
                    background-position: center;
                    z-index: 1;
                }
            `}</style>
        </>
    );
};

/*
<a href="https://www.pianouniversity.com/">Piano University</a>
Chinese Pop – Learn Chinese Characters with a Matching Game
Find Words Together – Word Search with a Twist
*/