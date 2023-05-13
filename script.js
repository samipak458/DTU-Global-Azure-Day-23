import list from './attendees.JSON' assert { type: 'json' };
console.log("Connected")

const Object = list.attendees;


let showAttendees = ()=> {
    console.log(Object.length);
for (let i=0; i<Object.length; i++) {
   
    console.log(Object[i].fullName);
    let list = document.getElementById("list");
    list.innerHTML += `
    <div class="col-md-3 mt-3">
     <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">${Object[i].fullName}</h5>
        </div>
     </div>
    </div>`
}

}

showAttendees();
