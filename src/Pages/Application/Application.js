import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Application = ({ details }) => {

    console.log(details)

    // const { fname, lname, email, age, gender, date, YourAddress, yourZip, YourNumber, bname, gst, tin, BusienssNumber, BusinessEmail, BusinessAddress, BZip, LoanAmount, InterestRate, LoanTenure } = details
    // <h1>Application</h1>
    // <p>{details.fname}</p>
    // <p>{details.lname}</p>
    // <p>{details.email}</p>
    // <p>{details.age}</p>
    // <p>{details.gender}</p>
    // <p>{details.date}</p>
    // <p>{details.YourAddress}</p>
    // <p>{details.yourZip}</p>
    // <p>{details.YourNumber}</p>
    // <p>{details.bname}</p>
    // <p>{details.gst}</p>
    // <p>{details.tin}</p>
    // <p>{details.BusinessNumber}</p>
    // <p>{details.BusinessEmail}</p>
    // <p>{details.BusinessAddress}</p>
    // <p>{details.BZip}</p>
    // <p>{details.LoanAmount}</p>
    // <p>{details.InterestRate}</p>
    // <p>{details.LoanTenure}</p>
    return (
        <div>
            <h1 className='text-center'>Your application</h1>
            {/* <Row>
                <Col>Your First Name:</Col>
                <Col>{details.fname}</Col>
            </Row> */}
        </div>
    );
};

export default Application;