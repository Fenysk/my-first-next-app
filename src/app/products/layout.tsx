import Link from "next/link";

export default function ProductsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <header className="flex justify-center py-4">Products header</header>

            {children}

            <div className="mt-4">
                <Link href="/" className="underline">Back to Home</Link>
            </div>
        </div>
    )
}