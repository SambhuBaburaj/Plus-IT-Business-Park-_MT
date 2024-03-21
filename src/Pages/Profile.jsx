import React, { useState } from "react";
import { DeactivateApi, updateProfileApi } from "../API/ApiCall";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationPopup from "../components/Modal/ConfirmationModal";
import { useLocation, useNavigate } from "react-router-dom";
export default function Profile() {
  const [errmsg, setErrmsg] = useState("");
  const [ModalOpen, setModalOpen] = useState(false)
  const Navigate=useNavigate()
  const UpdateProfile = (e) => {
    e.preventDefault();

    setErrmsg("");
    const form = new FormData(e.target);
    const UserData = Object.fromEntries(form);

    if (UserData.name == "" || UserData.password == "") {
      setErrmsg("fill the Form");
    } else if (UserData.password.length < 5) {
      setErrmsg(" password need to be at least 5 letters");
    } else {
      console.log("update profile");
      updateProfileApi(UserData).then(({ data }) => {
        console.log(data);
        toast.success("Profile Updated", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      }).catch((err)=>{
        console.log(err);
        setErrmsg("something went Wrong")
      })
    }
  };


  const  DeactivateAccound=()=>
  {
    DeactivateApi().then((data)=>
    {
      
      localStorage.removeItem("Userdata")
      Navigate("/login")
    }).catch((err)=>
    {
      console.log(err);
    })
  }
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="text-3xl font-bold text-white mb-9">Profile</div>

      <div className=" mt-6 flex flex-col md:flex-row justify-center    items-center  mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <p className="text-red-500 font-bold flex justify-center p-1">
            {errmsg}
          </p>

          <form onSubmit={UpdateProfile} action="">
            <input
              required
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  px-4 py-2  border-solid "
              type="text"
              placeholder="Name"
            />
            <input
              required
              name="password"
              className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  px-4 py-2  border-solid "
              type="password"
              placeholder="Password"
            />
            <div className="mt-4 flex justify-between font-semibold text-sm"></div>
            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>



      </div>
      <div className="mt-10">
      <button onClick={()=>setModalOpen(true)}  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
De-activate your account</span>
</button>
      </div>
   
<ConfirmationPopup isOpen={ModalOpen} onClose={setModalOpen} DeactivateAccound={DeactivateAccound}/>

    </div>
  );
}
