import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Editproducts from "./EditProducts";
import axios from "axios";

function ProductDetails() {
  // const history = useHistory();
  const navigate = useNavigate();

  //get user details
  const [userDetails, setUserDetails] = useState({});
  const uid = localStorage.getItem("username");

  const loadUserData = async () => {
    axios({
      method: "post",
      url: "http://localhost:8080/api/get-user-details",
      data: {
        username: uid,
      },
    }).then((data) => {
      console.log(data.data);
      setUserDetails(data.data);
    });
  };

  useEffect(() => {
    loadUserData();
  }, []);

  //get products by uesr id
  const [Product, setProduct] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:9020/api/user/${userDetails.id}`  
      );
      const jsonData = await response.json();
      console.log(jsonData);
      return jsonData;
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      {Product.map((product) => (
        <div key={product._id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description} <br />
              </Card.Text>
              {/* <Button variant="primary" onClick={() => history.push('/EditProducts')}>
          Edit
        </Button> */}
              {/* <Button variant="primary" onClick={ ()=>navigate(`/EditProducts/`)}>Edit</Button>
        <Editproducts/>
        <Button variant="primary">Delete</Button> */}
              <Button
                variant="primary"
                onClick={() => navigate(`/edit-product/`)}
              >
                Edit
              </Button>
              <Button
                variant="primary"
                onClick={() => navigate(`/edit-product/`)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
          
        </div>
      ))}
      <h1>{userDetails.id}</h1>
    </div>
  );
}

export default ProductDetails;
