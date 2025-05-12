import Head from 'next/head';

interface SEOMetadataProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  keywords?: string;
}

/**
 * SEOMetadata component for improving search engine optimization
 * Can be used on any page to set specific metadata
 */
const SEOMetadata = ({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/og-image.jpg', // Default OG image
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords,
}: SEOMetadataProps) => {
  // Format title to include the site name
  const formattedTitle = `${title} | Mira Academy`;
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="title" content={formattedTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="Mira Academy" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:title" content={formattedTitle} />
      <meta property="twitter:description" content={description} />
      {ogImage && <meta property="twitter:image" content={ogImage} />}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Mira Academy" />
    </Head>
  );
};

export default SEOMetadata; 