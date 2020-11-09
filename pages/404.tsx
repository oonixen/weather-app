import Link from "next/link";

export default function ErrorPage () {
    return (
        <>
            <h1>Error 404</h1>
            <p>Please <Link href={'/'}><a>go to safety</a></Link></p>
        </>
    )
}