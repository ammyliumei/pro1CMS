var connection = require('./connection')();

module.exports = function addGoods(res,data){
	//connection.connect();
	connection.query('INSERT INTO goods(text,price,old_price,good_type,sale_num,last_num,sizes) VALUES ("'+data.text+'","'+data.price+'","'+data.old_price+'","'+data.good_type+'","'+data.sale_num+'","'+data.last_num+'","'+data.sizes+'")',function(err,result,fields){
		if(err){
			throw err;
		}else{
			res.send('商品已新增');
		};
	});
	
	//connection.end();
}