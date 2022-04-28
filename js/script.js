// Created by: Emma Janani
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

function displayMessage() {
  
	// get user input
	let input = document.getElementById("temperature").value
  
  // determine the message based on the user input
	if (temperature < 15) {
		let message = "It is cold outside!"
    document.getElementById("message").innerHTML = "Here is your message: " + message + " ";
	}

  else {
    let message = "It is hot outsude!"
    document.getElementById("message").innerHTML = "Here is your message: " + message + " The correct answer is " + correct + ".";
  }
}