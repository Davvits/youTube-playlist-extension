
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'OFF'
  });
});


// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {

    chrome.scripting.executeScript({
      target: { tabId: tab.id},
      files: ['scripts/models/content.js'],
    })
  
});

