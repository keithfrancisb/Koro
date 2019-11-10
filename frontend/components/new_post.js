import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Post = (props) => {
    const { showModal, toggleModal } = props;
    debugger
    return(
        <Modal {...props} show={showModal} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>
                    New Post!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="seconday" onClick={toggleModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={toggleModal}>
                    Post
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Post;