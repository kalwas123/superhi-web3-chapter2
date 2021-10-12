import { useState, useEffect } from "react";
import { web3 } from "../lib/web3";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import ENS, { getEnsAddress } from "@ensdomains/ensjs";

const ens = new ENS({
  provider: web3.currentProvider,
  ensAddress: getEnsAddress("1"),
});

const EnsName = function ({ address }) {
  const [name, setName] = useState();

  useEffect(
    async function () {
      const n = await ens.getName(address);

      if (n.name) {
        setName(n.name);
      }
    },
    [address]
  );

  let icon = <Jazzicon diameter={32} seed={jsNumberForAddress(address)} />;
  let formatAddress = address.substr(0, 8) + "..." + address.substr(-4, 8);

  return (
    <div className="eth-name">
      <div className="icon">{icon}</div>

      <div className="name">
        <span className="primary">{name ? name : formatAddress}</span>
        <span className="secondary">{/* formatted address here */}</span>
      </div>
    </div>
  );
};

export default EnsName;
