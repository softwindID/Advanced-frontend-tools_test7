Create a new page and link a JavaScript file to it.

Create an array clients to store information about customers of an online store:

The first object in the array contains properties:

firstName: Alexander
lastName: Ivanchuk
date: 11-29-1990
phone: 8 (929) 988-90-09
amounts: [2546, 2098, 764, 7266]
The second object in the array contains properties:

firstName: Anatoly
lastName: Statsenko
date: 02-12-1987
phone: null
amounts: [563, 8287, 889]
The third object in the array contains properties:

firstName: Marina
lastName: Petrova
date: 07-26-1997
phone: 8 (899) 546-09-08
amounts: [6525, 837, 1283, 392]
The fourth object in the array contains properties:

firstName: Ivan
lastName: Karavanov
date: 09-12-1999
phone: null
amounts: [7634, 283, 9823, 3902]
The fifth object in the array contains properties:

firstName: Oksana
lastName: Abramova
date: 01-24-2002
phone: 8 (952) 746-99-22
amounts: [342, 766, 362]
Part 1

Create an empty object newClient.

Prompt the user for the client's details in order - first name, last name, birthdate, and phone. Save these details into the corresponding properties of the newClient object - firstName, lastName, date, phone. Prompt the date in the format mm-dd-yyyy (month-day-year).

Set the amounts property of the newClient object to an empty array.

Then, create a while loop that works as follows: while the user answers "OK" to the question "Add purchase for client X?" (where X is the client's name from the newClient object), the program should prompt for the purchase amount and add it to the amounts array of the newClient object. If the user clicks "Cancel", the loop should stop.

Add the resulting newClient object to the clients array.

Part 2

Create a function fullName that takes an object and returns the full name in one string - "Ivan Ivanov". Test the function by calling it for the first object and getting the first client's full name.

Create a function getBirthday that, based on the client's birthdate, returns a string in the required format: "May 1" or "May 1 (today)".

Function Description:
Takes a string (not an object) with the birthdate in mm-dd-yyyy format.
Converts the string into a new Date object, and uses the toLocaleString function of this object to format the string as "day month" (e.g., "January 14", "March 23").
Checks if today is the client's birthday. If yes, adds " (today)" to the resulting string. This can be done by comparing days and months in the date objects.
Returns the created string.
Example:
For input string "07-01-2000", if today is July 1, the function should return "July 1 (today)". If today is not July 1, the function should return "July 1".
Test the function by calling it for the birthdate property of the first object and getting the formatted date.
Create a function getAllAmount that takes one parameter: an array of numbers (purchase amounts), sums up all the purchases for a client, and returns it as a number.

Test the function by calling it for the purchase amounts property of the first object and getting the sum.
Create a function getAverageAmount that takes one parameter: an array of numbers (purchase amounts). The function should calculate the arithmetic mean of all values. Remember the sequence of actions: first calculate the sum of numbers, then divide by the count. The returned number should be rounded to 1 decimal place using number.toFixed(1), where number is your variable with the final number.

Test the function by calling it for the purchase amounts property of the first object and getting the average.
Remove all temporary function calls used to check their results.

Create an arrow function in a new variable showClients. This function should take one parameter - the main array of clients clients, and for each client (in a loop) output the message "Client X has an average check amount of Y. Client's birthday: D", where X is the result of the fullName function for the current client object in the loop, Y is the average check amount based on their amounts array from the getAverageAmount function, and D is the client's birthdate from the getBirthday function. Remember to work with the passed array inside the function, and for each call of other functions in the loop, pass the corresponding value using the specific object by index.

Call the showClients function for the entire clients array. Check the console output – you should get information about each client in the clients array.

Next, call the showClients function without parameters. Wrap this call in an error handler. The result of the call without parameters should be a message "Function called without parameters" in the console instead of an error. The second message in the error handler should display the error text from the message property of the error object.

Create a new array bestClients, fill it with 2-3 new clients, and call the showClients function with this array. Check the console output for information about the new clients.

Make sure this function call occurs not immediately, but after 3 seconds.

Create a function whoSpentMore that determines who among the provided clients spent the most.

Function Description:
Takes an array of client objects.
Iterates through each client and checks if their total purchase amount (using the getAllAmount function) is higher than any other client's.
At the end, the function should print to the console: "Spent the most N. Total purchases: X.", where N is the client's full name (based on the fullName function), and X is the maximum amount spent.
Use 2 additional variables in the function to store the highest amount and the client object with the highest amount. If you find a higher amount in the loop, update the variable with the highest amount and the corresponding client object.
Call the whoSpentMore function for both the original and new sets of clients and analyze the result. Modify the data in the objects and recheck if your function works correctly.

