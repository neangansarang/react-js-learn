import FormLogin from "../Fragments/FormLogin";
import AuthLayout from "../Layouts/AuthLayout";

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
        </AuthLayout>
    );
};

export default LoginPage;