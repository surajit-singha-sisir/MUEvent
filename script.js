print = console.log;

function eventData() {
  const tr = document.querySelectorAll(".tr1 tr");
  const eventContainer = document.querySelector(".event-data");

  const cross = document.querySelector(".cross");
  tr.forEach(function (event) {
    event.onclick = function () {
      eventContainer.style.display = "flex";

      // UPDATE EVENT POPUP DETAILS
      function eventInfoUpdate() {
        // UPDATE EVENT TITLE
        const popUpEventTitle = document.querySelector(".event-title h1");
        popUpEventTitle.innerHTML =
          event.querySelector(".eventTitle").innerHTML;

        // UPDATE EVENT IMG
        const popUpEventImg = document.querySelector(
          ".event-container .col-1 img"
        );
        popUpEventImg.src = event.querySelector(".tdImg img").src;

        // UPDATE EVENT START DATE
        const popUpEventStartDate = document.querySelector(".e-start-date p");
        popUpEventStartDate.innerHTML =
          event.querySelector(".eventStartDate").innerHTML;

        // UPDATE EVENT END DATE
        const popUpEventEndDate = document.querySelector(".e-end-date p");
        popUpEventEndDate.innerHTML =
          event.querySelector(".eventEndDate").innerHTML;

        // UPDATE EVENT START TIME
        const popUpEventStartTime = document.querySelector(".e-start-time p");
        popUpEventStartTime.innerHTML =
          event.querySelector(".eventStartTime").innerHTML;

        // UPDATE EVENT END TIME
        const popUpEventEndTime = document.querySelector(".e-end-time p");
        popUpEventEndTime.innerHTML =
          event.querySelector(".eventEndTime").innerHTML;

        // UPDATE EVENT LOCATION
        const popUpEventLocation = document.querySelector(".e-location p");
        popUpEventLocation.innerHTML =
          event.querySelector(".eventLocation").innerHTML;

        // UPDATE EVENT CATEGORY
        const popUpEventCategory = document.querySelector(".e-category p");
        popUpEventCategory.innerHTML =
          event.querySelector(".eventCategory").innerHTML;

        // UPDATE EVENT ORGANIZER
        const popUpEventOrganizer = document.querySelector(".e-organizer");
        popUpEventOrganizer.innerHTML =
          event.querySelector(".eventOrganizer").innerHTML;

        // UPDATE EVENT DESCRIPTION
        const popUpEventDescription = document.querySelector(".e-description");
        popUpEventDescription.innerHTML =
          event.querySelector(".eventDescription").innerHTML;

        // UPDATE EVENT PHONE NUMBER
        const popUpEventPhone = document.querySelector(".e-phone");
        popUpEventPhone.innerHTML =
          event.querySelector(".eventPhone").innerHTML;
      }
      eventInfoUpdate();
    };

    cross.onclick = function () {
      eventContainer.style.display = "none";
    };
  });

  // POPUP TAB JS
  function popupTab() {
    // Array
    const popUpEventData = document.querySelectorAll(".event-information div");

    const eventItems = document.querySelectorAll(".event-items div");
    
    // ANIMATION ADDING

    for (let i = 0; i < eventItems.length; i++) {
      let currentIndex = eventItems[i];

      currentIndex.onclick = function () {

        // Remove the 'event-box' class from all items
        eventItems.forEach(function (j) {
          j.classList.remove("event-box");
          j.classList.remove('left2Right');
        });

        // HIDE ALL POPUPEVENTDATA
        popUpEventData.forEach(function (k) {
          k.classList.add("hide");
        });
        // SHOW POPUPEVENTDATA
        popUpEventData[i].classList.remove("hide");
        // SHOW EVENTITEM
        currentIndex.classList.add("event-box");
        currentIndex.classList.add('left2Right');
      };
    }
  }
  

  popupTab();
}
eventData();
