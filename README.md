# ETH Splitter

ETH Splitter is a decentralized application (dApp) that allows users to send ETH to a smart contract, which then automatically splits and distributes the funds among a predefined set of recipients according to specified percentages. This is useful for group payments, revenue sharing, or any scenario where ETH needs to be distributed to multiple parties in a trustless way.

## How It Works
- The smart contract is deployed on the Sepolia testnet.
- When a user sends ETH to the contract (via the dApp UI), the contract splits the received amount among the configured recipients based on their assigned percentages.
- The frontend provides a simple, modern interface for connecting your wallet, entering an amount, and sending ETH to the contract.

## Live Demo
You can try the app live here: [eth-splitter-delta.vercel.app](https://eth-splitter-delta.vercel.app/)

## Deployed Contract
- **Network:** Sepolia Testnet
- **Etherscan:** [0x6e525f576a46affae063560564325698953128c1](https://sepolia.etherscan.io/address/0x6e525f576a46affae063560564325698953128c1)

## Local Setup

### Prerequisites
- Node.js (v16+ recommended)
- npm (or yarn/pnpm)

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd eth-splitter
```

### 2. Install dependencies
```bash
cd frontend
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the `frontend` directory with the following:
```
VITE_SPLITTER_CONTRACT_ADDRESS=0x6e525f576a46affae063560564325698953128c1
```

### 4. Run the app locally
```bash
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### 5. Build for production
```bash
npm run build
```
The production build will be in the `dist` folder.

## Notes
- This project is for demonstration and testing on the Sepolia testnet only.
- You will need Sepolia ETH to interact with the contract. You can get test ETH from a [Sepolia faucet](https://sepoliafaucet.com/).

## License
MIT 