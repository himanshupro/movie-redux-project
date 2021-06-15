import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import '../css/mainPage.css';
import LoginForm from './login';
import SignUpForm from './signup';

const MainPage = () => {
  const [form, setForm] = useState('login');

  const displayForm = useSelector((state: any) => {
    console.log(state);
    return state.form.formDisplay;
  });

  let style: any;
  displayForm === 'LOGIN_FORM' ? style={
    margin: '-2.5% 10%',
    padding:'10px 20px',
  } : style = {
    margin: '-2.5% 10%',
    padding:'20px 20px',
  };

  return (
    <div className='main-div'>
      <div className='main-page'>
        <div style={style} className='main-form'>
          {displayForm === 'LOGIN_FORM' ? <LoginForm /> : <SignUpForm />}
        </div>
        
        <h1>Movie Web App</h1>
      <br />
      <h2>Search your favourite movie.....</h2>
      </div>
    </div>
  );
};

export default MainPage;
