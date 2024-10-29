import { Link, useNavigate } from "react-router-dom";
import cn from 'classnames';
import { useDispatch } from "react-redux";
import { openModal } from '../../redux/modalSlice';
import { useState } from "react";

interface Props {
  navMargin?: boolean;
}

export const HeaderComponent = ({ navMargin }: Props) => {
  const [checkLogin, setCheckLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <nav className="header__navigation--mobile"> {/* only mobile */}
        <Link to="/shelter-service">
          <img src="/shelter-service/images/home__logo.svg" alt="Home" width='28px' height='28px' />
        </Link>
        <button className='header__navigation--mobile--translate'>EN</button>
        <button 
          className='header__navigation--mobile--account' 
          onClick={() => {
            if (!checkLogin) {
              dispatch(openModal());
            } else {
              navigate('/shelter-service/profile');
            }
          }}
          >
          <img
            src="/shelter-service/images/exit__logo.svg"
            alt="Exit"
            className='header__navigation--mobile--account--image'
          />
        </button>
      </nav>

      <nav className={cn('header__navigation', { 'header__navigation-no--margin': navMargin })}>
        <div className='header__home'>
          <Link to="/shelter-service">
            <img src="/shelter-service/images/home__logo.svg" alt="Home" />
          </Link>
          <p className='header__home--text'>Притулок житло для переселенців</p>
        </div>

        <div className='header__actions'>
          <ul className='header__list'>
            <li className='header__item'>Підтримати проєкт</li>
            <Link to='/shelter-service/provide' style={{ textDecoration: 'none' }}><li className='header__item'>Надати житло</li></Link>
          </ul>
        </div>

        <div className='header__account'>
          <div className='header__language'>
            <h4 className='header__language--text'>Мова</h4>
            <button className='header__language--button'>EN</button>
          </div>

          <button className='header__account--button' 
            onClick={() => {
              if (!checkLogin) {
                dispatch(openModal());
              } else {
                navigate('/shelter-service/profile');
              }
            }}>
            <img src="/shelter-service/images/exit__logo.svg" alt="Home" />
            Увійти
          </button>
        </div>
      </nav>

      <div className="header__actions--mobile"> {/* only mobile */}
        <button className="header__button header__button--support">Підтримати проєкт</button>
        <button 
          className="header__button header__button--give" 
          onClick={() => navigate('/shelter-service/provide')}
        >
          Надати житло
        </button>
      </div>
    </>
  );
}
