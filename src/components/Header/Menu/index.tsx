export default function HeaderMenu() {
    const menuItems = [
        { id: 1, label: 'Accueil', href: '/' },
        { id: 2, label: 'Produits', href: '/products' },
        { id: 3, label: 'À propos', href: '/about' },
        { id: 4, label: 'Contact', href: '/contact' }
    ];

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-6">
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.href}
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}