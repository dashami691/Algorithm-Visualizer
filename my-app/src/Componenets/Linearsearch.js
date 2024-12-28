import React from 'react'
import lsalgo from './lsalgo.png'
import lscomplexity from './lscomplexity.png'
import Lsalgo from './Lsalgo'

function Linearsearch() {
  return (
    <div class='container'>
      <br></br>
      <h1>Linear Search</h1>
      <div class="define" align="justify" ><b>Linear search </b> 
       is a sequential searching algorithm where we start from one end and check every element of the list until the desired element is found. It is the simplest searching algorithm.<br></br>
      <br></br>
      <hr/>
      <div class="working">
        <h2>Working of Linear Search</h2>
        The following steps are followed to search for an element k = 1 in the list below.<br></br>
        <img class = "combine" src='https://cdn.programiz.com/sites/tutorial2program/files/linear-search-initial-array.png'></img>
        <ol type="1"><br></br>
            <li><b>Start from the first element, compare k with each element x.</b></li>
            <img class = "combine" src="https://cdn.programiz.com/sites/tutorial2program/files/linear-search-comparisons.png"></img><br></br>
            <li><b>If x == k, return the index.</b></li>
            <img class="combine" src="https://cdn.programiz.com/sites/tutorial2program/files/linear-search-found.png"></img><br></br>
            <li><b>Else, return not found.</b></li>
        </ol>
      </div>
      <hr></hr>
      <div class="algo">
      <h2>Linear Search Algorithm</h2>
      <img src={lsalgo} alt="lsalgo" />
      </div>
      <hr/>
      <div class="algo">
      <h2>Linear Search Complexity</h2>
      <img src={lscomplexity} alt="lscomplexity" />
      </div>
    </div>
    <hr></hr>
      <div>
        <br></br>
        <h2>Linear Search Algorithm Visualizer</h2>
        <Lsalgo/>
      </div>
    </div>
  )
}

export default Linearsearch