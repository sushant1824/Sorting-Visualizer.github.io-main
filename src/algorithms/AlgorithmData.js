import BubbleSort from '../algorithms/BubbleSort'; 
import MergeSort from '../algorithms/MergeSort';
import QuickSort from '../algorithms/QuickSort';
import InsertionSort from '../algorithms/InsertionSort';
import SelectionSort from '../algorithms/SelectionSort';

import image1 from '../assets/images/bubble_sort_image.png';
import image2 from '../assets/images/insertion_sort_image.png';
import image3 from '../assets/images/Merge_Sort_image.png';
import image4 from '../assets/images/Quicksort_image.png';
import image5 from '../assets/images/selection_sort_image.png';

let AlgorithmData = {
    'Bubble Sort' : {
        component : BubbleSort,
        definition : 'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.',
        working : ['Starting from the first index, compare the first and the second elements.',
                   'If the first element is greater than the second element, they are swapped.', 
                   'Now, compare the second and the third elements. Swap them if they are not in order.', 
                   'The above process goes on until the last element.',
                   'The same process goes on for the remaining iterations.',
                   'After each iteration, the largest element among the unsorted elements is placed at the end.',
                   'In each iteration, the comparison takes place up to the last unsorted element.'],
        steps : ['Intialize a variable swap as false',
                 'For every element in the list, if left element is greater than right element, swap them and update swap as  true',
                 'If swap is true, stop the execution since the list is already sorted, else continue to iterate the list'],
        image : image1
    },
    'Insertion Sort' : {
        component : InsertionSort,
        definition : 'Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration. Insertion sort works similarly as we sort cards in our hand in a card game. We assume that the first card is already sorted then, we select an unsorted card.',
        working : ['The first element is assumed to be sorted. Take the second element and store it separately in the key',
                  'Compare key with the first element. If the first element is greater than key, then key is placed in front of the first element.',
                  'Now, the first two elements are sorted.Take the third element and compare it with the elements on the left of it. Placed it just behind the element smaller than it. If there is no element smaller than it, then place it at the beginning of the array.',
                 'Similarly, place every unsorted element at its correct position.'],
        steps : ['Consider the first element as the sorted part of the list',
                'For each unsorted element x, iterate(j) a loop from the last sorted element to the beginning of the list',
                'If j>x, move the sorted element right by 1.',
                'Break the loop and insert the unsoted element x'],
        image : image2
    },
    'Merge Sort' : {
        component : MergeSort,
        definition : 'Merge Sort is a divide and conquer algorithm. It works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.',
        working : ['Suppose we had to sort an array A. A subproblem would be to sort a sub-section of this array starting at index p and ending at index r, denoted as A[p..r].',
                   'If q is the half-way point between p and r, then we can split the subarray A[p..r] into two arrays A[p..q] and A[q+1, r].',
                   'In the conquer step, we try to sort both the subarrays A[p..q] and A[q+1, r]. If we have not yet reached the base case, we again divide both these subarrays and try to sort them.', 
                   'When the conquer step reaches the base step and we get two sorted subarrays A[p..q] and A[q+1, r] for array A[p..r], we combine the results by creating a sorted array A[p..r] from two sorted subarrays A[p..q] and A[q+1, r].'],
        steps : ['Create copies of the subarrays L ← A[p..q] and M ← A[q+1..r].',
                 'Create three pointers i, j and k',
                 'i maintains current index of L, starting at 1',
                 'j maintains current index of M, starting at 1',
                 'k maintains the current index of A[p..q], starting at p.',
                 'Until we reach the end of either L or M, pick the larger among the elements from L and M and place them in the correct position at A[p..q]',
                 'When we run out of elements in either L or M, pick up the remaining elements and put in A[p..q]'],
        image : image3
    },
    'Quick Sort' : {
        component : QuickSort,
        definition : 'The quicksort algorithm is a sorting algorithm that works by selecting a pivot point, and thereafter partitioning the number set, or array, around the pivot point. ',
        working : ['An array is divided into subarrays by selecting a pivot element (element selected from the array).',
                   'While dividing the array, the pivot element should be positioned in such a way that elements less than pivot  are kept on the left side and elements greater than pivot are on the right side of the pivot.',
                   'The left and right subarrays are also divided using the same approach. This process continues until each subarray contains a single element.',
                   'At this point, elements are already sorted. Finally, elements are combined to form a sorted array.'],
        steps : ['Here, we will be selecting the rightmost element of the array as the pivot element.',
                'Now the elements that are smaller than the pivot are put on the left and the elements greater than the pivot are put on the right.',
                'A pointer is fixed at the pivot element. The pivot element is compared with the elements beginning from the first index.',
                'If the element is greater than the pivot element, a second pointer is set for that element.',
                'Now, pivot is compared with other elements. If an element smaller than the pivot element is reached, the smaller element is swapped with the greater element found earlier.',
                'Again, the process is repeated to set the next greater element as the second pointer. And, swap it with another smaller element.',
                'The process goes on until the second last element is reached.',
                'Finally, the pivot element is swapped with the second pointer.',
                'Pivot elements are again chosen for the left and the right sub-parts separately. And, step 2 is repeated.',
                'The subarrays are divided until each subarray is formed of a single element. At this point, the array is already sorted.'],
        image : image4
    },
    'Selection Sort' : {
        component : SelectionSort,
        definition : 'Selection sort works by taking the smallest element in an unsorted array and bringing it to the front. You will go through each item (from left to right) until you find the smallest one. The first item in the array is now sorted, while the rest of the array is unsorted.',
        working : ['Set the first element as minimum.',
                   'Compare minimum with the second element. If the second element is smaller than minimum, assign the second element as minimum.', 
                   'Compare minimum with the third element. Again, if the third element is smaller, then assign minimum to the third element otherwise do nothing. The process goes on until the last element.', 
                   'After each iteration, minimum is placed in the front of the unsorted list.',
                   'For each iteration, indexing starts from the first unsorted element. Step 1 to 3 are repeated until all the elements are placed at their correct positions.'],
        steps : ['Set the first element of the unsorted part as minimum.',
                'Iterate through the unsorted part, if the element is less than minimum, update the minimum as the element.',
                'Swap minimum with the first unsorted posiion',
                'Repeat the steps for n-1 times (n=size of the list)'],
        image : image5
    }
}

export default AlgorithmData;