
import { createAction } from '@reduxjs/toolkit';
// export const addContact = (name, number) => ({
//     type: "addContact",
//     payload: {
//         name: name,
//         number: number,
//         id: uuidv4(),
//     },
// });
// export const deleteContact = value => ({
//     type: "deleteContact",
//     payload: value,
// })
// export const contactsFilter = filter => ({
//     type: 'contactsFilter',
//     payload: filter,
// })
// export const addContactsRequest = createAction('addContacts/request');
// export const addContactsSuccess = createAction('addContacts/success');
// export const addContactsError = createAction('addContacts/error');
// export const getContactsRequest = createAction('getContacts/request');
// export const getContactsSuccess = createAction('getContacts/success');
// export const getContactsError = createAction('getContacts/error');
// export const deleteContactsRequest = createAction('deleteContacts/request');
// export const deleteContactsSuccess = createAction('deleteContacts/success');
// export const deleteContactsError = createAction('deleteContacts/error');

// export const addContact = createAction('addContact', (name,number) => {
//     return {
//         payload: {
//             name: name,
//             number: number,
//             id: uuidv4(),
//         }
//     }
// }) 
// export const deleteContact = createAction('deleteContact');
export const contactsFilter = createAction('contactsFilter');