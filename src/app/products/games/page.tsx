import Link from "next/link";

export default function Games() {
    return (
        <div>
            <div>Games page</div>
            <Link href="/products/games/Mario" className="underline">Mario</Link>
        </div>
    );
}