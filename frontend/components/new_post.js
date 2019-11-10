import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Post(props) {
    const { showModal, toggleModal } = props;
    
    return(
        <>
            <Modal {...props} show={showModal} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        New Post!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Write new post in here(?)
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
        </>
    );
}

export default Post;