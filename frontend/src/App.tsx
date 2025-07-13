import { useState } from 'react';
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import SendEthForm from './SendEthForm';
import TransactionStatus from './TransactionStatus';
import ConnectedInfo from './ConnectedInfo';

const contractAddress = import.meta.env.VITE_SPLITTER_CONTRACT_ADDRESS;

const App = () => {
  const { isConnected, address } = useAccount();
  const { sendTransaction, data: hash, isPending } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const [amountToSend, setAmountToSend] = useState('0.001');
  const [inputError, setInputError] = useState('');

  const handleSendETH = () => {
    setInputError('');
    if (!amountToSend || isNaN(Number(amountToSend)) || Number(amountToSend) <= 0) {
      setInputError('Please enter a valid amount');
      return;
    }
    try {
      sendTransaction({
        to: contractAddress,
        value: parseEther(amountToSend),
      });
    } catch {
      setInputError('Failed to send transaction');
    }
  };

  return (
    <div className="app-bg">
      <div className="app-card">
        <div className="testnet-badge">Sepolia Testnet Only</div>
        <h1 className="app-title">ETH Splitter</h1>
        <p className="app-desc">
          Send ETH to the splitter contract and it will be distributed automatically.
        </p>
        <ConnectButton />
        {isConnected && (
          <>
            <SendEthForm
              isPending={isPending}
              onSend={handleSendETH}
              amountToSend={amountToSend}
              setAmountToSend={setAmountToSend}
              inputError={inputError}
            />
            <TransactionStatus hash={hash} isConfirming={isConfirming} isConfirmed={isConfirmed} />
          </>
        )}
        {!isConnected && <p className="app-connect-msg">Connect your wallet to send ETH.</p>}
        <ConnectedInfo isConnected={isConnected} address={address} />
      </div>
    </div>
  );
};

export default App;