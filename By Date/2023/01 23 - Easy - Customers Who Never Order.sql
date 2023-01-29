/*
Instruction:

Table: Customers

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
id is the primary key column for this table.
Each row of this table indicates the ID and name of a customer.
 

Table: Orders

+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| customerId  | int  |
+-------------+------+
id is the primary key column for this table.
customerId is a foreign key of the ID from the Customers table.
Each row of this table indicates the ID of an order and the ID of the customer who ordered it.
 

Write an SQL query to report all customers who never order anything.

Return the result table in any order.

*/

/*  
*/

/* A Solution */

SELECT
    Customers.name AS 'Customers'   /* the AS '...' formats the output table */
FROM
    Customers
WHERE
    Customers.id NOT in(
    
        SELECT customerId FROM Orders
    );


/* LeetCode - Fastest Runtime */

/*
# select name as Customers from customers as c, orders as o
# where c.id != o.customerId
# group by name
# having count(name)>1;
*/
select name Customers from Customers
where id not in (select customerId from Orders)


