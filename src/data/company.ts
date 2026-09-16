export interface CompanyValue {
  id: string;
  title: string;
  description: string;
}

/**
 * Contenido EDITABLE de NOVUM SYSTEM.
 *
 * Los textos de `intro`, `mission`, `vision` y `values` se consumen
 * directamente desde los componentes. No necesitas tocar ningún componente:
 * solo edita este archivo.
 */
export const company = {
  name: 'NOVUM SYSTEM',

  tagline: 'Tecnología que transforma ideas en soluciones.',

  intro:
    'NOVUM SYSTEM es una empresa enfocada en el desarrollo de páginas web. Diseñamos y construimos sitios modernos, profesionales y responsive, adaptados a las necesidades de cada negocio.',

  mission:
    'Nuestra misión es desarrollar soluciones tecnológicas que permitan a las organizaciones alcanzar su máximo potencial operativo y estratégico.',

  vision:
    'Nuestra visión es consolidarnos como una empresa tecnológica de referencia, reconocida por la calidad, la innovación y el impacto real de lo que construimos.',

  values: [
    {
      id: 'excelencia',
      title: 'Excelencia técnica',
      description:
        'Buscamos la máxima calidad en cada línea de código y en cada decisión de producto.',
    },
    {
      id: 'transparencia',
      title: 'Transparencia',
      description:
        'Comunicación clara y honesta con clientes y equipo en todo momento.',
    },
    {
      id: 'compromiso',
      title: 'Compromiso con resultados',
      description:
        'Medimos nuestro éxito por el impacto que generamos en el negocio del cliente.',
    },
    {
      id: 'innovacion',
      title: 'Innovación responsable',
      description:
        'Incorporamos tecnología con criterio, equilibrio y visión a largo plazo.',
    },
  ],
} as const;