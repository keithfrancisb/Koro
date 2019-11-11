import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Post extends React.Component {

    constructor() {
        super();

        this.state = {
            question: ""
        };

    }

    updateQuestion(e) {
        this.setState({question: e.currentTarget.value});
    }

    render() {
        const { question } = this.state;
        const { showmodal, togglemodal, handlepost } = this.props;
        
        return(
            <Modal show={showmodal} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        New Post!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control as="textarea" rows="3" value={question} onChange={e => this.updateQuestion(e)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="seconday" onClick={togglemodal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handlepost(question)}>
                        Post
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default Post;