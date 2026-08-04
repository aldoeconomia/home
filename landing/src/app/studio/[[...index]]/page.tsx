"use client";

import { Studio } from "sanity";
import config from "../../../../studio-qontrol-blog/sanity.config";

export default function StudioPage() {
  return <Studio config={config} />;
}
