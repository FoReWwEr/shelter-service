interface Props {
  visibility: {
    password: boolean;
    confirmPassword?: boolean;
  };
  togglePasswordVisibility: (field: 'password' | 'confirmPassword') => void;
}

export const LoginMenu = ({ visibility, togglePasswordVisibility }: Props) => (
  <>
    <div className='loginSection__form--block'>
      <label className='loginSection__form--text'>E-mail</label>
      <input type="email" className='loginSection__form--input' placeholder='@Email.com' />
    </div>

    <div className='loginSection__form--block'>
      <label className='loginSection__form--text'>Пароль</label>
      <input type={visibility.password ? "text" : 'password'} className='loginSection__form--input' placeholder='12345678' />
      <img
        src="/shelter-service/images/eye-password__image.svg"
        alt="eye image"
        className='loginSection__form--image'
        onClick={() => togglePasswordVisibility('password')}
      />
    </div>
  </>
);
