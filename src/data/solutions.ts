export interface SolutionStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface SolutionCapability {
  id: string;
  title: string;
  description: string;
}

export const solutionSteps: SolutionStep[] = [
  {
    id: 'objetivo',
    number: '01',
    title: 'Definimos tu objetivo',
    description:
      'Analizamos tu negocio, tu audiencia y tus metas para establecer qué debe lograr tu sitio web antes de escribir una sola línea.',
  },
  {
    id: 'diseno',
    number: '02',
    title: 'Diseñamos la experiencia',
    description:
      'Definimos la estructura, el contenido y la interfaz con foco en el usuario: clara, profesional y alineada a tu marca.',
  },
  {
    id: 'desarrollo',
    number: '03',
    title: 'Desarrollamos tu sitio',
    description:
      'Construimos una página web moderna, rápida y responsive, que se ve y funciona bien en cualquier dispositivo.',
  },
  {
    id: 'evolucion',
    number: '04',
    title: 'Optimizamos y evolucionamos',
    description:
      'Revisamos el rendimiento, el contenido y el posicionamiento para que tu sitio web mejore de forma continua.',
  },
];

export const solutionCapabilities: SolutionCapability[] = [
  {
    id: 'landing-pages',
    title: 'Landing pages',
    description:
      'Páginas enfocadas en captar la atención y convertir a tus visitantes en clientes.',
  },
  {
    id: 'sitios-corporativos',
    title: 'Páginas web corporativas',
    description:
      'Una presencia digital profesional y creíble, con la información que tus clientes necesitan.',
  },
  {
    id: 'sitios-personalizados',
    title: 'Sitios web personalizados',
    description:
      'Proyectos a la medida de tu negocio, con diseño y funcionalidades definidas para ti.',
  },
  {
    id: 'optimizacion',
    title: 'Optimización y evolución',
    description:
      'Mejora continua del rendimiento, el contenido y el posicionamiento de tu sitio web.',
  },
];