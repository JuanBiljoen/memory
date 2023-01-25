import React from "react";
//some basic inline css styling for the moda;
const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};
//adding toggle to state to toggle the modal
class Help extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false
    }
  }
//a function to change the state of the modal 
  toggle(event) {
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  }
  render() {
    //onclicks to open and close modal with the toggle function 
    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>Click on any card then try finding the matching card. Repeat untill you have chosen all the matching cards. Good luck! </p>
      </div>
      <div className="modal-footer">
        <a className="btn-flat" onClick={this.toggle}>Close</a>
      </div>
    </div>
    );
    return (
      <div>
        <a className="btn"  onClick={this.toggle}>{this.state.toggle ? 'Close modal' : 'Help'}</a>
        {modal}
      </div>
    );
  }
}

export default Help