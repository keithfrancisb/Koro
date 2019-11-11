import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

const QuestionItem = ({question}) =>(
    <Row className="justify-content-lg-center m-3">
        <Col lg={9}>
            <Link to={`/question/${question.question_id}`}>
                <Card>
                    <Card.Header>
                        <span className="font-weight-bolder">
                            {`${question.email} asks...`}
                        </span>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {question.question}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    </Row>
);

export default QuestionItem;

