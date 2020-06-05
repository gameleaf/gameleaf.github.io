module.exports = {
    poweredByHeader: false,
    exportTrailingSlash: true,
    devIndicators: {
        autoPrerender: false,
    },
    experimental: {
        jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        });
        return config; // Important: return the modified config
    },
};
