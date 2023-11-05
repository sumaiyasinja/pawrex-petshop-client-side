import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";

const Login = () => {
    return (
            <div className="wrapper">
              <div className="form signup">
                <header>Sign In</header>
                <form action="#">
                <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="email4" value="Your email" />
      </div>
      <TextInput id="email4" type="email" icon={HiMail} rightIcon={HiMail} placeholder="name@flowbite.com" required />
    </div>

                  <input type="email" name="email" placeholder="Email address" required />
                  <input type="password" name="password"placeholder="Password" required />                 
                  <input type="submit" value="Signin" />
                </form>
              </div>
            </div>
          );
};

export default Login;