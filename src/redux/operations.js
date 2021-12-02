import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {
//     addContactsSuccess,
//     addContactsError,
//     addContactsRequest,
//     getContactsRequest,
//     getContactsError,
//     getContactsSuccess,
//     deleteContactsRequest,
//     deleteContactsSuccess,
//     deleteContactsError
// } from './actions'
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// export const addContact = (name,number) => dispatch => {
//     const contacts = { name:name, number:number, }
//     dispatch(addContactsRequest())
//     axios
//         .post('/contacts', contacts)
//         .then(({ data }) => dispatch(addContactsSuccess(data)))
//         .catch(error => dispatch(addContactsError(error)))
// 
export const addContact = createAsyncThunk(
    'contact/addContact',
    async (contact) => {
        const { data } = await axios.post('/contacts', contact)
            .catch(error => console.log(error))
        return data;
    }

)
// export const getContact = () => dispatch => {
//     dispatch(getContactsRequest())
//     axios
//         .get('/contacts')
//         .then(({ data }) => dispatch(getContactsSuccess(data)))
//         .catch(error => dispatch(getContactsError(error)))
// }
export const getContact = createAsyncThunk(
    'contact/getContact',
    async () => {
        const { data } = await axios.get('/contacts')
            .catch(error => console.log(error))
        return data;
    }
)
// export const deleteContact = id => dispatch => {
//     dispatch(deleteContactsRequest())
//     axios
//         .delete(`/contacts/${id}`).then(() => dispatch(deleteContactsSuccess(id)))
//     .catch(error => dispatch(deleteContactsError(error)))
// }
export const deleteContact = createAsyncThunk(
    'contact/deleteContact',
    async (contactId) => {
         await axios.delete(`/contacts/${contactId}`)
            .catch(error => console.log(error))
        return contactId
    }
)