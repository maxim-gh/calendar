let date = new Date();

function createCalendar(){
    let dayOfWeek = [
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
            "Воскресенье"
        ],
        lastDay = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate(),
        firstDayIndex = date.getDay(),
        prevLastDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDate(),
        lastDayIndex = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDay(),
        nextDays = 7 - lastDayIndex,
        header = document.querySelector(".header"),
        days = document.querySelector(".days"),
        currentDate = document.querySelector(".date");

    currentDate.innerHTML = date.toDateString();

    for (let i = 0; i < 7; i++) {
        let divDayOfWeek = document.createElement("div");
        divDayOfWeek.textContent = dayOfWeek[i];
        header.append(divDayOfWeek);
    }

    for(let i = firstDayIndex; i > 0; i--){
        let divPrevDays = document.createElement("div");
        divPrevDays.className = "prev";
        divPrevDays.textContent = prevLastDay - i + 1;
        days.append(divPrevDays);
    }
    for(let i = 1; i <= lastDay;i++){
        let divDays = document.createElement("div");
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            divDays.className = "today";
        }
        divDays.textContent = i;
        days.append(divDays);
    }

    for (let i = 1; i <= nextDays; i++){
        let divNextDays = document.createElement("div");
        divNextDays.className = "next";
        divNextDays.textContent = i;
        days.append(divNextDays);
    }

}
function RemoveCalendar(){
    let header = document.querySelector(".header"),
        days = document.querySelector(".days"),
        currentDate = document.querySelector(".date");
    header.innerHTML = "";
    days.innerHTML = "";
    currentDate.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function (){
    let left = document.querySelector(".left"),
        right = document.querySelector(".right");

    left.onclick = function PreviousMonth(){
        date.setMonth(date.getMonth() - 1);
        RemoveCalendar();
        createCalendar();
    }

    right.onclick = function (){
        date.setMonth(date.getMonth() + 1);
        RemoveCalendar();
        createCalendar();
    }
});
createCalendar();