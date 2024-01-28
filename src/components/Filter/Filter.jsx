import { setFilter } from 'components/redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleOnChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleOnChange} />
    </>
  );
};
