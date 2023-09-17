import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "configurations/Firebase-config";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "hooks/UseGetUserInfo";
import googleIcon from "assets/googleIcon.svg";

const Login = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();
  const signInHandle = async () => {
    try {
      const results = await signInWithPopup(auth, provider);
      console.log(results);
      const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));
      navigate("/expense-tracker");
    } catch (err) {
      console.error(err.message);
    }
  };

  // if (isAuth) {
  //   return <Navigate to="/expense-tracker" />;
  // }
  return (
    <div className="flex items-center justify-center w-[100%] h-[100vh] flex-col ">
      <h1 className="font-[700] text-[32px] text-center ">
        Sign in with Google to continue
      </h1>
      <button
        className="bg-[#F2F2F2] text-[24px] px-4 py-2 rounded-[4px] text-[#333333] font-[600] mt-[48px] flex items-center justify-center"
        onClick={signInHandle}
      >
        <img
          src={googleIcon}
          alt="google"
          className="w-[30px] h-[30px] mr-2 "
        />
        Sign in
      </button>
    </div>
  );
};

export default Login;
