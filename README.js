FInd the number of ways to select 3 pages in ascending index order such that no two adjacent pages are of the same type.

Example :
book = '01001'

The following Sequences of page match the criterion;

[1,2,3], that is 01001 --> 010
[1,2,4], that is 01001 --> 010
[2,3,5], that is 01001 --> 101
[2,4,5], that is 01001 --> 101
The Answer is 4.

Function Description
Complete the function numberOfWays.
numberOfWays has the following parameters:
String: a string that represents the pages of the book .i.e. book = '01001'

Returns
number: the total number of ways to select 3 pages that meet the criterion.