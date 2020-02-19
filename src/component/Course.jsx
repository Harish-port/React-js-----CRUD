import React, { Component } from 'react'
import axios from 'axios';
import TableRow from './TableRow';

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = { course: [] }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/course')
            .then(response => {
                this.setState({ course: response.data });
            }).catch(function (err) {
                console.log(err);
            });
    }
    tableRow() {
        return this.state.course.map(function (object, i) {
            return <TableRow obj={object} key={i} />
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="jumbotron text-center">Course List</h3>
                    </div>
                    <div className="col-md-12">
                        <div className="table table-responsive">
                            <table className="table table-bordered table-condensed table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Duration</th>
                                        <th>Fee</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.tableRow()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Course;