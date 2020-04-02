import React from 'react';
import './Converter.css';

interface IConverterProps {}
// interface IConverterState {
//   /** Признак отображения одного из окон конвертера. */
//   showMainPage: boolean;
// }

const Converter: React.FunctionComponent<IConverterProps> = () => {
  return (
    <div className='converter-container'>
      <div className='converter'>
        <div>Конвертер валют</div>
      </div>
    </div>
  );
};

export default Converter;
