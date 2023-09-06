const CONTENTFUL_IMAGES_DOMAIN = "images.ctfassets.net";

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [CONTENTFUL_IMAGES_DOMAIN],
  },
};

module.exports = nextConfig;
