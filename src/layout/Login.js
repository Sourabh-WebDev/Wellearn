import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

const Login = () => {

    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOTP] = useState('');
    const [showOTPField, setShowOTPField] = useState(false);

    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
    };

    const handleOTPChange = (event) => {
        setOTP(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform verification or API call with mobileNumber and otp here

        // Example: Showing OTP field after submitting mobile number
        setShowOTPField(true);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formMobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter mobile number"
                        value={mobileNumber}
                        onChange={handleMobileNumberChange}
                    />
                </Form.Group>

                {showOTPField && (
                    <Form.Group controlId="formOTP">
                        <Form.Label>OTP</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={handleOTPChange}
                        />
                    </Form.Group>
                )}

                <Button variant="primary" type="submit">
                    {showOTPField ? 'Verify OTP' : 'Send OTP'}
                </Button>
            </Form>
        </Container>
    )
}

export default Login