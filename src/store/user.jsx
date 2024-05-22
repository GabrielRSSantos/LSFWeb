import { create } from "zustand";
import api from '../services/api';
import axios from 'axios';

export const useUser = create((set) => ({
    users: null,
    getAllUsers: async () => {
        console.log("Function - GetAllUsers");
        try {
            const resolve = await api.get('/user/GetAll');
            return resolve.data;
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
    },
    addToUser: async (id) => {
        console.log("Function - AddToUser");
        const resolve = await (await api.get(`/user/GetById/${id}`)).data.user;
        set(() => ({users: resolve}));
        return resolve; 
    }
}));
