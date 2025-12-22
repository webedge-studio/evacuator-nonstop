export type FAQItem = { question: string; answer: string };

export function buildFaqJsonLd(questions: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions?.map((q) => ({
      "@type": "Question",
      name: q?.question?.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: q?.answer?.trim(),
      },
    })),
  };
}
