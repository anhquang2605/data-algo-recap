## Big O of space complexity
with N data, how many unit of memory will the algorithm consume?
1. avoid creating or doubling array elements whenever you can. modify in place is the way to go => may result in O(1) meaning the algo consume constant space regardless of how big the original data would be
2. We only consider if the algorithm is creating new data for the efficiency sake. Some will include the original input, but we need to clarify that
3. some times, you have to make a trade off, algo can be inefficient in time complex but efficient in space complex and vice versa.
4. sort array first then compare the two element next to each other to tell if there is duplicate