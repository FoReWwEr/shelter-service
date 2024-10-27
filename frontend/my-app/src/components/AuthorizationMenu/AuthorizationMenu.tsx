import { useState } from 'react';
import './AuthorizationMenu.scss';
import cn from 'classnames';
import { LoginMenu } from './LoginMenu/LoginMenu';
import { RegistrationMenu } from './RegistrationMenu/RegistrationMenu';

export const AuthorizationMenu = () => {
  const [menu, setMenu] = useState<'login' | 'registration'>('login');
  const [visibility, setVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    setVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <>
      <div className="loginMenu__overlay">
        <section className='loginSection'>
          <div className='loginSection__upperBlock'>
            <img src="/shelter-service/images/light__image.svg" alt="Light image" width={48} />
            <h3 className='loginSection__upperBlock--text'>Зареєструйтеся щоб скористатися нашим сервісом</h3>
          </div>

          <div className='loginSection__buttonsBlock'>
            <button
              className={cn('loginSection__buttonsBlock--button', { 'loginSection__buttonsBlock--button--active': menu === 'login' })}
              onClick={() => setMenu('login')}
            >
              Увійти
            </button>
            <button
              className={cn('loginSection__buttonsBlock--button', { 'loginSection__buttonsBlock--button--active': menu === 'registration' })}
              onClick={() => setMenu('registration')}
            >
              Зареєструватися
            </button>
          </div>

          <form action="#" className='loginSection__form'>
            {menu === 'login' && <LoginMenu visibility={visibility}  togglePasswordVisibility={togglePasswordVisibility}/>}
            {menu === 'registration' && <RegistrationMenu visibility={visibility}  togglePasswordVisibility={togglePasswordVisibility}/>}
          </form>

          <button type='submit' className='loginSection__form--button'>Продовжити</button>
        </section>
      </div>
    </>
  );
}
