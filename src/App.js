import React, { Component } from 'react'
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Person from'./Components/Person'
import TimeInterval from './Components/TimeInterval';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Steper from './Components/Steper';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      show:true
       
    }
  }
  handleShow=() => {
    this.setState({
      show:!this.state.show
    })
  
  }
  
  render() {
    return (
     
<Container>
    
<Row>
<Col md={4} style={{marginTop:50,marginLeft:20}}>
<Steper/>
</Col>
<Col  md={4}>
<div style={{textAlign:'center'}}>
        
       
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=>this.handleShow()}>
        {this.state.show?"Hide":"Show"}<VisibilityIcon />
        </IconButton>
        {this.state.show?<div><Person />  <TimeInterval /> </div>: ""}
        
      </div>
</Col>
    <Col  md={4} style={{marginLeft:900,marginTop:-400}}>
    <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"></img>
    </Col>
  </Row>
  </Container>

      
      
    )
  }
}

