import React from 'react'
import './Quicksort.css'
import quicksortalgo from './quicksortalgo.png';
import qscomplexity from './qscomplexity.png';
import Qsalgo from './Qsalgo';

function Quicksort() {
  return (
    <div class='container'>
      <br></br>
      <h1>Quick Sort</h1>
      <div class="define" align="justify" ><b>Quick Sort</b>  is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.</div>
      <hr/>
      <div class="working">
        <h2>Working of Quick Sort</h2>
        <ol type="I">
        <b>1. Select the Pivot Element</b>
            <li>There are different variations of quicksort where the pivot element is selected from different positions. Here, we will be selecting the rightmost element of the array as the pivot element.</li>
        </ol>
        <img class="divide" src="https://www.programiz.com/sites/tutorial2program/files/quick-sort-0.1_0.png"></img><br></br>
        <ol type="I">

        <b>2. Rearrange the Array</b>
        <p>Now the elements of the array are rearranged so that elements that are smaller than the pivot are put on the left and the elements greater than the pivot are put on the right.</p>
        <img class="divide" src="https://www.programiz.com/sites/tutorial2program/files/quick-sort-0.2_0.png"></img>
        <li>A pointer is fixed at the pivot element. The pivot element is compared with the elements beginning from the first index.</li>
        <img class="divide" src="https://www.programiz.com/sites/tutorial2program/files/quick-sort-partition-first-step.png"></img>
        <li>If the element is greater than the pivot element, a second pointer is set for that element.</li>
        <img class="divide" src="https://www.programiz.com/sites/tutorial2program/files/quick-sort-partition-second-step.png"></img>
        <li>Now, pivot is compared with other elements. If an element smaller than the pivot element is reached, the smaller element is swapped with the greater element found earlier.</li>
        <img class="divide" src= "https://www.programiz.com/sites/tutorial2program/files/quick-sort-partition-third-step.png"></img>
        <li>Again, the process is repeated to set the next greater element as the second pointer. And, swap it with another smaller element.</li>
        <img class="divide" src="https://www.programiz.com/sites/tutorial2program/files/quick-sort-partition-fourth-step.png"></img>
        <li>The process goes on until the second last element is reached.</li>
        <img class="divide" src="https://www.programiz.com/sites/tutorial2program/files/quick-sort-partition-fifth-step.png"></img>
        <li>Finally, the pivot element is swapped with the second pointer.</li>
        <img class="divide" src="https://www.programiz.com/sites/tutorial2program/files/quick-sort-partition-sixth-step.png"></img>
        </ol>
        
        <ol type="I">

        <b>3.Divide Subarrays</b>
        <li>Pivot elements are again chosen for the left and the right sub-parts separately. And, step 2 is repeated.</li>
        </ol>
        <img class="divide" src="https://www.programiz.com/sites/tutorial2program/files/quick-sort_1.png"></img>
      </div>
      <hr></hr>
      <div class="algo">
      <h2>Quick Sort Algorithm</h2>
      <img src={quicksortalgo} alt="quicksortalgo" />
      </div>
      <hr/>
      <div class="algo">
      <h2>Quick Sort Complexity</h2>
      <img src={qscomplexity} alt="qscomplexity" />
      </div>
      <hr></hr>
      <div>
        <br></br>
        <h2>Quick Sort Algorithm Visualizer</h2>
        <Qsalgo/>
      </div>
    </div>
    
    
  )
}
export default Quicksort
