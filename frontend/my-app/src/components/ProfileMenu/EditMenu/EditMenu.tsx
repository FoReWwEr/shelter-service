import { ChangeEvent, useState } from 'react';
import './EditMenu.scss';
import { ContainerComponent } from '../../auxiliary/ContainerComponent';

export const EditMenu = () => {
  const [avatar, setAvatar] = useState<string | undefined>(undefined);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  }

  return (
    <ContainerComponent>
      <main className="edit">
        <form action="#" className='edit__form'>
          <div className='edit__flex'>
            <section className='edit__foto-section'>
              <input type="file" accept="image/*" id='foto' className='edit__foto-section--input-image' onChange={(e) => handleFileChange(e)} />
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
                  <input type="email" className='edit__inputs-section--input' placeholder='Email' />
                </div>

                <div className='edit__inputs-section--block'>
                  <label className='edit__inputs-section--label'>Контактний телефон</label>
                  <input type="number" className='edit__inputs-section--input' placeholder='+000 000 000 000' />
                </div>
              </div>

              <div className='edit__inputs-section--password-block'>
                <h4 className='edit__inputs-section--text'>Змінити пароль</h4>

                <div className='edit__inputs-section--block'>
                  <label className='edit__inputs-section--label'>Пароль</label>
                  <input type="text" className='edit__inputs-section--input' placeholder='Пароль не менше 6 символів' />
                </div>

                <div className='edit__inputs-section--block'>
                  <label className='edit__inputs-section--label'>Повторіть введений пароль</label>
                  <input type="text" className='edit__inputs-section--input' placeholder='Пароль не менше 6 символів' />
                </div>
              </div>
            </div>

            <div className='edit__inputs-section--about-block'>
              <h4 className='edit__inputs-section--text'>Про себе</h4>
              <textarea className='edit__inputs-section--area' placeholder='Напишіть коротко про себе'></textarea>
            </div>

            <button className='edit__inputs-section--button' type='submit'>Завершити редагування</button>
          </section>
        </form>
      </main>
    </ContainerComponent>
  );
}
