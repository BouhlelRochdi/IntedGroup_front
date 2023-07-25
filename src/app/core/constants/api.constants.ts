import { environment } from "src/environments/environments";

const BASE_URL = environment.baseURL;

export const CREATE_DEMANDE_API = BASE_URL + '/demand';
export const LOGIN_API = BASE_URL + '/auth/login';
export const GET_DEMANDE_DETAILS_API = BASE_URL + '/demand';
export const DELETE_DEMANDE = BASE_URL + '/demand/demande';