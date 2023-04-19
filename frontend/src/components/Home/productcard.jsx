import React from "react";
import data from "../../data/product.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function HomeProduct() {
  const products = data.products;

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
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
