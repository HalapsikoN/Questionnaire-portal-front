//endpoints and routes
//export const API_URL = 'http://localhost:8080/api';
export const API_URL = 'https://questionnaire-portal-server.herokuapp.com/api';
export const LOG_IN = '/logIn';
export const LOG_UP = '/logUp';
export const HOME_PAGE = '/';
export const BLANK_PAGE = '/blank/:userId';
export const FIELD_PAGE = '/fields';
export const RESPONSE_PAGE = '/responses';
export const EDIT_USER_INFO = '/editUserInfo';
export const EDIT_USER_PASSWORD = '/editUserPassword';

//methods
export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const DELETE = 'DELETE';

//local Storage constants
export const AUTH_KEY = 'authKey';
export const USER_ID = 'userId';
export const USER_EMAIL = 'userEmail';

//roles
export const USER = 'USER';
export const ADMIN = 'ADMIN';

//api-requests
export const GET_CURRENT_USER_INFO = '/users/currentUser';
export const UPDATE_USER_INFO = '/users/info/';
export const UPDATE_USER_PASSWORD = '/users/passwordChange/';

export const GET_USER_FIELDS = '/users/fields';
export const ADD_USER_FIELD = '/fields';
export const UPDATE_USER_FIELD = '/fields/';
export const DELETE_USER_FIELD = '/fields/';
export const GET_USER_FIELDS_ANAUTHORIZED = '/fields/user/';

export const SEND_ANSWER='/responses';
export const GET_USER_RESPONSES='/users/responses';

export const LOG_OUT = '/logOut';

//const string
export const FORBIDDEN_ERROR = 'Forbidden';