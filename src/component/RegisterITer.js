import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import './RegisterITer.css';

class RegisterITer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeZone: "",
      name: "",
      email: "",
      password: "",
      phone: 0,
      hardware: 0,
      software: 0,
      typeJob: "",
      address: "",
      service: ["printer", "internet"],
      iter: {}
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let { name, email, password, activeZone, phone, address, hardware, software, service } = this.state;
    let credentials = {
      name: name,
      email: email,
      password: password,
      activeZone: activeZone,
      phone: phone,
      address: address,
      hardware: hardware,
      software: software,
      service: service
    }

    await axios.post('https://hire-find.herokuapp.com/api/iter/register', credentials)
    .then(({ data }) => {
      this.setState({
        iter: data.iter
      })
      this.props.history.push('/')
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  _renderInput() {
    switch (this.state.typeJob) {
      case "1":
        return (
          <div>
            <Label>Năm kinh nghiệm phần cứng</Label>
            <Input
              type="number"
              name="hardware"
              id="hardware"
              value={this.state.hardware}
              onChange={this.handleChange} >
            </Input>
          </div>
        );

      case "2":
        return (
          <div>
            <Label>Năm kinh nghiệm phần mềm</Label>
            <Input
              type="number"
              name="software"
              id="software"
              value={this.state.software}
              onChange={this.handleChange} >
            </Input>
          </div>
        );

      case "3":
        return (
          <div>
            <Label>Năm kinh nghiệm phần cứng</Label>
            <Input
              type="number"
              name="hardware"
              id="hardware"
              value={this.state.hardware}
              onChange={this.handleChange} >
            </Input>
            <Label>Năm kinh nghiệm phần mềm</Label>
            <Input
              type="number"
              name="software"
              id="software"
              value={this.state.software}
              onChange={this.handleChange} >
            </Input>
          </div>
        );
      default:
        break;
    }
  }

  render() {
    return (
      <div className="background" >
        <Form className="Form" onSubmit={this.handleSubmit} >
          <FormGroup>
            <Label>Khu Vực Đăng Kí</Label>
            <Input type="select"
              name="activeZone"
              id="select"
              value={this.state.activeZone}
              onChange={this.handleChange}>
              <option>Tp. Hồ Chí Minh</option>
              <option>Hà Nội</option>
              <option>Đà Nẵng</option>
              <option>Phú Yên</option>
              <option>Bình Định</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Họ Tên</Label>
            <Input type="name"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Địa Chỉ</Label>
            <Input type="string"
              name="address"
              id="address"
              value={this.state.address}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Mật Khẩu</Label>
            <Input type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Số Điện Thoại</Label>
            <Input type="number"
              name="phone"
              id="phone"
              value={this.state.phone}
              onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Label>Loại Công Việc Đăng Kí</Label>
            <Input type="select"
              name="typeJob"
              id="typeJob"
              value={this.state.typeJob}
              onChange={this.handleChange}>
              <option>Chọn loại công việc</option>
              <option value='1' >IT phần cứng</option>
              <option value='2' >IT phần mềm</option>
              <option value='3' >Full Stack</option>
            </Input>
            {this._renderInput()}
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              Check me out
          </Label>
          </FormGroup>
          <Input style={{ backgroundColor: 'blue', color: 'white' }} type="submit" value="Submit" ></Input>
        </Form>
      </div>
    );
  }
}
export default withRouter(RegisterITer);