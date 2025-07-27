import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBox, FaUsers, FaClipboardList } from 'react-icons/fa';
import Meta from '../components/Meta';

const AdminDashboardPage = () => {
  return (
    <Container className="py-3">
      <Meta title="Admin Dashboard" />
      <h1 className="mb-4">Admin Dashboard</h1>
      <Row>
        <Col md={4} className="mb-3">
          <Card as={Link} to="/admin/products" className="h-100 text-decoration-none">
            <Card.Body className="d-flex flex-column align-items-center">
              <FaBox className="mb-3" size={40} />
              <Card.Title>Products</Card.Title>
              <Card.Text>Manage products</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card as={Link} to="/admin/orders" className="h-100 text-decoration-none">
            <Card.Body className="d-flex flex-column align-items-center">
              <FaClipboardList className="mb-3" size={40} />
              <Card.Title>Orders</Card.Title>
              <Card.Text>View and manage orders</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card as={Link} to="/admin/users" className="h-100 text-decoration-none">
            <Card.Body className="d-flex flex-column align-items-center">
              <FaUsers className="mb-3" size={40} />
              <Card.Title>Users</Card.Title>
              <Card.Text>Manage users</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboardPage;
