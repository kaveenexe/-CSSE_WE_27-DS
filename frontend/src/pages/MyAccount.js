import React from 'react'
import { useEffect } from "react";
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from '@mui/material/Button';
import axios from 'axios';


const API_BASE = "http://localhost:8080";


const MyAccount = ({ isCustomer }) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const key = localStorage.getItem('rfkey');
    const uid = localStorage.getItem('username');

    const [userDetails, setUserDetails] = useState({});

    const [orders, setOrders] = useState([]);


    const logOut = async () => {
        const data = await fetch(API_BASE, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: uid,
            })
        }).then(() => {
            localStorage.removeItem("username");
            localStorage.removeItem("rfkey");
            navigate('/');
        });
    }

    

    const loadUserData = async () => {
        axios({
            method: 'post',
            url: "http://localhost:8080/api/get-user-details",
            data: {
                username: uid,
            }
          }).then((data) => {
            console.log(data.data);
            setUserDetails(data.data);
        });
    }

    useEffect(() => {
        loadUserData();
    }, []);


const viewCart = () => {
    const username = localStorage.getItem('username');
    navigate(`/cart/${username}`);
}

// const fetchPaymentDetails = async () => {
//     if (isSeller) {
//         try {
//             const { data: response } = await axios.get(`http://localhost:8080/api/payment/payments`);
//             setOrders(response);
//             console.log(response);

//         } catch (error) {
//             console.error(error.message);
//         }
//     }
// }

// useEffect(() => {
//     fetchPaymentDetails();
// }, []);

return (
    <div className='container'>
        <div className='row'>Howdy </div>
        <div>

           
                <div class="card" >
                    <div class="card-body">

                        <p class="card-text">Name: {userDetails.username}</p>
                        <p class="card-text">Email: {userDetails.email}</p>
                        <p class="card-text">IsCustomer: {userDetails.isCustomer}</p>
                        <p class="card-text">IsSeller: {userDetails.isSeller}</p>
                        <p class="card-text">IsAdmin: {userDetails.isAdmin}</p>

                    </div>
                </div>
            

        </div>
    </div>
)
}

export default MyAccount