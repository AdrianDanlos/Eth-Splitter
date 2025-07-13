import { createWalletClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';
import { formatEther } from 'viem/utils';
import { createPublicClient } from 'viem';
import abi from '../artifacts/contracts/ETHSplitter.sol/ETHSplitter.json';


async function main() {
    const account = privateKeyToAccount(`0x${process.env.PRIVATE_KEY}`);
    const client = createWalletClient({
        account,
        chain: sepolia,
        transport: http(process.env.SEPOLIA_RPC_URL)
    });
    const publicClient = createPublicClient({
        chain: sepolia,
        transport: http(process.env.SEPOLIA_RPC_URL),
    });
    const recipients = [
        '0x4D2EEE1AcB95ed2A219DCF952830BdFf82274696',
        '0x883891E75923d754678588dD65BADC6263A228d1',
        '0x86AdbAc1D56Cd84b859e18499ECaF85CC4ea9919',
    ];
    const percentages = [50, 30, 20];

    const balance = await publicClient.getBalance({ address: account.address });
    console.log(`Balance for ${account.address}: ${formatEther(balance)} ETH`);
    console.log("Deploying from:", account.address); 
    console.log("Using RPC URL:", process.env.SEPOLIA_RPC_URL);

    const hash = await client.deployContract({
        abi: abi.abi,
        bytecode: abi.bytecode as `0x${string}`,
        args: [recipients, percentages],
    });

    console.log("Deployment Tx Hash:", hash);
}
main().catch(console.error);
