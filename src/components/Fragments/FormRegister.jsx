import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
    return (
        <form action="">
          <InputForm 
            label="Full Name" 
            type="text" 
            placeholder="Insert your fullname" 
            name="fullname"
          />

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
          
          <InputForm 
            label="Confirm Password" 
            type="password" 
            placeholder="*********" 
            name="confirmPassword"
          />
          <Button classname="bg-blue-600 w-full mt-5">Register</Button>
        </form>
    )
};

export default FormRegister;