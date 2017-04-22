CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT(11) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) DEFAULT '',
    department_name VARCHAR(255) DEFAULT NULL,
    price DECIMAL(11,2) NOT NULL DEFAULT '0.00',
    stock_quantity INT(11) NOT NULL DEFAULT '0',
    PRIMARY KEY (item_id)
)

INSERT INTO products VALUES (1, "La Croix", "Beverages", 4.99, 150);

INSERT INTO products VALUES (2, "Guitar", "Instruments", 800, 40);

INSERT INTO products VALUES (3, "Maniac Magee", "Books", 6.69, 100);

INSERT INTO products VALUES (4, "Heavy Duty Stapler", "Office Supplies", 49.99, 30);

INSERT INTO products VALUES (5, "Bluetooth Speaker", "Electronics", 69.99, 50);

INSERT INTO products VALUES (6, "Polaroid Camera", "Electronics", 99.99, 20);

INSERT INTO products VALUES (7, "Oxford Shirt", "Men's Clothing", 60, 35);

INSERT INTO products VALUES (8, "Avalon", "Board Games", 13.99, 60);

INSERT INTO products VALUES (9, "Tongs", "Kitchen Utensils", 7.99, 200);

INSERT INTO products VALUES (10, "Soap Dispenser", "Bathroom", 6.99, 300);