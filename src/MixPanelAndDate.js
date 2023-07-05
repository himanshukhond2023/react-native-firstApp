import React from "react";
import { Mixpanel } from "mixpanel-react-native";

export const MixPanel = () => {
  const trackAutomaticEvents = true;
  const mixpanel = new Mixpanel("50828404d7802f541e1b820c7bd69ec6", trackAutomaticEvents);
  mixpanel.init();

  return mixpanel;
}

export const CurrentDate = () => {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // For Current Date and Time
  let date = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let hours = new Date().getHours(); //Current Hours
  let min = new Date().getMinutes(); //Current Minutes
  let day = new Date().getDay();

  // Check whether AM or PM
  let newformat = hours >= 12 ? 'PM' : 'AM';

  // Find current hour in AM-PM Format
  hours = hours % 12;

  // To display "0" as "12"
  hours = hours ? hours : 12;
  min = min < 10 ? '0' + min : min;

  const currentDate = `${weekday[day]}, ${date}/${month}/${year}, ${hours}:${min} ${newformat}`;

  return currentDate;
}