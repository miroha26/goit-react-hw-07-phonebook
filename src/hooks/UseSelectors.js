import { useSelector } from 'react-redux';

export const UseSelectors = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  return [contacts, filter, isLoading, error];
};
