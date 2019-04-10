import React, { Component } from 'react';
import '../component/HomeITer.css';
import { Button } from 'reactstrap';
class HomeITer extends Component{
    render(){
        return(
            <div className="Main">
            <h1 className="heading-main">Connect with each other to succeed!</h1>
            <h1>Kết nối với nhau để thành công!</h1>
            <a href="/register1"><Button color="primary" >Đăng kí</Button></a>
            </div>
        );
    }
}
export default HomeITer;