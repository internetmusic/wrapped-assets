# Deploying an ARC-20 to a Local Test Network Using Truffle

1) Create an asset on the X-Chain (some reasonably large quantity let's say 10M)
2) Get its assetID in hex format (no checksum)
3) Copy and paste the two contracts arc20.sol and nativeAssets.sol into Remix
4) Compile and deploy arc20.sol from Remix with the paramters of the asset (the assetID needs to be input in hex)
5) Move the X-Chain Asset to your MetaMask address on the C-Chain
6) Export your private key from MetaMask to be used in an examples script from Coreth: ./examples/arc20/main.go (contains directions to export MetaMask private key)
7) Change the variables defined in the init function of the example script. Need to change the private key, assetID, and the address of the arc20
8) go run examples/arc20/main.go (this should deposit 100 units of the asset into the ARC20)
9) Play around with the ARC-20 as a regular ERC-20 within MetaMask and Remix
