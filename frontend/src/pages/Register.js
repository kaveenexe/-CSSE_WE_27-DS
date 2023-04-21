import React from 'react'
import { useState } from "react";
import axios from 'axios';
const API_BASE = "http://localhost:8080";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSeller, setIsSeller] = useState(false);
   

    const addUser = async () => {

        const user = {
            userName: userName,
            email: email,
            password: password,
            isSeller: isSeller,
            isCustomer: !isSeller,
            isAdmin: false
        };
        const headers = {
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        };
        axios.post('http://localhost:8080/api/signUp', user, { headers });

    }
    return (
        <section class="vh-100">
            <div class="container-fluid h-custom h-100">
                <div class="row d-flex justify-content-center align-items-center h-100s h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="img-fluid" alt="Sample image" />
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            <div class="form-outline mb-4">
                                <input type="radio" id="html" name="role" value="HTML" onChange={()=> {
                                    setIsSeller(false);
                                   
                                    
                                }} defaultChecked />
                                <label for="html">Customer</label><br />
                                <input type="radio" id="css" name="role" value="CSS" onChange={()=>{
                                    setIsSeller(true);
                                   
                                }}/>
                                <label for="css">Seller</label><br />
                            
                            </div>

                            <div class="form-outline mb-4">
                                <input type="username" id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Enter a username"
                                    onChange={e => setUserName(e.target.value)}
                                    value={userName}
                                />
                                <label class="form-label" for="form3Example3">Username</label>
                            </div>


                            <div class="form-outline mb-4">
                                <input type="email" id="form3Example3" class="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                />
                                <label class="form-label" for="form3Example3">Email address</label>
                            </div>


                            <div class="form-outline mb-3">
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Enter password"
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                />
                                <label class="form-label" for="form3Example4">Password</label>
                            </div>

                            <div class="d-flex justify-content-between align-items-center">


                                <a href="#!" class="text-body">Forgot password?</a>
                            </div>

                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }} onClick={addUser}>Register</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="#!"
                                    class="link-danger">Login</a></p>
                            </div>
                            <button onClick={(e)=>{
                                e.preventDefault();
                                console.log(isSeller)}}>Click</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Register