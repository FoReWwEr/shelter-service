import Flickity from "react-flickity-component";
import { HeaderComponent } from "../auxiliary/HeaderComponent";
import './HousingDetails.scss';
import '../../additions/flickity.scss';
import { useNavigate } from "react-router-dom";
import { FooterComponent } from "../auxiliary/FooterComponent";

export const HousingDetails = () => {
  return (
    <>
      <header className="housing-details">
        <HeaderComponent navMargin={true} />
      </header>

      <main className="housing-info">
        <section className="housing-info__InfoDescriptionContainer">
          <Flickity
            className={'carousel'}
            elementType={'div'}
          >
            <img src="/shelter-service/images/fliskity__image.svg" alt="House image" className="housing-info__image" />
            <img src="/shelter-service/images/fliskity__image.svg" alt="House image" className="housing-info__image" />
            <img src="/shelter-service/images/fliskity__image.svg" alt="House image" className="housing-info__image" />
          </Flickity>

          <div className="housing-info__descriptionBlock">
            <div className="housing-info__Capacity">
              <h4 className="housing-info__Capacity--address">Адреса: вулиця Миколи Закревського, 61/2.</h4>
              <h5 className="housing-info__Capacity--places">2 місця</h5>
            </div>

            <div className="housing-info__descriptionDetails">
              <h5 className="housing-info__descriptionDetails--text">Опис:</h5>
              <p className="housing-info__descriptionDetails--description">
                Як мінімум, 2 місяці абсолютно БЕЗКОШТОВНО - місця для переселенців Абсолютно БЕЗОПЛАТНЕ ЖИТЛО у Києві (навіть за комунальні НЕ потрібно платити) в 2х, 3х, 4х, 6ти-місних кімнатах ЗА РАХУНОК БЛАГОДІЙНОГО ФОНДУ "СИНЕРГІЯ заради ДОБРОБУТУ" - ВПО, евакуйованим*, можна з ДІТЬМИ, можна з тваринками. <br /> <br />

                При цьому Ви приймаєте участь у волонтерській ініціативі, яка полягає у плетінні маскувальних сіток для ЗСУ (безкоштовні поставки ЗСУ, на фронт) заради нашої ПЕРЕМОГИ! Ті, хто не має можливості працевлаштуватися, - живуть БЕЗКОШТОВНО на ПОСТІЙНІЙ ОСНОВІ. А ті, хто має можливість працевлаштуватися, проживають безкоштовно 2 місяці (далі - на платній основі з великими знижками, - місце від 1350 до 2000 грн/28днів). <br /> <br />

                Телефонуйте, поки є місця. *Мається на увазі реєстрація в паспорті з таких областей: Чернігівська, Сумська, Харківська, Херсонська, Миколаївська,Запорізька, Донецька, Луганська, Дніпропетровська.
              </p>
            </div>
          </div>
        </section>

        <section className="housing-info__ContactInfoContainer">
          <div className="housing-info__PhoneInfoBlock">
            <h3 className="housing-info__PhoneInfoBlock--text">Телефон</h3>
            <div className="housing-info__PhoneInfoBlock--number">+380 000 000 000</div>
          </div>

          <div className="housing-info__LocationBlock">
            <h5 className="housing-info__text">Місцезнаходження</h5>

            <a href="https://www.google.com/maps?q=50.4501,30.5234" target="_blank" className="housing-info__map">
              <div>
                <div className="housing-info__AddressBlock">
                  <img src="/shelter-service/images/location__icon.svg" alt="Location icon" />
                  <h5 className="housing-info__AddressBlock--text">Київ, Деснянський</h5>
                </div>

                <p className="housing-info__distance">За 160 км від вас</p>
              </div>

              <img src="/shelter-service/images/logos_google-maps.svg" alt="Google logo" className="housing-info__locationLogo" />
            </a>
          </div>
        </section>
      </main>

      <FooterComponent />
    </>
  );
}