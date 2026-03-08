import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
    const { label, type, name, placeholder } = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder}/> 
            {/* 
                Self Closing Tag
            */}
        </div>
    );
};

export default InputForm;