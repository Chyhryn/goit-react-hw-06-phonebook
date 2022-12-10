import css from './Home.module.css';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import { getContactsList } from 'redux/selectors';

export const Home = () => {
  const contacts = useSelector(getContactsList);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};
