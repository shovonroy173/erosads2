"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Input from "../Input/Input";
import { formData } from "../../assets/data/data.js";
import validationSchema from "@/utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import Button from "../Button/Button";
import { VerificationModal, SuccessModal } from "../Modal/Modal";
const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const autoCloseTime = 5;
  const [timeLeft, setTimeLeft] = useState(autoCloseTime);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(validationSchema) });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsOpen(true);
  };
  const handleOtp = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("LINE AT 30 handleOTP", data.otp);
    setIsVerify(true);
    setIsOpen(false);

  };
  return (
    <div className="bg-black w-full md:w-[420px] rounded-md px-6 py-12   flex flex-col gap-10 ">
      <div>
        <p className="text-white text-xl font-semibold">Log into account</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            {formData.map((item) => (
              <Input
                key={item.id}
                type={item.type}
                id={item.id}
                name={item.name}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                placeholder={item.placeholder}
                register={register}
                validationSchema={validationSchema}
                errors={errors}
              />
            ))}
            <ForgetPassword />
          </div>
          <div className="flex flex-col gap-5">
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
      {isOpen && (
        <VerificationModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          type="text"
          id="otp"
          name="otp"
          register={register}
          handleSubmit={handleSubmit}
          handleOtp={handleOtp}
          isVerify={isVerify}
        />
      )}
      {isVerify && (
        <SuccessModal
        isVerify={isVerify}
        setIsVerify={setIsVerify}
          autoCloseTime={autoCloseTime}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
        />
      )}
    </div>
  );
};

export default Login;
