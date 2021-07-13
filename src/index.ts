import * as CryptoJs from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previosHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index: number,
        previosHash: string,
        timestamp: number,
        data: string
    ): string =>
        CryptoJs.SHA256(index + previosHash + timestamp + data).toString();

    constructor(
        index: number,
        hash: string,
        previosHash: string,
        data: string,
        timestamp: number,
    ) {
        this.index = index;
        this.hash = hash;
        this.previosHash = previosHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "202020202020", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];
// blockchain.push("stuff");

const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};