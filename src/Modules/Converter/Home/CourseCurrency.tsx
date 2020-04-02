import { ICourseData, IData } from '../../../Types/Types';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React from 'react';
import Table from '../../../Components/Table/Table';

const originSite = 'https://exchangeratesapi.io/';
const url = 'https://api.exchangeratesapi.io/latest';

/**
 * Свойства компонента.
 *
 */
interface ICourseCurrencyProps {}

/**
 * Состояние компонента.
 *
 * @prop {any} error Параметр ошибки.
 * @prop {Array} data Содержимое данных с сервера.
 * @prop {Boolean} isLoading Признак загрузки данных с сервера.
 */
interface ICourseCurrencyState {
  error: any;
  data: IData<ICourseData>[];
  isLoading: boolean;
}

class CourseCurrency extends React.Component<
  ICourseCurrencyProps,
  ICourseCurrencyState
> {
  constructor(props: ICourseCurrencyProps) {
    super(props);
    this.state = {
      error: null,
      data: [],
      isLoading: false
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    this.setState({ isLoading: true });

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return false;
      }

      if (xhr.status !== 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
      } else {
        this.setState({
          data: JSON.parse(xhr.responseText),
          isLoading: false
        });
      }

      return null;
    };
  }

  render() {
    const { data, isLoading } = this.state;
    if (isLoading) {
      return (
        <Loader
          type='Triangle'
          color='#777169'
          height={100}
          width={100}
          timeout={3000}
        />
      );
    } else {
      return (
        <div>
          <div>{data.base}</div>
          <div>{data.date}</div>
          <Table></Table>
        </div>
      );
    }
  }
}

export default CourseCurrency;
