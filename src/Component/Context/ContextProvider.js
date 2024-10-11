import React, {  useState } from "react";
import NewsContext from "./NewsContext";
import axios from "axios";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import DefaultUserPic from '../user.png'
const MyProvider = ({ children }) => {
  const [newsinfo, setnewsinfo] = useState({});
  const [total, settotal] = useState(10);
  const [results, setresults] = useState([]);
  const [items, setitems] = useState([]);
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [profilePic,setprofilePic]=useState(DefaultUserPic);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) =>{
      setUser(codeResponse)

    } ,
    onError: (error) => console.log("Login Failed:", error),
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.clear();
  };
 
  const GetUserInfo = () => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
         // console.log("info=> ",res.data)
          localStorage.setItem('email',res.data.email)
          localStorage.setItem('name',res.data.name)
          localStorage.setItem('picture',res.data.picture)
        
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <NewsContext.Provider
      value={{
        newsinfo,
        setnewsinfo,
        total,
        settotal,
        results,
        setresults,
        items,
        setitems,
        user,
        setUser,
        profile,
        setProfile,
        login,
        logOut,
        GetUserInfo,
        profilePic,
        setprofilePic
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default MyProvider;
