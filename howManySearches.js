/**
 * Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
 * and using the recursive binary search algorithm, 
 * identify the sequence of numbers that each recursive call 
 * will search to try and find 8.
 * 
 * Trial 1 - (length 10 look at 5th ) 11 is larger than 8 look at left
 *      3, 5, 6, 8
 * Trial 2 - (length 4 look at 2nd) 5 is smaller than 8 look right
 *      6, 8
 * Trial 3 - (length of 2 look 1st) 6 is smaller than 8 
 *      8
 * Trial 4 - look at 8 . we are done

Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
and using the recursive binary search algorithm, 
identify the sequence of numbers that each recursive call 
will search to try and find 16.
Trial 1 - (length of 10 look at 5) 11 is smaller than 16 keep right
        12, 14, 15, 17, 18 
Trial 2 - (length of 5 look at 3rd) 15 is smaller than 16 keep right
        17, 18 
Trial 3 - (length of 2 look at 1 ) 17 is larger than 16 keep left. Nothing left

 */