interface Props {
  visibility: {
    password: boolean;
    confirmPassword: boolean;
  };
  togglePasswordVisibility: (field: 'password' | 'confirmPassword') => void;
  dataRegistration: {
    email: string;
    password: string;
    confirmPassword: string;
  };
  handleChange: (field: 'email' | 'password' | 'confirmPassword', value: string) => void;
}

export const RegistrationMenu = ({ visibility, togglePasswordVisibility, dataRegistration, handleChange }: Props) => (
  <>
    <div className='loginSection__form--block'>
      <label className='loginSection__form--text'>E-mail</label>
      <input
        type="email"
        className='loginSection__form--input'
        placeholder='@Email.com'
        value={dataRegistration.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
    </div>

    <div className='loginSection__form--block'>
      <label className='loginSection__form--text'>Пароль</label>
      <input
        type={visibility.password ? 'text' : 'password'}
        className='loginSection__form--input'
        placeholder='12345678'
        value={dataRegistration.password}
        onChange={(e) => handleChange('password', e.target.value)}
      />
      <img
        src="/shelter-service/images/eye-password__image.svg"
        alt="eye image"
        className='loginSection__form--image'
        onClick={() => togglePasswordVisibility('password')}
      />
    </div>

    <div className='loginSection__form--block'>
      <label className='loginSection__form--text'>Підтвердити пароль</label>
      <input
        type={visibility.confirmPassword ? 'text' : 'password'}
        className='loginSection__form--input'
        placeholder='12345678'
        value={dataRegistration.confirmPassword}
        onChange={(e) => handleChange('confirmPassword', e.target.value)}
      />
      <img
        src="/shelter-service/images/eye-password__image.svg"
        alt="eye image"
        className='loginSection__form--image'
        onClick={() => togglePasswordVisibility('confirmPassword')}
      />
    </div>
  </>
);
