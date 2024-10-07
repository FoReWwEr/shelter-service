import { Link } from "react-router-dom";

export const FooterComponent = () => {
  return (
    <footer className='footer'>
      <div className='footer__informations'>
        <div className='footer__informations--logo'>
          <Link to="/shelter-service">
            <img src="/shelter-service/images/home__logo.svg" alt="Home" className='footer__informations--photo' />
          </Link>
          <h3 className='footer__informations--text'></h3>
        </div>

        <p className='footer__informations--rights'>Всі права захищені</p>
      </div>

      <div className='footer__support'>
        <p className='footer__support--text'>Підтримати проект</p>

        <div className='footer__support--social'>
          <img src="/shelter-service/images/instagram__image.svg" alt="Instagram image" className='footer__support--social--photo' />
          <img src="/shelter-service/images/telegram__image.svg" alt="Telegram image" className='footer__support--social--photo' />
        </div>
      </div>
    </footer>
  );
}
