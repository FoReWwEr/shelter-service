import { useState } from "react";
import { HeaderComponent } from "../auxiliary/HeaderComponent"
import './ProvideHousing.scss';
import { FooterComponent } from "../auxiliary/FooterComponent";
import { ContainerComponent } from "../auxiliary/ContainerComponent";

export const ProvideHousing = () => {
  const [images, setImages] = useState<Array<string | null>>(Array(8).fill(null));
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
      setError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('hello!');
  
    const inputs = Array.from(e.currentTarget.querySelectorAll("input, textarea")) as (HTMLInputElement | HTMLTextAreaElement)[];
    const allFieldsFilled = inputs.every(input => input.value.trim() !== "");
  
    const hasImage = images.some(image => image !== null);
  
    if (!allFieldsFilled || !hasImage) {
      setError('Заповніть всі поля і додайте принаймні одне зображення');
    } else {
      setError(null);
    }
  }

  return (
    <>
      <HeaderComponent>
        <h4 className="provide-housing__text">Надайте  потрібну інформацію для реєстрації оголошення. </h4>
      </HeaderComponent>

      <ContainerComponent>
        <main className="provide-information">
          <h4 className="provide-information__text">Надайте інформацію про житло</h4>

          <form action="#" className="provide-information__form" onSubmit={handleSubmit}>
            <div className="provide-information__form--InforamtionBlock">
              <div className="provide-information__AddressSection">
                <label className="provide-information--text">Адреса</label>

                <div className="provide-information__AddressSection--InputsBlocks">
                  <input type="text" name="city" minLength={5} maxLength={50} placeholder="Місто Сміла" className="provide-information--input" />
                  <input type="text" name="street" minLength={5} maxLength={50} placeholder="вул. Павла Тичини" className="provide-information--input" />
                  <input type="text" name="region" minLength={5} maxLength={50} placeholder="Область Черкаська" className="provide-information--input" />
                  <input type="text" name="building" minLength={5} maxLength={50} placeholder="будинок. 30, кв. 170" className="provide-information--input" />
                </div>
              </div>

              <div className="provide-information__PlacesSection">
                <label className="provide-information--text provide-information--text--secondary">Кількість спальних місць</label>
                <input type="number" placeholder="1" min={1} max={999} className="provide-information--input" />
              </div>

              <div className="provide-information__ImageSection">
                <label className="provide-information--text">Додайте фото вашого помешкання</label>

                <div className="provide-information__ImageBlock">
                  {images.map((image, index) => (
                    <div className="provide-information__ImageBlock--card">
                      <input
                        type="file"
                        id={index + ''}
                        accept="image/*"
                        className="provide-information__ImageBlock--input"
                        onChange={(event) => handleImageChange(index, event)}
                      />
                      <label htmlFor={index + ''} className="provide-information__ImageBlock--label">
                        {image
                          ? <img src={image} alt="File Input image" className="provide-information__ImageBlock--image" />
                          : <img src="/shelter-service/images/fileInput__image.svg" alt="File Input image" />
                        }
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="provide-information__form--DescriptionBlock">
              <div className="provide-information__ConditionsSection">
                <label className="provide-information--text provide-information--text--additional">Умови проживання</label>
                <textarea className="provide-information__ConditionsSection--textarea" placeholder="Напиклад, є газ чи електроплита, тепла вода, наявність ліжок" minLength={25}></textarea>
              </div>

              <div>
                {error && <h4 className="provide-information__form--error">{error}</h4>}
                <button type="submit" className="provide-information__form--button">Розмістити оголошення</button>
              </div>
            </div>
          </form>
        </main>
      </ContainerComponent>

      <FooterComponent />
    </>
  )
}
