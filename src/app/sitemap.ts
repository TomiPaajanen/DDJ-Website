import { MetadataRoute } from 'next';

const BASE = 'https://www.dailydosejapanese.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ['', '/plans', '/about', '/teachers', '/privacy', '/terms'];

  return routes.map(path => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
