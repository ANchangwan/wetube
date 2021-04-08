// GLOBAL
const HOME = "/";
const JOIN = "/join";
const SEARCH = "/search";
const LOGIN = "/login";
const LOGOUT = "/logout";


// USERS
const USERS = "/users";
const USER_DETAIL = "/:id";
const USER_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//videos
const VIDEOS = "/videos";
const UPLOAD = "/upload"
const VIDEO_DETAIL = ":id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home:HOME,
    search:SEARCH,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    
    users : USERS,
    userDetail:USER_DETAIL,
    userProfile:USER_PROFILE,
    changePassword:CHANGE_PASSWORD,

    videos:VIDEOS,
    upload:UPLOAD,
    videoDetail:VIDEO_DETAIL,
    editVideo:EDIT_VIDEO,
    deleteVideo:DELETE_VIDEO
};

export default routes;