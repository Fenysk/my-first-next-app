export default function HeaderUser() {
    const menuItems = [
        { id: 1, label: 'Profile', href: '/profile' },
        { id: 2, label: 'Settings', href: '/settings' },
        { id: 3, label: 'Orders', href: '/orders' },
        { id: 4, label: 'Wishlist', href: '/wishlist' },
        { id: 5, label: 'Logout', href: '/logout' }
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