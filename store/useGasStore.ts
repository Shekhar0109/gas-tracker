import { StateCreator, create } from 'zustand'

type ChainGasData = {
  baseFee: number
  priorityFee: number
  history: GasPoint[]
}

export type GasPoint = {
  timestamp: number
  baseFee: number
  priorityFee: number
}

type ChainNames = 'ethereum' | 'polygon' | 'arbitrum'

type GasStore = {
  mode: 'live' | 'simulation'
  chains: Record<ChainNames, ChainGasData>
  usdPrice: number
  setMode: (mode: 'live' | 'simulation') => void
  updateGas: (chain: ChainNames, data: Partial<ChainGasData>) => void
  setUsdPrice: (price: number) => void
}

export const useGasStore = create<GasStore>((set) => ({
  mode: 'live',
  usdPrice: 0,
  chains: {
    ethereum: { baseFee: 0, priorityFee: 0, history: [] },
    polygon: { baseFee: 0, priorityFee: 0, history: [] },
    arbitrum: { baseFee: 0, priorityFee: 0, history: [] },
  },
  setMode: (mode: 'live' | 'simulation') => set({ mode }),
  setUsdPrice: (price: number) => set({ usdPrice: price }),
  updateGas: (chain: ChainNames, data: Partial<ChainGasData>) =>
    set((state) => ({
      chains: {
        ...state.chains,
        [chain]: {
          ...state.chains[chain],
          ...data,
        },
      },
    })),
}))
