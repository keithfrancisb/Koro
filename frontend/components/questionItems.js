import React from 'react';
import Card from 'react-bootstrap/Card';

const QuestionItem = ({question}) =>(

    // <h4 >{question.question}</h4>

    <Card >
        <Card.Body>
            <Card.Title>
                {question.email}
            </Card.Title>
            <Card.Text>
                {question.question}
            </Card.Text>
        </Card.Body>
    </Card>



)
 
export default QuestionItem;

