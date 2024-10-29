import { useNavigate } from "react-router-dom";
import './AccountMenu.scss'; 

export const AccountMenu = () => {
  const navigate = useNavigate();

  return (
    <main className="about">
      <section className="about__section-about">
        <div className="about__section-about--flex">
          <div className="about__image-block">
            <img src="/shelter-service/images/profile__image.svg" alt="profile image" className="about__image-block--image" />
            <h5 className="about__image-block--name">Сергій Куліш</h5>

            <div className="about__social">
              <img src="/shelter-service/images/telegram__image.svg" alt="telegram image" />
              <img src="/shelter-service/images/email__image.svg" alt="email image" />
            </div>
          </div>
          <div>
            <h4 className="about__section-about--me">Про себе</h4>
            <h5 className="about__section-about--text"> Допомагаю людям знайти прихисток в своєму місті для внутрішньо переселених осіб. Допоміг відкрити житловий комплекс у першій Миронівській школі. До створення простору долучилися волонтери мандрівного табору Будуємо Україну Разом та
              Razom for Ukraine. З будьяких питаннь пишіть на пошту чи в телеграм.
            </h5>
          </div>
        </div>
      </section>

      <section className="about__section-advertisement">
        <h4 className="about__section-advertisement--text">Оголошення</h4>

        <div className="about__section-advertisement--cards-block">
          <div className="about__section-advertisement__card">
            <img src="/shelter-service/images/card__image(del).svg" alt="Houme image" className='about__section-advertisement--image' onClick={() => navigate('/shelter-service/search/123')} />

            <section className='about__section-advertisement__info'>
              <h5 className='about__section-advertisement__info--text'>Безкоштовне житло (і без оплати за комунальні) для переселенців</h5>

              <div className='about__section-advertisement__info--container'>
                <h5 className='about__section-advertisement__info--price'>Безкоштовно</h5>
                <h5 className='about__section-advertisement__info--seats'>2 місця</h5>
              </div>

              <div className='about__section-advertisement__info--container'>
                <h5 className='about__section-advertisement__info--city'>Київ Деснянський</h5>
                <h5 className='about__section-advertisement__info--time'>Сьогодні о 14:08</h5>
              </div>

              <div className="about__section-advertisement__info--container">
                <div className="about__section-advertisement__info--block">
                  <img src="/shelter-service/images/edit__image.svg" alt="edit image" />
                  <h5 className="about__section-advertisement__info--edit">Редагувати</h5>
                </div>

                <div className="about__section-advertisement__info--block">
                  <h5 className="about__section-advertisement__info--delete">Видалити</h5>
                  <img src="/shelter-service/images/delete__image.svg" alt="edit image" />
                </div>
              </div>
            </section>
          </div>

          <div className="about__section-advertisement__card">
            <img src="/shelter-service/images/card__image(del).svg" alt="Houme image" className='about__section-advertisement--image' onClick={() => navigate('/shelter-service/search/123')} />

            <section className='about__section-advertisement__info'>
              <h5 className='about__section-advertisement__info--text'>Безкоштовне житло (і без оплати за комунальні) для переселенців</h5>

              <div className='about__section-advertisement__info--container'>
                <h5 className='about__section-advertisement__info--price'>Безкоштовно</h5>
                <h5 className='about__section-advertisement__info--seats'>2 місця</h5>
              </div>

              <div className='about__section-advertisement__info--container'>
                <h5 className='about__section-advertisement__info--city'>Київ Деснянський</h5>
                <h5 className='about__section-advertisement__info--time'>Сьогодні о 14:08</h5>
              </div>

              <div className="about__section-advertisement__info--container">
                <div className="about__section-advertisement__info--block">
                  <img src="/shelter-service/images/edit__image.svg" alt="edit image" />
                  <h5 className="about__section-advertisement__info--edit">Редагувати</h5>
                </div>

                <div className="about__section-advertisement__info--block">
                  <h5 className="about__section-advertisement__info--delete">Видалити</h5>
                  <img src="/shelter-service/images/delete__image.svg" alt="edit image" />
                </div>
              </div>
            </section>
          </div>

          <div className="about__section-advertisement__card">
            <img src="/shelter-service/images/card__image(del).svg" alt="Houme image" className='about__section-advertisement--image' onClick={() => navigate('/shelter-service/search/123')} />

            <section className='about__section-advertisement__info'>
              <h5 className='about__section-advertisement__info--text'>Безкоштовне житло (і без оплати за комунальні) для переселенців</h5>

              <div className='about__section-advertisement__info--container'>
                <h5 className='about__section-advertisement__info--price'>Безкоштовно</h5>
                <h5 className='about__section-advertisement__info--seats'>2 місця</h5>
              </div>

              <div className='about__section-advertisement__info--container'>
                <h5 className='about__section-advertisement__info--city'>Київ Деснянський</h5>
                <h5 className='about__section-advertisement__info--time'>Сьогодні о 14:08</h5>
              </div>

              <div className="about__section-advertisement__info--container">
                <div className="about__section-advertisement__info--block">
                  <img src="/shelter-service/images/edit__image.svg" alt="edit image" />
                  <h5 className="about__section-advertisement__info--edit">Редагувати</h5>
                </div>

                <div className="about__section-advertisement__info--block">
                  <h5 className="about__section-advertisement__info--delete">Видалити</h5>
                  <img src="/shelter-service/images/delete__image.svg" alt="edit image" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
