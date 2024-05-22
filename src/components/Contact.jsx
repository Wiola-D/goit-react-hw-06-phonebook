// import { useDispatch } from "react-redux";
// import { deleteTask } from "redux/tasksSlice";

export const Contact = ({ contact }) => {
  //   const dispatch = useDispatch();

  //   const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <div>
      <p>{contact.name}</p>
      <p>{contact.number}</p>

      {/* <button className={css.btn} onClick={handleDelete}>X
      </button> */}
    </div>
  );
};
