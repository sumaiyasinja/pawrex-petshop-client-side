import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { HiMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { Label, TextInput } from "flowbite-react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const { user,loginWithEmailAndPasword, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location object in login page: ', location);
  

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailAndPasword(email, password)
      .then(() => {
        toast.success("Successfully logged in");

        axios.post('https://b8a11-server-side-iota.vercel.app/jwt', {
          withCredentials: true,
          userEmail: user?.email || '',
        })
          .then(response => {
            // Handle the response
            console.log('Response:', response.data);
          })
          .catch(error => {
            // Handle errors
            console.error('Error:', error);
          });
        
//         fetch('https://b8a11-server-side-iota.vercel.app/jwt', {
//           method: 'POST',
//           credentials: 'include',
//         })
//           .then(response => {
//            response.json()
//           })
//           .then(data => {
// console.log(data);          })
          // .catch(error => {
          //   // Handle errors
          //   console.error('Error:', error);
          // });

        navigate(location?.state ? location?.state : '/');
      })
      .catch(e => toast.error(e.message));
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Successfully logged in with Google.");
        navigate(location.state ? location.state : '/');
      })
      .catch(e => toast.error(e.message));
  };

  return (
    <div className="container mx-auto flex items-center justify-center">
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: 'green',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: 'red',
              color: '#fff',
            },
          },
        }}
      />
      <div className="wrapper">
        <div className="form signup">
          <header>Sign In</header>

          <form onSubmit={handleLogin}>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="email4" value="Your email" />
              </div>
              <TextInput id="email4" name="email" type="email" icon={HiMail}  placeholder="name@address.com" required />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Your password" />
              </div>
            <TextInput  type="password"  id="password4" name="password" placeholder="Password" required  />
            {/* <TextInput id="email4" type="email"  rightIcon={HiMail} placeholder="name@flowbite.com" required /> */}

              {/* <TextInput id="password"  name="password"  rightIcon={HiMail} placeholder="password" required /> */}
            </div>

            {/* <input type="email" name="email" placeholder="Email address" required /> */}
            <div onClick={handleGoogleLogin} className="flex justify-center mt-2 items-center gap-4
            p-4
             custom-btn bg-white rounded-lg text-black hover:text-teal-500">
              <p className=" font-medium text-lg ">Sign in with Google</p>
              <FcGoogle></FcGoogle>
            </div>
          
            <p>
            Do not have an account? <Link to="/register" className="text-white cursor-pointer">Register</Link>
            </p>
            <input className="btn bg-white rounded" type="submit"  value="Log In" />

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
