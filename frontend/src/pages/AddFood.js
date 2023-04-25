import axios from 'axios';
import React from 'react'
import FormData from 'form-data';
import Form from "react-bootstrap/Form";

import { useState, } from "react";

const API_BASE = "http://localhost:9020";

const AddFood = () => {

    const [newFood, setNewFood] = useState(
        {
            name:'',
            price:'',
            description:'',
            category:'',
            image:'',	

        }
    );

    const handleChange = ({target}) => {
        setNewFood({...newFood, [target.name]: target.value});
    }

    const handlePhoto = ({target}) => {
        setNewFood({...newFood, image: target.files[0]});
        console.log(newFood.image);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', newFood.name);
        formData.append('price', newFood.price);
        formData.append('description', newFood.description);
        formData.append('image', newFood.image);
        

        console.log(formData.image);

        await axios.post('http://localhost:9020/api/upload', formData)
            .then(res => {
                console.log(formData);
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    return (
        <section class="vh-100">


            <div class="container-fluid h-custom h-100">
                <div class="row d-flex justify-content-center align-items-center h-100s h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">

                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">

                                
                            <div class="form-outline">
                                <Form.Select value={newFood.category} onChange={e=>newFood.category=e.target.value} aria-label="Default select example">
                                    <option>Select category</option>
                                    <option value="Herbal Beauty Products">Herbal Beauty Products</option>
                                    <option value="Herbal Hair products">Herbal Hair products</option>
                                    <option value="Other">Other</option>
                                </Form.Select>
                                </div>


                                <div class="form-outline ">
                                <label class="form-label" for="form3Example3">Product Name</label>

                                    <Form.Control 
                                        placeholder="Enter Product Name"
                                        name="name"
                                        value={newFood.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div class="form-outlinex">
                                <label class="form-label" for="form3Example3">Price</label>
                                    <Form.Control
                                        placeholder="Enter Price"
                                        name="price"
                                        value={newFood.price}
                                        onChange={handleChange}
                                    />
                                    
                                </div>

                                <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example3">Description</label>
                                    <Form.Control
                                        placeholder="Enter the Description"
                                        name="description"
                                        value={newFood.description}
                                        onChange={handleChange}
                                    />
                                    
                                </div>

                                
                                <div class="form-outline mb-4">
                                    <Form.Control
                                        type="file"
                                        name="image"
                                        onChange={handlePhoto}
                                    />

                                </div>

                               

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <input type="submit" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default AddFood