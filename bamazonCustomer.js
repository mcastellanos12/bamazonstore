var inquirer = require("inquirer");
var mysql = require("mysql");


var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: " ",
	database: "Bamazon"
});

connection.connect(function(err){
	console.log("it works!");
	if (err) throw err;
});

function displayProducts() {
	connection.query('SELECT item_id, product_name, department_name, price, stock_quantity FROM products', function(err, res) {
		console.log("list of products");

		for(var i = 0; i < res.length; i++) {
			console.log("product id: " + res[i].item_id + "product name: " + res[i].product_name + " department: " + res[i].department_name + "price: " + res[i].price + "stock quanitity: " + res[i].stock_quantity);
		}
	}
)};

displayProducts();
