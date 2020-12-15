import React from "react";
import logo from "./assets/commerce.png";
import shop from "./assets/eCommerce.jpg";
import compatible from "./assets/compatible.jpg";
import support from "./assets/support.png";
import produit from "./assets/produit.png";
import payment from "./assets/payment.png";
import satisfaction from "./assets/satisfaction.jpg";
import zakaria from "./assets/zakaria.jpg";
import moneyback from "./assets/moneyback.jpg";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#advantages">Benefits</a>
                </li>

                <li>
                  <a href="#contact">Contact</a>
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
      <div className="row2">
        <div className="column">
          <div className="card">
            <img src={compatible} width="200px"></img>
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
      <div className="row2">
        <div className="column">
          <div className="card">
            <img src={produit} width="127px"></img>
            <h3>Products</h3>
            <p>All products are originals </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              style={{ borderRadius: "50%" }}
              src={payment}
              width="337px"
            ></img>
            <h3>Payment options</h3>

            <p>We are available anytime for anything</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={satisfaction} width="126px"></img>
            <h3> Client </h3>
            <p>customer satisfaction is my goal</p>
          </div>
        </div>
      </div>
      <div className="container1" id="contact">
        <div style={{ textAlign: "center" }}>
          <h1 className="h11">Contact Us</h1>
        </div>
        <div className="row3">
          <div className="column2">
            <div className="card2">
              <div className="flex">
                <img className="image" src={zakaria} />
                <div style={{ marginTop: "10%" }}>
                  <h3>for all my informations this is my website :</h3>
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
            <form>
              <label for="fname">Full Name</label>
              <input
                type="text"
                id="fname"
                name="fullname"
                placeholder="Your full name.."
              />

              <label for="country">Your Email</label>
              <input type="email" placeholder=" your email here please" />
              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "170px" }}
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div className="footerContainer">
          <h5 className="copyright">
            Copyright © 2020 All right reserved || Design with ❤️ by
            LOUKILIZAKARIA{" "}
          </h5>
        </div>
      </footer>
    </>
  );
};

export default Home;
