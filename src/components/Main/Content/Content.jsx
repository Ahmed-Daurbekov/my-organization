import React from 'react';
import './Content.scss'
import Input from '../../UI/Input/Input';
import Select from '../../UI/Select/Select';
import Textarea from '../../UI/Textarea/Textarea';
import Button from '../../UI/Button/Button';
import Footer from '../../Footer/Footer';

const Content = () => {
  const [imgPath, setImgPath] = React.useState('')

  const selectImgFunction = (e) => {
    if (e.target.files[0]) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        setImgPath(e.target.result)
      };
    }
  }
  console.log(imgPath);
  return (
    <div className='wrapper'>
    <div className='content'>
      <p className="path">Главная <span className='delimiter'>/</span> Моя организация</p>
      <p className="content-title">Моя организация</p>

      <div className="background">
        <p className='background-title'>Основная информация</p>
        <form className='form'>
          <div className="form_logo-block">
            <span className='img-logo_title'>Логотип <span className='required'>*</span></span>
            <div className="img">
              {
                imgPath ? <>
                  <img src={imgPath} alt="" />
                </> : <>
                  <label className='fileLabel' htmlFor='file'>
                    <input onChange={e => selectImgFunction(e)} type="file" id='file' />
                    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="180" height="180" rx="28" fill="#071F28"/>
                      <rect x="54" y="54" width="72" height="72" rx="36" fill="white" fillOpacity="0.06"/>
                      <path d="M104 98C104 98.5304 103.789 99.0391 103.414 99.4142C103.039 99.7893 102.53 100 102 100H78C77.4696 100 76.9609 99.7893 76.5858 99.4142C76.2107 99.0391 76 98.5304 76 98V86C76 85.4696 76.2107 84.9609 76.5858 84.5858C76.9609 84.2107 77.4696 84 78 84H80.344C81.9345 83.9991 83.4595 83.3668 84.584 82.242L86.244 80.586C86.618 80.2119 87.125 80.0012 87.654 80H92.342C92.8724 80.0001 93.381 80.2109 93.756 80.586L95.412 82.242C95.9693 82.7994 96.6309 83.2416 97.3591 83.5432C98.0873 83.8449 98.8678 84.0001 99.656 84H102C102.53 84 103.039 84.2107 103.414 84.5858C103.789 84.9609 104 85.4696 104 86V98ZM78 82C76.9391 82 75.9217 82.4214 75.1716 83.1716C74.4214 83.9217 74 84.9391 74 86V98C74 99.0609 74.4214 100.078 75.1716 100.828C75.9217 101.579 76.9391 102 78 102H102C103.061 102 104.078 101.579 104.828 100.828C105.579 100.078 106 99.0609 106 98V86C106 84.9391 105.579 83.9217 104.828 83.1716C104.078 82.4214 103.061 82 102 82H99.656C98.5952 81.9998 97.578 81.5782 96.828 80.828L95.172 79.172C94.422 78.4218 93.4048 78.0002 92.344 78H87.656C86.5952 78.0002 85.578 78.4218 84.828 79.172L83.172 80.828C82.422 81.5782 81.4048 81.9998 80.344 82H78Z" fill="#F8F9FA"/>
                      <path d="M90 96C88.6739 96 87.4021 95.4732 86.4645 94.5355C85.5268 93.5979 85 92.3261 85 91C85 89.6739 85.5268 88.4021 86.4645 87.4645C87.4021 86.5268 88.6739 86 90 86C91.3261 86 92.5979 86.5268 93.5355 87.4645C94.4732 88.4021 95 89.6739 95 91C95 92.3261 94.4732 93.5979 93.5355 94.5355C92.5979 95.4732 91.3261 96 90 96ZM90 98C91.8565 98 93.637 97.2625 94.9497 95.9497C96.2625 94.637 97 92.8565 97 91C97 89.1435 96.2625 87.363 94.9497 86.0503C93.637 84.7375 91.8565 84 90 84C88.1435 84 86.363 84.7375 85.0503 86.0503C83.7375 87.363 83 89.1435 83 91C83 92.8565 83.7375 94.637 85.0503 95.9497C86.363 97.2625 88.1435 98 90 98ZM80 87C80 87.2652 79.8946 87.5196 79.7071 87.7071C79.5196 87.8946 79.2652 88 79 88C78.7348 88 78.4804 87.8946 78.2929 87.7071C78.1054 87.5196 78 87.2652 78 87C78 86.7348 78.1054 86.4804 78.2929 86.2929C78.4804 86.1054 78.7348 86 79 86C79.2652 86 79.5196 86.1054 79.7071 86.2929C79.8946 86.4804 80 86.7348 80 87Z" fill="#F8F9FA"/>
                    </svg>
                  </label>
                </>
              }
            </div>
            <span className='clue'>Допустимый размер файла &#8804; 10мб Форматы: jpg, png</span>
          </div>

          <Input require placeholder='Название' />
          <Input require placeholder='Дата основания' />
          <Select>
            <option disabled selected>Компетенции</option>
            <option value="0">Страхование</option>
            <option value="1">Госуправление</option>
          </Select>
          
          <Select>
            <option disabled selected>Компетенции</option>
            <option value="0">Страхование</option>
            <option value="1">Госуправление</option>
          </Select>
          <Textarea placeholder='Описание' require />

          <p className="form-title">Контакты</p>
          <Input require placeholder='Город' />
          <Input require placeholder='Телефон' />
          <Input require placeholder='Почта' />
          <Input placeholder='Сайт' />

          <p className="form-title">Социальные сети</p>
          <Input placeholder='ВКонтакте' />
          <Input placeholder='Telegram' />
          <Input placeholder='Teletype' />
          <Input placeholder='Дзен' />

          <div className="form-buttons">
            <Button className='save'>Сохранить</Button>
            <Button className='back'>Отмена</Button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Content;
