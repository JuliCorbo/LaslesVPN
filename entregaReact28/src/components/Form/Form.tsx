import * as yup from "yup";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../App";

type FormData = {
  fullname: string;
  email: string;
  phone: string;
};

export default function ValidationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const schema = yup.object({
    fullname: yup.string().required(),
    email: yup.string().email(),
    phone: yup.string().min(10,"You are missing some numbers!").required(),
  });

  const onSubmit = handleSubmit((data) => {
    schema
      .validate(data)
      .then(() => {
        fetch(`${BASE_URL}/api/send-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response.ok) {
              alert("Thanks! we will be in touch!");
            } else {
              console.error("Error sending email:", response.statusText);
            }
          })
          .catch((error) => {
            console.error("Fetch error:", error);
          });
      })
      .catch((validationError) => {
        console.error("Validation error:", validationError);
      });
  });
  return (

<section>

  <div>
    <h2 className="text-4xl font-black my-5 mt-20 text-center">Let us know about you</h2>
  </div>
    <form
      className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-md mt-20"
      onSubmit={onSubmit}
    >
      <div className="mb-4">
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter your full name"
          {...register("fullname")}
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter your Email"
          {...register("email")}
        />
        <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
      </div>

      <div className="mb-4">
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter your phone number"
          {...register("phone")}
        />
      </div>

      <button
        className=" w-full border-2 rounded-xl bg-white text-red-600  py-2 px-4  hover:bg-red-600 hover:text-white transition duration-300"
        type="submit"
      >
        Submit
      </button>
    </form>
  </section>
  );
}
