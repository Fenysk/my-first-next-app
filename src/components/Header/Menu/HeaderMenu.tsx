import { User } from "@/types/user.type";

type Props = {
    user?: User
}

export default function HeaderMenu({ user }: Props) {
    const permanantsMenuItems = [
        { id: 1, label: 'Home', href: '/' },
        { id: 2, label: 'Products', href: '/products' }
    ];

    const authenticatedMenuItems = [
        { id: 3, label: 'Profile', href: '/profile' },
        { id: 4, label: 'Settings', href: '/settings' },
        { id: 5, label: 'Orders', href: '/orders' },
        { id: 6, label: 'Wishlist', href: '/wishlist' },
        { id: 7, label: 'Logout', href: '/logout' }
    ];

    const unauthenticatedMenuItems = [
        { id: 3, label: 'Login', href: '/login' },
        { id: 4, label: 'Register', href: '/register' }
    ];

    const menuItems = [...permanantsMenuItems, ...(user ? authenticatedMenuItems : unauthenticatedMenuItems)];

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