import React, { useState } from "react";
import "../../styles/Contact.css";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xzbqyrpg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="name">name</label>
      <input id="name" type="name" name="name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
