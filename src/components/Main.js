import React from "react";
import HornedBeast from "./HornedBeasts";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends React.Component {
    render() {
        return (
            <>
                <Container>
                        <Col>
                    <Row xs={2} sm={3} md={4} lg={5} >
                            {this.props.beastData.map(hbInfo => (
                                <HornedBeast key={hbInfo._id} id={hbInfo._id} title={hbInfo.title} imgUrl={hbInfo.image_url} description={hbInfo.description} keyword={hbInfo.keyword} horns={hbInfo.horns} handleOpenModal={this.props.handleOpenModal} handlModalClosed={this.props.handlModalClosed} isModalshown={this.props.isModalshown} />

                            ))}
                    </Row>
                        </Col>
                </Container>
                            
            </>

        )
    }
}
export default Main;
