// ButtonIcon.tsx
import React, { FC, HTMLAttributes } from 'react';

interface ButtonIconProps extends HTMLAttributes<HTMLDivElement> {
    iconClass: string;
    id?: string;
}

const ButtonIcon: FC<ButtonIconProps> = ({ iconClass, id, ...rest }) => {
    const ClassName = `${rest.className || ""}`.trim();
    return (
        <div className={`icon-bottom ${id} ${ClassName}`} id={id}>
            <i className={`${iconClass}`}></i>
        </div>
    );
};

export default ButtonIcon;
