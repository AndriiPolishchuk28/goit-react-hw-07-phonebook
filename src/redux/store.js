import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const contactsConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

export const store = configureStore({
  reducer: {
    contactsScope: contactsReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);

// const reducer = (state = initialState, { payload, type }) => {
//   switch (type) {
//     case 'contact/add':
//       return {
//         ...state,
//         contacts: [...state.contacts, payload],
//       };
//     case 'contact/delete':
//       return {
//         ...state,
//         contacts: state.contacts.filter(elem => elem.id !== payload),
//       };
//     case 'filter':
//       return {
//         ...state,
//         filter: payload,
//       };

//     default:
//       return state;
//   }
// };
