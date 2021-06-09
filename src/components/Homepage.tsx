import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { message, Space } from 'antd';
import { useHistory } from 'react-router-dom';



export default function Homepage() {
  const [showBasic, setShowBasic] = useState(false);
  const history = useHistory();

  message.config({
    top: 60,
    rtl:false
  });

  const success = () => {
    message.success('You have been successfully loggeg out');
  };

  function logout() {
    localStorage.clear();
    success();
    history.push('/')
  }
  window.onload = function () {
    const token = localStorage.getItem('login');
    if (token) 
          history.push('/homepage')
    else 
          history.push('/')
  };



  return (
    <div>
      <MDBNavbar sticky={true} expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink  href='#' tabIndex={-1} aria-disabled='true'>
                  <h6 style={{margin:'4.6% 0%'}} onClick={() => logout()} >Logout</h6>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <Form style={{
              display: "grid",
              width: "40%",
              gridTemplateColumns: "65% 35%"
            }} inline>
              <FormControl type='text' placeholder='Search'  className='mr-sm-1' />
              <Button type='submit' style={{margin:'0 auto'}} >Submit</Button>
            </Form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
