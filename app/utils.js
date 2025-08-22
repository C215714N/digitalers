import { User } from "./components/User.js";
import { Post } from "./components/Post.js";
import { Album } from "./components/Album.js";

export const getComponent = (path) => {
switch (path) {
    case "/users": return User;
    case "/posts": return Post;
    case "/albums": return Album;
}}
export const getSection = () => {
    const section = root.querySelector("section") || document.createElement("section");
    section.setAttribute("class", "col-md-10 col-xl-8 | m-2")
    section.innerHTML = "";
    root.append(section);
    return section;
}