import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Row,
  Col,
  Form
} from 'reactstrap';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    const { Data: { email, displayName, phone, location = [], activeZone, service } } = this.props;
    const { modal } = this.state;
    //
    return (
      <React.Fragment>
        <Button
          color="link"
          title=""
          type="button"
          onClick={() => this.toggle()}
        >
          <i className="tim-icons icon-pencil" />
        </Button>
        {modal && (<Modal isOpen={modal} className={this.props.clasName}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            <Form > 
              <Row>
                <Col className="pr-md-1" md="8">
                  <FormGroup>
                    <label>User name</label>
                    <Input
                      placeholder={email}
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col className="pl-md-1" md="4">
                  <FormGroup>
                    <label htmlFor="exampleInputEmail1">
                      Email address
                          </label>
                    <Input placeholder={email} type="email" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-md-1" md="6">
                  <FormGroup>
                    <label>Name</label>
                    <Input
                      placeholder={displayName}
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col className="pl-md-1" md="6">
                  <FormGroup>
                    <label>Phone number</label>
                    <Input
                      placeholder={phone}
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <FormGroup>
                    <label>Address</label>
                    <Input
                      placeholder={location.address}
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pr-md-1" md="4">
                  <FormGroup>
                    <label>Active Zone</label>
                    <Input
                      placeholder={activeZone}
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col className="px-md-1" md="4">
                  <FormGroup>
                    <label>Service</label>
                    <Input
                      placeholder={service}
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col className="pl-md-1" md="4">
                  <FormGroup>
                    <label>Postal Code</label>
                    <Input placeholder="ZIP Code" type="number" />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Update Info</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>)}
      </React.Fragment>
    );
  }
}

export default EditProfile;