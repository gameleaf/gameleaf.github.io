import { AppProps } from "next/app";
import theme from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <style jsx global>{`
            * {
                ${theme.layoutReset}
            }
            `}</style>
        </>
    );
}

export default App;
