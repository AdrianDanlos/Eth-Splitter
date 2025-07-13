import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import App from './App'; 
import { 
  getDefaultWallets, 
  RainbowKitProvider, 
} from '@rainbow-me/rainbowkit'; 
import { WagmiProvider, createConfig, http } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@rainbow-me/rainbowkit/styles.css'; 

const { connectors } = getDefaultWallets({ 
  appName: 'ETH Splitter', 
  projectId: 'YOUR_PROJECT_ID', // can be anything for local/test use 
}); 

const wagmiConfig = createConfig({ 
  chains: [sepolia],
  connectors, 
  transports: {
    [sepolia.id]: http()
  },
}); 

const queryClient = new QueryClient(); 
 
ReactDOM.createRoot(document.getElementById('root')!).render( 
  <React.StrictMode> 
    <WagmiProvider config={wagmiConfig}> 
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider> 
          <App /> 
        </RainbowKitProvider> 
      </QueryClientProvider>
    </WagmiProvider> 
  </React.StrictMode> 
);