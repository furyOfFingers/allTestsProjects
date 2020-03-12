import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  handleCancel,
  changeFirstName,
  changeSecondName
} from '../Store/actions';
import {
  FirstName,
  SecondName,
  IFieldState,
  HandleCancelAction,
  ChangeFirstNameAction,
  ChangeSecondNameAction
} from '../Types/Types';
import Button from '../Components/Button';
import Input from '../Components/Input';
import '../Styles/index.css';

interface IInputFormProps {
  firstName: FirstName;
  secondName: SecondName;
  handleCancel: any;
  changeFirstName: any;
  changeSecondName: any;
}

class InputForm extends React.Component<IInputFormProps, {}> {
  render() {
    const {
      firstName,
      secondName,
      handleCancel,
      changeFirstName,
      changeSecondName
    } = this.props;

    function handleClickSubmit(): void {
      console.log('handleClickSubmit clicked');
    }

    return (
      <>
        <h1>Insert Name</h1>

        <div className='app'>
          <Input
            value={firstName}
            type='text'
            placeholder='First Name'
            onChange={event => {
              changeFirstName(event.target.value);
            }}
          />

          <Input
            value={secondName}
            type='text'
            placeholder='Second Name'
            onChange={event => {
              changeSecondName(event.target.value);
            }}
          />

          <div className='output_field'>{`${firstName} ${secondName}`}</div>

          <div className='button_block'>
            <Button className='red' text={'Cancel'} onClick={handleCancel} />

            <Button
              className='green'
              text={'Submit'}
              onClick={handleClickSubmit}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: IFieldState) => {
  return {
    firstName: state.firstName,
    secondName: state.secondName
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch),
    handleCancel: bindActionCreators(handleCancel, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
