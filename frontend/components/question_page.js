import React from 'react';
import {withRouter} from 'react-router-dom';
import {getQuestionAnswers} from '../util/services';

class QuestionPage extends React.Component {

  constructor() {
    super();

    this.state = {
      answers: null
    };
  }

  componentDidMount() {
    // fetch the answers
    const {id} = this.props.match.params;
    getQuestionAnswers(id)
      .json(answers => this.setState({answers}));
  }

  render() {
    return (
      <>
        {`I am question no. ${this.props.match.params.id}`}
      </>
    );
  }

}

export default withRouter(QuestionPage);