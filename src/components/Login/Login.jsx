import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {

  const {signIn, signInWithGoogle} = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      form.reset();
    })
    .catch(error => {
      console.log(error);
    })
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center my-8">
            Please Login !!!
          </h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div>
          <Link to="/register">
            <button className="btn btn-link ml-6">New to Auth Master? Please Register</button>
          </Link>
          </div>
          <div>
            <button onClick={handleGoogleSignIn} className="btn btn-primary">Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
