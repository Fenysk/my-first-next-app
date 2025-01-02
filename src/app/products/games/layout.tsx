import Link from "next/link";

export default function GamesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <header className="flex justify-center py-4">Games header</header>

            {children}

            <div className="mt-4">
                <Link href="/products" className="underline">Back to Products</Link>
            </div>
        </div>
    )
}