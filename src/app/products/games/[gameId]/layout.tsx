import Link from "next/link";

export default function GameLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}

            <div className="mt-4">
                <Link href="/products/games" className="underline">Back to Games</Link>
            </div>
        </div>
    )
}