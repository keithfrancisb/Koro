import React from 'react';
import {withRouter} from 'react-router-dom';
import {getQuestionAnswers, postAnswer} from '../util/services';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import AnswerItem from './answer_item';

class QuestionPage extends React.Component {

  constructor() {
    super();

    this.state = {
      answers: [],
      question: {},
      answer: ''
    };
  }
  componentDidMount() {
    // fetch the answers
    const {questionId} = this.props.match.params;
    getQuestionAnswers(questionId)
    .json(({question, answers}) => this.setState({answers, question}));
  }
  
  updateAnswer(e) {
    this.setState({answer: e.currentTarget.value});
  }
  
  // '/question/:userId/:questionId'
  submitAnswer() {
    const {userId, questionId} = this.props.match.params;
    const {answer, answers} = this.state;
    postAnswer(userId, questionId, answer)
      .json(data => {
        debugger
        this.setState({answers: [data, ...answers]})
      });
  }
  
  render() {
    const { question, answer, answers } = this.state;

    const items = answers.map(answer => (
      <AnswerItem key={answer.answer_id} answer={answer}/>
    ));
    return (
      <>
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
        
        <Form>
          <Form.Label>Answer.</Form.Label>
          <Form.Control value={answer} as="textarea" rows="5" onChange={(e) => this.updateAnswer(e)}/>
          <Button onClick={() => this.submitAnswer()} variant="primary" type="submit">Submit</Button>
        </Form>

        <Row>
          <Col lg={9}>
              <Card>
                  {items}
              </Card>
          </Col>
        </Row>        
      </>
    );
  }

}

export default withRouter(QuestionPage);