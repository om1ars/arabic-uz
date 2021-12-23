import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./dataLayer/store";
import { setAdminFalse, setAdminTrue } from "./dataLayer/slices/adminSlice";

export default function Admin() {
  const admin = useSelector<RootState>((state) => state.admin.admin);
  const dispatch = useDispatch();
  const toggleAdminTrue = () => {
    dispatch(setAdminTrue());
  };
  const toggleAdminFalse = () => {
    dispatch(setAdminFalse());
  };

  return (
    <div>
      {!admin ? (
        <ChatIcon onClick={toggleAdminTrue} />
      ) : (
        <>
          <div className="w-full md:w-96 md:max-w-full mx-auto bg-green">
            <div className="p-6 border border-green-500 sm:rounded-md">
              <form method="POST" action="https://herotofu.com/start">
                <label className="block mb-6">
                  <span className="text-green-700">Your name</span>
                  <input
                    type="text"
                    name="name"
                    className="
            block
            w-full
            mt-1
            border-green-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Joe Bloggs"
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-green-700">Email address</span>
                  <input
                    name="email"
                    type="email"
                    className="
            block
            w-full
            mt-1
            border-green-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="joe.bloggs@example.com"
                    required
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-green-700">Message</span>
                  <textarea
                    name="message"
                    className="
            block
            w-full
            mt-1
            border-green-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Tell us what you're thinking about..."
                  ></textarea>
                </label>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                  >
                    Contact Us
                  </button>
                </div>
                <div>
                  <div className="mt-2 text-green-700 text-right text-xs">
                    by
                    <a
                      href="https://herotofu.com"
                      className="hover:underline"
                      target="_blank"
                    >
                      HeroTofu
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
