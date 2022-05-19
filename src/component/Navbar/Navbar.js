import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "./../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="h-12 md:flex items-center justify-between bg-gray-100 py-4 md:px-20 px-10">
      <div>
        <p className="font-bold text-xl font-serif mt-1 hidden md:block">
          TODO APP
        </p>
      </div>
      <div className="flex text-xl font-sans font-medium gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
          }
        >
          Add Task
        </NavLink>
        <NavLink
          to="/alltask"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
          }
        >
          All Task
        </NavLink>

        {user?.uid ? (
          <button
            className="text-slate-600 hover:text-blue-600 text-xl font-serif font-medium"
            onClick={() => signOut(auth)}
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600"
                : "text-slate-600 hover:text-blue-600text-xl font-serif font-medium"
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
