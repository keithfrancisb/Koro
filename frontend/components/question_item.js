import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const QuestionItem = ({question}) =>(
    <Row className="justify-content-lg-center m-3">
        <Col lg={4}>
            <Card>
                <Card.Header>{`${question.email} asks...`}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {question.question}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
);

export default QuestionItem;

