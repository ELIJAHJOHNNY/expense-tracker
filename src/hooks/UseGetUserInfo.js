export const useGetUserInfo = () => {
    const authInfo = JSON.parse(localStorage.getItem("auth"));
    if (authInfo && authInfo.userID) {
        return authInfo
    } else {
        return {
            userID: null, 
            name: "",
            profilePhoto: "",
            isAuth: false
        };
    }
}
