---
title: Proof of Democracy
description: 
date: 2019-05-05
path: /dpos
featuredImage: ./images/sf.jpg
---
# Delegated Proof-of-Democracy

### Setup
For this project we implemented a simplistic version of the Delegated Proof-of-Stake protocol, by employing a voting mechanism. We setup our simulation with three clients and four delegates. The program chooses the top three candidates based on their received votes (configurable: we can change the number of "top" delegates). In this program, there are two important entities, namely the delegates and the government. The government maintains the received votes, selects the top three delegates, and determines the winning delegate who gets to add the block to the blockchain. The delegates proposes blocks and commits them once the winner has been selected from the top three. Lastly, the clients vote for their top three delegates.

In the simulation, the clients make a total of two transactions (printed with updated balances), and vote for the top three delegates. The government then announces the winning delegate, after which the delegate commits the block to the blockchain. Lastly, the updated blockchain is printed to show the updated balances.

Note: The government charges, 0.9 JH-Coins as 0.01 as fees. The fees can be used to distribute rewards equally to the delegates.


### Voting Rounds
- The voting rounds represent cycles that the system goes through to process new transactions, take tax, distribute the rewards, and updates the ledger for all participants. Each voting round the clients who can vote picks chooses a delegate to vote for and cast the vote the government. The government chooses the top 3 (configurable in the government class) delegates as candidates to propose blocks to be added to the blockchain.

- The output of the application shows how in each round the winner commits its block then the rest of the candidates adds the new block to their blockchain. which is chained JSON object in our case for the sake of simplicity.

- The end of the voting round shows the amount of tax the government collected and the amount of rewards that got distributed among the top 3 delegates. Also, it shows how the account balances changes as a result.