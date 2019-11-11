import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCurrentView, addUnReadUrlLists } from "../redux/redux";
import "../styles/styles.css";

class Input extends Component {
  // Click Button
  addURL = () => {
    const inputURL = document.getElementById("urlInput").value;
    if (inputURL !== "") this.props.setUnReadUrlLists(inputURL);
    this.props.setCurrentView("LIST");
    console.log("ADD Un Read URL");
  };

  render() {
    return (
      <div className="inputArea">
        <label>
          <input type="url" name="url" id="urlInput" />
        </label>
        <button className="btn" onClick={this.addURL}>
          ADD
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentView: state.currentView
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setCurrentView: newView => dispatch(changeCurrentView(newView)),
    setUnReadUrlLists: inputURL => dispatch(addUnReadUrlLists(inputURL))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Input);