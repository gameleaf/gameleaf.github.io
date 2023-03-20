export default () => {
    return (
        <>
            <div className="centered">
                <img className="photo" src="/s/i/ron1.jpg" />
                <p><b>Ron Yeh</b></p>
                <p>
                    <a href="https://www.linkedin.com/in/ronyeh">linkedin.com/in/ronyeh</a>
                </p>
                <p>
                    <a href="mailto:ronyeh@cs.stanford.edu">ronyeh@cs.stanford.edu</a>
                </p>
            </div>
            <style jsx>{`
                div.centered {
                    text-align: center;
                }
                img.photo {
                    margin-top: 5vh;
                    max-width: 100vw;
                    max-height: 50vh;
                }
                p {
                    line-height: 160%;
                }
            `}</style>
            <style jsx global>{`
                body {
                    background-color: #222;
                    color: #dfdfdf;
                    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                    font-size: 32pt;
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
