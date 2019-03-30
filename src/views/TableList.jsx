import React from "react";
import EditProfile from "./EditProfile"
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  Button 
} from "reactstrap";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
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
                    <EditProfile/>
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
                        <tr>
                          <td>
                          John Lennon
                          </td>
                          <td>
                            Ho Chi Minh city
                          </td>
                          <td>
                            Web developer, software engineering
                          </td>
                          <td>4.5</td>
                          <td className="td-actions text-center">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"  
                              onClick={this.toggle}                                                                                       
                            >
                              <i className="tim-icons icon-pencil" />   
                              <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit ITer Profile"/>                                                         
                            </Button>                           
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                          John Lennon
                          </td>
                          <td>
                            Ho Chi Minh city
                          </td>
                          <td>
                            Web developer, software engineering
                          </td>
                          <td>4.5</td>
                          <td className="td-actions text-center">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"  
                              onClick={this.toggle}                                                                                       
                            >
                              <i className="tim-icons icon-pencil" />   
                              <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit ITer Profile"/>                                                         
                            </Button>                           
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                          John Lennon
                          </td>
                          <td>
                            Ho Chi Minh city
                          </td>
                          <td>
                            Web developer, software engineering
                          </td>
                          <td>4.5</td>
                          <td className="td-actions text-center">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"  
                              onClick={this.toggle}                                                                                       
                            >
                              <i className="tim-icons icon-pencil" />   
                              <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit ITer Profile"/>                                                         
                            </Button>                           
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                          John Lennon
                          </td>
                          <td>
                            Ho Chi Minh city
                          </td>
                          <td>
                            Web developer, software engineering
                          </td>
                          <td>4.5</td>
                          <td className="td-actions text-center">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"  
                              onClick={this.toggle}                                                                                       
                            >
                              <i className="tim-icons icon-pencil" />   
                              <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit ITer Profile"/>                                                         
                            </Button>                           
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                          John Lennon
                          </td>
                          <td>
                            Ho Chi Minh city
                          </td>
                          <td>
                            Web developer, software engineering
                          </td>
                          <td>4.5</td>
                          <td className="td-actions text-center">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"  
                              onClick={this.toggle}                                                                                       
                            >
                              <i className="tim-icons icon-pencil" />   
                              <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit ITer Profile"/>                                                         
                            </Button>                           
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                          John Lennon
                          </td>
                          <td>
                            Ho Chi Minh city
                          </td>
                          <td>
                            Web developer, software engineering
                          </td>
                          <td>4.5</td>
                          <td className="td-actions text-center">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"  
                              onClick={this.toggle}                                                                                       
                            >
                              <i className="tim-icons icon-pencil" />   
                              <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit ITer Profile"/>                                                         
                            </Button>                           
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                          John Lennon
                          </td>
                          <td>
                            Ho Chi Minh city
                          </td>
                          <td>
                            Web developer, software engineering
                          </td>
                          <td>4.5</td>
                          <td className="td-actions text-center">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"  
                              onClick={this.toggle}                                                                                       
                            >
                              <i className="tim-icons icon-pencil" />   
                              <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit ITer Profile"/>                                                         
                            </Button>                           
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                          John Lennon
                          </td>
                          <td>
                            Ho Chi Minh city
                          </td>
                          <td>
                            Web developer, software engineering
                          </td>
                          <td>4.5</td>
                          <td className="td-actions text-center">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"  
                              onClick={this.toggle}                                                                                       
                            >
                              <i className="tim-icons icon-pencil" />   
                              <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit ITer Profile"/>                                                         
                            </Button>                           
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                          John Lennon
                          </td>
                          <td>
                            Ho Chi Minh city
                          </td>
                          <td>
                            Web developer, software engineering
                          </td>
                          <td>4.5</td>
                          <td className="td-actions text-center">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"  
                              onClick={this.toggle}                                                                                       
                            >
                              <i className="tim-icons icon-pencil" />   
                              <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit ITer Profile"/>                                                         
                            </Button>                           
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                          John Lennon
                          </td>
                          <td>
                            Ho Chi Minh city
                          </td>
                          <td>
                            Web developer, software engineering
                          </td>
                          <td>4.5</td>
                          <td className="td-actions text-center">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"  
                              onClick={this.toggle}                                                                                       
                            >
                              <i className="tim-icons icon-pencil" />   
                              <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit ITer Profile"/>                                                         
                            </Button>                           
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
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
                        <tr>
                          <td>Dakota Rice</td>
                          <td>Niger</td>
                          <td className="text-center">5</td>
                          <td className="td-actions text-center">
                              <Button
                                color="link"
                                id="tooltip636901683"
                                title=""
                                type="button"
                                onClick={this.toggle}
                              >
                                <i className="tim-icons icon-pencil" />  
                                <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit Client Profile"/>                              
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip636901683"
                                placement="right"
                              >
                                Edit Task
                              </UncontrolledTooltip>                              
                          </td>
                        </tr>
                        <tr>
                          <td>Minerva Hooper</td>
                          <td>Curaçao</td>
                          <td className="text-center">5</td>
                          <td className="td-actions text-center">
                              <Button
                                color="link"
                                id="tooltip636901683"
                                title=""
                                type="button"
                                onClick={this.toggle}
                              >
                                <i className="tim-icons icon-pencil" />  
                                <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit Client Profile"/>                              
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip636901683"
                                placement="right"
                              >
                                Edit Task
                              </UncontrolledTooltip>                              
                          </td>
                        </tr>
                        <tr>
                          <td>Sage Rodriguez</td>
                          <td>Netherlands</td>
                          <td className="text-center">5</td>
                          <td className="td-actions text-center">
                              <Button
                                color="link"
                                id="tooltip636901683"
                                title=""
                                type="button"
                                onClick={this.toggle}
                              >
                                <i className="tim-icons icon-pencil" />  
                                <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit Client Profile"/>                              
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip636901683"
                                placement="right"
                              >
                                Edit Task
                              </UncontrolledTooltip>                              
                          </td>
                        </tr>
                        <tr>
                          <td>Philip Chaney</td>
                          <td>Korea, South</td>
                          <td className="text-center">5</td>
                          <td className="td-actions text-center">
                              <Button
                                color="link"
                                id="tooltip636901683"
                                title=""
                                type="button"
                                onClick={this.toggle}
                              >
                                <i className="tim-icons icon-pencil" />  
                                <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit Client Profile"/>                              
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip636901683"
                                placement="right"
                              >
                                Edit Task
                              </UncontrolledTooltip>                              
                          </td>
                        </tr>
                        <tr>
                          <td>Doris Greene</td>
                          <td>Malawi</td>
                          <td className="text-center">5</td>
                          <td className="td-actions text-center">
                              <Button
                                color="link"
                                id="tooltip636901683"
                                title=""
                                type="button"
                                onClick={this.toggle}
                              >
                                <i className="tim-icons icon-pencil" />  
                                <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit Client Profile"/>                              
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip636901683"
                                placement="right"
                              >
                                Edit Task
                              </UncontrolledTooltip>                              
                          </td>
                        </tr>
                        <tr>
                          <td>Mason Porter</td>
                          <td>Chile</td>
                          <td className="text-center">5</td>
                          <td className="td-actions text-center">
                              <Button
                                color="link"
                                id="tooltip636901683"
                                title=""
                                type="button"
                                onClick={this.toggle}
                              >
                                <i className="tim-icons icon-pencil" />  
                                <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit Client Profile"/>                              
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip636901683"
                                placement="right"
                              >
                                Edit Task
                              </UncontrolledTooltip>                              
                          </td>
                        </tr>
                        <tr>
                          <td>Jon Porter</td>
                          <td>Portugal</td>
                          <td className="text-center">5</td>
                          <td className="td-actions text-center">
                              <Button
                                color="link"
                                id="tooltip636901683"
                                title=""
                                type="button"
                                onClick={this.toggle}
                              >
                                <i className="tim-icons icon-pencil" />  
                                <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit Client Profile"/>                              
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip636901683"
                                placement="right"
                              >
                                Edit Task
                              </UncontrolledTooltip>                              
                          </td>
                        </tr>
                        <tr>
                          <td>Jon Porter</td>
                          <td>Portugal</td>
                          <td className="text-center">5</td>
                          <td className="td-actions text-center">
                              <Button
                                color="link"
                                id="tooltip636901683"
                                title=""
                                type="button"
                                onClick={this.toggle}
                              >
                                <i className="tim-icons icon-pencil" />  
                                <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit Client Profile"/>                              
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip636901683"
                                placement="right"
                              >
                                Edit Task
                              </UncontrolledTooltip>                              
                          </td>
                        </tr>
                        <tr>
                          <td>Jon Porter</td>
                          <td>Portugal</td>
                          <td className="text-center">5</td>
                          <td className="td-actions text-center">
                              <Button
                                color="link"
                                id="tooltip636901683"
                                title=""
                                type="button"
                                onClick={this.toggle}
                              >
                                <i className="tim-icons icon-pencil" />  
                                <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit Client Profile"/>                              
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip636901683"
                                placement="right"
                              >
                                Edit Task
                              </UncontrolledTooltip>                              
                          </td>
                        </tr>
                        <tr>
                          <td>Jon Porter</td>
                          <td>Portugal</td>
                          <td className="text-center">5</td>
                          <td className="td-actions text-center">
                              <Button
                                color="link"
                                id="tooltip636901683"
                                title=""
                                type="button"
                                onClick={this.toggle}
                              >
                                <i className="tim-icons icon-pencil" />  
                                <EditProfile modal={this.state.modal} onClose={this.toggle} title="Edit Client Profile"/>                              
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip636901683"
                                placement="right"
                              >
                                Edit Task
                              </UncontrolledTooltip>                              
                          </td>
                        </tr>
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
