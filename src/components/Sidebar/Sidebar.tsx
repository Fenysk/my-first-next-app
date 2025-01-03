export default function Sidebar() {
    return (
        <aside className="bg-gray-100 p-4 w-64">
            <nav>
                <ul>
                    <li>
                        <a href="/products/games" className="block py-2 text-black hover:underline">
                            Games
                        </a>
                    </li>
                    <li>
                        <a href="/products/electronics" className="block py-2 text-black hover:underline">
                            Electronics
                        </a>
                    </li>
                    <li>
                        <a href="/products/books" className="block py-2 text-black hover:underline">
                            Books
                        </a>
                    </li>
                    <li>
                        <a href="/products/clothing" className="block py-2 text-black hover:underline">
                            Clothing
                        </a>
                    </li>
                    <li>
                        <a href="/products/accessories" className="block py-2 text-black hover:underline">
                            Accessories
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}