export const abiData = [
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ownerAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "lenderName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lenderDescription",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "minimumAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maximumAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "loanTerms",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "products",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "startDate",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "interestRate",
				"type": "uint256"
			}
		],
		"name": "createMortgage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fullName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "homePrice",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "downPayment",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "loanAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "loanTerm",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "startDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "interestRate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lenderAddress",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "scorePoint",
				"type": "uint256"
			}
		],
		"name": "createMortgagor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "depositFunctionForLender",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_status",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "loanUnderWaitingFunction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "test",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewMortgages",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "ownerAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "lenderName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "lenderDescription",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "minimumAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maximumAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "loanTerms",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "products",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "startDate",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "interestRate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "balance",
						"type": "uint256"
					}
				],
				"internalType": "struct MortgageContract.MortgageData[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewMortgagors",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "fullName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "homePrice",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "downPayment",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "loanAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "loanTerm",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "startDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "interestRate",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "mortgagorAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "lenderAddress",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "scorePoint",
						"type": "uint256"
					}
				],
				"internalType": "struct MortgageContract.MortgagorsData[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewMyMortgagors",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawAllFunds",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "withdrawFunctionForLender",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]