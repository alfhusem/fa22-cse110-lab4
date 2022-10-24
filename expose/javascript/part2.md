### Part 2
1. print "2". i's last value before exiting the for loop is 2
2. print "150". discountedPrice's last value before exiting the for loop is 150
3. print "150". same as above
4. [50, 100, 150]. code runs as intended, all finalPrices=discountedPrices are pushed to the list
5. error. i is not defined, because the variable is initialized and defined in the scope of the for loop
6. error. discountedPrice is not defined, because the variable is initialized and defined in the scope of the for loop
7. print "0". finalPrice is set to 0 before the for loop. Changes in the for loop's scope are not saved
8. [50, 100, 150]. code runs as intended. Even though list is outside the scope of the for loop, it can still add elements to it from inside the scope.
9. error. i is not defined, because the variable is initialized and defined in the scope of the for loop
10. print "3". lenght is set to the length of the input prices
11. [50, 100, 150]. Even of the list is constant, it can be pushed to. The variable discountedPrice will still change every iteration beacause it is redefined every time 

12. A. student.name;
    B. student['Grad Year'];
    C. student.greeting();
    D. student['Favorite Teacher'].name;
    E. student.courseLoad[0];

13. A. '32'. 2 is converted to a string
    B. 1. One cannot subtract strings from eachother, so '3' is converted to int
    C. 3. null is converted to 0
    D. '3null'. null is converted to a string
    E. 4. true is converted to 1
    F. 0. false is converted to 0, null is converted to 0
    G. '3undefined'. undefined is converted to a string
    H. NaN. One cannot subtract strings from eachother, and undefined cannot be converted to anything else than a string

14. A. true. '2' is converted to an int
    B. false. '1' (and '12') comes before '2' in alphabetical order, and is therefore considered less than 
    C. true. '2' is converted to an int. Would also work if 2 is converted to string
    D. false. === will return false if the types do not match. One is a int, one is string
    E. false. true is converted to 1
    F. true. Boolean(2) = true. Both types match

15. == will do a type convertion if the types are not the same
    === checks if the types are the same. Will return false if types do not match. Will only return true if types match and the condition is true

16. code

17. The function will modify the input array, running the function doSomething() on every element (doubling the value), and pushing the modified element into a new array, which is returned. The array [1,2,3] will become [2,4,6].

18. code

19. 1
    4
    3
    2
