import Alert from "react-bootstrap/Alert";
import data from "../../data/order.json";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/esm/Button";

export default function customerOrder() {
  const order = data.order;
  return (
    <div>
      {order.map((order) => (
        <div key={order._id}>
          <Alert variant="secondary" className="d-flex justify-content-between">
            <div>
            {order.productName} - {order.orderedDate} -
            <Badge bg="info"> {order.status}</Badge>
            </div>
            <div className="text-end">
              <Button className="text-right" href="/tracking">
                track
              </Button>
            </div>
          </Alert>
        </div>
      ))}
    </div>
  );
}
