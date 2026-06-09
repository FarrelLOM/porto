/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  // Transpile ESM packages that may cause named-export interop issues
  transpilePackages: ["framer-motion"],
  // Adjust ESM externals handling to improve interop with ESM packages
  experimental: {
    // 'loose' tells Next.js to attempt ESM external handling where possible.
    // This helps packages like framer-motion that ship as ESM modules.
    esmExternals: 'loose',
  },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    
    config.resolve.alias = config.resolve.alias || {};
    // Prefer the CommonJS build of framer-motion to avoid ESM named-export interop issues
    config.resolve.alias['framer-motion$'] = path.resolve(__dirname, 'node_modules/framer-motion/dist/cjs/index.js');
    // Redirect any imports that target the ESM dist to the CJS dist
    config.resolve.alias['framer-motion/dist/es'] = path.resolve(__dirname, 'node_modules/framer-motion/dist/cjs');
    return config;
  },
  // swcMinify: true,
};

module.exports = nextConfig;
