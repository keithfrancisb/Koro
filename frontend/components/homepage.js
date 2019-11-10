import React from 'react';
import Container from 'react-bootstrap/Container';







class HomePage extends React.Component {
    render(){
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
                            Center medsize
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
