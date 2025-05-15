import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useVerifyPaymentOTPMutation } from '../slices/ordersApiSlice';
import { toast } from 'react-toastify';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';

const OtpVerificationPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [verifyOTP, { isLoading }] = useVerifyPaymentOTPMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!orderId) {
        toast.error('Order ID is missing');
        return;
      }
      const res = await verifyOTP({ orderId, otp }).unwrap();
      toast.success('Payment successful!');
      navigate(`/order/${orderId}/success`);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <Card className="p-4 mt-5">
        <h2 className="text-center mb-4">OTP Verification</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="otp">
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              required
            />
            <Form.Text className="text-muted">
              Please enter the OTP sent to your email
            </Form.Text>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button 
              type="submit" 
              variant="success" 
              disabled={isLoading || otp.length !== 6}
            >
              {isLoading ? 'Verifying...' : 'Verify OTP'}
            </Button>
          </div>
        </Form>
      </Card>
    </FormContainer>
  );
};

export default OtpVerificationPage;
