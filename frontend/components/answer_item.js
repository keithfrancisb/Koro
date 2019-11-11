import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AnswerItem = ({answer}) =>(
    <Row className="justify-content-lg-center m-3">
        <Col lg={12}>
              <Card>
                  <Card.Header>
                      <span className="font-weight-bolder">
                          {`${answer.email} says...`}
                      </span>
                  </Card.Header>
                  <Card.Body>
                      <Card.Text>
                          {answer.answer}
                      </Card.Text>
                  </Card.Body>
              </Card>
        </Col>
    </Row>
);

export default AnswerItem;

