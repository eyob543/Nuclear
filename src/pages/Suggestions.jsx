import "./suggestions.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { database } from "../firebase";
import Typography from "@mui/material/Typography";
import { set, ref } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
export default function Suggestions() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [isPosted, setIsPosted] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isPosted) {
      setSuccessMessage("Your Blog Has Been posted successfully!");
      setTimeout(() => setSuccessMessage(""), 5000);
      setTimeout(() => setIsPosted(false), 5000);
    }
  }, [isPosted]);
  const db = database;

  const onSubmit = (data) => {
    set(ref(db, `suggestions/${uuidv4()}`), {
      title: data.firstName,
      suggestion: data.suggestion,
      email: data.email,
    });
    setIsPosted(true);
    navigate("/layout/view-suggestions");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="firstName">First name(optional):</label>
          <input
            name="firstName"
            type="text"
            placeholder="First name"
            {...register("firstName")}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="email">Email(optional):</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>Leave your suggestions here:</label>
          <textarea
            {...register("suggestion", { required: true })}
            rows={5}
            cols={45}
          ></textarea>
          {errors.suggestion?.type === "required" && (
            <p className="error" role="alert">
              Suggestion is required
            </p>
          )}
        </div>
        <input type="submit" className="submitButton" />
        {successMessage && (
          <Typography variant="h5" sx={{ color: "green" }}>
            {successMessage}
          </Typography>
        )}
      </form>
    </>
  );
}
