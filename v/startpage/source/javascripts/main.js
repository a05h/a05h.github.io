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


let popupIsShown = false;
function newBookmarkToggle() {
  let popupWindow = document.getElementById('new-bookmark-window');
  if (!popupIsShown) {
    popupWindow.style.visibility = 'visible';
    popupWindow.style.opacity = '1';
    popupIsShown = true;
  } else {
    popupWindow.style.opacity = '0';
    popupWindow.style.visibility = 'hidden';
    popupIsShown = false;
  }
};


function clearInputs() {
  document.getElementById('bookmark-description').value = '';
  document.getElementById('bookmark-url').value = '';
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


