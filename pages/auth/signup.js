import React from "react";
import FormRow from "../../components/FormRow";
import sectors_data from "../../libs/sectors_data";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Head from "next/head";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    reset,
  } = useForm();
  // const handleOnSubmit = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setValues({ ...values });
  // };
  const onSubmit = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <div className="mx-auto bg-[#f6faff] relative grid">
      <Head>
        <title>Signup</title>
        <meta
          name="description"
          content="Sign up your company with our platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative p-4 text-center align-middle place-self-center bg-white top-28">
        <h className="font-serif text-2xl font-semibold">Sign up for free</h>
        <p>Create your account and start your free trial today</p>
        <form className="grid p-2" onSubmit={handleSubmit(onSubmit)}>
          {errors.company_name && (
            <p className="text-sm text-red-500">
              {errors.company_name.message}
            </p>
          )}
          <label for="company_name" className="text-start text-sm">
            Company Name
          </label>
          <input
            name={"company_name"}
            placeholder={"company name"}
            type={"text"}
            className="p-1 rounded-md border-2  outline-none width-full "
            {...register("company_name", {
              required: "company name is required",
            })}
          />

          {/* Email */}
          <label for="email" className="text-start text-sm">
            Email
          </label>

          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
          <input
            name={"email"}
            placeholder={"email"}
            type={"email"}
            className="p-1 rounded-md border-2 outline-none width-full "
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />

          {/* Phone */}

          <div>
            {errors["phone-input"] && (
              <p className="text-sm text-red-500">Invalid Phone Number</p>
            )}
            {/* <label htmlFor="phone-input">Phone Number</label> */}
            <label for="email" className="text-start text-sm">
              Phone Number
            </label>
            <Controller
              name="phone-input"
              control={control}
              rules={{
                validate: (value) => isValidPhoneNumber(value),
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  value={value}
                  onChange={onChange}
                  defaultCountry="ET"
                  id="phone-input"
                  placeholder=" phone number"
                  className="p-1 rounded-md border-2 outline-none width-full "
                />
              )}
            />
          </div>

          {/* Password */}
          {errors.password && (
            <p className="text-sm text-red-500 max-w-sm">
              {errors.password.message}
            </p>
          )}
          <label for="password" className="text-start text-sm">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            {...register("password", {
              required: "Password is required.",
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                message:
                  " Password should contain at least one uppercase letter, one lowercase letter and one digit.",
              },
              minLength: {
                value: 6,
                message: "Password should be at-least 6 characters.",
              },
            })}
            className="p-1 rounded-md border-2 outline-none width-full "
          />

          {/* Confirm Password */}
          {errors.confirm_password?.type === "required" && (
            <p className="text-sm text-red-500 max-w-sm">
              Password is required.
            </p>
          )}
          {errors.confirm_password?.type === "validate" && (
            <p className="text-sm text-red-500 max-w-sm">
              Your passwords do no match
            </p>
          )}
          <label for="confirm_password" className="text-start text-sm">
            Confirm Password
          </label>
          <input
            {...register("confirm_password", {
              required: "Confirm password is required",
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
            placeholder="confirm password"
            type={"password"}
            name="confirm_password"
            className="p-1 rounded-md border-2 outline-none width-full "
          />
          {/* Address */}
          {errors.address && (
            <p className="text-sm text-red-500">{errors.address.message}</p>
          )}
          <label for="address" className="text-start text-sm">
            Address
          </label>
          <input
            name={"address"}
            placeholder={"address"}
            type={"text"}
            className="p-1 rounded-md border-2  outline-none width-full "
            {...register("address", {
              required: "Address is required",
            })}
          />

          {/* Website */}
          {errors.website && (
            <p className="text-sm text-red-500">{errors.website.message}</p>
          )}
          <label for="website" className="text-start text-sm">
            Website
          </label>
          <input
            name={"website"}
            placeholder={"website (optional)"}
            type={"text"}
            className="p-1 rounded-md border-2  outline-none width-full "
            {...register("website")}
          />

          {/* Drop Down */}
          <label for="sectors" className="text-start text-sm">
            Sector :
          </label>
          <select
            name="sectors"
            id="sectors"
            className="p-1 rounded-md border-2 outline-none width-full "
            {...register("sectors")}
          >
            {sectors_data.map((sector) => {
              return (
                <option key={sector.value} value={sector.value}>
                  {sector.name}
                </option>
              );
            })}
          </select>

          {/* Numbers */}

          {/* TIN */}
          {errors.tin && (
            <p className="text-sm text-red-500">{errors.tin.message}</p>
          )}
          <label for="tin" className="text-start text-sm">
            TIN
          </label>
          <input
            name={"tin"}
            placeholder={"tin"}
            type={"number"}
            className="p-1 rounded-md border-2  outline-none width-full "
            {...register("tin", { required: "TIN number is required" })}
          />

          {/* Enterprise Number */}
          {/* TIN */}
          {errors.enterprise_number && (
            <p className="text-sm text-red-500">
              {errors.enterprise_number.message}
            </p>
          )}
          <label for="enterprise_number" className="text-start text-sm">
            Enterprise Number
          </label>
          <input
            name={"enterprise_number"}
            placeholder={"enterprise number"}
            type={"number"}
            className="p-1 rounded-md border-2  outline-none width-full "
            {...register("enterprise_number", {
              required: "Enterprise number is required",
            })}
          />

          {/* Account Number */}
          {errors.account_number && (
            <p className="text-sm text-red-500">
              {errors.account_number.message}
            </p>
          )}
          <label for="account_number" className="text-start text-sm">
            Account Number
          </label>
          <input
            name={"account_number"}
            placeholder={"account number"}
            type={"number"}
            className="p-1 rounded-md border-2  outline-none width-full "
            {...register("account_number", {
              required: "Account number is required",
            })}
          />

          {/* <button
            className="px-4 py-[2px] text-white rounded-md bg-[#00A1f2] h-fit hover:bg-white hover:text-[#00A1f2]"
            onClick={handleOnSubmit}
          >
            Submit
          </button> */}
          <input
            className="px-4 py-[2px] text-white rounded-md bg-[#00A1f2] h-fit hover:bg-white hover:text-[#00A1f2]"
            type={"submit"}
          />
        </form>
      </main>
    </div>
  );
};

export default Signup;
