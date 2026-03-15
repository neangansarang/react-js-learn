// Client Side Routing
import { Link } from "react-router-dom";

const AuthLayout = (props) => {
    const { children, title, type } = props;
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
                <p className="font-medium text-slate-500">
                    Welcome, Please enter your credentials!
                </p>
                {children}
                <Navigation type={type} />
            </div>
        </div>
    )
};

// With new component
const Navigation  = ({type}) => {
  if (type === 'login') {
    return (
      <p className="text-sm mt-5 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="font-bold text-blue-600">
              Sign up
          </Link>
      </p>
    )
  } else {
    return (
      <p className="text-sm mt-5 text-center">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-blue-600">
              Sign in
          </Link>
      </p>
    )
  }
}

export default AuthLayout;