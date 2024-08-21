import styles from "../styles/Contact.module.css";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, phone, email, desc);
    const url = "http://localhost:3000/api/postcontact/";
    const data = { name, email, desc, phone };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Thanks for contacting us!");
        setemail("");
        setname("");
        setphone("");
        setdesc("");
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
  };
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <h1 className={`${inter.className} ${styles.title}`}>Contact Us</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={`row mb-3 ${styles.row}`}>
          <label
            htmlFor="name"
            className={`col-sm-2 col-form-label ${styles.label}`}
          >
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`form-control ${styles.formControl}`}
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </div>
        </div>
        <div className={`row mb-3 ${styles.row}`}>
          <label
            htmlFor="inputEmail3"
            className={`col-sm-2 col-form-label ${styles.label}`}
          >
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className={`form-control ${styles.formControl}`}
              id="inputEmail3"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div className={`row mb-3 ${styles.row}`}>
          <label
            htmlFor="phone"
            className={`col-sm-2 col-form-label ${styles.label}`}
          >
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className={`form-control ${styles.formControl}`}
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="desc" className={styles.label}>
            Write your concern here
          </label>
          <textarea
            className={`form-control ${styles.formControl}`}
            id="desc"
            name="desc"
            rows="3"
            onChange={handleChange}
            value={desc}
            placeholder="Write your concern here"
          ></textarea>
        </div>
        <button
          type="submit"
          className={`btn btn-primary ${styles.btnPrimary}`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
