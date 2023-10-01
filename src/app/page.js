"use client";

import { useBlockchain } from "./Blockchain/useBlockchain"; //IMPORTANDO COMPONENTE CUSTOM HOOK

export default function Home() {
 
   const { connectWallet, address, balance } = useBlockchain(); //PEGANDO UMA FUNÇÃO DO COMPONENTE CUSTOM HOOK
 
  return (
   <div className="flex flex-col gap-5 items-center justify-center pt-10">
         <h1 className="text-white text-3xl">Course EthersJs</h1>

         <button className="text-white" onClick={connectWallet}>Connect</button>
         <p>{address}</p>
         <p>{balance}</p>
   </div>
  )
}
