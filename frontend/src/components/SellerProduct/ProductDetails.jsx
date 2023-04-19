import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductDetails() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>My Products</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Edit</Button>
        <Button variant="primary">Delete</Button>

      </Card.Body>
    </Card>
  );
}

export default ProductDetails;