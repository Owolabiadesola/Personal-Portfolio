import React from "react";

import { MdOutlineWavingHand } from "react-icons/md";

export default function Homepage() {
  return (
    <section
      class="container bg-light"
      style={{
        paddingLeft: "4rem",
      }}
    >
      <div class="w-75% h-75%">
        <div class="  d-flex float-end m-2">
          <img
            style={{
              width: "19rem",
              height: "36rem",
              paddingBottom: "3rem",
              marginLeft: "1rem",
            }}
            class="img-fluid "
            src="/Images/Finegirl.jpg"
            alt="homepage img "
          />
        </div>
        <br />

        <div
          class="m-5 pt-5"
          style={{
            marginTop: "3rem",
          }}
        >
          <div>
            <h1 className="top1 ">
              Hello
              <span>
                <MdOutlineWavingHand />
              </span>
              <br />
              I'm Adesola Owolabi, <br />A Front-End Web Developer.
            </h1>
            <br />
            <p className="top2 fs-4" style={{ color: "plum" }}>
              <strong>(HTML, CSS, Bootstrap, ReactJS)</strong>
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class=" container px-5">
          <input
            class="text-light"
            type="text"
            placeholder="Enter address"
            style={{
              backgroundColor: "plum",
              borderRadius: "1rem",
            }}
          />
          <span>
            <button
              class=""
              style={{
                backgroundColor: "plum",
                marginLeft: "2rem",
                borderRadius: "5px",
                color: "white",
              }}
            >
              Connect With Me
            </button>
            <br />
            <br />
            <br />
            <br />
          </span>
        </div>
      </div>
    </section>
  );
}
