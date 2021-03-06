'use strict';


function getSearchlineFocus() {
  document.getElementById('search-line').focus();
};


function loadBookmarks() {
  let bookmarksDB = JSON.parse(collection),
      linksList = document.getElementById('links-list');
  function cutDescription(description) {
    let cuttedDescription = description;
    if (description.length > 35) {
      cuttedDescription = `${description.substr(0, 32)}...`;
    }
    return cuttedDescription;
  };
  for (let i = 0; i < bookmarksDB.length; i++) {
    linksList.innerHTML += `<a href="${bookmarksDB[i].url}">${cutDescription(bookmarksDB[i].desc)}</a><br>`;
  }
};


let bookmarksIsShown = false;
function bookmarksToggle() {
  let bookmarksPanel = document.getElementById('bookmarks-panel');
  if (!bookmarksIsShown) {
    bookmarksPanel.style.visibility = 'visible';
    bookmarksPanel.style.opacity = '1';
    bookmarksPanel.style.right = '60px';
    bookmarksIsShown = true;
  } else {
    bookmarksPanel.style.opacity = '0';
    bookmarksPanel.style.visibility = 'hidden';
    bookmarksPanel.style.right = '50px';
    bookmarksIsShown = false;
  } 
};


let sengineIsShown = false;
function sengineToggle() {
  let senginePanel = document.getElementById('searchengine-panel');
  if (!sengineIsShown) {
    senginePanel.style.visibility = 'visible';
    senginePanel.style.opacity = '1';
    senginePanel.style.right = '60px';
    sengineIsShown = true;
  } else {
    senginePanel.style.opacity = '0';
    senginePanel.style.visibility = 'hidden';
    senginePanel.style.right = '50px';
    sengineIsShown = false;
  } 
};


function hidePanels() {
  let bookmarksPanel = document.getElementById('bookmarks-panel'),
      senginePanel = document.getElementById('searchengine-panel');
  bookmarksPanel.style.opacity = '0';
  bookmarksPanel.style.visibility = 'hidden';
  bookmarksPanel.style.right = '50px';
  senginePanel.style.opacity = '0';
  senginePanel.style.visibility = 'hidden';
  senginePanel.style.right = '50px';
  bookmarksIsShown = false;
  sengineIsShown = false;
};


let currentSearchEngine = 'Google';
function changeSearchEngine(searchEngine = google) {
  let form = document.getElementById('search-form'),
      line = document.getElementById('search-line'),
      title = document.getElementById('searchengine-title');
  switch (searchEngine) {
    case 'google':
      form.action = 'http://www.google.co.uk/search';
      form.method = 'get';
      line.name = 'q';
      title.innerHTML = 'Google';
      title.style.color = '#7bbbe3';
      title.style.fontFamily = "'Lobster', cursive";
      title.style.margin = '-50px 0 0 55px';
      title.style.fontSize = '76px';
      title.style.fontWeight = '300';
      document.title = 'Google';
      currentSearchEngine = 'Google';
      break;
    case 'duckDuckGo':
      form.action = 'https://www.duckduckgo.com';
      form.method = 'get';
      line.name = 'q';
      title.innerHTML = 'DuckDuckGo';
      title.style.color = '#e3af7b';
      title.style.fontFamily = "'Courgette', cursive";
      title.style.margin = '-40px 0 0 -15px';
      title.style.fontSize = '62px';
      title.style.fontWeight = '400';
      document.title = 'DuckDuckGo';
      currentSearchEngine = 'DuckDuckGo';
      break;
    case 'proxy':
      form.action = 'https://eu2.proxysite.com/includes/process.php?action=update';
      form.method = 'post';
      line.name = 'd';
      title.innerHTML = 'Proxy';
      title.style.color = '#e37b7b';
      title.style.fontFamily = "'Play', sans-serif";
      title.style.margin = '-50px 0 0 61px';
      title.style.fontSize = '76px';
      title.style.fontWeight = '300';
      document.title = 'Proxy';
      currentSearchEngine = 'Proxy';
      break;
  }
  hidePanels();
  getSearchlineFocus();
};