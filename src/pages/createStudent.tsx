import React from "react"
import {useForm} from "react-hook-form";
import {IStudent } from "../interface/student";

const createStudent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  }=useForm ({ mode:"all"});
  return (
  <>
  [5:59 pm, 13/6/2024] +91 85803 06757: <div className="create_student_section">
        <form>
          <div>
            <label htmlFor="name"></label>
            <input title="name" type="text" id="name" />
          </div>
          <div>
            <label htmlFor="age"></label>
            <input title="age" type="number" id="age" />
          </div>
          <div>
            <label htmlFor="phone"></label>
            <input title="phone" type="number" id="phone" />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input title="email" type="text" id="email" />
          </div>
        </form>
      </div>
[6:13 pm, 13/6/2024] +91 85803 06757: <div className="create_student_section">
        <form onSubmit={handleSubmit(createNewStudent)}>
          <div>
            <label htmlFor="name"></label>
            <input
              title="name"
              type="text"
              id="name"
              {...register("name", {
                required: { value: true, message: "Name is required" },
              })}
            />
            <div className="error_message">{errors.name?.message}</div>
          </div>
          <div>
            <label htmlFor="age"></label>
            <input
              title="age"
              type="number"
              id="age"
              {...register("age", {
                required: { value: true, message: "Age is required" },
              })}
            />
            <div className="error_message">{errors.age?.message}</div>
          </div>
          <div>
            <label htmlFor="phone"></label>
            <input
              title="phone"
              type="number"
              id="phone"
              {...register("phone", {
                required: { value: true, message: "Phone is required" },
              })}
            />
            <div className="error_message">{errors.phone?.message}</div>
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              title="email"
              type="text"
              id="email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
            />
            <div className="error_message">{errors.email?.message}</div>
          </div>

          <button title="submit" type="submit">
            Submit
          </button>
        </form>
      </div>