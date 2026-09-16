export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'diseno-y-desarrollo-web',
    number: '01',
    title: 'Diseño y desarrollo web',
    description:
      'Creamos páginas web desde cero, con diseño moderno y un desarrollo limpio, rápido y adaptado a cualquier dispositivo.',
  },
  {
    id: 'landing-pages',
    number: '02',
    title: 'Landing pages',
    description:
      'Diseñamos páginas enfocadas en convertir visitantes en clientes: mensajes claros, atractivos y orientados a la acción.',
  },
  {
    id: 'sitios-web-corporativos',
    number: '03',
    title: 'Sitios web corporativos',
    description:
      'Construimos la presencia digital profesional de tu empresa, con información clara, accesible y alineada a tu marca.',
  },
  {
    id: 'sitios-web-personalizados',
    number: '04',
    title: 'Sitios web personalizados',
    description:
      'Desarrollamos sitios a la medida de tu negocio, con estructura, diseño y funcionalidades que se adaptan a tus necesidades.',
  },
];