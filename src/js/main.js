"use strict";
import changeModalState from "./modules/changeModalState";
import forms from "./modules/forms";
import modals from "./modules/modal";
import tabs from "./modules/tabs";
import "./slider";

document.addEventListener("DOMContentLoaded", () => {
  const modalState = {};
  modals();
  tabs(
    ".decoration_slider",
    ".decoration_content > div > div",
    ".no_click",
    "after_click"
  );
  tabs(
    ".glazing_slider",
    ".glazing_content",
    ".glazing_block",
    "slick-current"
  );
  tabs(
    ".balcon_icons",
    ".big_img>img",
    ".balcon_icons_img",
    "do_image_more",
    "inline-block"
  );
  forms(modalState);
  changeModalState(modalState);
});
