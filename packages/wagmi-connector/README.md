# Wagmi connector - Talisman

- [Install](#install)
- [Arguments](#arguments)
- [Example](#example)

## Install

`yarn add @talismn/wagmi-connector`

## Options

```typescript
chains?: Chain[]
```

## Example

```javascript
import { configureChains, createConfig } from 'wagmi'
import { goerli, mainnet } from 'wagmi/chains'
import { TalismanConnector } from '@talismn/wagmi-connector'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, ...(process.env.NODE_ENV === 'development' ? [goerli] : [])],
  [publicProvider()]
)

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new TalismanConnector({ chains }),
    //...other connectors
  ],
  publicClient,
  webSocketPublicClient,
})
```

## Version compatibility

- `wagmi` 1.x is compatible with current version of `@talismn/wagmi-connector`
- `wagmi` 0.9.x is compatible with `@talismn/wagmi-connector` version 0.2x.
- `wagmi` 0.8.x isn't compatible.
- `wagmi` 0.7.x is compatible with `@talismn/wagmi-connector` version 0.1.x.
