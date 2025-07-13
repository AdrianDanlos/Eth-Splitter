interface ConnectedInfoProps {
    isConnected: boolean;
    address?: string;
}

const ConnectedInfo = ({ isConnected, address }: ConnectedInfoProps) => (
    <div className="connected-info">
        <span>Connected as:</span>
        <br />
        <span className="connected-info-address">{isConnected ? address : 'Not connected'}</span>
    </div>
);

export default ConnectedInfo; 