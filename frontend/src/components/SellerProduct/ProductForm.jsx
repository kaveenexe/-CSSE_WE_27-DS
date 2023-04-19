import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function addproduct() {
  return (
    <div>
      <Form>
        <Form.Select aria-label="Default select example">
          <option>Select category</option>
          <option value="1">Beauty</option>
          <option value="2">Oil</option>
          <option value="3">Herbal hair products</option>
          <option value="4">Other</option>
        </Form.Select>

        <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter the title" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter the description" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter price" />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Add image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button type = "submit">Confirm</Button>

      </Form>
    </div>
  );
}
