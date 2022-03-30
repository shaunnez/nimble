import Image from "next/image";
import React, { useState } from "react";
import Contact from "./contact";

import styles from "./footer.module.css";

interface FooterProps {
  footerData: any;
}

export default function Footer({ footerData }: FooterProps) {
  const [projectSize, setProjectSize] = useState("");
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

    if (projectSize.length <= 0) {
      tempErrors["projectSize"] = true;
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
            projectSize: projectSize,
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
          <p>ProjectSize: {projectSize}</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Contact Number: {phone}</p>
        </div>
      </div>
    );
  }

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.contact}>
        <div className={styles.content}>
          <a className={styles.contactLogo}>
            <Image src="/logo.svg" alt="Nimble Logo" layout={"fill"} />
          </a>
          <div dangerouslySetInnerHTML={{ __html: footerData }} />
        </div>
        <div className={styles.form}>
          <h4>Tell us about your project</h4>
          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label>What size is your project? S / M / L / XL?</label>
              <input
                name="projectSize"
                required
                min={0}
                onChange={(e) => {
                  setProjectSize(e.target.value);
                }}
              />
              {errors?.projectSize && (
                <p className={styles.error}>Please enter in a project size</p>
              )}
            </div>
            <div className={styles.row}>
              <label>Name:</label>
              <input
                type="text"
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
              <label>Phone number:</label>
              <input
                type="text"
                name="phone"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              {errors?.contact && (
                <p className={styles.error}>Please enter in a phone number.</p>
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
      </div>

      <div className={styles.bottomFooter}>
        <div className={styles.bottomFooterText}>@Nimble</div>
        <div className={styles.bottomFooterLinks}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // @ts-ignore
              document.querySelector("#small .sectionArrow").click();
              setTimeout(() => {
                window.scroll({
                  top: document.getElementById("small").offsetTop - 80,
                  behavior: "smooth", // 👈
                });
              }, 500);
            }}
          >
            S
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // @ts-ignore
              document.querySelector("#medium .sectionArrow").click();
              setTimeout(() => {
                window.scroll({
                  top: document.getElementById("medium").offsetTop - 80,
                  behavior: "smooth", // 👈
                });
              }, 500);
            }}
          >
            M
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // @ts-ignore
              document.querySelector("#large .sectionArrow").click();
              setTimeout(() => {
                window.scroll({
                  top: document.getElementById("large").offsetTop - 80,
                  behavior: "smooth", // 👈
                });
              }, 500);
            }}
          >
            L
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // @ts-ignore
              document.querySelector("#xlarge .sectionArrow").click();
              setTimeout(() => {
                window.scroll({
                  top: document.getElementById("xlarge").offsetTop - 80,
                  behavior: "smooth", // 👈
                });
              }, 500);
            }}
          >
            XL
          </a>
          <span>PRODUCTIONS</span>
        </div>
      </div>
    </footer>
  );
}
