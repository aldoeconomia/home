import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://theqontrol.com",
            lastModified: new Date(),
        },
        {
            url: "https://theqontrol.com/blog",
            lastModified: new Date(),
        },
    ];
}