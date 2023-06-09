import { fetchUsers } from './usersApi';
const baseUrl = import.meta.env.VITE_BASE_URL;
import { NotifyError } from '../components/notify/notify';

export const dataProvider = {
    getList: async (resource, params) => {
        switch (resource) {
            case "users": return await fetchUsers(params);
        }
    },
    getOne: async (resource, params) => {
        switch (resource) {
            case "users": return params.id === "undefined" ? { data: { id: "undefined", name: 'rahul' } } : fetch(`${baseUrl}/admin/getUserById/${params.id}`, {
                method: 'GET',
                credentials: 'include'
            }).then(response => response.json()).then(({ data }) => ({ data }));
        }
    },
    create: async (resource, params) => {
        switch (resource) {
            case "users": return fetch(`${baseUrl}/admin/createUser`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({ newData: params.data })
            }).then(response => response.json())
                .then(({ data }) => ({ data }))
                // .catch(err => {
                //     console.log(err);
                //     return <NotifyError errMessage={err.message} />
                // });
        }
    },
    update: async (resource, params) => {
        switch (resource) {
            case "users": return fetch(`${baseUrl}/admin/updateUser/${params.id}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({ newData: params.data })
            }).then(response => response.json()).then(({ data }) => ({ data }));
        }
    },
    delete: async (resource, params) => {
        switch (resource) {
            case "users": return fetch(`${baseUrl}/admin/deleteSingleUser/${params.id}`, {
                method: 'DELETE',
                credentials: 'include'
            }).then(response => response.json()).then(({ data }) => ({ data }));
        }
    },
    deleteMany: (resource, params) => {
        switch (resource) {
            case "users": return fetch(`${baseUrl}/admin/deleteMultipleUsers`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({ userId: params.ids })
            }).then(response => response.json()).then(({ data }) => ({ data }));
        }
    }
};