import React from "react";
import "../Styles/sidecompo.css";

export const Navbar = () => {
  return (
    <nav class=" container my-3 ">
      <ul class="text-end ">
        <a href="/" class="mx-3 text-secondary fs-5 text-decoration-none">
          Homepage
        </a>
        <a href="/About" class="mx-3 text-secondary fs-5 text-decoration-none">
          About
        </a>
        <a href="/Skills" class="mx-3 text-secondary fs-5 text-decoration-none">
          Skills
        </a>
        <a
          href="/Portfolio"
          class="mx-3 text-secondary fs-5 text-decoration-none"
        >
          Portfolio
        </a>
        <a
          href="/Contacts"
          class="mx-3 text-secondary fs-5 text-decoration-none"
        >
          Contact
        </a>
      </ul>
    </nav>
  );
};
