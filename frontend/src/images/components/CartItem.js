import React, { useState } from 'react'
import Swal from 'sweetalert2';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import trash from '../images/trash.svg'
import edit from '../images/edit.svg'
import arrow_up from '../images/arrow-up.png'
import arrow_down from '../images/arrow-down.png'

const CartItem = ({ data, setCartItems, fetchCartItems }) => {

    const { _id, foodName, foodId, userId, orderedDate, quantity, unit_price, total } = data;
    const [count, setCount] = useState(0);

    const deleteItem = async (id) => {

        await Swal.fire({
            title: 'Do you want to remove this from?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Remove',
            denyButtonText: `Cancel`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Removed Item!', '', 'success')
                const data = fetch(`http://localhost:8000/api/cart/${_id}`, { method: "DELETE" })
                    .then(res => res.json());
                setCartItems(cartFoodData => cartFoodData.filter(cartFoodItem => cartFoodItem._id !== _id))


            } else if (result.isDenied) {
                Swal.fire('Item is not removed', '', 'info')
            }
        })
        fetchCartItems();
    }

    return (
        <MDBCard className="mb-3">
            <MDBCardBody>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                fluid className="rounded-3" style={{ width: "65px" }}
                                alt="Shopping item" />
                        </div>
                        <div className="ms-3">
                            <MDBTypography tag="h5">
                                {foodName}
                            </MDBTypography>
                            <p className="small mb-0">{data.foodId}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <div style={{ width: "50px" }}>
                            <MDBTypography tag="h5" className="fw-normal mb-0">
                                {quantity}
                            </MDBTypography>
                        </div>
                        <div style={{ width: "80px" }}>
                            <MDBTypography tag="h5" className="mb-0">
                                Rs.{total}
                            </MDBTypography>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                            <MDBIcon fas icon="trash-alt" />
                        </a>
                    </div>

                    <div className="d-flex flex-row align-items-center">
                        <button onClick={
                            async () => {
                                await increaseCount(_id);
                            }
                        }>
                            <img src={arrow_up} alt="SVG logo image" style={{ width: "20px" }} />
                        </button>
                    </div>

                    <div className="d-flex flex-row align-items-center">
                        <div className="ms-3">
                            <p className="small mb-0">{count}</p>
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center">
                        <button onClick={
                            async () => {
                                await decreaseCount(_id);
                            }
                        }>
                            <img src={arrow_down} alt="SVG logo image" style={{ width: "20px" }} />
                        </button>
                    </div>

                    <div className="d-flex flex-row align-items-center">
                        <button onClick={
                            async () => {
                                await deleteItem(_id);
                            }
                        }>
                            <img src={trash} alt="SVG logo image" />
                        </button>
                    </div>

                    <div className="d-flex flex-row align-items-center">
                        <button onClick={
                            async () => {
                                await deleteItem(_id);
                            }
                        }>
                            <img src={edit} alt="SVG logo image" style={{ width: "20px" }} />
                        </button>
                    </div>
                </div>
            </MDBCardBody>
        </MDBCard>
    )
}

export default CartItem
