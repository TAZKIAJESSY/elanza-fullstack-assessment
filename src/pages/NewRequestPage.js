import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createNewRequest } from "../store/request/actions";
import logo from "../logo.png";

const NewRequestPage = () => {
  const dispatch = useDispatch();

  const [message, set_message] = useState("");

  const [clientName, set_clientName] = useState("");
  const [careType, set_careType] = useState("household");
  const [startDate, set_startDate] = useState("");
  const [endDate, set_endDate] = useState("");
  const [extraInformation, set_extraInformation] = useState("");

  const formSubmit = (event) => {
    set_message("Successfully created your new care request! ");
    event.preventDefault();

    dispatch(
      createNewRequest({
        clientName,
        careType,
        startDate,
        endDate,
        extraInformation,
        isOpen: true,
      })
    );

    //reset after submit
    set_clientName("");
    set_careType("household");
    set_startDate("");
    set_endDate("");
    set_extraInformation("");
  };

  return (
    <div>
      <div>
        <Container>
          <Row className="justify-content-center mb-4">
            <Link to="/">
              <Image src={logo} className="logo" />
            </Link>
          </Row>
          <Row>
            <h2 className="mb-3" align="center">
              Create new care request
            </h2>
          </Row>{" "}
          <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
            <Form.Group controlId="formBasicName">
              <Form.Label>Client Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter client name"
                value={clientName}
                onChange={(event) => set_clientName(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Care Type</Form.Label>

              <Form.Control
                as="select"
                className="my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
                custom
                value={careType}
                onChange={(event) => set_careType(event.target.value)}
                required
              >
                <option value="household">Household</option>
                <option value="medical">Medical</option>
              </Form.Control>
            </Form.Group>{" "}
            <Form.Group>
              <Form.Label>Select start time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={startDate}
                onChange={(e) => {
                  set_startDate(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Select end time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={endDate}
                onChange={(e) => {
                  set_endDate(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Additional information</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                value={extraInformation}
                onChange={(event) => set_extraInformation(event.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={formSubmit}>
              Submit
            </Button>
          </Form>{" "}
        </Container>
      </div>
      <p style={{ marginTop: 20, color: "teal", fontSize: 20 }}>
        <b>{message}</b>
      </p>
    </div>
  );
};

export default NewRequestPage;
