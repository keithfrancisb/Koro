import React from 'react';
import Container from 'react-bootstrap/Container';
import {getQuestions} from '../util/services';

class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            questions: []
        }
    }

    componentDidMount(){
        getQuestions().then((questions)=>{
            this.setState({questions});
        })
    }


    render(){

        const{questions} = this.state
        const items = questions.map((question)=>{
            return <QuestionItem question={question} />
        });
        
        return(
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <p>
                            Left side small
                        </p>
                    </div>
                    <div class="col-md">
                        <p>

                        </p>
                    </div>
                    <div class="col-sm">
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