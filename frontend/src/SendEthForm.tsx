import type { Dispatch, SetStateAction } from 'react';

interface SendEthFormProps {
    isPending: boolean;
    onSend: () => void;
    amountToSend: string;
    setAmountToSend: Dispatch<SetStateAction<string>>;
    inputError: string;
}

const SendEthForm = ({ isPending, onSend, amountToSend, setAmountToSend, inputError }: SendEthFormProps) => (
    <div className="send-form">
        <label htmlFor="amount" className="send-form-label">Amount to send (ETH):</label>
        <input
            id="amount"
            type="number"
            min="0"
            step="0.0001"
            value={amountToSend}
            onChange={e => setAmountToSend(e.target.value)}
            className="send-form-input"
            placeholder="0.001"
        />
        {inputError && <span className="send-form-error">{inputError}</span>}
        <button
            disabled={isPending || !amountToSend || Number(amountToSend) <= 0}
            onClick={onSend}
            className={`send-form-button${isPending ? ' pending' : ''}`}
        >
            {isPending ? 'Sending...' : `Send ${amountToSend || 'ETH'}`}
        </button>
    </div>
);

export default SendEthForm; 