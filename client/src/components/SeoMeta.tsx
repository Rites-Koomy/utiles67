import { useEffect } from "react";
import { config } from "@/config";

type SeoMetaProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const DEFAULT_IMAGE = "/opengraph.jpg";

function ensureMeta(selector: string, attribute: "name" | "property", value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, value);
    document.head.appendChild(el);
  }
  return el;
}

function ensureLink(selector: string, rel: string) {
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  return el;
}

function absoluteUrl(path: string) {
  const base = config.siteUrl.replace(/\/$/, "");
  const safePath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${safePath}`;
}

export function SeoMeta({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  jsonLd,
}: SeoMetaProps) {
  useEffect(() => {
    const canonicalUrl = absoluteUrl(path);
    const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

    document.title = title;

    ensureMeta('meta[name="description"]', "name", "description").setAttribute(
      "content",
      description,
    );
    ensureMeta('meta[property="og:title"]', "property", "og:title").setAttribute(
      "content",
      title,
    );
    ensureMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
    ).setAttribute("content", description);
    ensureMeta('meta[property="og:type"]', "property", "og:type").setAttribute(
      "content",
      type,
    );
    ensureMeta('meta[property="og:url"]', "property", "og:url").setAttribute(
      "content",
      canonicalUrl,
    );
    ensureMeta('meta[property="og:image"]', "property", "og:image").setAttribute(
      "content",
      imageUrl,
    );
    ensureMeta('meta[name="twitter:title"]', "name", "twitter:title").setAttribute(
      "content",
      title,
    );
    ensureMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
    ).setAttribute("content", description);
    ensureMeta('meta[name="twitter:image"]', "name", "twitter:image").setAttribute(
      "content",
      imageUrl,
    );
    ensureMeta('meta[name="robots"]', "name", "robots").setAttribute(
      "content",
      noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    );
    ensureLink('link[rel="canonical"]', "canonical").setAttribute("href", canonicalUrl);

    const existingJsonLd = document.head.querySelector<HTMLScriptElement>(
      'script[data-seo-jsonld="true"]',
    );
    if (existingJsonLd) {
      existingJsonLd.remove();
    }

    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [description, image, jsonLd, noindex, path, title, type]);

  return null;
}

