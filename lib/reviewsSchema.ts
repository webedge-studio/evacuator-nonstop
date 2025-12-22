export type ReviewItem = {
  author: string;
  area?: string;
  rating: number;
  body: string;
  datePublished?: string;
};

export function buildReviewsJsonLd(params: {
  url: string;
  businessName: string;
  telephone: string;
  addressLocality: string;
  addressCountry: string;
  reviews: ReviewItem[];
}) {
  const { url, businessName, telephone, addressLocality, addressCountry, reviews } = params;

  const reviewCount = reviews.length || 1;
  const avg = Math.round((reviews.reduce((sum, r) => sum + (Number(r.rating) || 0), 0) / reviewCount) * 10) / 10;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    url,
    telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality,
      addressCountry,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avg,
      reviewCount,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5, worstRating: 1 },
      author: { "@type": "Person", name: r.area ? `${r.author} (${r.area})` : r.author },
      reviewBody: r.body,
      ...(r.datePublished ? { datePublished: r.datePublished } : {}),
    })),
  };
}
