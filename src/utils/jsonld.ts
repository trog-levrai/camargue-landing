import { SITE, COMMUNES, isFilled } from '../config/site';
import type { FaqItem } from '../data/faq';
import { absoluteUrl } from './url';

const CONTEXT = 'https://schema.org';

export function localBusiness(site: URL | string) {
  const url = absoluteUrl('/', site);
  return {
    '@context': CONTEXT,
    '@type': 'LocalBusiness',
    '@id': `${url}#entreprise`,
    name: SITE.nom,
    url,
    image: absoluteUrl('/og-default.jpg', site),
    telephone: SITE.telephoneInternational,
    ...(isFilled(SITE.email) ? { email: SITE.email } : {}),
    address: {
      '@type': 'PostalAddress',
      ...(isFilled(SITE.adresseRue) ? { streetAddress: SITE.adresseRue } : {}),
      addressLocality: SITE.ville,
      postalCode: SITE.codePostal,
      addressRegion: SITE.region,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: COMMUNES.map((name) => ({ '@type': 'City', name })),
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conception et aménagement de jardins' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Broyage de végétation et débroussaillage' } },
    ],
  };
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPage(faq: FaqItem[]) {
  return {
    '@context': CONTEXT,
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
