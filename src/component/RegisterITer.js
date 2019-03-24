import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
class RegisterITer extends Component{
    constructor(props){
      super(props);
      this.state = { 
        selectZone: "",
        yourName: "",
        email:"",
        password: "",
        phoneNumber: "",
        typeJob: "",

      };
    }
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
    handleSubmit = (event) =>{
      alert("You submitted!!: " +this.state.selectZone+", "
                                +this.state.yourName+", "
                                +this.state.email+", "
                                +this.state.phoneNumber+", "
                                +this.state.typeJob);
    }
    render(){
        return (
            <Form onSubmit = {this.handleSubmit} >
              <FormGroup>
                <Label>Khu Vực Đăng Kí</Label>
                 <Input type="select"
                        name="selectZone" 
                        id="select" 
                        value = {this.state.selectZone}
                        onChange = {this.handleChange}>
                  <option>Tp. Hồ Chí Minh</option>
                  <option>Hà Nội</option>
                  <option>Đà Nẵng</option>
                  <option>Phú Yên</option>
                  <option>Bình Định</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Họ Tên</Label>
                <Input  type="name" 
                        name="yourName" 
                        id="name" 
                        value = {this.state.yourName} 
                        onChange = {this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email"
                       name="email"
                       id="email"
                       value = {this.state.email}
                       onChange = {this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label>Mật Khẩu</Label>
                <Input type="password" 
                       name="password" 
                       id="password" 
                       value = {this.state.password} 
                       onChange = {this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label>Số Điện Thoại</Label>
                <Input type="number" 
                       name="phoneNumber" 
                       id="phone" 
                       value = {this.state.phoneNumber}
                       onChange = {this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label>Loại Công Việc Đăng Kí</Label>
                 <Input type="select" 
                        name="typeJob" 
                        id="select" 
                        value = {this.state.typeJob} 
                        onChange = {this.handleChange}>
                  <option>IT phần cứng</option>
                  <option>IT phần mềm</option>
                  <option>Full Stack</option>
                </Input>
              </FormGroup>
              <Input style={{ backgroundColor: 'blue', color: 'white' }} type = "submit" value = "Submit"></Input>
            </Form>
          );
    }
}
export default RegisterITer;