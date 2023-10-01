//CUSTOM HOOK
import { ethers } from "ethers";
import { useState } from "react"

//COMPONETE HOOK PARA CRIAR AS FUNÇOES ( CUSTOM HOOKS DEVE RETORNAR APENAS FUNÇÕES JS)
const useBlockchain = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("")

  //UMA FUNÇÃO
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const balanceFormated = ethers.formatEther(balance);  //Balance de BigNumber convertido para Ether
      setAddress(address);
      setBalance(balanceFormated);
    }
  };

  //RETORNANDO AS FUNÇÕES PARA PODER USA-LAS EM OUTRO COMPONENTE
  return {
    connectWallet,
    address,
    balance
  };
};

export { useBlockchain };
