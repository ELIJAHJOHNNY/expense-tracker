import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "configurations/Firebase-config";
import { useNavigate } from "react-router-dom";
import { useGetUserInfo } from "hooks/UseGetUserInfo";
import expense from "assets/expense.png";
import dropdown from "assets/dropdown.svg";
import defaultUserPhoto from "assets/defaultUserPhoto.svg";

const Header = () => {
  const navigate = useNavigate();
  const { name, profilePhoto } = useGetUserInfo();
  const [showSignOut, setShowSignOut] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const extractFirstName = fullName => {
    const nameParts = fullName.split(" ");
    const firstName = nameParts[1];
    return nameParts.length > 1 ? firstName : fullName;
  };

  return (
    <header className="w-[100%] h-[80px] flex items-center justify-between bg-black px-[50px] fixed top-0 right-0 z-[100] ">
      <img src={expense} alt="expense-logo" className="w-[60px] h-[50px] " />
      <div className="flex items-center justify-center">
        <img
          src={profilePhoto !== "" ? profilePhoto : defaultUserPhoto}
          alt="avatar"
          className="rounded-[50%] w-[30px] h-[30px] mr-2 "
        />
        <p className="mr-2">{extractFirstName(name)}</p>
        <button onClick={() => setShowSignOut(!showSignOut)}>
          <img src={dropdown} alt="dropdown" />
        </button>
        <div>
          {showSignOut && (
            <button
              className="rounded-[4px] font-[500] font-nunito text-[#333333] text-[14px] p-2 shadow-md  bg-white absolute top-[60px] right-[50px] z-[30]  "
              onClick={handleSignOut}
            >
              Sign out
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
