import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import { useGetOrderDetailsQuery } from '../slices/ordersApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { FaCheckCircle } from 'react-icons/fa';

const OrderSuccessPage = () => {
  const { id: orderId } = useParams();
  const { data: order, isLoading, error } = useGetOrderDetailsQuery(orderId);

  // Calculate estimated delivery date (7 days from now)
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);

  if (isLoading) return <Loader />;
  if (error) return <Message variant="danger">{error?.data?.message || error.error}</Message>;

  return (
    <Row className="justify-content-center mt-5">
      <Col md={8}>
        <Card className="p-4 text-center">
          <FaCheckCircle className="text-success mx-auto" size={64} />
          <h2 className="my-4">Order Confirmed!</h2>
          <p className="mb-3">Thank you for your purchase. Your order has been successfully placed.</p>
          
          <div className="mb-4">
            <h5>Order Details</h5>
            <p className="mb-1">Order ID: {order._id}</p>
            <p className="mb-1">Total Amount: ${order.totalPrice}</p>
            <p className="mb-3">Estimated Delivery: {estimatedDelivery.toLocaleDateString()}</p>
          </div>

          <div className="mb-4">
            <h5>Shipping Address</h5>
            <p className="mb-1">{order.shippingAddress.address}</p>
            <p className="mb-1">{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
            <p className="mb-3">{order.shippingAddress.country}</p>
          </div>

          <div className="d-flex justify-content-center gap-3">
            <Link to={`/order/${orderId}`} className="btn btn-outline-primary">
              View Order Details
            </Link>
            <Link to="/" className="btn btn-outline-secondary">
              Continue Shopping
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default OrderSuccessPage;
