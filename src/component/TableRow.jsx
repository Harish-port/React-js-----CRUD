import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class TableRow extends Component { 
    constructor(props) {
        super(props);
        this.state = {};
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }
    onDeleteHandler() {
        const status = window.confirm("Are you sure you want to delete id" + this.props.obj.id);
        if (status) {
            axios.delete('http://localhost:3000/course/' + this.props.obj.id)
                .then(alert("successfully Deleted the Course"))
                .catch(err => { console.log(err) });
            window.location = 'http://localhost:3001';
        } else {
            return null;
        }
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.fee}</td>
                <td>{this.props.obj.duration}</td>
                <td>
                    <div className="btn-group">
                        <Link to={"/edit/" + this.props.obj.id} className="btn btn-info">
                            <span className="glyphicon glyphicon-edit"></span>
                        </Link>
                        <button className="btn btn-danger" onClick={this.onDeleteHandler}>
                            <span className="glyphicon glyphicon-trash"></span>
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}
export default TableRow;