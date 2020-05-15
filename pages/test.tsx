import Head from "next/head";
import Link from "next/link";

export default function Page() {
    return (
        <>
        <div className="container">
            <div>
                <Link href="/">
                    <a>site root</a>
                </Link>
            </div>
            <div>
                <Link href="/chinese/">
                    <a>chinese</a>
                </Link>
            </div>
            <div>
                <Link href="/music/">
                    <a>music</a>
                </Link>
            </div>
        </div>
        <style jsx>{`
            div.container {
                margin: 20px 40px; 
                font-size: 30px;
            }

        `}</style>
        </>
    );
}
