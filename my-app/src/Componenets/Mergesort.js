import React from 'react'
import './Mergesort.css'
import mergesortalgo from './mergesortalgo.png';
import mscomplexity from './mscomplexity .png';
import Msalgo from './Msalgo';

function Mergesort() {
  return (
    <div class='container'>
      <br></br>
      <h1>Merge Sort</h1>
      <div class="define" align="justify" ><b>Merge sort</b> is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.</div>
      <hr/>
      <div class="working">
        <h2>Divide and Conquer Strategy</h2>
        Using the Divide and Conquer technique, we divide a problem into subproblems. When the solution to each subproblem is ready, we 'combine' the results from the subproblems to solve the main problem.
        Suppose we had to sort an array A. A subproblem would be to sort a sub-section of this array starting at index p and ending at index r, denoted as A[p..r].
        <br></br>
        <ol type="I"><br></br>
        <b>1. Divide</b>
            <li>If q is the half-way point between p and r, then we can split the subarray A[p..r] into two arrays A[p..q] and A[q+1, r].</li>
        </ol><br></br>
        <ol type="I">
        <b>2. Conquer</b>
        <li>In the conquer step, we try to sort both the subarrays A[p..q] and A[q+1, r]. If we haven't yet reached the base case, we again divide both these subarrays and try to sort them.</li>
        </ol><br></br>
        <ol type="I">
        <b>3.Combine</b>
        <li>When the conquer step reaches the base step and we get two sorted subarrays A[p..q] and A[q+1, r] for array A[p..r], we combine the results by creating a sorted array A[p..r] from two sorted subarrays A[p..q] and A[q+1, r].</li>
        <img class="combine" src="https://www.programiz.com/sites/tutorial2program/files/merge-sort-in-action---merge-step-simple.png"></img>
        </ol><br></br>
      </div>
      <hr></hr>
      <div class="algo">
      <h2>Merge Sort Algorithm</h2>
      <img src={mergesortalgo} alt="mergesortalgo" />
      </div>
      <hr/>
      <div class="algo">
      <h2>Merge Sort Complexity</h2>
      <img src={mscomplexity} alt="mscomplexity" />
      </div>
      <hr></hr>
      <div>
        <br></br>
        <h2>Merge Sort Algorithm Visualizer</h2>
        <Msalgo/>
      </div>
    </div>
    
    
  )
}
export default Mergesort
