import { NavigationMenu, NavigationMenuList } from '@/react-ui';
import {
  INavItem,
  INavLink,
  INavMenu,
  useNav,
} from '../nav-provider/nav-provider';
import { NavToolbarLink } from './components/nav-toolbar-link';
import { NavToolbarMenu } from './components/nav-toolbar-menu';

export interface ITopNavProps {
  items?: INavItem[];

  onLinkTo: (href: string) => void;
}

export const NavToolbar = ({ items, onLinkTo }: ITopNavProps) => {
  const { navItems } = useNav();

  items = items || navItems;

  const pickNavItem = (item: INavItem) => {
    if ((item as INavMenu).children)
      return (
        <NavToolbarMenu
          key={(item as INavMenu).label || ''}
          {...(item as INavMenu)}
          onLinkTo={onLinkTo}
        />
      );
    return (
      <NavToolbarLink
        key={(item as INavLink).href || ''}
        {...(item as INavLink)}
        onLinkTo={onLinkTo}
      />
    );
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => pickNavItem(item))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};