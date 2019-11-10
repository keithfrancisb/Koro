import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import {getQuestions} from '../util/services';
import QuestionItem from './question_item';

class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {
            questions : []
        };
    }

    componentDidMount() {
        getQuestions().json((questions)=>{
            this.setState({questions});
        })
    }

    render(){
        const{questions} = this.state
        const items = questions.map((question)=>{
            return < QuestionItem key={question.questionID} question={question} />
        });

        return (
            <Container>
                <Card bg="dark">
                    {items}
                </Card>
            </Container>
        );
    }
}

export default HomePage;
