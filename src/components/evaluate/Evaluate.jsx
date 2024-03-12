import React from 'react'
import './evaluate.css';
import {useLoaderData,useParams} from "react-router-dom"
import RankedData from '../RankedData/RankedData';

const Evaluate = () => {
    // const {id}=useParams();
    const id="olx";
    console.log(id);
  return (
    <div className='evaluate-content'>
        <h1 className="gradient__text">Catalog Scoring</h1>
        <p>{id}</p>
        <RankedData id={id}/>
    </div>
  )
}

export default Evaluate
