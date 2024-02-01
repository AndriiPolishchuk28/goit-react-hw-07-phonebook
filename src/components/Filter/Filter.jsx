import { setFilter } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleOnChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input className={css.input} type="text" onChange={handleOnChange} />
    </>
  );
};
