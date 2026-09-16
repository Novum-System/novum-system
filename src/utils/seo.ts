import { SITE, ASSETS } from './constants';

export interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
}

export function buildSEO(props: SEOProps) {
  const title = `${props.title} | ${SITE.name}`;
  const description = props.description ?? SITE.description;
  const canonical = props.canonical ?? SITE.url;
  const ogImage = props.ogImage ?? SITE.url + ASSETS.logoTransparent;
  const ogType = props.ogType ?? 'website';
  const robots = props.noindex ? 'noindex, nofollow' : 'index, follow';

  return {
    title,
    description,
    canonical,
    ogImage,
    ogType,
    robots,
  };
}
