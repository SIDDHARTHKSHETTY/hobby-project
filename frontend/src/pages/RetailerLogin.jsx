// import axios from "axios";
// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// function RetailerLogin() {
//     const [user, setUser] = useState({});
//     const navigate = useNavigate();

//     const loginUser = async (e) => {
//         try {
//             await toast
//                 .promise(loginRequest(), {
//                     pending: "Logging In User",
//                     success: "User Logged In Successfully",
//                     error: "Something went wrong in the logging user",
//                 })
//                 .then((response) => {
//                     setTimeout(() => {
//                         navigate("/");
//                     }, 2000);
//                 });
//         } catch (error) {
//             console.log("something went wrong in the logging user", error);
//         }
//     };

//     const loginRequest = async () => {
//         try {
//             const response = await axios.post(
//                 "http://localhost:6565/api/v1/users/retailer-login",
//                 user
//             );

//             const token = response.data.token;
//             console.log("token: ", token);
//             console.log("response", response);
//             console.log("response.data: ", response.data);
//             console.log("response.data.token: ", response.data.token);
//             localStorage.setItem("token", token); // Store in local storage
//             sessionStorage.setItem("token", token);

//             // Set token in headers for subsequent requests
//             axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//         } catch (error) {
//             throw error;
//         }
//     };

//     return (
//         <div>
//             <h1> RETAILER - LOGIN</h1>

//             <form
//                 className="flex flex-col justify-center items-center"
//                 onSubmit={(e) => {
//                     e.preventDefault(), loginUser(e);
//                 }}
//             >
//                 <input
//                     type="email"
//                     placeholder="email"
//                     required
//                     className="input p-3 text-center rounded text-black m-3"
//                     onChange={(e) =>
//                         setUser({ ...user, email: e.target.value })
//                     }
//                 />
//                 <input
//                     type="password"
//                     placeholder="password"
//                     required
//                     className="input p-3 text-center rounded text-black m-3"
//                     onChange={(e) =>
//                         setUser({ ...user, password: e.target.value })
//                     }
//                 />
//                 <button className="btn p-4 bg-green-500  rounded hover:bg-green-800 duration-300">
//                     login
//                 </button>
//             </form>
//             <ToastContainer />
//         </div>
//     );
// }

// export default RetailerLogin;



import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import retailerLoginBackground from "../assets/RETAILERbg.svg"; // Import the background image

function RetailerLogin() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const loginUser = async (e) => {
        try {
            await toast
                .promise(loginRequest(), {
                    pending: "Logging In User",
                    success: "User Logged In Successfully",
                    error: "Something went wrong in the logging user",
                })
                .then((response) => {
                    setTimeout(() => {
                        navigate("/");
                    }, 2000);
                });
        } catch (error) {
            console.log("something went wrong in the logging user", error);
        }
    };

    const loginRequest = async () => {
        try {
            const response = await axios.post(
                "http://localhost:6565/api/v1/users/retailer-login",
                user
            );

            const token = response.data.token;
            console.log("token: ", token);
            console.log("response", response);
            console.log("response.data: ", response.data);
            console.log("response.data.token: ", response.data.token);
            localStorage.setItem("token", token); // Store in local storage
            sessionStorage.setItem("token", token);

            // Set token in headers for subsequent requests
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } catch (error) {
            throw error;
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${retailerLoginBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
            style={{position:"absolute",top:"50%",right:"10%",transform:"translate(40%,-50%)"}}
            >
                <h1> RETAILER - LOGIN</h1>

                <form
                    className="flex flex-col justify-right items-center"
                    onSubmit={(e) => {
                        e.preventDefault(), loginUser(e);
                    }}
                >
                    <input
                        type="email"
                        placeholder="email"
                        required
                        className="input p-3 text-center rounded text-black m-3"
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                    />
                    <input
                        type="password"
                        placeholder="password"
                        required
                        className="input p-3 text-center rounded text-black m-3"
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                    />
                    <button className="btn p-4 bg-green-500  rounded hover:bg-green-800 duration-300">
                        login
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default RetailerLogin;

