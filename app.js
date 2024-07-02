document.addEventListener("DOMContentLoaded", function () {
    const currentTimeUTCElement = document.getElementById("time");
    const currentDayElement = document.getElementById("day");

    function updateTime() {
        const now = new Date();
        const currentTimeUTC = now.toLocaleString("en-US", {
            timeZone: "UTC",
            hour12: false,
            hour: "numeric",
            minute: "numeric",
        });
        const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });

        currentTimeUTCElement.textContent = currentTimeUTC;
        currentDayElement.textContent = currentDay;
    }

    updateTime();
    setInterval(updateTime, 60000); // Update time every minute
});