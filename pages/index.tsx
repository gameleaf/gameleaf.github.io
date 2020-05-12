import Head from "next/head";
import Link from "next/link";

// Click Handler
function goPianoUniversity() {
    location.href = "https://www.pianouniversity.com";
    return false;
}

// Render the Page
function Page() {
    return (
        <>
            <Head>
                <title>GameLeaf</title>
                <meta name="description" content="GameLeaf, Inc." />
                <meta name="author" content="Ron B. Yeh" />
                <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300" rel="stylesheet" />
            </Head>
            <div className="centered">
                <div className="title">
                    GameLeaf – Have Fun &amp; Get Smarter
                    <div className="trademark">
                        ™
                        <span className="tooltip">
                            Do our games really make you smarter? Well, I can't be sure. But they're fun (at least for me). And maybe you
                            learn something new? So... yes 😛? Anyways, why are you still here? Give them a try and let me know what you
                            think!
                        </span>
                    </div>
                </div>
                <div className="app" onClick={goPianoUniversity}>
                    <a href="https://www.pianouniversity.com/">Piano University – Learn Piano the Fun Way</a>
                    <div className="app-subtitle">Games and Tools to Improve Your Musicality</div>
                </div>
                {/* 
                <div className="app">
                    Chinese Pop – Learn Chinese with a Matching Game
                    <div className="app-subtitle">I guarantee you will learn at least one word.</div>
                </div>
                <div className="app">
                    Find the Words – A Timeless Classic
                    <div className="app-subtitle">Almost as fun as your grandmother's word search books.</div>
                </div>
                */}
            </div>

            <style jsx global>{``}</style>
            <style jsx>{`
                html {
                    height: 100%;
                }

                body {
                    font-family: "Roboto Slab", sans-serif;
                    background-color: #fcfcfb;
                    color: #666;
                    height: 100%;
                    margin: 0;
                }

                .centered {
                    margin: auto;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 400px;
                    text-align: center;
                }

                .title {
                    font-size: 40px;
                    height: 200px;
                    line-height: 200px;
                }

                .app {
                    font-size: 28px;
                    margin: 0px 40px;
                    padding: 8px 0px;
                    transition: 0.5s;
                    font-weight: bold;
                }

                .app:hover {
                    background-color: rgba(62, 174, 177, 0.4);
                    color: white;
                    opacity: 1;
                    cursor: pointer;
                }

                .app-subtitle {
                    margin-top: 4px;
                    font-size: 16px;
                    color: #999;
                }

                a:link {
                    color: #3eaeb1;
                }

                a:visited {
                    color: #3eaeb1;
                }

                a:hover {
                    color: #fff;
                }

                a:active {
                    color: #58a;
                }

                .app:hover .app-subtitle {
                    color: #fefefe;
                    font-weight: bolder;
                }

                .trademark {
                    color: #3eaeb1;
                    display: inline-block;
                    position: relative;
                    cursor: pointer;
                }

                .tooltip {
                    visibility: hidden;
                    width: 200px;
                    background-color: rgba(32, 74, 77, 0.57);
                    color: #fff;
                    text-align: center;
                    padding: 10px;
                    border-radius: 6px;
                    position: absolute;
                    z-index: 1;
                    font-family: Avenir, Helvetica, Arial, sans-serif;
                    font-size: 16px;
                    line-height: 1.3em;
                    margin-left: -100px;
                    bottom: 63%;
                    left: 50%;
                }

                .trademark:hover .tooltip {
                    visibility: visible;
                }
            `}</style>
        </>
    );
}

export default Page;
