import React, { useEffect, useReducer, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {

    const [key, setKey] = useState('personal');

    const initialState = {
        fname: "",
        lname: "",
        email: "",
        age: 0,
        gender: "",
        date: "",
        YourAddress: "",
        yourZip: "",
        YourNumber: "",

        bname: "",
        gst: "",
        tin: "",
        BusinessNumber: "",
        BusinessEmail: "",
        BusinessAddress: "",
        BZip: "",

        LoanAmount: "",
        InterestRate: "",
        LoanTenure: "",

    }


    const reducer = (state, action) => {
        console.log(action)
        switch (action.type) {
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    const [id, setId] = useState('')



    const submit = (event) => {
        event.preventDefault();

        fetch('http://localhost:5000/application', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(state)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setId(data.insertedId)
            })
    }

    console.log(id)
    let [details, setDetails] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/details/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id])


    console.log(details)

    return (
        <div className='w-75 mx-auto mt-5'>
            <h1 className='text-center fw-bold mb-5'>Loan Application</h1>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                defaultActiveKey="personal"
                className="mb-3 "
                variant="pills"
            >
                <Tab eventKey="personal" title="Personal Information">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your First Name" name="fname"
                                        onBlur={async (e) =>

                                            await dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        }
                                        required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Last Name" name="lname"
                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        } required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email"
                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        }
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="number" placeholder="Enter your age" name="age"
                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        }
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control type="text" placeholder="Gender" name="gender"
                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        }
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="text" placeholder="Date of Birth" name="date"
                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Your Address" name="YourAddress"
                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        }
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control type="text" placeholder="Your Zip Code" name="yourZip"
                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        }
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="text" placeholder="Your Contact Number" name="YourNumber"
                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        } />
                                </Form.Group>
                            </Col>
                        </Row>


                    </Form>
                </Tab>


                <Tab eventKey="business" title="Business Information">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Business Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Business Name" name="bname"
                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        } />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>GST No:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your GST No." name="gst"
                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Business TIN</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Business TIN" name="tin"
                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        }
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Business Contact No.</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Business Contact No." name="BusinessNumber"
                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        }
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Business Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your Business Email" name="BusinessEmail"

                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Business Address" name="BusinessAddress"

                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        }
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control type="text" placeholder="Zip" name="BZip"

                                        onBlur={(e) =>
                                            dispatch({
                                                type: "INPUT",
                                                payload: { name: e.target.name, value: e.target.value },
                                            })
                                        }
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                    </Form>
                </Tab>


                <Tab eventKey="loan" title="Loan Information">
                    <Form onSubmit={submit}>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Loan Amount</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Loan Amount" name="LoanAmount"

                                onBlur={(e) =>
                                    dispatch({
                                        type: "INPUT",
                                        payload: { name: e.target.name, value: e.target.value },
                                    })
                                }
                                required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Interest Rate</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Interest Rate" name="InterestRate"

                                onBlur={(e) =>
                                    dispatch({
                                        type: "INPUT",
                                        payload: { name: e.target.name, value: e.target.value },
                                    })
                                }
                                required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Loan Tenure</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Loan Tenure" name="LoanTenure"
                                onBlur={(e) =>
                                    dispatch({
                                        type: "INPUT",
                                        payload: { name: e.target.name, value: e.target.value },
                                    })
                                }
                                required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Tab>
            </Tabs>
            {
                id &&
                <div className='w-75 mx-auto mt-5'>
                    <h1 className='text-center fw-bold'>Your application</h1>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>First Name:</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details?.fname}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Last Name:</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details?.lname}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Email: </Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.email}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Age:</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.age}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Gender:</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.gender}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Date of Birth:</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.date}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Address</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.YourAddress}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Zip</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.yourZip}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Contact No:</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.YourNumber}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Business Name:</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.bname}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>GST:</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.gst}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Business TIN</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.tin}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Business Contact No.</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.BusinessNumber}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Business Email</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.BusinessEmail}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Business Address</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.BusinessAddress}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Business Zip:</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.BZip}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Loan Amount</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.LoanAmount}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Loan Interest</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.InterestRate}</Col>
                    </Row>
                    <Row className='gap-3'>
                        <Col className='text-info fw-bold px-3 py-2  border rounded mb-2'>Loan Tenure</Col>
                        <Col className="fw-bold  px-3 py-2 mb-2  border rounded ml-5">{details.LoanTenure}</Col>
                    </Row>
                    <h2 className='fw-bold text-primary text-center'>Thanks For Your Application</h2>
                </div>
            }


        </div>
    );
};

export default Home;