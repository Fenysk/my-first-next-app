import Link from "next/link";

export default function Products() {
    return (
        <div>
            <div>Product page</div>
            <ul>
                <li>
                    <Link href="/products/games" className="underline">Games</Link>
                </li>
            </ul>
        </div>
    );
}