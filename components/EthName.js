import { useState, useEffect } from "react";
import { web3 } from "../lib/web3";

const EnsName = function ({ address }) {
  // TODO!
  // get the address from outside
  // format it
  // check for ENS domain
  // get image if it has one
  // make jazzicon if not

  let formatAddress = address.substr(0, 8) + "..." + address.substr(-4, 8);

  return (
    <div className="eth-name">
      <div className="icon">{/* icon goes here */}</div>

      <div className="name">
        <span className="primary">{formatAddress}</span>
        <span className="secondary">{/* formatted address here */}</span>
      </div>
    </div>
  );
};

export default EnsName;
