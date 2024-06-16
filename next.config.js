/** @type {import('next').NextConfig} */
// const nextConfig = {};
// export default nextConfig;

const withPWA = require("next-pwa")({
  dest: "public",
  // register: true,
  // skipWaiting: true,
});
const nextConfig = {};

module.exports = withPWA(nextConfig);
