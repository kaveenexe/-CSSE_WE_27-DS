import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import { useNavigate } from 'react-router-dom';

const GridLayout = () => {

  const navigate = useNavigate();
  
  const [homeFoodData, setHomeFoodData] = useState([])
  const [homeFoodLoading, setHomeFoodLoading] = useState(true);
  

  const token = localStorage.getItem('rfkey');

  const fetchFoodData = async () => {
    setHomeFoodLoading(true);
    try {
      const { data: response } = await axios.get('http://localhost:9020/api/foods');
      setHomeFoodData(response);
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
    setHomeFoodLoading(false);
  }

  useEffect(() => {
    fetchFoodData();
  }, []);


  const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  const addToCart = (id) => {
    navigate(`/${id}`);
  }



  return (
    <div>
      {homeFoodLoading && <div>Loading</div>}
      {!homeFoodLoading && (
        <div class="grid-container">
          {homeFoodData.map(item => (
            <button onClick={() => addToCart(item._id)}>
              <div class="grid-item">
                <img src={item.image} alt="..." style={{ width: '400px', height: '400px' }} />
                <div >{item.name}</div>
                <h4 >Rs. {item.price}</h4>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default GridLayout