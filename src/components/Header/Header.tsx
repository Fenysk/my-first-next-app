import { User } from "@/types/user.type"

type Props = {
    user?: User
}

export default function Header({ user }: Props) {
    return (
        <header className="flex justify-center mb-8 py-4 font-bold">
            {user ?
                (
                    <>Bonjour, <span className="bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 ml-2 text-transparent">{user.pseudo}</span> !</>
                ) : (
                    "Bonjour !"
                )}
        </header>
    )
}