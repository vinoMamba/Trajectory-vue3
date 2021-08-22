let id = parseInt(window.localStorage.getItem("MaxTagId") || "0");
const createTagId = () => {
    id++;
    window.localStorage.setItem("MaxTagId", id.toString());
    return id;
};
export {createTagId};