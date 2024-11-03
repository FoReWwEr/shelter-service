import { useEffect, useState } from 'react';
import './AuthorizationMenu.scss';
import cn from 'classnames';
import { LoginMenu } from './LoginMenu/LoginMenu';
import { RegistrationMenu } from './RegistrationMenu/RegistrationMenu';

export const AuthorizationMenu = () => {
  const [menu, setMenu] = useState<'login' | 'registration'>('login');
  const [error, setError] = useState<string | null>(null);

  const [visibility, setVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: '',
  });

  const [dataRegistration, setDataRegistration] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    setError(null);
  }, [menu])

  const handleChange = (
    field: 'email' | 'password' | 'confirmPassword',
    value: string
  ) => {
    if (menu === 'login') {
      setDataLogin((prev) => ({
        ...prev,
        [field]: value,
      }));
    } else {
      setDataRegistration((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    setVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const validation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(menu === 'login' ? dataLogin.email : dataRegistration.email)) {
      setError('Неправильний формат електронної пошти. Спробуйте ще раз.');
      return false;
    }

    const password = menu === 'login' ? dataLogin.password : dataRegistration.password;

    if (password.length < 6) {
      setError('Пароль має містити не менше 6 символів.');
      return false;
    }

    if (menu === 'registration' && dataRegistration.password !== dataRegistration.confirmPassword) {
      setError('Паролі не співпадають.');
      return false;
    }

    setError(null);
    return true;
  };

  const onSumbmitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError(null);

    validation();
  }

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

          <form action="#" className='loginSection__form' onSubmit={onSumbmitForm}>
            {menu === 'login' && <LoginMenu visibility={visibility} togglePasswordVisibility={togglePasswordVisibility} dataLogin={dataLogin} handleChange={handleChange} />}
            {menu === 'registration' && <RegistrationMenu visibility={visibility} togglePasswordVisibility={togglePasswordVisibility} dataRegistration={dataRegistration} handleChange={handleChange} />}
            <h4 className='loginSection__error'>{error}</h4>
          </form>

          <button className='loginSection__form--button' onClick={onSumbmitForm}>Продовжити</button>
        </section>
      </div>
    </>
  );
}
