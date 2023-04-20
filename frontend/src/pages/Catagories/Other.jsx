import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Banner from "../../components/Home/banner";
import Footer from "../../components/Home/footer";
import NavBar from "../../components/Home/navbar";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Product from "../../components/Home/product";

import { UilShoppingCart } from "@iconscout/react-unicons";
import Axios from "axios";

export default function Beauty() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   Axios.get("http://localhost:8003/products").then((response) => {
  //     setProducts(response.data);
  //   });
  // }, []);
    useEffect(() => {
    Axios.get('http://localhost:8003/products/Other')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

 

  return (
    <div>
      <NavBar />
      <Banner />
      <div
        className="headline py-3"
        style={{ backgroundColor: "#eff5eb", marginBottom: "3rem" }}
      >
        <h2 style={{ marginLeft: "0.5rem" }}>Other Products</h2>
      </div>
      <div className="product_cards">
        {products.map((product) => (
          <div key={product._id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                {/* <Card.Text>{product.description}</Card.Text> */}
                <Card.Subtitle className="mb-2 text-muted">
                  {product.category}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  LKR {product.price}
                </Card.Subtitle>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Product Details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Product product={product}/>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Reviews
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      <UilShoppingCart size="20" />
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button variant="primary" onClick={handleShow}>
                  View Product
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
