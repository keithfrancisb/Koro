import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//
import ListGroup from 'react-bootstrap/ListGroup';
import Post from './new_post';
//

import {getQuestions} from '../util/services';
import QuestionItem from './question_item';
import Button from 'react-bootstrap/Button';

class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {
            questions : [],
            showModal : false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        getQuestions().json((questions)=>{
            this.setState({questions});
        })
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }


    render() {
        const{questions, showModal} = this.state
        const items = questions.map((question)=>{
            return < QuestionItem key={question.questionID} question={question} />
        });

        return (
            <Container>
                <Row>
                    <Col lg={3}>
                        <ListGroup>
                            <ListGroup.Item>
                                Email
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Post history
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Like rating (?)
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button onClick={this.toggleModal}>
                                    New post
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg={9}>
                        <Card bg="dark">
                            {items}
                        </Card>
                    </Col>
                </Row>
                <Post showModal={showModal} toggleModal={this.toggleModal}/>
            </Container>
        );
    }
}
export default HomePage;
