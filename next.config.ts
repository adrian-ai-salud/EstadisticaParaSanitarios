import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/EstadisticaParaSanitarios",
  trailingSlash: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  images: { unoptimized: true },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      ["remark-gfm", {}],
      ["remark-math", {}],
    ],
    rehypePlugins: [
      ["rehype-slug", {}],
      ["rehype-katex", { strict: false }],
    ],
  },
});

export default withMDX(nextConfig);
