import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import './RegisterITer.css';

class RegisterITer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeZone: "",
      name: "",
      phone: 0,
      exp: 0,
      typeJob: "",
      address: "",
      service: [],
      iter: {}
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleChangeCheckbox = event => {

    let arr = this.state.service;
    arr.push(event.target.value)
    this.setState({
      service: arr
    })

  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let { name, activeZone, phone, address, exp, service } = this.state;
    let credentials = {
      name: name,
      activeZone: activeZone,
      phone: phone,
      address: address,
      exp: exp,
      service: service
    }
    await axios.post('https://hire-find.herokuapp.com/api/iter/register', credentials)
      .then(({ data }) => {
        this.setState({
          iter: data.iter
        })
        console.log(data);
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
            <FormGroup>
              <Label for="a" >Kỹ Năng</Label>
              <CustomInput
                type="checkbox"
                id="checkboxHardware1"
                name="service"
                label="Sửa Máy Tính"
                value="Sửa Máy Tính"
                onChange={this.handleChangeCheckbox} />
              <CustomInput
                type="checkbox"
                id="checkboxHardware2"
                name="service"
                label="Sửa Máy In"
                value="Sửa Máy In"
                onChange={this.handleChangeCheckbox} />
              <CustomInput
                type="checkbox"
                id="checkboxHardware3"
                name="service"
                label="Khắc Phục Mạng Trong Nhà"
                value="Khắc Phục Mạng Trong Nhà"
                onChange={this.handleChangeCheckbox} />
              <CustomInput
                type="checkbox"
                id="checkboxHardware4"
                name="service"
                label="Sửa Bo Mạch Điện Tử"
                value="Sửa Bo Mạch Điện Tử"
                onChange={this.handleChangeCheckbox} />
              <CustomInput
                type="checkbox"
                id="checkboxHardware5"
                name="service"
                label="Sửa Máy Fax"
                value="Sửa Máy Fax"
                onChange={this.handleChangeCheckbox} />
            </FormGroup>
            <Label>Năm kinh nghiệm</Label>
            <Input
              type="number"
              name="exp"
              id="exp"
              value={this.state.exp}
              onChange={this.handleChange} >
            </Input>
          </div>
        );

      case "2":
        return (
          <div>
            <FormGroup>
              <Label for="a" >Kỹ Năng</Label>
              <div>
                <CustomInput
                  type="checkbox"
                  id="checkboxSoftware1"
                  name="service"
                  label="Cài đặt phần mềm"
                  value="Cài đặt phần mềm"
                  onChange={this.handleChangeCheckbox} />
                <CustomInput
                  type="checkbox"
                  id="checkboxSoftware2"
                  name="service"
                  label="Diệt Virut"
                  value="Diệt Virut"
                  onChange={this.handleChangeCheckbox} />
                <CustomInput
                  type="checkbox"
                  id="checkboxSoftware3"
                  name="service"
                  label="Bảo trì máy tính"
                  value="Bảo trì máy tính"
                  onChange={this.handleChangeCheckbox} />
                <CustomInput
                  type="checkbox"
                  id="checkboxSoftware4"
                  name="service"
                  label="Viết Chương Trình theo yêu cầu"
                  value="Viết Chương Trình theo yêu cầu"
                  onChange={this.handleChangeCheckbox} />
                <CustomInput
                  type="checkbox"
                  id="checkboxSoftware5"
                  name="service"
                  label="Thiết Kế Quảng Cáo"
                  value="Thiết Kế Quảng Cáo"
                  onChange={this.handleChangeCheckbox} />
              </div>
            </FormGroup>
            <Label>Năm kinh nghiệm</Label>
            <Input
              type="number"
              name="exp"
              id="exp"
              value={this.state.exp}
              onChange={this.handleChange} >
            </Input>
          </div>
        );

      case "3":
        return (
          <div>
            <FormGroup>
              <Label for="a" >Kỹ Năng</Label>
              <CustomInput
                type="checkbox"
                id="checkboxFullstack1"
                name="service"
                label="Máy Tính"
                value="Máy Tính"
                onChange={this.handleChangeCheckbox} />
              <CustomInput
                type="checkbox"
                id="checkboxFullstack2"
                name="service"
                label="Máy In"
                value="Máy In"
                onChange={this.handleChangeCheckbox} />
              <CustomInput
                type="checkbox"
                id="checkboxFullstack3"
                name="service"
                label="Mạng Internet"
                value="Mạng Internet"
                onChange={this.handleChangeCheckbox} />
              <CustomInput
                type="checkbox"
                id="checkboxFullstack4"
                name="service"
                label="Mạch"
                value="Mạch"
                onChange={this.handleChangeCheckbox} />
              <CustomInput
                type="checkbox"
                id="checkboxFullstack5"
                name="service"
                label="Máy Fax"
                value="Máy Fax"
                onChange={this.handleChangeCheckbox} />
            </FormGroup>
            <Label>Năm kinh nghiệm</Label>
            <Input
              type="number"
              name="exp"
              id="exp"
              value={this.state.exp}
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
            <Label>Địa Chỉ</Label>
            <Input type="string"
              name="address"
              id="address"
              value={this.state.address}
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

          <Input style={{ backgroundColor: 'blue', color: 'white' }} type="submit" value="Submit" ></Input>
        </Form>
      </div>
    );
  }
}
export default withRouter(RegisterITer);