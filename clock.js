function startTime() {
    var today = new Date();
    document.getElementById('clock').innerHTML = today;
    var t = setTimeout(startTime,500);
} 
 
 
 
    function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}