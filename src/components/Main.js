import React from "react";
import HornedBeast from "./HornedBeasts";
import hbData from "../data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Main extends React.Component {
    render() {
        return (
<Container>
    <Row xs={2} sm={3} md={4} lg={5} >
        {hbData.map(hbInfo => (
            <Col>
            <HornedBeast key={hbInfo._id} id={hbInfo._id} title={hbInfo.title} imgUrl={hbInfo.image_url} description={hbInfo.description} keyword={hbInfo.keyword} horns={hbInfo.horns}/>
                    </Col>))} 
                    </Row> 
                </Container>
                
        )
    }
}         
export default Main;
