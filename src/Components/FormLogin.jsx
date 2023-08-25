import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./firebaseConfig";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";

const FormLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Check user authentication status on component mount
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        insertUser(user.email);
        sendData(user.email)
        navigate("/Dashboard"); // Navigate to Dashboard on successful sign in
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const supabase = createClient(
    "https://pbzaiztldlpympnwfpuz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiemFpenRsZGxweW1wbndmcHV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3NjA1MTMsImV4cCI6MjAwODMzNjUxM30.tHDSYLyJkULk52TB8hM9rc6xYCse2xfu39RlgQjCIK0"
  );

  async function insertUser(useremail) {
    try {
      const { error } = await supabase
        .from("users")
        .upsert([{ email: useremail }]);

      if (error) {
        throw error;
      }

      console.log("User data inserted");
    } catch (error) {
      console.error("Error inserting user data:", error.message);
    }
  }
  const sendData = (Useremail) => {
      const requestBody = {
        userEmail: Useremail
      };
  
      axios
        .post("https://attractive-lime-tie.cyclic.cloud/api/login", requestBody)
        .then((response) => {
          console.log("Data sent successfully:", response.data);
          console.log(response.data.token);
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });
  };
  

  // Call the function to insert the user into the 'users' table
  return (
    <div className="flex flex-col items-center py-32 md:py-52 ">
      <div
        onClick={() => navigate("/")}
        className="flex flex-wrap justify-center items-center hover:cursor-pointer transform hover:scale-105"
      >
        <img src="/Logo.png" alt="Logo" className="w-26 h-16" />
        <a className="font-jakarta font-extrabold text-[25px] my-3 text-primary tracking-[.15em]">
          PROBOX
        </a>
      </div>
      <div className="card w-86 bg-base-100 shadow-xl lg:w-96 my-4">
        <div className="card-body items-center text-center">
          <h2 className="card-title font-jakarta font-bold text-[30px]">
            Sign in to your
          </h2>
          <h2 className="card-title font-jakarta font-extrabold text-[30px] text-primary">
            account
          </h2>
          <p className="font-jakarta my-3 text-[15px]">Put it, Leave it</p>
          <div className="card-actions justify-end my-3">
            {user ? null : ( // No sign-out button when user is signed in
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-base-200 hover:cursor-pointer transform hover:scale-105"
              >
                <img src="/google.png" alt="" className="w-5 h-5" />
                Sign in with Google
              </button>
            )}
          </div>
          <div>
            <p
              onClick={() => navigate("/")}
              className="font-jakarta underline text-sm font-light hover:cursor-pointer"
            >
              Go Back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
