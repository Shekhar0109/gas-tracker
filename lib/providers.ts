// ✅ Ethers v6 imports
import { JsonRpcProvider, WebSocketProvider } from 'ethers'

// ✅ HTTP fallback providers (Ethereum & Polygon)
export const ethProvider = new JsonRpcProvider('https://rpc.ankr.com/eth')
export const polygonProvider = new JsonRpcProvider('https://polygon-rpc.com')

// ✅ Native WebSocket for Arbitrum
export const arbitrumProvider = new WebSocketProvider('wss://arb1.arbitrum.io/ws')
