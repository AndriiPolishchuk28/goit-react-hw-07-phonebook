import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup.number().min(6).required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    addName(name, number);
    resetForm();
  };

  const addName = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const existContact = contacts.some(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (!existContact) {
      dispatch(addContactThunk(newContact));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.form}>
        <label className={css.label_text} htmlFor="name">
          Name
        </label>
        <Field
          className={css.input}
          id="name"
          type="text"
          name="name"
          required
        />
        <label className={css.label_text} htmlFor="number">
          Number
        </label>
        <Field
          className={css.input}
          id="number"
          type="tel"
          name="number"
          required
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
