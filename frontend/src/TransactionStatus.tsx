interface TransactionStatusProps {
    hash?: string;
    isConfirming: boolean;
    isConfirmed: boolean;
}

const TransactionStatus = ({ hash, isConfirming, isConfirmed }: TransactionStatusProps) => (
    <div className="tx-status">
        {hash && <p className="tx-status-hash">Transaction hash: <span>{hash}</span></p>}
        {isConfirming && <p className="tx-status-confirming">Waiting for confirmation...</p>}
        {isConfirmed && <p className="tx-status-confirmed">Transaction confirmed!</p>}
    </div>
);

export default TransactionStatus; 