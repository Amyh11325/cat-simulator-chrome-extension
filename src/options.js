// Saves options to chrome.storage
function save_options() {
  var color = document.getElementById('cats').value;
  var time = document.getElementById('time').value;
  chrome.storage.sync.set({
    'favoriteColor': color,
    'favoriteTime': time
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    favoriteColor: 'black',
    favoriteTime: 20
  }, function(items) {
    document.getElementById('cats').value = items.favoriteColor;
    document.getElementById('time').value = items.favoriteTime;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
