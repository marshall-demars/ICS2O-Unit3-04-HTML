// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

;("use strict")

/**
 * This function displays an alert.
 */
function calculate() {
  // input
  const fahrenheit = parseFloat(
    document.getElementById("fahrenheit-celsius").value
  )

  // process
  const celsius = ((fahrenheit - 32) * 5) / 9

  // output
  document.getElementById("conversion").innerHTML =
    fahrenheit + "°F converted to Celsius is " + celsius.toFixed(2) + " ℃"
}
