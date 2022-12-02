import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

class SelectedBeast extends React.Component {
    render() {
        return (
            <Modal show={this.props.isModalShown} onHide={this.props.handleClosedModal}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body >
                        <Image fluid src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.alt} />
                        {this.props.selectedBeast.description} Number of Horns{this.props.selectedBeast.horns}
                    </Modal.Body>
                    <Modal.Footer> <Button onClick={this.props.handleClosedModal}> Close</Button></Modal.Footer>

                </Modal.Dialog>
            </Modal>

        )
    }
}

export default SelectedBeast








