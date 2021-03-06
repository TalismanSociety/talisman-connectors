/**
 * @type {import('next').NextConfig}
 */
const config = {
  env: {
    RPC_URL_1: 'https://mainnet.infura.io/v3/26723e19aa0744479b7d553c40456bea',
    RPC_URL_4: 'https://rinkeby.infura.io/v3/26723e19aa0744479b7d553c40456bea'
  },
  webpack5: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        electron: false,
        '@ethereumjs/tx': false
      }
    } else {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        electron: false,
        '@ethereumjs/tx': false
      }
    }
    return config
  },
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = config
