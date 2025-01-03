import Sidebar from "@/components/Sidebar/Sidebar";
import Link from "next/link";

export default function ProductsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="flex flex-row mt-8">
                <Sidebar />

                <div className="ml-8">
                    {children}
                </div>

            </div>

            <div className="mt-4">
                <Link href="/" className="underline">Back to Home</Link>
            </div>
        </div>
    )
}