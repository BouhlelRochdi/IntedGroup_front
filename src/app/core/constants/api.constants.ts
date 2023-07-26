import { environment } from "src/environments/environments";

const BASE_URL = environment.baseURL;

export const CREATE_DEMANDE_API = BASE_URL + '/demand';
export const UPDATE_DEMANDE_API = BASE_URL + '/demand/demande';
export const LOGIN_API = BASE_URL + '/auth/signin';
export const CURRENT_USER_API = BASE_URL + '/auth/current-user';
export const REGISTER_API = BASE_URL + '/auth/signup';
export const GET_DEMANDE_DETAILS_API = BASE_URL + '/demand';
export const GET_DEMANDE_BY_USER_API = BASE_URL + '/demand/demande-user';
export const DELETE_DEMANDE = BASE_URL + '/demand/demande';