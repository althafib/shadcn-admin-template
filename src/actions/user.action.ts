"use server"
import * as API from '../services/API';

export default async function getMyProfile(uid?:string){
    try {
        const resp = await API.GET('/dealers/me');
    } catch (error:any) {   
        throw new Error(error.message || "Something went wrong");
    }
}