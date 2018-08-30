'use strict';

//grab all the nav tabs
var buttons = document.querySelectorAll('.button');

//listen for click
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', highlightNavigation);
}

//callback
function highlightNavigation (e) {
    //stop link behavior
    e.preventDefault();
    
    //use currentTarget to grab the proper element
    var clicked = e.currentTarget,
        clickedName = clicked.getAttribute('data-name');
    
    //update URL without refresh, but treat the 'Now' tab as home
    if (clickedName === 'now') {
        window.history.replaceState(null, '', window.location.origin);
    } else {
        window.history.replaceState(null, '', '?tab=' + clickedName);
    }
    
    //highlight the targeted tab
    document.querySelector('.active').classList.remove('active');
    clicked.classList.add('active');
}

//if user navigates directly to a tab via the URL, the tab needs highlighting
document.addEventListener('DOMContentLoaded', highlightNavigationFromURL);

function highlightNavigationFromURL () {
    //check if user navigated directly to a tab
    if (window.location.search) {
        //grab the tab name
        var targetTabName = window.location.search.split('=')[1];
        
        //find the corresponding tab
        var targetTab = document.querySelector('a[data-name=\"' + targetTabName + '\"]');
        
        //if the typed tab name exists, highlight the targeted tab
        if (targetTab) {
            document.querySelector('.active').classList.remove('active');
            targetTab.classList.add('active');
        }
    }
}
