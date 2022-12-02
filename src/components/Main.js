import React from "react";
import HornedBeast from "./HornedBeasts";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: this.props.beastData,
        }
    }
    handleChange = (e) => {
    let displayData = "";
    console.log(e.target.value);
    if(e.target.value === '1') {
    displayData = this.props.beastData.filter(beastData => beastData.horns === 1)
    } else if (e.target.value === '2') {
    displayData = this.props.beastData.filter(beastData => beastData.horns === 2)
    } else if (e.target.value === '3') {
    displayData = this.props.beastData.filter(beastData => beastData.horns === 3)
    } else if (e.target.value === '100') {
    displayData = this.props.beastData.filter(beastData => beastData.horns > 3)
    } else {
    displayData = this.props.beastData;
}
this.setState({ allData: displayData });
}
render() {
    return (
        <>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Filter Beasts:</Form.Label>
        <Form.Control as='select' onChange={this.handleChange}>
          <option value='' >Select Beast by amount of Horns</option>
          <option value='1' >1</option>
          <option value='2' >2</option>
          <option value='3' >3</option>
          <option value='100' >100</option>
        </Form.Control>
      </Form.Group>
      </Form>
            <Container>
                <Col> 
                <Row xs={2} sm={3} md={4} lg={5} >
                    {this.state.allData.map(hbInfo => (
                        <HornedBeast key={hbInfo._id}
                            id={hbInfo._id}
                            title={hbInfo.title}
                            imgUrl={hbInfo.image_url}
                            description={hbInfo.description}
                            keyword={hbInfo.keyword}
                            horns={hbInfo.horns}
                            handleOpenModal={this.props.handleOpenModal}
                    handlModalClosed={this.props.handlModalClose}
                    isModalshown={this.props.isModalshown} />

                            ))}
                </Row>
                </Col>
            </Container>
        </>


            )
                    }
                }

export default Main;  
