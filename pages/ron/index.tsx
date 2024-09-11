export default () => {
    return (
        <>
            <div className="centered">
                <a href="https://www.linkedin.com/in/ronyeh">
                    <img className="photo" src="/s/i/ron1.jpg" />
                </a>
                <h1>
                    Ron Yeh
                </h1>
                <p className="linkout">
                    <a href="https://www.linkedin.com/in/ronyeh">linkedin.com/in/ronyeh</a>
                </p>
                <p className="linkout">
                    <a href="mailto:ronyeh@cs.stanford.edu">ronyeh@cs.stanford.edu</a>
                </p>
            </div>
            <style jsx>{`
                div.centered {
                    text-align: center;
                }
                img.photo {
                    margin-top: 3vh;
                    max-width: 100vw;
                    max-height: 50vh;
                }
                p {
                    line-height: 160%;
                }
                p.linkout {
                    font-size: 7vmin;
                }
            `}</style>
            <style jsx global>{`
                body {
                    background-color: #191919;
                    color: #efefef;
                    font-family: system-ui, -apple-system, "Open Sans", "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                    font-size: 30pt;
                }

                h1 {
                    font-size: 12vmin;
                }

                a:link {
                    color: #8cb4ff;
                }

                a:visited {
                    color: #8cb4ff;
                }
            `}</style>
        </>
    );
};
