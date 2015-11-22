class TransactionsService {

	constructor(){
		this._transactions = [
			{title: 'Dinner', category: 'Food', date: '11/10/2015', amount: 650},
			{title: 'Movie', category: 'Entertainment', date: '11/14/2015', amount: 250}
		];
	}
	
	get transactions(){
		return this._transactions;
	}
	
	addTransaction(transaction){
		this._transactions.push(transaction);
	}

}

module.exports = new TransactionsService();