'use client'

import { useGasStore } from '@/store/useGasStore'
import { useGasTracker } from '@/hooks/useGasTracker'
import Image from 'next/image'

export default function Home() {
  useGasTracker()

  const chains = useGasStore((state) => state.chains)

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-2xl font-bold text-center sm:text-left">🚀 Real-Time Gas Tracker</h1>
        <p className="text-center sm:text-left text-gray-600 dark:text-gray-300">
          Tracking Ethereum, Polygon, and Arbitrum gas prices live.
        </p>

        {/* ✅ Gas Price Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {Object.entries(chains).map(([chain, data]) => (
            <div key={chain} className="p-6 border rounded-xl bg-gray-100 dark:bg-gray-800">
              <h2 className="text-lg font-semibold capitalize">{chain}</h2>
              <p>⛽ Base Fee: {data.baseFee.toFixed(2)} Gwei</p>
              <p>⚡ Priority Fee: {data.priorityFee.toFixed(2)} Gwei</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        <p>Built with ❤️ using Next.js + Zustand + Ethers.js</p>
      </footer>
    </div>
  )
}
