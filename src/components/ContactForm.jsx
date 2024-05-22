import { useDispatch } from 'react-redux';
import { addContact } from '../redux/constactSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form[0].value;
    const number = form[1].value;

    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="input"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]*$"
          required
          placeholder="Name"
        />
      </div>
      <div className="container">
        <label htmlFor="number">Number</label>
        <input
          type="text"
          name="number"
          className="input"
          id="number"
          pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
          title="Phone number must start with +"
          required
          placeholder="Number"
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
  //   return (
  //     <form>
  //       <div className="container">

  //     </form>
  //   );
};
