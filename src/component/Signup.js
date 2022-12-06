import React, {useState} from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Styled from "styled-components";
import signupImage from "../Images/signup-image.jpg";

function StudentSignup() {
  const [birthDate, setBirthDate] = useState(new Date());

  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Styld.SignupContainer className="flex w-9/12 mx-auto rounded-lg bg-white py-14 px-24 mt-14 justify-evenly items-center">
      <div className="w-6/12" id="leftSubContainer">
        <div>
          <h2 className="font-bold text-4xl">Sign up</h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-14"
          style={{ fontFamily: "Noto Sans" }}
        >
          <div className="form-group mt-3">
            <label>Full Name : </label>
            <div className="block">
              <Styld.FormInput
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Ex: John Doe"
                {...register("fullName", {
                  required: "Hey! your full name please.",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letters required.",
                  },
                  pattern: {
                    value: /^[a-zA-Z][a-zA-Z\. ]*$/gim,
                    message:
                      "Digits, special character are not allowed in full name.",
                  },
                })}
              />
              {errors.fullName && (
                <>
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 rounded relative p-2.5 mt-2.5 font-bold w-9/12"
                    role="alert"
                    style={{ fontSize: "12px", padding: "5px 20px" }}
                  >
                    <span className="block sm:inline">
                      {errors?.fullName?.message}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Father's Full Name :</label>
            <div className="block">
              <Styld.FormInput
                type="text"
                className="form-control"
                id="fatherName"
                placeholder="Ex: Macburry Lew"
                {...register("fatherName", {
                  required: "Hey! your father full name please.",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letters required.",
                  },
                  pattern: {
                    value: /^[a-zA-Z][a-zA-Z\. ]*$/gim,
                    message:
                      "Digits, special character are not allowed in full name.",
                  },
                })}
              />
              {errors.fatherName && (
                <>
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 rounded relative p-2.5 mt-2.5 font-bold w-9/12"
                    role="alert"
                    style={{ fontSize: "12px", padding: "5px 20px" }}
                  >
                    <span className="block sm:inline">
                      {errors?.fatherName?.message}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Email Address :</label>
            <div className="block">
              <Styld.FormInput
                type="email"
                className="form-control"
                id="email"
                placeholder="Ex: john.doe@example.com"
                {...register("email", {
                  required: "Hey! email is required.",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 letters required.",
                  },
                  pattern: {
                    value:
                      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
                    message: "Looks like email is not valid.",
                  },
                })}
              />
              {errors.email && (
                <>
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 rounded relative p-2.5 mt-2.5 font-bold w-9/12"
                    role="alert"
                    style={{ fontSize: "12px", padding: "5px 20px" }}
                  >
                    <span className="block sm:inline">
                      {errors?.email?.message}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Date of Birth :</label>
            <div className="block">
              <Controller
                control={control}
                name="dateOfBirth"
                rules={{ required: "Select your date of birth." }}
                render={({ field }) => (
                  <DatePicker
                    selected={birthDate}
                    onChange={(date) => setBirthDate(date)}
                    isClearable
                    placeholderText="Select your D.O.B"
                    className="date_input"
                  />
                )}
              />
            </div>
          </div>
          {errors.dateOfBirth && (
            <>
              <div
                className="bg-red-100 border border-red-400 text-red-700 rounded relative p-2.5 mt-2.5 font-bold w-9/12"
                role="alert"
                style={{ fontSize: "12px", padding: "5px 20px" }}
              >
                <span className="block sm:inline">
                  {errors?.dateOfBirth?.message}
                </span>
              </div>
            </>
          )}
          <Styld.Submit
            type="submit"
            className="btn btn-primary mt-3 border border-2 border-dark"
          >
            ✅ Submit Details
          </Styld.Submit>
        </form>
      </div>
      <div className="w-5/12" id="rightSubContainer">
        <img src={signupImage} alt={"signupImage"} />
      </div>
    </Styld.SignupContainer>
  );
}

export default StudentSignup;

const Styld = {
  FormInput: Styled.input`
            width: 75%;
            margin-top:10px;
            border-radius: 5px;
            display: block;
            padding: 5px 10px;
            border: 1px solid #e3e3e3;

            &:focus{
                outline: none;
                border: 0;
                border: 1px solid #adadad;
            }
    `,
  Submit: Styled.button`
            border: 2px solid #212529;
            color: #fff;
    background-color: #0d6efd;
    padding: 0.375rem 0.75rem;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    font-weight: 400;
    line-height: 1.5;
    font-size: 1rem;
    border-radius: 0.25rem;
    `,
  SignupContainer: Styled.div`
    font-family: "Poppins";
    line-height: 1.66;
    padding-left: 16rem;
    box-shadow:rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    `,
};
