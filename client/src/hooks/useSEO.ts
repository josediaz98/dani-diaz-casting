import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const DEFAULT_TITLE = "Dani Díaz | Directora de Casting Internacional";
const DEFAULT_DESCRIPTION =
  "Casting internacional con un enfoque humano. Especializada en descubrir talento auténtico para ficción, publicidad y videoclips en Latinoamérica y Europa.";
const DEFAULT_IMAGE = "/images/og-image.jpg";
const BASE_URL = "https://danidiaz.com";

export function useSEO({
  title,
  description,
  image,
  url,
  type = "website",
}: SEOProps = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Dani Díaz` : DEFAULT_TITLE;
    const fullDescription = description || DEFAULT_DESCRIPTION;
    const fullImage = image || DEFAULT_IMAGE;
    const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;

    // Update document title
    document.title = fullTitle;

    // Update meta tags
    const updateMeta = (
      selector: string,
      attribute: string,
      content: string
    ) => {
      const element = document.querySelector(selector) as HTMLMetaElement;
      if (element) {
        element.setAttribute(attribute, content);
      }
    };

    // Standard meta tags
    updateMeta('meta[name="description"]', "content", fullDescription);
    updateMeta('meta[name="title"]', "content", fullTitle);

    // Open Graph
    updateMeta('meta[property="og:title"]', "content", fullTitle);
    updateMeta('meta[property="og:description"]', "content", fullDescription);
    updateMeta('meta[property="og:image"]', "content", fullImage);
    updateMeta('meta[property="og:url"]', "content", fullUrl);
    updateMeta('meta[property="og:type"]', "content", type);

    // Twitter
    updateMeta('meta[name="twitter:title"]', "content", fullTitle);
    updateMeta('meta[name="twitter:description"]', "content", fullDescription);
    updateMeta('meta[name="twitter:image"]', "content", fullImage);
    updateMeta('meta[name="twitter:url"]', "content", fullUrl);

    // Update canonical link
    const canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (canonical) {
      canonical.href = fullUrl;
    }
  }, [title, description, image, url, type]);
}
