import React from "react";
import { TfiHtml5 } from "react-icons/tfi";
import { SiCss3 } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

export default function Skills() {
  return (
    <div
      class="container  text-center mt-5"
      style={{ height: "30rem", backgroundColor: "whitesmoke" }}
    >
      <b>
        <h2 class="text-center pt-5">My Top Skills</h2>
      </b>
      <div style={{ marginTop: "7rem" }}>
        <TfiHtml5
          style={{
            width: "9rem",
            height: "9rem",
            color: "tomato",
          }}
        />
        <span>
          <SiCss3
            style={{
              width: "9rem",
              height: "9rem",
              color: "blue",
              marginLeft: "5rem",
            }}
          />
        </span>
        <span>
          <BsBootstrapFill
            style={{
              width: "9rem",
              height: "9rem",
              color: "purple",
              marginLeft: "5rem",
            }}
          />
        </span>
        <span>
          <SiJavascript
            style={{
              width: "9rem",
              height: "9rem",
              color: "yellow",
              marginLeft: "5rem",
            }}
          />
        </span>
        <span>
          <GrReactjs
            style={{
              width: "9rem",
              height: "9rem",
              color: "turquoise",
              marginLeft: "5rem",
            }}
          />
        </span>
      </div>
    </div>
  );
}
