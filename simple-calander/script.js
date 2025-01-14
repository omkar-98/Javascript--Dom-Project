const monthNameEL = document.querySelector(".month-name");

const dayNameEl = document.querySelector(".day-name");

const yearEl = document.querySelector(".year");

const dayNummEl = document.querySelector(".day-number");

const date = new Date();

monthNameEL.innerHTML =date.toLocaleString("en",{
    month :"long"
});

dayNameEl.innerText =date.toLocaleString("en",{
    weekday :"long"
});

dayNummEl.innerHTML =date.getDate();

yearEl.innerHTML = date.getFullYear();
