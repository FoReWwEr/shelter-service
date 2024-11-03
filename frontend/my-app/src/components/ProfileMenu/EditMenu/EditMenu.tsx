import { ChangeEvent, useState } from 'react';
import './EditMenu.scss';
import { ContainerComponent } from '../../auxiliary/ContainerComponent';

export const EditMenu = () => {
  const [avatar, setAvatar] = useState<string | undefined>(undefined);
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const phoneRegex = /^\+?[0-9]{10,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(formData.phone)) {
      setError('Неправильний формат номера телефону. Спробуйте ще раз.');
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setError('Неправильний формат електронної пошти. Спробуйте ще раз.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Пароль має містити не менше 6 символів.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Паролі не співпадають. Спробуйте ще раз.');
      return;
    }
  };

  return (
    <ContainerComponent>
      <main className="edit">
        <form action="#" className='edit__form' onSubmit={handleSubmit}>
          <div className='edit__flex'>
            <section className='edit__foto-section'>
              <input type="file" accept="image/*" id='foto' className='edit__foto-section--input-image' onChange={handleFileChange} />
              <label htmlFor="foto" className='edit__foto-section--label'>
                {!avatar
                  ? <img src="/shelter-service/images/avatar__image.svg" alt="" className='edit__foto-section--label--avatar' />
                  : <img src={avatar} alt="" className='edit__foto-section--label--avatar' />
                }
                <img src="/shelter-service/images/plus__image.svg" alt="plus image" width={32} height={32} />
              </label>
              <h5 className='edit__foto-section--text'>Додайте фото</h5>
            </section>

            <section className='edit__social'>
              <div className='edit__social--block'>
                <a href="https://www.instagram.com/" target='_blank'><img src="/shelter-service/images/instagram__image.svg" alt="instagram image" width={32} /></a>
                <a href="https://web.telegram.org/" target='_blank'><img src="/shelter-service/images/telegram__image.svg" alt="telegram image" width={32} /></a>
              </div>
              <h5 className='edit__social--text'>Додайте соцмережі</h5>
            </section>
          </div>

          <section className='edit__inputs-section'>
            <div className='edit__inputs-section--pc'>
              <div className='edit__inputs-section--data-block'>
                <h4 className='edit__inputs-section--text'>Особисті дані</h4>

                <div className='edit__inputs-section--block'>
                  <label className='edit__inputs-section--label'>Прізвище Ім`я</label>
                  <input type="text" className='edit__inputs-section--input' placeholder='Яковенко Іван' />
                </div>

                <div className='edit__inputs-section--block'>
                  <label className='edit__inputs-section--label'>E-mail</label>
                  <input
                    type="email"
                    className='edit__inputs-section--input'
                    placeholder='Email'
                    name="email"  // Добавляем name для связи с formData
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className='edit__inputs-section--block'>
                  <label className='edit__inputs-section--label'>Контактний телефон</label>
                  <input
                    type="tel"
                    className='edit__inputs-section--input'
                    placeholder='+000 000 000 000'
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='edit__inputs-section--password-block'>
                <h4 className='edit__inputs-section--text'>Змінити пароль</h4>

                <div className='edit__inputs-section--block'>
                  <label className='edit__inputs-section--label'>Пароль</label>
                  <input
                    type="password"
                    className='edit__inputs-section--input'
                    placeholder='Пароль не менше 6 символів'
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className='edit__inputs-section--block'>
                  <label className='edit__inputs-section--label'>Повторіть введений пароль</label>
                  <input
                    type="password"
                    className='edit__inputs-section--input'
                    placeholder='Пароль не менше 6 символів'
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className='edit__inputs-section--about-block'>
              <h4 className='edit__inputs-section--text'>Про себе</h4>
              <textarea className='edit__inputs-section--area' placeholder='Напишіть коротко про себе'></textarea>
            </div>

            {error && <h4 className="edit__inputs-section--error">{error}</h4>}
            <button className='edit__inputs-section--button' type='submit'>Завершити редагування</button>
          </section>
        </form>
      </main>
    </ContainerComponent>
  );
}
