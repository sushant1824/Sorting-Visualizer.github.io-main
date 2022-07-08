import {Link} from 'react-router-dom';

import './landing.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import gif1 from '../../assets/images/Bubble_sort.gif'
import gif2 from '../../assets/images/insertion-sort.gif'
import gif3 from '../../assets/images/merge-sort.gif'
import gif4 from '../../assets/images/Quicksort.gif'
import gif5 from '../../assets/images/selectionsort.gif'

import CarouselContainer from './carousel';

function LandingPage() {
  return (
    <div className='landingPage'>
    <CarouselContainer />
    <br /><br />
    <Container>
    <h2 className='heading'>Types Of Sorting</h2>
    <br /><br />
    <Row>
        <Col sm={6}><img
          className="image1"
          src={gif1}
          alt="bubble"
        /></Col>
        <Col sm={6} className='box'>
            <h2 className='title'>Bubble Sort</h2>
            <p className='para'>Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.
            Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.</p>
            <p>The worst case occurs when an array is reverse sorted.<h5>Worst and Average Case Time Complexity: O(N2).</h5>The best case occurs when an array is already sorted.<h5>Best Case Time Complexity: O(N).</h5><h5>Auxiliary Space: O(1)</h5></p>
            <Link to="/Bubble-sort"><Button variant="success" className='buttons'>Bubble Sort</Button></Link>{' '}
        </Col>
    </Row>
    <br /><br />
    <Row>
    <Col sm={6} className='box'>
            <h2 className='title'>Insertion Sort</h2>
            <p className='para'>Insertion sort is a sorting algorithm in which the elements are transferred one at a time to the right position. In other words, an insertion sort helps in building the final sorted list, one item at a time, with the movement of higher-ranked elements. An insertion sort has the benefits of simplicity and low overhead.</p>
            <p>Suppose, an array is in ascending order, and you want to sort it in descending order. In this case, worst case complexity occurs.<h5>Worst Case Complexity: O(n2)</h5>The best case occurs when an array is already sorted.<h5>Best Case Time Complexity: O(N).</h5><h5>Auxiliary Space: O(1)</h5></p>
            <Link to="/Insertion-sort"><Button variant="success" className='buttons'>Insertion Sort</Button></Link>{' '}
        </Col>
      <Col sm={6}><img
          className="image1"
          src={gif2}
          alt="insertion"
        /></Col>
    </Row>
    <br /><br />
    <Row>
      <Col sm={6}><img
          className="image1"
          src={gif3}
          alt="Merge"
        /></Col>
      <Col sm={6} className='box'>
            <h2 className='title'>Merge Sort</h2>
            <p className='para'>A sorting technique that sequences data by continuously merging items in the list. Every single item in the original unordered list is merged with another, creating groups of two. Every two-item group is merged, creating groups of four and so on until there is one ordered list.</p>
            <p>The worst case occurs when an array is reverse sorted.<h5>Worst Case Complexity: O(n*log n)</h5>The best case occurs when an array is already sorted.<h5>Best Case Complexity: O(n*log n)</h5><h5>The space complexity of merge sort is O(n)</h5></p>
            <Link to="/Merge-sort"><Button variant="success" className='buttons'>Merge Sort</Button></Link>{' '}
        </Col>
    </Row>
    <br /><br />
    <Row>
        <Col sm={6} className='box'>
            <h2 className='title'>Quick Sort</h2>
            <p className='para'>Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.
            Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This algorithm is quite efficient for large-sized data sets as its average and worst-case complexity are O(n2), respectively.</p>
            <p>It occurs when the pivot element picked is either the greatest or the smallest element.<h5>Worst and Average Case Time Complexity: O(N2).</h5>It occurs when the pivot element is always the middle element or near to the middle element.<h5>Best Case Complexity [Big-omega]: O(n*log n)</h5><h5>The space complexity for quicksort is O(log n)</h5></p>
            <Link to="/Quick-sort"><Button variant="success" className='buttons'>Quick Sort</Button></Link>{' '}
        </Col>
        <Col sm={6}><img
          className="image1"
          src={gif4}
          alt="Quick"
        /></Col>
    </Row>
    <br /><br />
    <Row>
      <Col sm={6}><img
            className="image1"
            src={gif5}
            alt="Selection"
      /></Col>
      <Col sm={6} className='box'>
          <h2 className='title'>Selection Sort</h2>
          <p className='para'>Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.</p>
          <p>If we want to sort in ascending order and the array is in descending order then, the worst case occurs.<h5>Worst and Average Case Time Complexity: O(N2).</h5>The best case occurs when an array is already sorted.<h5>Best Case Time Complexity: O(N2).</h5><h5>Auxiliary Space: O(1)</h5></p>
          <Link to="/Selection-sort"><Button variant="success" className='buttons'>Selection Sort</Button></Link>{' '}
      </Col>
    </Row>
    </Container>
    </div>
  );
}

export default LandingPage;
