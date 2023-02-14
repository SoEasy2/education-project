import React from 'react';
import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string;
}

const Component: React.FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
           <div className={styles.links}>
               <AppLink to={'/'}>Main</AppLink>
               <AppLink to={'/about'}>About</AppLink>
           </div>
        </div>
    );
};
const Navbar = React.memo(Component)

export { Navbar };