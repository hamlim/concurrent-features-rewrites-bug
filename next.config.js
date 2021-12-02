module.exports = {
  reactStrictMode: true,
  experimental: {
    reactRoot: 'concurrent',
    concurrentFeatures: true,
    serverComponents: true,
  },
  rewrites() {
    return [
      {
        source: '/foo',
        destination: '/bar',
      },
    ]
  },
}
