import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        console.log(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteTask(state, action) {},
  },
});

export const { addContact, deleteTask } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
