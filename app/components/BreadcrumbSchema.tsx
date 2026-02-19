const BASE_URL = 'https://www.realestatebycherylnj.com';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * Renders a BreadcrumbList JSON-LD schema tag.
 * The first item should always be { name: 'Home', url: '/' }.
 *
 * Usage:
 *   <BreadcrumbSchema items={[
 *     { name: 'Home', url: '/' },
 *     { name: 'Communities', url: '/communities' },
 *     { name: 'Andover', url: '/communities/andover' },
 *   ]} />
 */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
