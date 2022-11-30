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
    };

    render() {
        return (
            <>
            <Card >
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Img src={this.props.imgUrl} onClick={this.handleClick} id={this.props.id} alt={this.props.description} />
                <Card.Body>Liked: <img src={Heart} onClick={this.handleClick} alt='' height="50px" width="50px"/>{this.state.clicks}</Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                    <div>{this.props.description}</div>
                    <div>Number of Horns:{this.props.horns}</div>
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