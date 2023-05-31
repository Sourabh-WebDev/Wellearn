import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Login from './Login';
import Register from './Register';

export const ModalsForLoginSingup = (props) => {

    const [active, setActive] = useState('1')

    const toggle = tab => {
        setActive(tab)
    }

    return (
        <Modal
            show={props.show}
            onHide={props.CancelAction}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <Nav variant="pills" >
                    <Nav.Item>
                        <Nav.Link
                            active={active === '1'}
                            onClick={() => {
                                toggle('1')
                            }}
                        >
                            Login
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            active={active === '2'}
                            onClick={() => {
                                toggle('2')
                            }}
                        >
                            Register
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div>
                    {
                        active === '1' ? <Login /> : <Register />
                    }
                </div>
            </Modal.Body>
        </Modal>
    )
}
