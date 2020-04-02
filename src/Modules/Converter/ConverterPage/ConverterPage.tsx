import React, { useState } from 'react';
import Button from '../../../Components/Button';
import './ConverterPage.css';
import CourseCurrency from '../Home/CourseCurrency';
import Converter from '../Currency/Converter';

interface IConverterProps {}
// interface IConverterState {
//   /** Признак отображения одного из окон конвертера. */
//   showMainPage: boolean;
// }

const ConverterPage: React.FunctionComponent<IConverterProps> = () => {
  const [showMainPage, setShowMainPage] = useState(true);
  let buttonText = showMainPage ? 'Курс валют' : 'Конвертер';

  function handleChangeWindow() {
    setShowMainPage(!showMainPage);
  }
  return (
    <div className='converter-page-container'>
      <Button
        className='converter-page-btn'
        text={buttonText}
        onClick={handleChangeWindow}
      />
      {showMainPage && (
        <div className='converter'>
          <Converter></Converter>
        </div>
      )}
      {!showMainPage && (
        <div className='real-course'>
          <div> Нынешний курсвалют</div>
          <CourseCurrency></CourseCurrency>
        </div>
      )}
    </div>
  );
};

export default ConverterPage;
