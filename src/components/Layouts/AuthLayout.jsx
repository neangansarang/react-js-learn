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
                <p className="text-sm mt-5 text-center">
                    {/* Ternarry kondisi 1-2 pilihan */}
                    { type === 'login' 
                        ? "Don't have an account? " 
                        : "Already have an account " }

                    {/* AND jika pilihan lebih dari 2 pilihan */}
                    { type === 'login' && (
                        <Link to="/register" className="font-bold text-blue-600">
                            Sign up
                        </Link>
                    )}
                    { type === 'register' && (
                        <Link to="/login" className="font-bold text-blue-600">
                            Sign in
                        </Link>
                    )}
                </p>
            </div>
        </div>
    )
};

export default AuthLayout;