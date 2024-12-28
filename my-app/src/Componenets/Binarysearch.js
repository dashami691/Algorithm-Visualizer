import React from 'react'
import binarysalgo from './binarysalgo.png'
import binaryscomplexity from './binaryscomplexity.png'
import Bisealgo from './Bisealgo'

function Binarysearch() {
  return (
    <div class='container'>
      <br></br>
      <h1>Binary Search</h1>
      <div class="define" align="justify" ><b>Binary Search</b> is a searching algorithm for finding an element's position in a sorted array. 
      In this approach, the element is always searched in the middle of a portion of an array.
      Binary search can be implemented only on a sorted list of items. If the elements are not sorted already, we need to sort them first.</div>
      <hr/>
      <div class="working">
        <h2>Working of Binary Search</h2>
        Binary Search Algorithm can be implemented in two ways which are discussed below :<br></br>
        <b>1. Iterative Method</b><br></br>
        <b>2. Recursive Method</b><br></br>
        The recursive method follows the divide and conquer approach.<br></br>
        The general steps for both methods are discussed below.
        <ol type="1"><br></br>
            <li><b>The array in which searching is to be performed is:</b></li>
            <img class="divide" src="https://cdn.programiz.com/sites/tutorial2program/files/binary-search-initial-array.png"></img><br></br>
            Let x = 4 be the element to be searched.
            <li><b>Set two pointers low and high at the lowest and the highest positions respectively.</b></li>
            <img class="divide" src="https://cdn.programiz.com/sites/tutorial2program/files/binary-search-set-pointers.png"></img><br></br>
            <li><b>Find the middle element mid of the array ie. arr[(low + high)/2] = 6.</b></li>
            <img class="divide" src="https://cdn.programiz.com/sites/tutorial2program/files/binary-search-mid.png"></img>
            <li><b>If x == mid, then return mid.Else, compare the element to be searched with m.</b></li>
            <li><b>If x less than mid, compare x with the middle element of the elements on the right side of mid. This is done by setting low to low = mid + 1.</b></li>
            <li><b>Else, compare x with the middle element of the elements on the left side of mid. This is done by setting high to high = mid - 1.</b></li>
            <img class="divide" src='https://cdn.programiz.com/sites/tutorial2program/files/binary-search-find-mid.png'></img>
            <li><b>Repeat steps 3 to 6 until low meets high.</b></li>
            <img class="img" src='https://cdn.programiz.com/sites/tutorial2program/files/binary-search-mid-again.png'></img>
            <li><b>x = 4 is found.</b></li>
            <img class="img" src="https://cdn.programiz.com/sites/tutorial2program/files/binary-search-found.png"></img>
        </ol>
      </div>
      <hr></hr>
      <div class="algo">
      <h2>Binary Search Algorithm</h2>
      <img src={binarysalgo} alt="binarysalgo" />
      </div>
      <hr/>
      <div class="algo">
      <h2>Bubble Sort Complexity</h2>
      <img src={binaryscomplexity} alt="binaryscomplexity" />
      </div>
      <hr></hr>
      <div>
        <br></br>
        <h2>Binary Search Algorithm Visualizer</h2>
        <Bisealgo/>
      </div>
    </div>
  )
}

export default Binarysearch