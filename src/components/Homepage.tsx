import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarToggler,MDBIcon,MDBNavbarNav,
  MDBNavbarItem,MDBNavbarLink,MDBCollapse,MDBBtn} from 'mdb-react-ui-kit';
import { message, Space } from 'antd';
import { useHistory } from 'react-router-dom';

export default function MovieHomepage() {

  const [showBasic, setShowBasic] = useState(false);
  const history = useHistory();
  
  message.config({
    top: 60,
    rtl: false
  });

  const success = () => {
    message.success('Successfully log out');
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
          <MDBNavbarBrand href='#'>Movie</MDBNavbarBrand>
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
                <MDBNavbarLink href='/movie'>MovieHome</MDBNavbarLink>
              </MDBNavbarItem>

            
              <MDBNavbarItem>
                <MDBNavbarLink href='#' tabIndex={-1} aria-disabled='true'>
                  <h6 style={{ margin: '4.6% 0%' }} onClick={() => logout()} >Logout</h6>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>


    </div>
  );
}
