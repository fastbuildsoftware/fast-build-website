import { useLocation } from 'react-router-dom';
import SEO from '@/components/seo/SEO';
import { getSEOForPath } from '@/lib/seo.config';

export default function RouteSEO() {
  const { pathname } = useLocation();
  const meta = getSEOForPath(pathname);

  return (
    <SEO
      title={meta.title}
      description={meta.description}
      keywords={meta.keywords}
      path={pathname}
      image={meta.image}
      noindex={meta.noindex}
      breadcrumbs={meta.breadcrumbs}
    />
  );
}
