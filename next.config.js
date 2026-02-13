module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/', // The incoming request path pattern
        destination: 'https://codecon.dev/', // The path you want to route to
        permanent: true, // true for 308, false for 307
      },
      // You can add more redirects here
    ];
  },
}
