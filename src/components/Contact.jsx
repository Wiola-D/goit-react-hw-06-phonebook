import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      <p>{contact.name}</p>
      <p>{contact.number}</p>

      <button onClick={handleDelete}>X</button>
    </div>
  );
};
