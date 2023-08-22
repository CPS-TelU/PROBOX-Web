import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./firebaseConfig";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";

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
        console.log(user);
        navigate("/Dashboard"); // Navigate to Dashboard on successful sign in
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="card w-86 bg-base-100 shadow-xl lg:w-96 my-60">
        <div className="card-body items-center text-center">
          <h2 className="card-title font-jakarta font-bold text-[30px]">
            Sign in to your
          </h2>
          <h2 className="card-title font-jakarta font-extrabold text-[30px] text-primary">
            account
          </h2>
          <p className="font-jakarta my-3 text-[15px]">Put it, Leave it</p>
          <div className="card-actions justify-end my-3">
            {user ? (
              null // No sign-out button when user is signed in
            ) : (
              <button onClick={handleGoogleSignIn} className="btn bg-base-200">
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
