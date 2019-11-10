import React from 'react';
import Container from 'react-bootstrap/Container';
import {getQuestions} from '../util/services';
import QuestionItem from './questionItems';

class HomePage extends React.Component {

    constructor(){
        super();
        this.state = {
            questions : []
        }
    }

    componentDidMount(){
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
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p>
                            Left side small
                        </p>
                    </div>
                    <div className="col-md">
                        <ul>
                            {items}
                        </ul>
                    </div>
                    <div className="col-sm">
                        <p>
                            Right side small
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}



export default HomePage;
