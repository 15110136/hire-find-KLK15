import React from 'react';
import ProfileITer from '../component/ProfileITer';

export default class Profile extends React.Component{
  render(){
    return(
      <ProfileITer props = {this.props}/>
    );
  }
}