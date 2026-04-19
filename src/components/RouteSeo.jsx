import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE_LANGUAGE, SITE_LOCALE, SITE_NAME, THEME_COLOR } from "../seo/siteMetadata";
import { getSeoForPath } from "../seo/routeSeo";

const RouteSeo = () => {
  const { pathname } = useLocation();
  const seo = getSeoForPath(pathname);
  const robotsContent = seo.noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large";

  return (
    <Helmet
      htmlAttributes={{ lang: SITE_LANGUAGE }}
      prioritizeSeoTags
    >
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(", ")} />
      <meta name="author" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="theme-color" content={THEME_COLOR} />

      <link rel="canonical" href={seo.canonical} />

      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.title} />

      {seo.schema.map((item, index) => (
        <script key={`${seo.canonical}-schema-${index}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export default RouteSeo;
