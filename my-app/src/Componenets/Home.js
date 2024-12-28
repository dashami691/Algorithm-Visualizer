import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import Bubblesort from './Bubblesort';
import Binarysearch from './Binarysearch';
import Linearsearch from './Linearsearch';

function Home() {
  return (
    <div>
      <div className="cards">
        <h1>𝑺𝒐𝒓𝒕𝒊𝒏𝒈  𝑨𝒍𝒈𝒐𝒓𝒊𝒕𝒉𝒎</h1>
        <div className="card-list">
          <Link to="/bubblesort" className="card-item">          
            <img src="https://techdemic.com/wp-content/uploads/2017/08/BubbleSort.jpg" alt="Card Image"  height="270px"></img>
            <span className="developer">Bubble Sort</span>
            <h4>Bubble sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.</h4>
            <div className="arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
          <Link to='/mergesort' className="card-item">
            <img src="https://th.bing.com/th/id/OIP.1qthst0qXfJZikd4F2B_2gHaGS?pid=ImgDet&w=661&h=561&rs=1" alt="Card Image" height="270px"></img>
            <span className="designer">Merge Sort</span>
            <h4>Merge sort continuously cuts down a list into multiple sublists until each has only one item, then merges those sublists into a sorted list.</h4>
            <div className="arrow">
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
          <Link to='/quicksort' className="card-item">
            <img src="https://th.bing.com/th/id/OIP.k5Gf-9uclQqlp7RnO67L2wHaGh?pid=ImgDet&w=203&h=179&c=7&dpr=1.3" alt="Card Image" height="270px"></img>
            <span className="editor">Quick Sort</span>
            <h4>Quick sort is sorting algorithm and is based on partitioning of array of data into smaller arrays.It is also a divide and conquer algorithm</h4>
            <div className="arrow">
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
          </Link>
        </div>
      </div>
      <div className="cards">
        <h1>𝙎𝙚𝙖𝙧𝙘𝙝𝙞𝙣𝙜  𝑨𝒍𝒈𝒐𝒓𝒊𝒕𝒉𝒎</h1>
        <div className="card-list">
          <Link to="./binarysearch" className="card-item">
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Uj818KRw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/5hsod7t93v85b23rk671.png" alt="Card Image"  height="270px"></img>
            <span className="developer">Binary Search</span>
            <h4>Binary Search is an efficient algorithm for finding an items from a sorted list of items.</h4>
            <div className="arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
          <Link to='./linearsearch' className="card-item"><br></br><br></br><br></br>
            <img src="https://th.bing.com/th/id/OIP.C6jKbRfaSSQqRlEv3Dc9_wAAAA?pid=ImgDet&rs=1" alt="Card Image" height="150px" width="20%"></img><br></br><br></br><br></br>
            <span className="designer">Linear Search</span>
            <h4>Linear Search is a searching algorithm that starts at one end and goes through each element is found.</h4>
            <div className="arrow">
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
