import { useEffect } from 'react'
import { useGasStore } from '@/store/useGasStore'
import { ethProvider, polygonProvider, arbitrumProvider } from '@/lib/providers'

export const useGasTracker = () => {
  const updateGas = useGasStore((state) => state.updateGas)

  useEffect(() => {
    const pollBlock = async (chain: 'ethereum' | 'polygon' | 'arbitrum', provider: any) => {
      const block = await provider.getBlock('latest')

      const baseFeePerGas = block?.baseFeePerGas
        ? Number(block.baseFeePerGas.toString()) / 1e9 // Gwei
        : 30 // fallback

      const priorityFee = 2 // gwei estimate

      updateGas(chain, {
        baseFee: baseFeePerGas,
        priorityFee,
      })
    }

    const interval = setInterval(() => {
      pollBlock('ethereum', ethProvider)
      pollBlock('polygon', polygonProvider)
      pollBlock('arbitrum', arbitrumProvider)
    }, 6000) // every 6 seconds

    return () => clearInterval(interval)
  }, [])
}
