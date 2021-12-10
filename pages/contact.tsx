import { GetContactContentDocument, GetContactContentQuery } from "generated";
import type { InferGetStaticPropsType } from "next";
import { GraphQLClient } from "graphql-request";
import React, { useState } from "react";
import type { NextPage } from "next";

import styles from "./contact.module.css";
import Footer from "components/footer";

const client = new GraphQLClient(
  "https://api-ap-southeast-2.graphcms.com/v2/ckwwvc5mz82wk01z1bsq3f9ko/master"
);

export const getStaticProps = async () => {
  const data: GetContactContentQuery = await client.request(
    GetContactContentDocument
  );
  return {
    props: {
      data,
    },
  };
};

function Contact({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  //   Form validation state
  const [errors, setErrors] = useState({} as any);
  //   Setting button text on form submission
  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const isEmail = (email: string) => {
    // eslint-disable-next-line
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && email.length < 256 && regex.test(email);
  };

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {} as any;
    let isValid = true;

    if (budget.length <= 0) {
      tempErrors["budget"] = true;
      isValid = false;
    }
    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0 || isEmail(email) === false) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }
    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (submitting) {
      return;
    }

    let isValidForm = handleValidation();

    if (isValidForm) {
      setSubmitting(true);
      try {
        const res = await fetch("/api/contact", {
          body: JSON.stringify({
            budget: budget,
            name: name,
            email: email,
            phone: phone,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
        console.log("herea", res);
        const { error } = await res.json();
        console.log("here", res, error);
        if (error) {
          throw Error();
        }
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
      } catch (ex) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
      } finally {
        setSubmitting(false);
      }
    }
  };

  if (showSuccessMessage) {
    return (
      <div className={styles.contact}>
        <div className={styles.form}>
          <h4>Thanks for getting in touch!</h4>
          <p>Budget: {budget}</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Contact Number: {phone}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.contact}>
        <div className={styles.form}>
          <h4>Tell us about your project</h4>
          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label>Budget (if known):</label>
              <input
                type="number"
                placeholder="Type here"
                name="budget"
                required
                min={0}
                onChange={(e) => {
                  setBudget(e.target.value);
                }}
              />
              {errors?.budget && (
                <p className={styles.error}>
                  Please enter in a budget above 0.
                </p>
              )}
            </div>
            <div className={styles.row}>
              <label>Name:</label>
              <input
                type="text"
                placeholder="Type here"
                name="name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {errors?.Name && (
                <p className={styles.error}>Please enter in a name.</p>
              )}
            </div>
            <div className={styles.row}>
              <label>Email:</label>
              <input
                type="text"
                placeholder="Type here"
                name="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {errors?.email && (
                <p className={styles.error}>Please enter in a valid e-mail.</p>
              )}
            </div>
            <div className={styles.row}>
              <label>Contact Number:</label>
              <input
                type="text"
                placeholder="Type here"
                name="phone"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              {errors?.contact && (
                <p className={styles.error}>
                  Please enter in a contact number.
                </p>
              )}
            </div>
            <div className={styles.row}>
              <button type="submit" disabled={submitting}>
                {submitting ? "Submitting" : "Submit"}
              </button>

              {showFailureMessage && (
                <p className={styles.error}>
                  There was a problem submitting the form. Please check your
                  entry, or try again later.
                </p>
              )}
            </div>
          </form>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: data?.contact?.getInTouch?.html }}
        />

        <div className={styles.spacer} />
      </div>
      <Footer footerContent={data.footer} />
    </>
  );
}

export default Contact;
