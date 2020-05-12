import Head from "next/head";
import Link from "next/link";

function Page() {
    return (
        <div>
            <Link href="/chinese/">
                <a>Chinese</a>
            </Link>
        </div>
    );
}

export default Page;
