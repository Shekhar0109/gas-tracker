# ⛽ Real-Time Gas Tracker

Track real-time **Ethereum**, **Polygon**, and **Arbitrum** gas fees using **Next.js**, **Zustand**, and **Ethers.js** — with live updates via WebSockets.


---

## 🚀 Features

- 🌐 **Live Gas Updates** via WebSocket (no 3rd party APIs)
- 📊 Displays **Base Fee** and **Priority Fee** for 3 chains
- ⚛️ Built using **Next.js App Router**, **TypeScript**, and **Tailwind CSS**
- ⚡ State managed by **Zustand**
- 📡 Direct on-chain data from RPC nodes

---

## 🛠️ Stack

- [Next.js 15+](https://nextjs.org)
- [Zustand](https://github.com/pmndrs/zustand)
- [Ethers.js v6](https://docs.ethers.org/v6/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📸 Preview

![Preview Screenshot](https://user-images.githubusercontent.com/your-placeholder-image.png)

---

## 🧠 How It Works

1. Connects to **Ethereum**, **Polygon**, and **Arbitrum** via JSON RPC & WebSocket.
2. Subscribes to new block headers for each chain.
3. Extracts `baseFeePerGas` and estimates `priorityFee` dynamically.
4. Updates Zustand store → triggers UI updates.

---

## 📦 Installation

git clone https://github.com/Shekhar0109/gas-tracker.git
cd gas-tracker
npm install
npm run dev

##🔐 RPC Key Note
To avoid Unauthorized errors from public RPCs:
Replace RPC endpoints in lib/providers.ts with your own:
https://rpc.ankr.com/eth/YOUR_API_KEY
wss://arb1.arbitrum.io/ws/YOUR_API_KEY

##Register free keys here:
🌐 Ankr RPC Keys

##🧪 Future Ideas
⏱️ Add gas history chart
📈 Display average/max over time
🛠 Add custom RPC support
💰 Convert gas cost to USD using ETH price

##🧑‍💻 Author
Made with ❤️ by Shekhar0109
