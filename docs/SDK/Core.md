# Core

- This package contains the `Entropy` class which encapsulates all other classes and adds functions for interacting with the Entropy network.

## Classes

- [Crypto](Crypto.md)
- [Substrate](Substrate.md)
- [Threshold Server](ThresholdServer.md)

## Examples

### Setup

```js
const privateKey =
  "0xe5be9a5092b81bca64be81d212e7f2f9eba183bb7a90954f7b76361f6edb5c0a'
const chainEndPoint = 'ws://127.0.0.1:9944'

const entropy = await Entropy.setup(privateKey, chainEndpoint)
```

### Methods

- Register

  - This takes entropy key shares, tells the entropy chain that you wish to register and sends your proper key shards off to the proper validators

  ```js
  // this assumes keys are already generated
  // this is still not implemented (WASM things)
  const entropyKeyShares = []
  const result = await entropy.register(entropyKeyShares)
  ```
<!-- Question what is the parameter initialConstraints? how can these be expressed as a string? -->
<!--    * @param {string} [initialConstraints] - Initial constraints to be set on the relayer -->

- Sign

  - Sign takes in an EVM unsigned transaction sends it off to the chain then recovers the signed transaction from a node after the signing process is completed.
  - The function only returns a signed tx so that should be handled and sent to chain by the client

  ```js
  import { BigNumber, ethers } from "ethers";

  const provider = ethers.getDefaultProvider(network)
  const tx: ethers.utils.UnsignedTransaction = {
    to: "0x772b9a9e8aa1c9db861c6611a82d251db4fac990",
    value: BigNumber.from("1"),
    chainId: 1,
    nonce: 1,
    data: ethers.utils.hexlify(ethers.utils.toUtf8Bytes("Created On Entropy")),
  };

  const result = await entropy.sign(tx, 10);

  // take sig return and use ethers to serialize the tx and signature
  const signed_tx = await ethers.utils.serializeTransaction(tx, signature);

   // send tx off to ethereum
   try {
    const tx_send = await provider.sendTransaction(signed_tx);
    console.log("transaction sent successfully", { tx_send });
  } catch (e: any) {
    console.log({ failedTransaction: e.transaction, e });
  }
  ```

<!-- `Entropy.sign` -->
<!-- Takes: -->
<!-- - An unsigned EVM transaction - support for other message formats will be added later.  -->
<!-- - Flag whether to use the freeTx pallet -->
<!-- - Number of times to poll whether signing is complete - currently no direct communication with validators -->
<!-- - Internally this calls `Entropy.thresholdServer.submitTransactionRequest` which takes an array of encrypted transactions together with urls of respective threshold servers, so that constraints can be checked before the nodes participate in signing. -->