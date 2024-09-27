import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
      {
        url: 'https://drownie.net/',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://drownie.net/#about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: .8,
      },
      {
        url: 'https://drownie.net/#projects',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: .8,
      },
      {
        url: 'https://drownie.net/#contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: .8,
      },
    ]
  }