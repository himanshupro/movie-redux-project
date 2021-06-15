import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { selectForm } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { message, Button, Space } from 'antd';
import { useHistory, Link } from 'react-router-dom';
import '../css/login.css';
import '../css/mainPage.css';
import { login } from '../services/userServices';
import React from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [validator, setValidator] = useState(false); 
  const [inputScreen, setInputScreen] = useState('credentials');

  message.config({
    top: 60,
    rtl:false
  });

  const success = () => {
    message.success('You have been successfully logged in');
  };
  
  const handleLogin = (e: any) => {
    e.preventDefault();
    const data:any= {
      email,
      password,
    };
    login(data).then((res: any) => {
      console.log('res.data  ', res.data);

      if (res.data.message === 'Login SuccessFull') {
        success()
        localStorage.setItem('login', res.data.token);
        history.push('/homepage');
      }
    });
  };

  const dispatch = useDispatch();

  return (
    <div>
      <div className='form loginform'>
      <h4 style={{ margin: '0% 39% 4% 39%', color: '#0077b6' }}>Login</h4>
        <form>
          <div className='form-outline mb-4'>
            <TextField
              className='textfield'
              label='Email, phone, or username'
              value={email}
              error={validator && email === ''}
              helperText={validator && email === '' ? 'Required' : ''}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className='form-outline mb-4'>
            <TextField
              className='textfield'
              type='password'
              label='Password'
              value={password}
              helperText={validator && password === '' ? 'Required' : ''}
              error={validator && password === ''}
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
          </div>
         
          <div className='row mb-4'>
            <div className='col d-flex justify-content-center'>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' id='form2Example3' />
                <label className='form-check-label' htmlFor='form2Example3'>
                  Remember me
                </label>
              </div>
            </div>

            <div className='col'>
              <a className='link' href='#!'>
                Forgot password?
              </a>
            </div>
          </div>
          <button type='submit' className='btn btn-primary btn-block mb-4 submit-btn' onClick={(e) => handleLogin(e)}>
            Log In
          </button>{' '}
          <div className='text-center'>
            <p>
              Not a member?{' '}
              <a className='link' onClick={() => dispatch(selectForm('SIGN_UP'))}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
