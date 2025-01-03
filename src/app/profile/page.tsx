import { currentUser } from "@/data/connected-user.data";
import { notFound } from "next/navigation";

export default function Profile() {
    if (!currentUser) {
        notFound();
    }

    return (
        <div>
            <div>Voici votre profil, {currentUser.pseudo}</div>
            <div>Email: {currentUser.email}</div>
            <div>Role: {currentUser.role}</div>
        </div>
    );
}