import React from "react";

export default function About() {
  return (
    <div
      class="conatiner"
      style={{
        marginBottom: "3rem",
      }}
    >
      <div>
        <h2
          class=" "
          style={{
            marginLeft: "10rem",
          }}
        >
          ABOUT ME
        </h2>
      </div>
      <hr />
      <div class=" container col-md-5 d-flex float-start ">
        <img
          style={{
            width: "27rem",
            height: "30rem",
            marginLeft: "10rem",
            borderRadius: "15rem",
          }}
          class="img-fluid img-responsive"
          src="/Images/Desola.jpeg"
          alt="aboutpage img "
        />
      </div>
      <span>
        <div class="container">
          <p class="fs-5 text-secondary text-start  w-50 float-end m-4">
            I'm Adesola Owolabi, a Front-End Web Developer based in Lagos,
            Nigeria. I graduated from the Department of Accounting, in Ekiti
            State University, Nigeria. I'm a Skincare Product Formulator and a
            Graphic Designer I also have little knowledge regarding Sound
            Engineering.
            <br />
            <br />
            I transitioned into Tech because it satisfies my hunger for
            creativity, therefore I settle for Front-End Development. I desire
            to make other people's jobs easier and more productive with my
            skills.
            <br />
            <br />
            Kindly look over my works by clicking on
            <a
              href="/Portfolio"
              class="mx-3 text-primary fs-5 text-decoration-none"
            >
              Portfolio
            </a>
            <br />
            And do well to contact me through
            <a
              href="/Contacts"
              class="mx-3 text-primary fs-5 text-decoration-none"
            >
              Contact
            </a>
            because you will definitely need my service
            <br /> Thanks.
          </p>
        </div>
      </span>
    </div>
  );
}
