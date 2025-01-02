"use client";

import { useParams } from "next/navigation";

export default function Game() {
    const params = useParams();

    return (
        <div>
            {params.gameId}
        </div>
    );
}