var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();




var availableRooms = new XMLHttpRequest();
availableRooms.onreadystatechange = function () {
  if(availableRooms.readyState === 4 && availableRooms.status === 200) {
    var rooms = JSON.parse(availableRooms.responseText);
    var roomHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        roomHTML += '<li class="empty">';
      } else {
        roomHTML += '<li class="full">';
      }
      roomHTML += rooms[i].room;
      roomHTML += '</li>';
    }
    roomHTML += '</ul>';
    document.getElementById('roomList').innerHTML = roomHTML;
  }
};
availableRooms.open('GET', '../data/rooms.json');
availableRooms.send();