"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

export default function GameQuantity() {
    const params = useParams();
    const query = useSearchParams();

    return (
        <div>
            <Link href="/" className="underline">Go to homepage</Link>
            <p>Il y a {params.quantity} {params.gameId} de type {query.get('type')} !</p>
        </div>
    );
}