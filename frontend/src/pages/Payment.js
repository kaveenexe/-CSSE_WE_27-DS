import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FormData from 'form-data';
import Button from '@mui/material/Button';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Payment = ({ setCartTotal, cartTotal, cartFoodData }) => {
   
    const taxRate = 0.1;
    const navigate = useNavigate();
    
    const [newPayment, setNewPayment] = useState(
        {
            userId: localStorage.getItem("username"),
            name: '',
            foodId: cartFoodData,
            cardNumber: '',
            date: '',
            cvv: '',
            billingAddress: '',
            zip: '',
            state: '',
        }
    );

    const removeCartItems = async()=>{
        
        await axios.delete(`http://localhost:9010/api/cart/user/${localStorage.getItem('username')}`)
            .then(res => {
                
            })
            .catch(err => {
                console.log(err);
            });
    }



    useEffect(() => {

      }, [cartTotal, setCartTotal]);


      const getCartTotal = async()=>{
        const { data: response } = await axios.get(`http://localhost:9010/api/cart/user/getTotal/${localStorage.getItem("username")}`);
                setCartTotal(response)
                
      }

      useEffect(() => {
        getCartTotal();
      }, [cartTotal]);
    

    const handleChange = ({ target }) => {
        setNewPayment({ ...newPayment, [target.name]: target.value });
    }

    const addOrder = async (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure want to pay?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Payment Successfully!", "success");
              console.log(newPayment);
              removeCartItems();
              getCartTotal();
       
        const order =
        {
            userID: localStorage.getItem("username"),
            transactionID: Math.random().toString(36).substring(2, 8),
            quantity: 1,
            totalPrice: cartTotal+(cartTotal*taxRate)
        }
        navigate(`/cart/${localStorage.getItem("username")}`)
        console.log(order);


         axios.post('http://localhost:8010/order/add', order)
            .then(res => {
                // console.log(order);
                
                // deleteUserCartItems();
                // setCartTotal(0);
              
            })
            .catch(err => {
                console.log(err);
            });
            }
          });

          const deleteUserCartItems =()=>{
            axios.delete(`http://localhost:9010/api/cart/user/${localStorage.getItem("username")}`)
            .then(res => {
                console.log(newPayment);
                navigate(`/cart/${localStorage.getItem("username")}`);
                
            })
            .catch(err => {
                console.log(err);
            });
          }



        

    }



    return (
        <div>

            <div class="container d-lg-flex justify-content-center">
                <div class="box-1 bg-light user">


                </div>
                <div class="box-2">
                    <div class="box-inner-2">
                        <div>
                            <p class="fw-bold">Payment Details</p>
                            <p class="dis mb-3">Complete your purchase by providing your payment details</p>
                        </div>
                        <form >

                            <div>
                                <p class="dis fw-bold mb-2">Card details</p>
                                <div class="d-flex align-items-center justify-content-between card-atm border rounded">
                                    <div class="fab fa-cc-visa ps-3"></div>
                                    <input type="text"
                                        className='form-control'
                                        placeholder="Card Details"
                                        name="cardNumber"
                                        value={newPayment.cardNumber}
                                        onChange={handleChange}
                                    />
                                    <div class="d-flex w-50">
                                        <input type="text" class="form-control px-0"
                                            placeholder="MM/YY"
                                            name="date"
                                            value={newPayment.date}
                                            onChange={handleChange} />
                                        <input type="password"
                                            className='form-control'
                                            placeholder="CVV"
                                            name="cvv"
                                            value={newPayment.cvv}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div class="my-3 cardname">
                                    <p class="dis fw-bold mb-2">Cardholder name</p>
                                    <input
                                        className='form-control'
                                        placeholder="Name"
                                        name="name"
                                        value={newPayment.name}
                                        onChange={handleChange} />
                                </div>
                                <div class="address">
                                    <p class="dis fw-bold mb-3">Billing address</p>
                                    <input className='form-control'
                                        placeholder="Billing Address"
                                        name="billingAddress"
                                        value={newPayment.billingAddress}
                                        onChange={handleChange}
                                    />
                                    <div class="d-flex">
                                        <input class="form-control zip" type="text"
                                            placeholder="ZIP"
                                            name="zip"
                                            value={newPayment.zip}
                                            onChange={handleChange}
                                        />
                                        <input class="form-control state" type="text"
                                            placeholder="State"
                                            name="state"
                                            value={newPayment.state}
                                            onChange={handleChange}
                                        />
                                    </div>


                                    <div class="d-flex flex-column dis">
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <div className='col-sm'>Item</div>
                                            <div className='col-sm'>Quantity</div>
                                            <div className='col-sm'><span class="fas fa-dollar-sign"></span><b>Amount</b></div>
                                        </div>

                                        <div class="d-flex flex-column dis">
                                            {cartFoodData.map(item => (

                                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                                    <div className='col-sm'>{item.foodName}</div>
                                                    <div className='col-sm'>{item.quantity}</div>
                                                    <div className='col-sm'>{item.total}</div>
                                                </div>

                                            ))}
                                        </div>

                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <div className='col-sm'>Tax</div>
                                            <div className='col-sm'></div>
                                            <div className='col-sm'><span class="fas fa-dollar-sign"></span>{cartTotal*taxRate}</div>
                                        </div>

                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <div className='col-sm'>Total</div>
                                            <div className='col-sm'></div>
                                            <div className='col-sm'><span class="fas fa-dollar-sign"></span>{cartTotal}</div>
                                        </div>

                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <div className='col-sm'>Total with Tax</div>
                                            <div className='col-sm'></div>
                                            <div className='col-sm'><span class="fas fa-dollar-sign"></span>{cartTotal+(cartTotal*taxRate)}</div>
                                        </div>
                                        <button onClick={addOrder}>Pay ${cartTotal}</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment