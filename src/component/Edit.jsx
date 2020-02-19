import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      duration: '',
      fee: ''
    };

  }
  componentDidMount() {
    axios.get('http://localhost:3000/course/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          fee: response.data.fee,
          duration: response.data.duration
        })
      }).catch(err => {
        console.log(err);
      });
  }
  onChangeId=(e)=> {
    this.setState({
      id: e.target.value
    });
  }
  onChangeName=(e)=> {
    this.setState({
      name: e.target.value
    });
  }
  onChangeDuration=(e)=> {
    this.setState({
      duration: e.target.value
    });
  }
  onChangeFee=(e)=> {
    this.setState({
      fee: e.target.value
    })
  }
  onUpdate=(e) =>{
    e.preventDefault();
    const body = {
      id: this.state.id,
      name: this.state.name,
      duration: this.state.duration,
      fee: this.state.fee
    };
    console.log(body);

    //post the data to service
    axios.put('http://localhost:3000/course/' + this.props.match.params.id, body)
      .then(alert("Successfully Updated the Course"))
      .catch(err => {
        console.log(err)
      });
    this.props.history.push('/');
    window.location = 'http://localhost:3001';
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="jumbotron text-center">Edit Course </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 well">
            <form onSubmit={this.onUpdate}>
              <div className="form-group">
                <label>ID</label>
                <input type="number" className="form-control" readOnly value={this.state.id} onChange={this.onChangeId} />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
              </div>
              <div className="form-group">
                <label>Duration</label>
                <input type="text" className="form-control" value={this.state.duration} onChange={this.onChangeDuration} />
              </div>
              <div className="form-group">
                <label>Fee</label>
                <input type="number" className="form-control" value={this.state.fee} onChange={this.onChangeFee} />
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-info" value="Edit New Course" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;