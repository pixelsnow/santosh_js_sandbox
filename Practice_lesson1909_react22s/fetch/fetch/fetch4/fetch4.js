"use strict";

class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(endpoint) {
    return fetch(this.baseURL + endpoint).then((response) => response.json());
  }
}

const getChapters = () => {
  const f = new FetchWrapper(
    "https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/"
  );
  return f.get("chapters.json");
  // TODO
};

// do NOT modify this function
function displayCompletedChapters(chapters) {
  console.log("Received", chapters);
}

// Sample usage - do not modify
getChapters();
