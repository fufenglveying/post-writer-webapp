// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// const { withContentlayer } = require("next-contentlayer");

// /** @type {import('next').NextConfig} */
// const nextConfig = { reactStrictMode: true, swcMinify: true };

// module.exports = withContentlayer(nextConfig);

// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true }

module.exports = withContentlayer(nextConfig)

