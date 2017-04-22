var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host:"localhost",
  port:"3306",
  user:"root",
  password:"Test@123",
  database:"bamazon"
});

function displayProducts(){

  connection.query("SELECT * FROM products", function(err, res){
    if(err) throw err;

    var displayProductsTable = new Table({
      head: ['Item ID', 'Product Name', 'Product Category', 'Price', 'In Stock'],
      colWidths: [10, 22, 20, 10, 10]
    });
    
    for (i = 0; i < res.length; i++) {
      displayProductsTable.push([
        res[i].item_id,
        res[i].product_name,
        res[i].department_name,
        res[i].price,
        res[i].stock_quantity
      ]);
    }

    console.log(displayProductsTable.toString());

    shopForProduct();
  
  });

};

function shopForProduct() {

  inquirer.prompt([
    {
      type:'input',
      name:'ID',
      message:'What is the ID of the product you want to purchase?'
    },
    {
      type:'input',
      name:'quantity',
      message:'How many do you want to purchase?'
    }
  ]).then(function(answers) {
      var quantityDesired = answers.quantity;
      var IDDesired = answers.ID;
      purchaseFromDatabase(IDDesired, quantityDesired);
  });

};

function purchaseFromDatabase(ID, quantityNeeded) {

  connection.query('SELECT * FROM products WHERE item_id=?', [ID], function(err, res) {
    if (err) { console.log(err) };

    if (quantityNeeded <= res[0].stock_quantity) {
      
      var totalCost = res[0].price * quantityNeeded;
      
      console.log("Your total cost for " + quantityNeeded + " " + res[0].product_name + " is " + totalCost + ". Thank you for your Business!");

      connection.query('UPDATE Products SET stock_quantity = stock_quantity - ' + quantityNeeded + ' WHERE item_id=?', [ID]);

    } else {
      console.log("Our apologies! We only have " + res[0].stock_quantity + " in stock. Please purchase up to that many and come back again when we have more in stock. Here is our product catalog once again:");
    };

    displayProducts();
  
  });

}; 

displayProducts();
