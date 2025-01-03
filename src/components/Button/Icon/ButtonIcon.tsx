import { LucideIcon } from "lucide-react";
import { ButtonAnimation } from "./button-animation.enum";

interface ButtonIconProps {
    icon: LucideIcon;
    onClick?: () => void;
    className?: string;
    strokeWidth?: number;
    animation?: ButtonAnimation;
    isActive?: boolean;
}

export default function ButtonIcon(
    {
        icon: Icon,
        onClick,
        className,
        strokeWidth,
        animation = ButtonAnimation.DEFAULT,
        isActive = false
    }: ButtonIconProps
) {
    const baseButtonClass = "relative p-4 group transition-transform duration-300 active:scale-[0.85]";
    const baseOverlayClass = "absolute inset-0 bg-white/0 rounded-xl group-hover:bg-[#161616] group-hover:scale-100";
    const scaleTransitionClass = "transition-all ease scale-[0.85]";

    const getOverlayClass = () => {
        switch (animation) {
            case ButtonAnimation.DEFAULT:
                return scaleTransitionClass;
            case ButtonAnimation.NO_BACKGROUND:
                return `${scaleTransitionClass} !bg-transparent`;
            default:
                return 'scale-100';
        }
    };

    const shouldChangeTextColorOnHover = animation === ButtonAnimation.SIMPLE || animation === ButtonAnimation.NO_BACKGROUND;

    const getStrokeWidth = () => {
        if (isActive) return 3;
        return strokeWidth ?? 2;
    }

    return (
        <button
            onClick={onClick}
            className={`${baseButtonClass} ${className ?? ""}`}
        >
            <div className={`
                ${baseOverlayClass}
                ${getOverlayClass()}
            `} />
            <Icon
                size={28}
                strokeWidth={getStrokeWidth()}
                className={`
                    relative z-10
                    ${shouldChangeTextColorOnHover ? 'group-hover:text-white' : ''}
                    ${isActive ? 'text-white' : ''}
                `}
            />
        </button>
    );
}