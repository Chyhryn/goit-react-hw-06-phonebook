import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsList, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/contactsList/slice';
import { getFilteredContacts } from 'utils/getFilteredContacts';

export const ContactList = () => {
  const contactsList = useSelector(getContactsList);
  const filterValue = useSelector(getFilterValue);
  const filteredContacts = getFilteredContacts(contactsList, filterValue);
  const dispatch = useDispatch();

  const onClick = e => {
    const id = e.target.parentNode.id;
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contacts_list}>
      {filteredContacts.map(contact => (
        <li className={css.contact_item} key={contact.id} id={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button className={css.delete_btn} onClick={onClick} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
