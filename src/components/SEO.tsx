import { Helmet } from "react-helmet-async";
import socialHeaderImage from "@/assets/images/autoclick_social_header_1782068112375.jpg";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
  ogImage?: string;
}

export function SEO({ title, description, canonicalUrl, structuredData, ogImage }: SEOProps) {
  const fullTitle = `${title} | AutoClick Agency`;
  const appUrl = import.meta.env.VITE_APP_URL || "https://autoclickagency.com";
  const url = canonicalUrl || appUrl;
  const resolvedOgImage = ogImage || `${appUrl}${socialHeaderImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {resolvedOgImage && <meta property="og:image" content={resolvedOgImage} />}
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {resolvedOgImage && <meta name="twitter:image" content={resolvedOgImage} />}

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
