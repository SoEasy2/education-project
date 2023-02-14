import React from 'react';
import styles from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme
}
const Component: React.FC<AppLinkProps> = ({
                                               className ,
                                               children,
                                               to,
                                               theme= AppLinkTheme.PRIMARY,
                                               ...otherProps
}) => {
    return (
        <Link
            className={classNames(styles.appLink, {}, [className, styles[theme  ]])}
            to={to}
            {...otherProps}
        >
            { children }
        </Link>
    );
};
const AppLink = React.memo(Component)

export { AppLink };