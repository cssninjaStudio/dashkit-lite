"use strict";

//Alpine JS and plugins import
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import collapse from "@alpinejs/collapse";
import persist from "@alpinejs/persist";

window.Alpine = Alpine;
//Init intersect plugin
Alpine.plugin(intersect);
//Init collapse plugin
Alpine.plugin(collapse);
//Init persist plugin
Alpine.plugin(persist);
//Init store
Alpine.store("app", {
  init() {
    this.on = window.matchMedia("(prefers-color-scheme: dark)").matches;
  },
  isDark: Alpine.$persist(false),
  isSidebarOpened: Alpine.$persist(false),
  activeSidebar: Alpine.$persist("dashboard"),
  activeSidebarMenu: Alpine.$persist(""),
  isSidebarRightOpened: Alpine.$persist(false),
  isProfileOpen: Alpine.$persist(false),
});
//Start Alpine JS
Alpine.start();

//Icons
const feather = require("feather-icons");

//Components
import { insertBgImages, initRipple } from "./libs/utils/utils";
import "./libs/components";
import "./libs/pages";

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    //Switch backgrounds
    const changeBackgrounds = insertBgImages();

    //Feather Icons
    const featherIcons = feather.replace();

    //Ripple effect
    const ripples = initRipple();
  }
};
