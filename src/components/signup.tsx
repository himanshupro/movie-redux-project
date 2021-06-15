import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../css/login.css';
import { selectForm } from '../redux/actions';
import { signUp } from '../services/userServices';

const SignUpForm = () => {
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data: any = {
      userName,
      email,
      password,
      gender,
    };
    signUp(dispatch, data).then((res) => {
      if(res)
      {
        dispatch(selectForm('LOGIN_FORM'))
      }
    })
  };

  return (
    <div className='main-page-signup'>
      <div className='form signup-form'>
        <form>
          <h4 style={{ margin: '0% 36%', color: '#0077b6' }}>Signup</h4>
          <div className='row mb-4'>
            <div className='col'>
              <div className='form-outline'>
                
              </div>
            </div>
            
          </div>
          <div className='form-outline mb-4'>
            <TextField
              className='textfield'
              label='Email'
              value={email}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className='form-outline mb-4'>
            <TextField
              className='textfield'
              label='Username'
              value={userName}
              onChange={(e: any) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className='form-outline mb-4'>
            <TextField
              className='textfield'
              label='Gender'
              value={gender}
              onChange={(e: any) => {
                setGender(e.target.value);
              }}
            />
          </div>
          <div className='form-outline mb-4'></div>
          <div className='row mb-4'>
            <div className='col'>
              <div className='form-outline'>
                <TextField
                  className='textfield'
                  type='password'
                  label='Password'
                  value={password}
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <button type='submit' className='btn btn-primary btn-block mb-4 submit-btn' onClick={(e) => handleSubmit(e)}>
            Submit
          </button>

          <div className='text-center'>
            <p>
              Already registered?{' '}
              <a className='link' onClick={() => dispatch(selectForm('LOGIN_FORM'))}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
