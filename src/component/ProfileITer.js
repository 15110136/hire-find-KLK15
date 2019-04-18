import React from 'react';
import {connect} from 'react-redux';
import { Form, Label, FormGroup, Input, Button} from 'reactstrap';
import './ProfileITer.css';
import {Link} from "react-router-dom";
class ProfileIter extends React.Component{
  render(){
    const { register: { credentials } } = this.props;
    return( 
      <div>
      <Form className ="formProfile" >
        <FormGroup>
          <Label className = "input" >Email: </Label>
          <Label className = "output">{credentials.email}</Label>
        </FormGroup>
        <FormGroup>
          <Label className = "input" >Họ Tên: </Label>
          <Label className = "output">{credentials.name}</Label>
        </FormGroup>
        <FormGroup>
          <Label className = "input">Khu Vực đã đăng kí: </Label>
          <Label className = "output">{credentials.activeZone}</Label>
        </FormGroup>
        <FormGroup>
          <Label className = "input">Phone: </Label>
          <Label className = "output">{credentials.phone}</Label>
        </FormGroup>
        <FormGroup>
          <Label className = "input">Địa chỉ: </Label>
          <Label className = "output">{credentials.address}</Label>
        </FormGroup>
        <FormGroup>
          <Label className = "input">Dịch vụ đăng kí: </Label>
          <Label className = "output">{credentials.service}</Label>
        </FormGroup>
        <FormGroup>
          <Label className = "input">Năm kinh nghiệm: </Label>
          <Label className = "output">{credentials.exp}</Label>
        </FormGroup>
        <FormGroup className = "btn">
        <Button color = "warning" tag={Link} to ="/register" className = "btnBack">Sửa Đổi</Button>
        <Button color = "success" tag={Link} to ="/" className = "btnSubmit">Xác Nhận</Button>
        </FormGroup>
      </Form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    register: state.register
  }
}
// const MapDispatchtoProps = dispatch =>{
//   return {
//     registerITer: (credentials) => dispatch(registerITer(credentials))
//   }
// }
export default connect(mapStateToProps)(ProfileIter);