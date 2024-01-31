import { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteContactThunk } from '../../redux/operations';
import { selectFilteredItems, selectIsLoading } from '../../redux/selectors';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredItems);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {filteredContacts?.map(({ name, id, number }) => {
        return (
          <li className={css.list_item} key={id}>
            <span className={css.name_text}>{name} </span>
            <span>{number}</span>
            <button
              className={css.btn}
              onClick={() => dispatch(deleteContactThunk(id))}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
      {isLoading && <Loader />}
    </ul>
  );
};
