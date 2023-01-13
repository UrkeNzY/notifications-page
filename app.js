const notificationElements = document.querySelectorAll("ul li");

const notificationCountElement = document.getElementById("notification-count");
const markAllAsReadElement =
  document.body.children[0].children[0].children[0].children[1];

updateNotificationCount();



function readNotification(event) {
  if (event.target.classList.contains("unread")) {
    const notificationDot = event.target.querySelector(".notification-dot");

    event.target.classList.remove("unread");
    notificationDot.remove();

    updateNotificationCount();
  }

  return;
}

function updateNotificationCount() {
  const unreadNotifications = document.querySelectorAll(".unread");
  let notificationCount = 0;

  for (const unreadNotification of unreadNotifications) {
    notificationCount++;
  }

  if (notificationCount <= 0) {
    notificationCountElement.style.display = "none";
  } else {
    notificationCountElement.style.display = "inline-block";
  }

  notificationCountElement.textContent = +notificationCount;
}

function readAllNotifications() {
  for (const notificationElement of notificationElements) {
    if (notificationElement.classList.contains("unread")) {
      let notificationDot =
        notificationElement.querySelector(".notification-dot");

      notificationElement.classList.remove("unread");
      notificationDot.remove();
    }
  }

  updateNotificationCount();
}



for (const notificationElement of notificationElements) {
  notificationElement.addEventListener("click", readNotification);
}

markAllAsReadElement.addEventListener("click", readAllNotifications);
