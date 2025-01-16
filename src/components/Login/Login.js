"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Input from "../Input/Input";
import { buttons, formData } from "../../assets/data/data.js";
import validationSchema from "@/utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
const Login = () => {
  const [code, setCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Login submitted", { email, password, rememberMe });
  //   setIsOpen(true); // Open verification popup after login
  // };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onBlur", resolver: yupResolver(validationSchema) });

  const onSubmit = async (data) => {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
    setIsOpen(true);
  };

  return (
    <div className="bg-black w-full md:w-[420px] rounded-md px-6 py-12   flex flex-col gap-10 ">
      <div>
        <p className="text-white text-xl font-semibold">Log into account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            {formData.map((item) => (
              <Input
                key={item.id}
                type={item.type}
                id={item.id}
                name={item.name}
                placeholder={item.placeholder}
                register={register}
                validationSchema={validationSchema}
                errors={errors}
              />
            ))}
            <ForgetPassword />
          </div>
          <div className="flex flex-col gap-5">
            {/* {buttons.map((item)=>(
        <Button key={item.id} type={item.type} name={item.name}  text={item.text}/>
       ))} */}
            <Button
              type="submit"
              name="login"
              text="LOG INTO MY ACCOUNT"
              errors={Object.keys(errors).length === 0 ? false : true}
            />
            <Button
              type="submit"
              name="signup"
              text="CREATE NEW ACCOUNT"
              errors={false}
            />
          </div>
        </div>
      </form>
      {isOpen && 
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
      
      }
    </div>
  );
};

export default Login;
