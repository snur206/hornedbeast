import React from "react";
import Card from 'react-bootstrap/Card';
import Heart from './heart.png'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
        }
    }

    handleClick = () => {
        this.setState({ clicks: this.state.clicks + 1 });
        this.props.handleOpenModal(this.props.title)
    };

    render() {
        return (
            <>
            <Card >
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Img src={this.props.imgUrl} id={this.props.id} alt={this.props.description} onClick={()=>this.props.handleOpenModal(this.props.title)}/>
                <Card.Body>Liked: <img src={Heart} onClick={this.handleClick} alt='' height="50px" width="50px"/>{this.state.clicks}</Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                    {this.props.description}
                    Number of Horns:{this.props.horns}
                </Card.Text>
                {/* <button onClick={this.handleClick}> x: {this.state.favCount}</button> */}
            </Card>
                {/* <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt = {this.props.title} title={this.props.title} />
                <p>{this.props.description}</p>
                <p>{this.props.horns}</p> */}
            </>
        )
    }
}
export default HornedBeast;