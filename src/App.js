import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css"
import data from "./data.json";
import SelectedBeast from "./components/SelectedBeast"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
      selectedBeast: {},
      isModalShown: false
    }; 
  }
  handleOpenModal = (name) => {
    let selectedBeast = data.find(beast => beast.title === name)
    this.setState({ 
      isModalShown: true,
      selectedBeast: selectedBeast
    });
  }

  handleClosedModal = () => {
    this.setState({ isModalShown: false });
  }
  render() {

    return (
      <>
        <Header />
        <SelectedBeast isModalShown={this.state.isModalShown} 
        handleClosedModal={this.handleClosedModal} selectedBeast= {this.state.selectedBeast}/>
        <Main beastData={this.state.beastData} handleOpenModal={this.handleOpenModal} handleClosedModal={this.handleClosedModal} />
        <Footer />
      </>
    );
  }
}

export default App;
