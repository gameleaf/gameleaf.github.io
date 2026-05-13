const { type } = require("os");

module.exports = {
  poweredByHeader: false,
  trailingSlash: true,
  devIndicators: {
    autoPrerender: false,
  },
  turbopack: {},
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });
    return config; // Important: return the modified config
  },
};
