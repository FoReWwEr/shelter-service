import { HeaderComponent } from '../auxiliary/HeaderComponent';
import { FooterComponent } from '../auxiliary/FooterComponent';
import './SearchHousing.scss';

export const SearchHousing = () => {
  return (
    <>
      <header className='search-housing'>
        <HeaderComponent />

        <h1 className='search-housing--main-text'>Знайти житло</h1>

        <nav className='search-housing__navigation'>
          <form className="search-housing__navigation--form">
            <div className='search-housing__navigation--container'>
              <img src="/shelter-service/images/label__image.svg" alt="Label image" className='search-housing__navigation--image' />
              <input type="text" placeholder='Населений пункт' className='search-housing__navigation--city' />
            </div>

            <div className='search-housing__navigation--container'>
              <img src="/shelter-service/images/map__image.svg" alt="Map image" className='search-housing__navigation--image' />
              <input type="number" placeholder='20 КМ' className='search-housing__navigation--map' />
            </div>

            <button type='submit' className='search-housing__navigation--button'>
              <img src="/shelter-service/images/magnifier.svg" alt="Magnifier image" />
              Знайти житло
            </button>
          </form>
        </nav>
      </header>

      <main className='list-houses'>
        <div className='list-houses__card'>
          <img src="/shelter-service/images/card__image(del).svg" alt="Houme image" className='list-houses__image' />

          <section className='list-houses__info'>
            <h5 className='list-houses__info--text'>Безкоштовне житло (і без оплати за комунальні) для переселенців</h5>

            <div className='list-houses__info--container'>
              <h5 className='list-houses__info--price'>Безкоштовно</h5>
              <h5 className='list-houses__info--seats'>2 місця</h5>
            </div>

            <div className='list-houses__info--container'>
              <h5 className='list-houses__info--city'>Київ Деснянський</h5>

              <div className='list-houses__info--block'>
                <h5 className='list-houses__info--time'>Сьогодні о 14:08</h5>
                <img src="/shelter-service/images/like__image.svg" alt="Like image" className='list-houses__info--like' />
              </div>
            </div>
          </section>
        </div>

        <div className='list-houses__card'>
          <img src="/shelter-service/images/card__image(del).svg" alt="Houme image" className='list-houses__image' />

          <section className='list-houses__info'>
            <h5 className='list-houses__info--text'>Безкоштовне житло (і без оплати за комунальні) для переселенців</h5>

            <div className='list-houses__info--container'>
              <h5 className='list-houses__info--price'>Безкоштовно</h5>
              <h5 className='list-houses__info--seats'>2 місця</h5>
            </div>

            <div className='list-houses__info--container'>
              <h5 className='list-houses__info--city'>Київ Деснянський</h5>

              <div className='list-houses__info--block'>
                <h5 className='list-houses__info--time'>Сьогодні о 14:08</h5>
                <img src="/shelter-service/images/like__image.svg" alt="Like image" className='list-houses__info--like' />
              </div>
            </div>
          </section>
        </div>

        <div className='list-houses__card'>
          <img src="/shelter-service/images/card__image(del).svg" alt="Houme image" className='list-houses__image' />

          <section className='list-houses__info'>
            <h5 className='list-houses__info--text'>Безкоштовне житло (і без оплати за комунальні) для переселенців</h5>

            <div className='list-houses__info--container'>
              <h5 className='list-houses__info--price'>Безкоштовно</h5>
              <h5 className='list-houses__info--seats'>2 місця</h5>
            </div>

            <div className='list-houses__info--container'>
              <h5 className='list-houses__info--city'>Київ Деснянський</h5>

              <div className='list-houses__info--block'>
                <h5 className='list-houses__info--time'>Сьогодні о 14:08</h5>
                <img src="/shelter-service/images/like__image.svg" alt="Like image" className='list-houses__info--like' />
              </div>
            </div>
          </section>
        </div>
      </main>

      <FooterComponent />
    </>
  );
}