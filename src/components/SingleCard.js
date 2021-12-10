import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleCard = (props) => {
  const { id, title, url } = props.data;
  let navigate = useNavigate();

  const openOne = (id) => {
    navigate(`/one/${id}`);
  };

  return (
    <>
      <Col md={4}>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Button
              variant="primary"
              onClick={() => {
                openOne(id);
              }}
            >
              Learn more...
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleCard;
