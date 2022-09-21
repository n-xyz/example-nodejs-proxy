To get started, set the enviroment variable NXYZ_API_KEY to the API key you were granted. Then run `yarn install.` The server can be started with `yarn start`.

You can then call `curl http://localhost:3000/web3-api/v1/wallets/0x3cd378c9b1cb5f147ebf1b2c2564118946ae4ba1/transactions/history`.

To workaround CORS configuration, integrate the proxy middleware example in to your application.
