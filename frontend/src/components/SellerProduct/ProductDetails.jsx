import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Editproducts from './EditProducts';


function ProductDetails() {

  // const history = useHistory();
  const navigate = useNavigate();
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>My Products</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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
  );
}

export default ProductDetails;