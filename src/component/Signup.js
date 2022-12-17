import React from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import Styled from "styled-components";
import signupImage from "../Images/signup-image.jpg";
import duckImage from "../Images/6000_5_05.jpg";
import "react-phone-number-input/style.css";
import "react-datepicker/dist/react-datepicker.css";

function StudentSignup() {
  const options = [
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "Argentina", label: "Argentina" },
    { value: "Australia", label: "Australia" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Brazil", label: "Brazil" },
    { value: "Denmark", label: "Denmark" },
    { value: "Egypt", label: "Egypt" },
    { value: "France", label: "France" },
    { value: "Germany", label: "Germany" },
    { value: "India", label: "India" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Iran (Islamic Republic of)", label: "Iran" },
    { value: "Iraq", label: "Iraq" },
    { value: "Italy", label: "Italy" },
    { value: "Japan", label: "Japan" },
    { value: "Jordan", label: "Jordan" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Malaysia", label: "Malaysia" },
    { value: "Mexico", label: "Mexico" },
    { value: "Morocco", label: "Morocco" },
    { value: "Netherlands (the)", label: "Neatherland" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Norway", label: "Norway" },
    { value: "Oman", label: "Oman" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "Palestine, State of", label: "Palestine" },
    { value: "Philippines (the)", label: "Philippines" },
    { value: "Poland", label: "Poland" },
    { value: "Qatar", label: "Qatar" },
    { value: "Romania", label: "Romania" },
    { value: "Russian Federation (the)", label: "Russia" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Singapore", label: "Singapore" },
    { value: "South Africa", label: "South Africa" },
    { value: "Spain", label: "Spain" },
    { value: "Sri Lanka", label: "Sri Lanka" },
    { value: "Sweden", label: "Sweden" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "Syrian Arab Republic", label: "Syria" },
    { value: "Tunisia", label: "Tunisia" },
    { value: "Turkey", label: "Turkey" },
    { value: "Turkmenistan", label: "Turkmenistan" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "United Arab Emirates (the)", label: "United Arab Emirates" },
    {
      value: "United Kingdom of Great Britain and Northern Ireland (the)",
      label: "United Kingdom",
    },
    {
      value: "United States of America (the)",
      label: "United States of America",
    },
    { value: "Uzbekistan", label: "Uzbekistan" },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  return (
    <Styld.SignupContainer className="flex w-9/12 mx-auto rounded-lg bg-white py-14 px-24 mt-14 justify-evenly items-center">
      <div className="w-6/12" id="leftSubContainer">
        <div>
          <h2 className="font-bold text-4xl">Sign up</h2>
          <Styld.PageBreaker />
          <p style={{ marginTop: "20px", fontSize: "larger" }}>
            Personal Details :
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6"
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
            <label>Your Gender: </label>
            <div className="flex">
              <Styld.Gender>
                <input
                  type="radio"
                  id="gender"
                  value="Male"
                  {...register("gender", {
                    required: "Hey! you, your gender please.",
                  })}
                />
                <label for="gender">Male</label>
              </Styld.Gender>
              <Styld.Gender>
                <input
                  type="radio"
                  id="gender"
                  value="Female"
                  {...register("gender")}
                />
                <label for="gender">Female</label>
              </Styld.Gender>
            </div>
            {errors.gender && (
              <>
                <div
                  className="bg-red-100 border border-red-400 text-red-700 rounded relative p-2.5 mt-2.5 font-bold w-9/12"
                  role="alert"
                  style={{ fontSize: "12px", padding: "5px 20px" }}
                >
                  <span className="block sm:inline">
                    {errors?.gender?.message}
                  </span>
                </div>
              </>
            )}
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
                      /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[a-z]{2,3}/gm,
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
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    onChange={onChange}
                    selected={value}
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
          <Styld.PageBreaker />
          <div>
            <p style={{ marginTop: "20px", fontSize: "larger" }}>
              Demographic Details :
            </p>
          </div>
          <div className="form-group mt-3">
            <label>Home Address :</label>
            <div className="block">
              <Styld.FormTextArea
                type="text"
                className="form-control"
                id="homeAddress"
                placeholder="Ex: john.doe@example.com"
                {...register("homeAddress", {
                  required: "Hey! home address is required.",
                })}
              />
              {errors.homeAddress && (
                <>
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 rounded relative p-2.5 mt-2.5 font-bold w-9/12"
                    role="alert"
                    style={{ fontSize: "12px", padding: "5px 20px" }}
                  >
                    <span className="block sm:inline">
                      {errors?.homeAddress?.message}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Select Country: </label>
            <div className="block">
              <Controller
                control={control}
                name="country"
                rules={{ required: "Please select out your country." }}
                render={({ field: { onChange, value } }) => (
                  <Select
                    className="text-black"
                    value={value?.value}
                    options={options}
                    placeholder="Select your country"
                    onChange={(selected) => {
                      onChange(selected?.value || []);
                    }}
                    isClearable
                  />
                )}
              />
              {errors.country && (
                <>
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 rounded relative p-2.5 mt-2.5 font-bold w-9/12"
                    role="alert"
                    style={{ fontSize: "12px", padding: "5px 20px" }}
                  >
                    <span className="block sm:inline">
                      {errors?.country?.message}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* <div className="form-group mt-3">
            <label>Phone Number: </label>
            <div className="block">
              <Controller
                control={control}
                name="phoneNumber"
                rules={{ required: "Please select out your country." }}
                render={({ field: { onChange, value } }) => (
                    <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    className="phoneComponent"
                    onChange={setValue}/>
                )}
              />
              {errors.phoneNumber && (
                <>
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 rounded relative p-2.5 mt-2.5 font-bold w-9/12"
                    role="alert"
                    style={{ fontSize: "12px", padding: "5px 20px" }}
                  >
                    <span className="block sm:inline">
                      {errors?.phoneNumber?.message}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div> */}
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
        <img
          src={duckImage}
          alt={"duckImage"}
          style={{
            borderRadius: "5px",
            width: "60%",
            margin: "145px 0 0 40px",
          }}
        />
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

  PageBreaker: Styled.hr`
    border: 1px solid #e3e3e3;
    margin-top: 25px;
    `,

  FormTextArea: Styled.textarea`
    height: auto;
    width: 100%;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    padding: 5px 10px;

    &:focus{
        outline: none;
        border: 0;
        border: 1px solid #adadad;
    }
    `,
  FormRadio: Styled.input`
    `,
  Gender:Styled.div`
    display: flex;
    width: 75px;
    justify-content: space-evenly;
  `
};
