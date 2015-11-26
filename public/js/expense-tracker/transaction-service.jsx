class TransactionService {

	constructor(){
		this._transactions = [
			{title: 'Dinner', category: 'Food', date: '11/10/2015', amount: 650},
			{title: 'Shopping at Lifestyle', category: 'Apparels', date: '11/20/2015', amount: 650},
			{title: 'Movie', category: 'Entertainment', date: '11/14/2015', amount: 450},
			{title: 'Electronics', category: 'Electronics', date: '11/20/2015', amount: 2780},
			{title: 'Safari online subscription', category: 'Education', date: '11/02/2015', amount: 1250}
		];
	}
	
	get transactions(){
		return this._transactions;
	}
	
	addTransaction(transaction){
		this._transactions.push(transaction);
	}

}

module.exports = new TransactionService();