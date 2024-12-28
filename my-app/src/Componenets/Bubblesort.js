import React from 'react'
import './Bubblesort.css'
import bubblesortalgo from './bubblesortalgo.png';
import bscomplexity from './bscomplexity.png';
import Bsalgo from './Bsalgo';

function Bubblesort() {
  return (
    <div class='container'>
      <br></br>
      <h1>Bubble Sort</h1>
      <div class="define" align="justify" ><b>Bubble sort</b> is a sorting algorithm that compares two adjacent elements and swaps them until they are in the intended order.
      Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.</div>
      <hr/>
      <div class="working">
        <h2>Working of Bubble Sort</h2>
        Suppose we are trying to sort the elements in ascending order.
        <ol type="I">
        <b>1. First Iteration (Compare and Swap)</b>
            <li>Starting from the first index, compare the first and the second elements.</li>
            <li>If the first element is greater than the second element, they are swapped.</li>
            <li>Now, compare the second and the third elements. Swap them if they are not in order.</li>
            <li>The above process goes on until the last element.</li>
        </ol>
        <img src="https://www.programiz.com/sites/tutorial2program/files/Bubble-sort-0.png"></img><br></br>
        <ol type="I">
        <b>2. Second Iteration</b>
        <li>The same process goes on for the second iterations.</li>
        <li>After each iteration, the largest element among the unsorted elements is placed at the end.</li>
        </ol>
        <img src="https://www.programiz.com/sites/tutorial2program/files/Bubble-sort-1.png"></img>
        <ol type="I">
        <b>3.Third Iteration</b>
        <li>the comparison takes place up to the last unsorted element.</li>
        </ol>
        <img src="https://www.programiz.com/sites/tutorial2program/files/Bubble-sort-2.png"></img>
        <ol type="I">
        <b>4.Forth Iteration</b>
        <li>The array is sorted when all the unsorted elements are placed at their correct positions.</li>
        </ol>
        <img src="https://www.programiz.com/sites/tutorial2program/files/Bubble-sort-3.png"></img>
      </div>
      <hr></hr>
      <div class="algo">
      <h2>Bubble Sort Algorithm</h2>
      <img src={bubblesortalgo} alt="bubblesortalgo" />
      </div>
      <hr/>
      <div class="algo">
      <h2>Bubble Sort Complexity</h2>
      <img src={bscomplexity} alt="bscomplexity" />
      </div>
      <hr></hr>
      <div>
        <br></br>
        <h2>Bubble Sort Algorithm Visualizer</h2>
        <Bsalgo/>
      </div>
    </div>
  )
}
export default Bubblesort
