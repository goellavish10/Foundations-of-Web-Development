function showMessage() {
  let overlay = document.querySelector("#overlay");
  console.log("message button clicked");

  overlay.classList.add("show");
  overlay.classList.add("newstyle");
}

function hideOverlay() {
  let overlay = document.querySelector("#overlay");
  console.log("overlay clicked!");
  overlay.classList.remove("show");
}

function overFunc(el) {
  el.style.color = "red";
}

function outFunc(el) {
  el.style.color = "black";
}

// fire onload
window.onload = function() {
  console.log("page has finished loading!");

  let message_btn = document.querySelector(".message_btn");
  let overlay = document.querySelector("#overlay");

  // clicking the button to show overlay
  message_btn.onclick = function(event) {
    e.preventDefault();
    showMessage();
  };

  // clicking on the overlay to close
  overlay.onclick = function(e) {
    e.preventDefault();
    hideOverlay();
  };

  // Determine if an element is in the visible viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

  let count = 0;

  function checkBottom() {
    // console.log(count++);
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      alert("you're at the bottom of the page");
    }
  }

  function checkInView() {
    let el = document.querySelector(".about_section");

    if (isInViewport(el)) {
      console.log("in view");
      el.classList.add("showme");
    } else {
      el.classList.remove("showme");
    }
  }

  // scroll event
  window.onscroll = function(ev) {
    // checkBottom();
    checkInView();
  };
};
