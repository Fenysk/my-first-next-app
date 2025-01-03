"use client";

import { AlignLeft, Heart, Home, Pin, Plus, Search, UserRound, Volleyball } from 'lucide-react';
import ButtonIcon from '../Button/Icon/ButtonIcon';
import { MenuItem } from './menu-item.interface';
import { ButtonAnimation } from '../Button/Icon/button-animation.enum';
import { ActionType } from './action-menu.interface';
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const activeMenu = (() => {
        switch (pathname) {
            case '/':
                return 'Feed';
            case '/search':
                return 'Search';
            case '/activity':
                return 'Activity';
            case '/profile':
                return 'Profile';
            default:
                return 'Feed';
        }
    })();


    const menuActions = {
        FEED: { type: ActionType.NAVIGATE, payload: '/' },
        SEARCH: { type: ActionType.NAVIGATE, payload: '/search' },
        NEW_POST: { type: ActionType.MODAL, payload: 'NEW_POST' },
        ACTIVITY: { type: ActionType.NAVIGATE, payload: '/activity' },
        PROFILE: { type: ActionType.NAVIGATE, payload: '/profile' },
        PINNED: { type: ActionType.MODAL, payload: 'PIN' },
        MORE: { type: ActionType.MODAL, payload: 'MORE' }
    };

    const mainMenuItems: MenuItem[] = [
        { name: 'Feed', icon: Home, action: menuActions.FEED },
        { name: 'Search', icon: Search, action: menuActions.SEARCH },
        { name: 'New post', icon: Plus, action: menuActions.NEW_POST },
        { name: 'Activity', icon: Heart, action: menuActions.ACTIVITY },
        { name: 'Profile', icon: UserRound, action: menuActions.PROFILE },
    ];

    const bottomMenuItems: MenuItem[] = [
        { name: 'Pinned', icon: Pin, action: menuActions.PINNED },
        { name: 'More', icon: AlignLeft, action: menuActions.MORE },
    ];

    const isMainButton = (item: MenuItem): boolean => item.name === "New post";

    const handleButtonClick = (item: MenuItem) => {
        if (!item.action) return;
        switch (item.action.type) {
            case ActionType.NAVIGATE:
                router.push(item.action.payload);
                break;
            case ActionType.MODAL:
                openModal(item.action.payload);
                break;
            default:
                break;
        }
    };

    const openModal = (modalName: string) => {
        alert(`Opening modal: ${modalName}`);
    };

    return (
        <aside className="flex flex-col justify-between items-center py-4 w-20 h-screen">
            <ButtonIcon icon={Volleyball} onClick={() => handleButtonClick(mainMenuItems[0])} />

            <nav>
                <ul className='flex flex-col justify-center gap-4'>
                    {mainMenuItems.map((item, index) => (
                        <li key={index}>
                            <ButtonIcon
                                isActive={item.name === activeMenu}
                                icon={item.icon}
                                className={`py-3 rounded-xl  text-[#AAA] ${isMainButton(item) ? "bg-[#161616] text-[#AAA]" : null}`}
                                strokeWidth={isMainButton(item) ? 2.5 : undefined}
                                animation={isMainButton(item) ? ButtonAnimation.SIMPLE : ButtonAnimation.DEFAULT}
                                onClick={() => handleButtonClick(item)}
                            />
                        </li>
                    ))}
                </ul>
            </nav>

            <ul className='flex flex-col justify-center gap-4 mb-4'>
                {bottomMenuItems.map((item, index) => (
                    <li key={index}>
                        <ButtonIcon
                            isActive={item.name === activeMenu}
                            icon={item.icon}
                            className="py-3 rounded-xl text-[#AAA]"
                            animation={ButtonAnimation.NO_BACKGROUND}
                            onClick={() => handleButtonClick(item)}
                        />
                    </li>
                ))}
            </ul>
        </aside>
    );
}
