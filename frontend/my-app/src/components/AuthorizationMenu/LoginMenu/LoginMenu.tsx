interface Props {
  visibility: {
    password: boolean;
    confirmPassword?: boolean;
  };
  togglePasswordVisibility: (field: 'password' | 'confirmPassword') => void;
  dataLogin: {
    email: string,
    password: string,
  },
  handleChange: (field: 'email' | 'password' | 'confirmPassword', value: any) => void;
}

export const LoginMenu = ({ visibility, togglePasswordVisibility, dataLogin, handleChange }: Props) => (
  <>
    <div className='loginSection__form--block'>
      <label className='loginSection__form--text'>E-mail</label>
      <input type="email" className='loginSection__form--input' placeholder='@Email.com' value={dataLogin.email} onChange={(e) => handleChange('email', e.target.value)} />
    </div>

    <div className='loginSection__form--block'>
      <label className='loginSection__form--text'>Пароль</label>
      <input type={visibility.password ? "text" : 'password'} className='loginSection__form--input' value={dataLogin.password} placeholder='12345678' onChange={(e) => handleChange('password', e.target.value)} />
      <img
        src="/shelter-service/images/eye-password__image.svg"
        alt="eye image"
        className='loginSection__form--image'
        onClick={() => togglePasswordVisibility('password')}
      />
    </div>
  </>
);
