import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config"

const Register = () => {
  const { createUserWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value; 

    console.log(name, email, password);

    // Validate the password
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain at least one uppercase letter");
    } else if (!/[!@#$%^&*]/.test(password)) {
      return toast.error("Password must contain at least one special character");
    }

    createUserWithEmail(email, password)
      .then(() => {
        toast.success("Registration Successful!");
        // Update user profile here
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            console.log("Profile data updated!");
            navigate(location.state ? location.state : "/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Toaster />
      <div className="wrapper">
        <div className="form signup">
          <header>Sign up</header>
          <form onSubmit={handleRegister}>
            <input className="rounded" type="text" name="name" placeholder="Full name" required />
            <input className="rounded" type="email" name="email" placeholder="Email address" required />
            <input className="rounded" type="password" name="password" placeholder="Password" required />
            <input className="rounded" type="url" name="photoUrl" placeholder="Photo URL" required /> 
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
            <input className="btn bg-white rounded" type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
