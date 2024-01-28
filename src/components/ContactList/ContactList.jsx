import { removeContact } from 'components/redux/contactsSlice';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsScope.contacts);
  const filter = useSelector(state => state.contactsScope.filter);

  const dispatch = useDispatch();

  const visibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(normalizeFilter)
    );
  };
  const filteredContacts = visibleContacts();

  const deleteContact = id => {
    dispatch(removeContact(id));
  };
  return (
    <ul className={css.list}>
      {filteredContacts?.map(({ name, id, number }) => {
        return (
          <li className={css.list_item} key={id}>
            <span className={css.name_text}>{name} </span>
            <span>{number}</span>
            <button
              className={css.btn}
              onClick={() => deleteContact(id)}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
