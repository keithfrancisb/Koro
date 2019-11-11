import React from 'react';
import {withRouter} from 'react-router-dom';
import {getQuestionAnswers} from '../util/services';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

class QuestionPage extends React.Component {

  constructor() {
    super();

    this.state = {
      answers: [],
      question: {}
    };
  }

  componentDidMount() {
    // fetch the answers
    const {id} = this.props.match.params;
    getQuestionAnswers(id)
      .json(({question, answers}) => this.setState({answers, question}));
  }

  render() {
    const { question } = this.state;
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
      </>
    );
  }

}

export default withRouter(QuestionPage);