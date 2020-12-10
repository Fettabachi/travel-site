import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

// React related code goes here
import React from "react";
import ReactDOM from "react-dom";
import SimpleReactComponent from "./modules/SimpleReactComponent";

ReactDOM.render(
  <SimpleReactComponent />,
  document.querySelector("#my-react-example")
);

// use for local testing of the Client area feature
// see also secret-area.js
// import ClientArea from "./modules/ClientArea"
// new ClientArea()

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
new MobileMenu();
new StickyHeader();
let modal;

if (document.URL.indexOf("zen-meitner-405009.netlify.app") >= 0) {
  import("./modules/ClientArea").then((x) => {
    ClientArea = new x.default();
  });
}

document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ "./modules/Modal")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => console.log("There was a problem."));
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
