import React, { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}
const Component: React.FC<ButtonProps> = ({ className, theme, children, ...otherProps }) => {
    return (
        <button
            className={classNames(styles.button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            { children }
        </button>
    );
};
const Button = React.memo(Component)

export { Button };