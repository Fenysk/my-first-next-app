import HeaderMenu from "@/components/Header/Menu/HeaderMenu";
import Link from "next/link";

export default function ProductsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <HeaderMenu />

            {children}

            <div className="mt-4">
                <Link href="/" className="underline">Back to Home</Link>
            </div>
        </div>
    )
}