import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { HiMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { Label, TextInput } from "flowbite-react";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const { loginWithEmailAndPasword, loginWithGoogle } = useContext(AuthContext);
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
    <div>
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
              <TextInput id="email4" type="email" icon={HiMail} rightIcon={HiMail} placeholder="name@flowbite.com" required />
            </div>

            <input type="email" name="email" placeholder="Email address" required />
            <input type="password" name="password" placeholder="Password" required />
            <div onClick={handleGoogleLogin} className="flex justify-center items-center gap-4 custom-btn text-black">
              <p className="text-white font-medium text-lg hover:text-red-500">Sign in with Google</p>
              <FcGoogle></FcGoogle>
            </div>
            <p className="mt-2 text-white text-base text-center">
              Do not have an account?
              <Link to="/signup" className="text-blue-500"> Sign Up</Link>
            </p>
            <input type="submit" value="Sign In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
