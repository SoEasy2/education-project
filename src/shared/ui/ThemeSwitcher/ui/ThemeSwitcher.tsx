import React from 'react';
import styles from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

const Component: React.FC<ThemeSwitcherProps> = ({ className }) => {

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(styles.themeSwitcher, {}, [className])}
        >
            { theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
        </Button>
    );
};
const ThemeSwitcher = React.memo(Component)

export { ThemeSwitcher };