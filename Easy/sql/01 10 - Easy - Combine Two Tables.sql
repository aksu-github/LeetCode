/*
Instruction:

Write an SQL query to report the first name, last name, city, 
and state of each person in the Person table. 
If the address of a personId is not present in the Address table, 
report null instead.

Return the result table in any order.

Example 1:

Input: 
Person table:
+----------+----------+-----------+
| personId | lastName | firstName |
+----------+----------+-----------+
| 1        | Wang     | Allen     |
| 2        | Alice    | Bob       |
+----------+----------+-----------+
Address table:
+-----------+----------+---------------+------------+
| addressId | personId | city          | state      |
+-----------+----------+---------------+------------+
| 1         | 2        | New York City | New York   |
| 2         | 3        | Leetcode      | California |
+-----------+----------+---------------+------------+
Output: 
+-----------+----------+---------------+----------+
| firstName | lastName | city          | state    |
+-----------+----------+---------------+----------+
| Allen     | Wang     | Null          | Null     |
| Bob       | Alice    | New York City | New York |
+-----------+----------+---------------+----------+
Explanation: 
There is no address in the address table for the personId = 1 so we return null in their city and state.
addressId = 1 contains information about the address of personId = 2.

*/

/* A Solution */

SELECT Person.FirstName, Person.LastName, Address.City, Address.State 
  from Person LEFT JOIN Address on Person.PersonId = Address.PersonId;

/* LeetCode - Fastest Runtime */

select a.firstName, a.lastName, b.city, b.state from Person as a left join Address as b on a.personId=b.personId