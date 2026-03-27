import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    const handleLogin = () => {
        console.log('Login berhasil!');
    }
    return (
        <form action="">
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
          <Button classname="bg-blue-600 w-full mt-5" onClick={handleLogin}>Login</Button>
        </form>
    )
};

export default FormLogin;