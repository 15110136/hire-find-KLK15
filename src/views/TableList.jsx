import React from "react";
import EditProfile from "./EditProfile"
import axios from 'axios'
//import { Link } from 'react-router-dom'
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
// import { join } from "path";


class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      iters: [],
      clients: []
    };

  }

  componentDidMount() {
    axios.get('https://hire-find.herokuapp.com/api/all', { params: { type: 'iter' } })
      .then(res => {
        //  console.log(res);
        this.setState({
          iters: res.data.result
        });
      })

    axios.get('https://hire-find.herokuapp.com/api/all', { params: { type: 'client' } })
      .then(res => {
        // console.log(res);
        this.setState({
          clients: res.data.result
        });
      })
  }


  render() {
    const { iters, clients } = this.state;   
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">ITers list</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <thead className="text-primary">
                        <tr>
                          <th>Name</th>
                          <th>Address</th>
                          <th>Skills</th>
                          <th>Rating</th>
                          <th className="text-center">Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {iters.map((iter, index) => (
                          <tr key={iter._id}>
                            <td>
                              {iter.displayName}
                            </td>
                            <td>
                              {iter.location.address}
                            </td>
                            <td>
                              {iter.service}
                            </td>
                            <td>{iter.totalRatings}</td>
                            <td className="td-actions text-center">
                              <EditProfile Data={iter} titlfe="Edit ITer Profile" />
                            </td>
                          </tr>
                        ))
                        }
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card className="card-tasks">
                <CardHeader>
                  <CardTitle tag="h4">Client list</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Name</th>
                          <th>Address</th>
                          <th className="text-center">Rating</th>
                          <th className="text-center">Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          clients.map(client => (
                            <tr>
                              <td>{client.displayName}</td>
                              <td>{client.address}</td>
                              <td className="text-center">{client.totalRatings}</td>
                              <td className="td-actions text-center">
                                <EditProfile Data={client} title="Edit ITer Profile" />
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
