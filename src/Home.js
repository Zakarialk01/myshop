import React, { useState, useEffect } from "react";
//import logo from "./assets/commerce.png";
import logo from "./assets/commerce.png";
import shop from "./assets/eCommerce.jpg";
import compatible from "./assets/compatible.jpg";
import support from "./assets/support.png";
import produit from "./assets/produit.png";
import payment from "./assets/payment.png";
import satisfaction from "./assets/satisfaction.jpg";
import zakaria from "./assets/zakaria.jpg";
import Louboutin from "./assets/Louboutin.gif";
import Balenciaga from "./assets/Balenciaga.jpg";
import Adidas from "./assets/Adidas.png";
import Mcqueen from "./assets/Mcqueen.png";
import moneyback from "./assets/moneyback.jpg";

import { Link } from "react-router-dom";
import "./Home.css";
import { db } from "./base";
import { useForm } from "react-hook-form";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const [loader, setLoader] = useState(false);
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };

  const clickHandler = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleName = (e) => {
    console.log(e);
    setName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const checkSubmit = (e) => {
    e.preventDefault();
    e.target.reset(); //reset inputs after submit
    setLoader(true);

    db.collection("customer")
      .add({
        email: email,
        name: name,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setName("");
    setEmail("");
    setMessage("");
  };
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src={logo} width="50px" />
            </div>
            <nav>
              <ul>
                <li>
                  <a className="scroll" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="scroll" href="#advantages">
                    Benefits
                  </a>
                </li>

                <li>
                  <a className="scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="row" id="#">
            <div className="col-2">
              <h1>
                Welcome to my new <br />
                shop ! thank you for entering{" "}
              </h1>
              <br></br>
              <p>
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page, le texte définitif
              </p>
              <a href="/Products" className="btn" component={Link}>
                {" "}
                View the shop{" "}
              </a>
            </div>
            <div className="col-2">
              <img src={shop} />
            </div>
          </div>
        </div>
      </div>

      <h1 className="h1" id="advantages">
        Our <span className="span"> Advantages</span>{" "}
      </h1>
      <div className="row2" data-aos="zoom-in" data-aos-duration="2000">
        <div className="column">
          <div className="card">
            <img src={compatible} width="120px"></img>
            <h3>Compatibility</h3>
            <p>Compatibility with all devices</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              style={{ borderRadius: "50%" }}
              src={support}
              width="120px"
            ></img>
            <h3>24/7 Online support</h3>

            <p>We are available anytime for anything</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={moneyback} width="119px"></img>
            <h3>100% Money back </h3>
            <p>Money back guarantee</p>
          </div>
        </div>
      </div>
      <div className="row2" data-aos="zoom-in" data-aos-duration="2000">
        <div className="column">
          <div className="card">
            <img src={produit} width="127px"></img>
            <h3>Products</h3>
            <p>All products are originals </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="payment" src={payment} width="283px"></img>
            <h3>Payment options</h3>

            <p>stripe options</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="benefits" src={satisfaction} width="126px"></img>
            <h3> Client </h3>
            <p>customer satisfaction is my goal</p>
          </div>
        </div>
      </div>
      <div className="container1" id="contact">
        <div style={{ textAlign: "center" }}>
          <h1 className="h11">Contact Us</h1>
        </div>
        <div className="row3 " data-aos="fade-up" data-aos-duration="2500">
          <div className="column2">
            <div className="card2">
              <div className="flex">
                <img className="image" src={zakaria} />
                <div style={{ marginTop: "10%" }}>
                  <h3>For more informations :</h3>
                  <a
                    className="a"
                    href="https://loukilizakaria-a597d.web.app/"
                    target="_blank"
                  >
                    https://loukilizakaria-a597d.web.app/{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="column2">
            <form onSubmit={checkSubmit}>
              <label for="fname">Full Name</label>
              <input
                className="input"
                type="text"
                id="fname"
                name="fullname"
                placeholder="Your full name.."
                onChange={handleName}
              />
              <label for="country">Your Email</label>
              <input
                className="input"
                type="email"
                ref={register({
                  required: "Required",
                  pattern: {
                    value: " [a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
                    message: "invalid email address",
                  },
                })}
                placeholder=" your email please "
                onChange={handleEmail}
              />

              {errors.email && errors.email.message}
              <label for="subject">Subject</label>
              <textarea
                className="textarea"
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "170px" }}
                onChange={handleMessage}
              ></textarea>
              <button
                className="button"
                type="submit"
                value="submit"
                onSubmit={handleSubmit(onSubmit)}
                disabled={!message}
                disabled={!name}
                disabled={!email}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="brands" data-aos="zoom-in" data-aos-duration="1500">
        <div className="small-container">
          <div className="row">
            <div className="row5">
              <img src={Adidas} />
            </div>
            <div className="row5">
              <img src={Mcqueen} />
            </div>
            <div className="row5">
              <img src={Balenciaga} />
            </div>
            <div className="row5">
              <img src={Louboutin} />
            </div>
          </div>
        </div>
      </div>
      <footer class="footer2">
        <div class="container4">
          <div class="row4">
            <div class="footer2-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div class="footer2-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div class="footer2-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">bag</a>
                </li>
                <li>
                  <a href="#">shoes</a>
                </li>
                <li>
                  <a href="#">dress</a>
                </li>
              </ul>
            </div>
            <div class="footer2-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <h5 className="copyright">
          Copyright © 2020 All right reserved || Design with ❤️ by
          LOUKILIZAKARIA{" "}
        </h5>
      </div>
    </>
  );
};

export default Home;
