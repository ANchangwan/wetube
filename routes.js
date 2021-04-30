import { videoDetail } from "./controllers/videoControllers";
import { videos } from "./db";

// GLOBAL
const HOME = "/";
const JOIN = "/join";
const SEARCH = "/search";
const LOGIN = "/login";
const LOGOUT = "/logout";


// USERS
const USERS = "/users";
const USER_DETAIL = "/:id";
const Edit_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";



//videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit"
const DELETE_VIDEO = "/:id/delete";


const routes = {
    home:HOME,
    search:SEARCH,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    
    users : USERS,
    userDetail:id =>{
        if(id){
            return `/users/${id}`;
        }else{
            return USER_DETAIL;
        }
    },
    editProfile:Edit_PROFILE,
    changePassword:CHANGE_PASSWORD,

    videos:VIDEOS,
    upload:UPLOAD,
    videoDetail: (id) =>{
        if(id){
            return`/videos/${id}`;
        }else{
            return VIDEO_DETAIL;
        }
    },
    editVideo:(id) =>{
        if(id){
            return `/videos/${id}/edit`;
        }else{
            return EDIT_VIDEO;
        }
    },
    deleteVideo:(id) =>{
        if(id){
            return `/videos/${id}/delete`;
        }else{
            return DELETE_VIDEO;
        }
    }
};

export default routes;