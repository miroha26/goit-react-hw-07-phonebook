import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/Contacts/ContactsOperations';
import Notification from './notafication/Notafication';
import {
  ContactsContainer,
  ContactsList,
  ContactsItem,
  Button,
} from './Contacts.styled';
import { UseSelectors } from 'hooks/UseSelectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const [contacts, filter] = UseSelectors();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ContactsContainer>
      <ContactsList>
        {getVisibleContacts().length > 0 ? (
          getVisibleContacts().map(({ id, name, phone }) => (
            <ContactsItem key={id}>
              <span>{name}:</span>
              <span>{phone}</span>
              <Button onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </ContactsItem>
          ))
        ) : (
          <Notification />
        )}
      </ContactsList>
    </ContactsContainer>
  );
};

export default Contacts;
