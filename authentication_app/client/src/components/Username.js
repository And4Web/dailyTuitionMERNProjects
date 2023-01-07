import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.webp";

import styles from "../styles/Username.module.css";

export default function Username() {
  return (
    <div className="container mx-auto">
      <div className="flex h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl text-center w-2/3 text-gray-500">
              Explore More by connecting with us.
            </span>
          </div>

          <form action="" className="py-1">
            <div className="profile flex justify-center py-4">
              <img
                src={avatar}
                alt="avatar"
                style={{ height: "6rem", width: "6rem", borderRadius: "50%" }}
              />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input type="text" placeholder="Username" />
              <button type="submit">Let's Go</button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member yet?{" "}
                <Link to="/register" className="text-red-500">
                  Register
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
