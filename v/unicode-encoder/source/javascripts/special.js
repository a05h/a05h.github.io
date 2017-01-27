"use strict";

function stringToUnicode(string, type = error) {
  let line = string.toString(),
      lineEntries = line.split("");
  switch (type) {
    case "unicodeHEX":
    case "numericHEX":
      lineEntries = lineEntries.map((element) => {
        return element.charCodeAt(0).toString(16);
      });
      for (let i = 0; i < lineEntries.length; i++) {
        while (lineEntries[i].length < 4) {
          lineEntries[i] = "0" + lineEntries[i];
        }
        if (type == "numericHEX") {
          lineEntries[i] = "&amp;#x" + lineEntries[i] + ";";
        } else {
          lineEntries[i] = "U+" + lineEntries[i] + ";";
        }
      }
      return lineEntries;
    case "unicodeDEC":
    case "numericDEC":
      lineEntries = lineEntries.map((element) => {
        return element.charCodeAt(0).toString();
      });
      for (let i = 0; i < lineEntries.length; i++) {
        while (lineEntries[i].length < 3) {
          lineEntries[i] = "0" + lineEntries[i];
        }
        if (type == "numericDEC") {
          lineEntries[i] = "&amp;#" + lineEntries[i].toString() + ";";
        } else {
          lineEntries[i] = lineEntries[i].toString() + ";";
        }
      }
      return lineEntries;
    default:
      return "error";
  }
};

let bufferUH, bufferNH, bufferUD, bufferND;

function encode() {
  let input = document.getElementById("input").value.trim(),
      val1 = stringToUnicode(input, "unicodeHEX"),
      val2 = stringToUnicode(input, "numericHEX"),
      val3 = stringToUnicode(input, "unicodeDEC"),
      val4 = stringToUnicode(input, "numericDEC"),
      symbol = input.trim().split("");
  
  let encodeContent = document.querySelectorAll(".quat");
  for (let i = 0; i < encodeContent.length; i++) {
    if (symbol == "") {
      encodeContent[i].style.visibility = "collapse";
    } else {
      encodeContent[i].style.visibility = "visible";
    }
  }
  
  bufferUH = val1.toString().replace(/,/g, "");
  bufferNH = val2.toString().replace(/,/g, "").replace(/&amp;/g, "&");
  bufferUD = val3.toString().replace(/,/g, "");
  bufferND = val4.toString().replace(/,/g, "").replace(/&amp;/g, "&");
  
  let symbolList = document.querySelectorAll(".line-number");
  for (let i = 0; i < symbolList.length; i++) {
    symbolList[i].innerHTML = symbol.join("<br>");
  }
  
  document.getElementById("uni-hex").innerHTML = val1.join("<br>");
  document.getElementById("num-hex").innerHTML = val2.join("<br>");
  document.getElementById("uni-dec").innerHTML = val3.join("<br>");
  document.getElementById("num-dec").innerHTML = val4.join("<br>");
};

function copy(buffer) {
  document.getElementById("modal-container").style.display = "block";
  document.getElementById("output").value = buffer;
  document.getElementById("output").select();
  
};

function closeModal() {
  document.getElementById("modal-container").style.display = "none";
};



