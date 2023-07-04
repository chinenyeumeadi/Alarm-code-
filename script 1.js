function setAlarm() {
  const alarmTime = document.getElementById("alarmTime").value;
  const [alarmHour, alarmMinute] = alarmTime.split(":");
  const now = new Date();
  const alarm = new Date();
  alarm.setHours(alarmHour);
  alarm.setMinutes(alarmMinute);
  alarm.setSeconds(0);
  
  let alarmInterval = null;
  
  if (alarm > now) {
    const timeUntilAlarm = alarm - now;
    alarmInterval = setTimeout(() => {
      playAlarm();
    }, timeUntilAlarm);
    
    alert(`Alarm set for ${alarmTime}`);
  } else {
    alert("Please select a time in the future");
  }
  
  function playAlarm() {
    const alarmSound = document.getElementById("alarmSound");
    alarmSound.play();
  }
}
