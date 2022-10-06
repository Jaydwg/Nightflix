const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-tem');

// select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //ADD BORDER TO current tab
    this.classList.add('tab-border');
    //grab c item from dom
    const tabContentItems = document.querySelector(`#$(this.id')-content`);
    //add show class
    tabContentItems.classList.add('show');
}



function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}


//listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem) );
