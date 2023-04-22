import React from 'react'
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';


import TextField from '@mui/material/TextField';
const API_BASE = "http://localhost:8090";


const SingleFood = ({ fetchCartFoodData, fetchCartCount, setLoading, setData, data }) => {
    let { id } = useParams();
    const baseURL = `http://localhost:8090/api/${id}`;
    const [quantity, setQuantity] = useState(1)
    const [singleFood, setSingleFood] = useState([]);
    const [total, setTotal] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(baseURL);
                setSingleFood(response);

            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();

    }, []);

    const calculateTotal = ({ target }) => {
        setQuantity(target.value);
        setTotal(target.value * singleFood.price);
    }

    const addToCart = async () => {

        Swal.fire({
          title: 'Are you sure want to add this to the cart?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, add it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Added!',
              'success'
            )
            const cartItem = {
              userId: localStorage.getItem('username'),
              foodId: data._id,
              foodName: data.name,
              foodImage: data.image,
              quantity: quantity,
              total: total
            };
    
            const headers = {
              'Authorization': 'Bearer my-token',
              'My-Custom-Header': 'foobar'
            };
            axios.post('http://localhost:8090/api/cart/add-item', cartItem, { headers });
            //setCartFoodData(...cartFoodData, cartItem);
            //fetchCartFoodData();
            //getCartTotal();
          }
        });
    
      }


    return (
        <div className='container'>

            <div className='row'>
                <div className='col-8' >
                    <h1><center>{singleFood.name}</center></h1>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={singleFood.image} style={{ width: '50%', height: '50%' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>{singleFood.description}</div>
                </div>

                <div className='col-4' style={{ paddingTop: '20%' }}>

                    <div className='row'>
                        <TextField id="outlined-basic" label="Quantity" variant="outlined" onChange={calculateTotal}
                        value={quantity}
                        />
                    </div>
                    <div className='row'>
                        <div className='col'>Total</div>
                        <div className='col'>{quantity * singleFood.price}</div>
                    </div>
                    <div className='row'>
                        <Button variant="contained" onClick={async () => {
                            await addToCart();




                        }}>Add to Cart</Button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SingleFood