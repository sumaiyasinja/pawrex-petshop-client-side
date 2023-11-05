
const Register = () => {
  return (
    <div className="wrapper">
      <div className="form signup">
        <header>Sign up</header>
        <form action="#">
          <input className="rounded" type="text"name="name" placeholder="Full name" required />
          <input className="rounded" type="email" name="email" placeholder="Email address" required />
          <input className="rounded" type="password" name="password"placeholder="Password" required />
          <input className="rounded" type="url" name="photourl" placeholder="photourl" required />
         
          <input className="btn bg-white rounded" type="submit" value="Signup" />
        </form>
      </div>
    </div>
  );
};

export default Register;

// 
// import '../RegisterSignupForm.css';

// const Register = () => {
//   const handleRegisterClick = () => {
//     // Add logic for handling Register click here
//     console.log('Register clicked');
//   };

//   const handleSignupClick = () => {
//     // Add logic for handling signup click here
//     console.log('Signup clicked');
//   };

//   return (
//     <div className="wrapper">
//       <div className="form signup">
//         <header onClick={handleSignupClick}>Signup</header>
//         <form action="#">
//           <input type="text" placeholder="Full name" required />
//           <input type="text" placeholder="Email address" required />
//           <input type="password" placeholder="Password" required />
//           <div className="checkbox">
//             <input type="checkbox" id="signupCheck" />
//             <label htmlFor="signupCheck">I accept all terms & conditions</label>
//           </div>
//           <input type="submit" value="Signup" />
//         </form>
//       </div>

//       <div className="form Register"> {/* Opening div tag was commented out */}
//         <header onClick={handleRegisterClick}>Register</header>
//         <form action="#">
//           <input type="text" placeholder="Email address" required />
//           <input type="password" placeholder="Password" required />
//           <input type="submit" value="Register" />
//         </form>
//       </div>
//     </div>
//   );
// };

