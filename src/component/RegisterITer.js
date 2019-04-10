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
      hardware: 0,
      software: 0,
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

  handleSubmit = async (event) => {
    event.preventDefault();
    let { name, email, password, activeZone, phone, address, hardware, software, service } = this.state;
    let credentials = {
      name: name,
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
            <FormGroup>
              <Label for="a" >Kỹ Năng Chính</Label>
              <div>
                <CustomInput
                  type="radio"
                  id="radio1"
                  name="service"
                  label="Sửa Máy Tính"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radio2"
                  name="service"
                  label="Sửa Máy In"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radio3"
                  name="service"
                  label="Khắc Phục Mạng Trong Nhà"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radio4"
                  name="service"
                  label="Sửa Bo Mạch Điện Tử"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radio5"
                  name="service"
                  label="Sửa Máy Fax"
                  value={this.state.service}
                  onChange={this.handleChange} />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="b" >Kỹ Năng 1</Label>
              <div>
                <CustomInput
                  type="radio"
                  id="radio11"
                  name="service"
                  label="Sửa Máy Tính"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radio22"
                  name="service"
                  label="Sửa Máy In"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radio33"
                  name="service"
                  label="Khắc Phục Mạng Trong Nhà"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radio44"
                  name="service"
                  label="Sửa Bo Mạch Điện Tử"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radio55"
                  name="service"
                  label="Sửa Máy Fax"
                  value={this.state.service}
                  onChange={this.handleChange} />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="c" >Kỹ Năng 2</Label>
              <div>
                <CustomInput
                  type="radio"
                  id="radio111"
                  name="service"
                  label="Sửa Máy Tính"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radio222"
                  name="service"
                  label="Sửa Máy In"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radio333"
                  name="service"
                  label="Khắc Phục Mạng Trong Nhà"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radio444"
                  name="service"
                  label="Sửa Bo Mạch Điện Tử"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radio555"
                  name="service"
                  label="Sửa Máy Fax"
                  value={this.state.service}
                  onChange={this.handleChange} />
              </div>
            </FormGroup>
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
            <FormGroup>
              <Label for="a" >Kỹ Năng Chính</Label>
              <div>
                <CustomInput
                  type="radio"
                  id="radioSoftware1"
                  name="service"
                  label="Cài đặt phần mềm"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radioSoftware2"
                  name="service"
                  label="Diệt Virut"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radioSoftware3"
                  name="service"
                  label="Bảo trì máy tính"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radioSoftware4"
                  name="service"
                  label="Viết Chương Trình theo yêu cầu"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radioSoftware5"
                  name="service"
                  label="Thiết Kế Quảng Cáo"
                  value={this.state.service}
                  onChange={this.handleChange} />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="b" >Kỹ Năng 1</Label>
              <div>
                <CustomInput
                  type="radio"
                  id="radioSoftware11"
                  name="service"
                  label="Cài đặt phần mềm"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radioSoftware22"
                  name="service"
                  label="Diệt Virut"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radioSoftware33"
                  name="service"
                  label="Bảo trì máy tính"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radioSoftware44"
                  name="service"
                  label="Viết Chương Trình theo yêu cầu"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radioSoftware55"
                  name="service"
                  label="Thiết Kế Quảng Cáo"
                  value={this.state.service}
                  onChange={this.handleChange} />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="c" >Kỹ Năng 2</Label>
              <div>
                <CustomInput
                  type="radio"
                  id="radioSoftware111"
                  name="service"
                  label="Cài đặt phần mềm"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radioSoftware222"
                  name="service"
                  label="Diệt Virut"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radioSoftware333"
                  name="service"
                  label="Bảo trì máy tính"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radioSoftware444"
                  name="service"
                  label="Viết Chương Trình theo yêu cầu"
                  value={this.state.service}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="radioSoftware555"
                  name="service"
                  label="Thiết Kế Quảng Cáo"
                  value={this.state.service}
                  onChange={this.handleChange} />
              </div>
            </FormGroup>
          
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
          {/* <FormGroup>
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
          </FormGroup> */}
           <FormGroup>
              <Label >Loại Kỹ Năng</Label>
              <div>
                <CustomInput
                  type="radio"
                  id="skill"
                  name="hardware"
                  label="Phần Cứng"
                  value={this.state.hardware}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="skill2"
                  name="software"
                  label="Phần Mềm"
                  value={this.state.software}
                  onChange={this.handleChange} />
                <CustomInput
                  type="radio"
                  id="skill3"
                  name="hardware"
                  label="Full Stack"
                  value={this.state.hardware}
                  onChange={this.handleChange} />
              </div>
            </FormGroup>
          <Input style={{ backgroundColor: 'blue', color: 'white' }} type="submit" value="Submit" ></Input>
        </Form>
      </div>
    );
  }
}
export default withRouter(RegisterITer);