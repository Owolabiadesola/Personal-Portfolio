import React, { Component } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";

export default class Contacts extends Component {
  render() {
    return (
      <div class=" container    ">
        <h2
          class=""
          style={{
            marginLeft: "4rem",
            marginTop: "3rem",
          }}
        >
          CONTACTS
        </h2>

        <div
          class="p-5  bg-primary"
          style={{ width: "50rem", height: "29rem" }}
        >
          <p class="text-light fs-5">Click on the icons to connect with me</p>
          <hr />
          <a
            href="https://wa.me/+2349068331123"
            class="text-light fs-5 text-decoration-none "
          >
            <BsWhatsapp
              style={{
                width: "5rem",
                height: "5rem",
                marginLeft: "3rem",
              }}
            />
          </a>
          <span>
            <a
              href="https://instagram.com/adesola_owolabi_niffy?igshid=NGExMmI2YTkyZg=="
              class="text-light fs-5 text-decoration-none "
            >
              <BsInstagram
                style={{
                  width: "5rem",
                  height: "5rem",
                  marginLeft: "17rem",
                }}
              />
            </a>
          </span>
          <hr />
          <a
            href="https://twitter.com/Owolabiadesola6?t=C8ZBCXS6PfWKhx9qoS0vPA&s=09"
            class="text-light fs-5 text-decoration-none "
          >
            <FiTwitter
              style={{
                width: "5rem",
                height: "5rem",
                marginLeft: "3rem",
              }}
            />
          </a>{" "}
          <span>
            {" "}
            <a
              href="https://www.linkedin.com/in/adesola-owolabi-579370269"
              class="text-light fs-5 text-decoration-none "
            >
              <BsLinkedin
                style={{
                  width: "5rem",
                  height: "5rem",
                  marginLeft: "17rem",
                }}
              />
            </a>
          </span>
          <hr />
          <AiOutlineMail
            style={{
              width: "6rem",
              height: "6rem",
              marginLeft: "3rem",
              color: "white",
            }}
          />
          <span>
            <a
              href="https://www.facebook.com/owolabioluwanifemi.adesola?mibextid=ZbWKwL"
              class="text-light fs-5 text-decoration-none "
            >
              <GrFacebook
                style={{
                  width: "5rem",
                  height: "5rem",
                  marginLeft: "16rem",
                }}
              />
            </a>
          </span>
          <hr />
        </div>
      </div>
    );
  }
}
