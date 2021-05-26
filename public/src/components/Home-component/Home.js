import React  from 'react';
import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
  return (
    <div className='container'>
      <div className='btn-body'>
        <Link to='/task1' className='link-btn'>Click here to see task 1</Link>  
        <Link to='/task2' className='link-btn'>Click here to see task 2</Link>  
      </div>      
    </div>
  );
}