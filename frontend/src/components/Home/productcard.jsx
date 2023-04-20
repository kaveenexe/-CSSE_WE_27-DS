import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import Axios from "axios";
import Product from "../../components/Home/product";
import { UilShoppingCart } from "@iconscout/react-unicons";

export default function HomeProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8003/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="product_cards">
      {products.map((product) => (
        <div key={product._id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                {product.category}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                LKR {product.price}
              </Card.Subtitle>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
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
  );
}
