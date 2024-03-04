"use server"
import { LoginData } from "@/types/auth.type";
import * as API from '../services/API';

export default async function login(data:LoginData){
    try {
        const resp = await API.POST('/auth/local',data);
    } catch (error) {
        throw new Error("Incorrect username or password!");
    }
}