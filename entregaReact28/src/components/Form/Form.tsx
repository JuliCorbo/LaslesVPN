import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

// type Inputs = {
//   email: string,
//   fullname: string,
//   phone:String
// };

let schema = yup.object({
    fullname: yup.string().required(),
    email: yup.string().email(),
    phone: yup.string().min(10,"el numero debe contener al menos 10 caracteres").required(),
  }).required();

  type FormData = yup.InferType<typeof schema>;

export default function ValidationForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({resolver: yupResolver(schema)});
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input placeholder='Enter your Email' {...register("email")} />
      <p>{errors.email?.message}</p>
      
     
      <input placeholder='Enter your phone number' {...register("phone")} />
    
      <input placeholder='Enter your Fullname' {...register("fullname")} />
      
      
      <input type="submit" />
    </form>
  );
}


