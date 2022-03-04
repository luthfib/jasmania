const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)?$/,
  options: {
    rehypePlugins: [
      require("@mapbox/rehype-prism"),
      require("rehype-join-line"),
    ],
  },
});

const withNextTranspileModules = require("next-transpile-modules")([]);

const nextConfig = {
  pageExtensions: ["jsx", "js", "mdx", "md", "ts", "tsx"],
  swcMinify: true,
  cssModules: true,
  experimental: {
    externalDir: true,
    esmExternals: true,
  },
};

module.exports = withNextTranspileModules(withMDX(nextConfig));
