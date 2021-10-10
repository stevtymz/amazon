module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'fakestoreapi.com',
      'links.papareact.com',
    ],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
