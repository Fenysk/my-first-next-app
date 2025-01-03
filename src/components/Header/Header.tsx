export default function Header() {
    const name = 'Alexis';

    return (
        <header className="flex justify-center mb-8 py-4 font-bold">
            Bonjour, <span className="bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 ml-2 text-transparent">{name}</span> !
        </header>
    )
}