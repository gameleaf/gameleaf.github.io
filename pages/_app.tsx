import { AppProps } from "next/app";
import Theme from "../styles/Theme";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <style jsx global>{`
                * {
                    ${Theme.layoutReset}
                }
            `}</style>
        </>
    );
}

export default App;
