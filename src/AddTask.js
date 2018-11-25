import React, { Component } from 'react';

class AddTask extends Component{
  constructor(props){
    super(props);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.HandleChange = this.HandleChange.bind(this);
  }

  state = {
    tasks: [
      { taskName: null }
    ]
  }


  HandleChange(e){
    console.log(this.state)
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  HandleSubmit(e){
    e.preventDefault();
    console.log(this.state)
    this.props.AddTask(this.state)
  }

  render() {
    const { addNewButtonClicked } = this.props;
    this.state.addNewButtonClicked = addNewButtonClicked
    let modalClass = ["modal"];
    
    if(this.state.addNewButtonClicked == false){
      modalClass.push("displayHide");
      return (
        null
      )
    }
    else{
      modalClass.push('fade');
      modalClass.push('show');
      modalClass.push("displayBlock");
      return (
        <div className={modalClass.join(' ')} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="false">
        <form onSubmit={this.HandleSubmit}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Add new Task</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" onClick={this.props.action}>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <label htmlFor="TASK DETAILS">Enter Task Details</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" id="taskName" placeholder="" aria-label="" aria-describedby="basic-addon1" onChange={this.HandleChange}></input>
                    </div>
                  
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.closeModal} >Close</button>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
              </div>
            </div>
            </form>
        </div>
      )
    }
  }
}

export default AddTask;