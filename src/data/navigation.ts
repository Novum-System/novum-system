import { ROUTES } from '../utils/constants';

export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'Inicio', href: ROUTES.home },
  { label: 'Servicios', href: ROUTES.servicios },
  { label: 'Soluciones', href: ROUTES.soluciones },
  { label: 'Nosotros', href: ROUTES.nosotros },
  { label: 'Contacto', href: ROUTES.contacto },
];