import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);
        console.log('Login berhasil!');

        window.location.href = "/products";
    }
    return (
        <form onSubmit={handleLogin}>
          <InputForm 
            label="Your Email" 
            type="email" 
            placeholder="helmi@gmail.com" 
            name="email"
          />
          
          <InputForm 
            label="Your Password" 
            type="password" 
            placeholder="*********" 
            name="password"
          />
          <Button classname="bg-blue-600 w-full mt-5 cursor-pointer" type="submit">Login</Button>
        </form>
    )
};

export default FormLogin;