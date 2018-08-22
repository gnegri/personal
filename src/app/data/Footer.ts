import { NavbarItemList } from '../classes/NavbarItemList';
import { footerList } from './extensable/FooterList';

export const footer: NavbarItemList = {
    title: 'About',
    img: '',
    url: '/about',
    position: 'fixed-bottom',
    size: 'navbar-expand-sm',
    color: 'navbar-light bg-light',
    list: footerList
};
