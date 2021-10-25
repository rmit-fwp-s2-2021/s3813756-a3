const RESERVATION_KEY = "reservations";


function createReservation(name, meal, date, time, guest, food_preferences, special_request) {
    const reservation = getReservation();
    if(reservation !== null){
        const newReservation = [...reservation, {name: `${name}`, meal: `${meal}`, date: `${date}`, time: `${time}`, guest: `${guest}`, food_preferences: `${food_preferences}`, special_request: `${special_request}` }];
        localStorage.setItem(RESERVATION_KEY, JSON.stringify(newReservation));
    } else {
        
        const res = [
            {
                name: name, 
                meal: meal, 
                date: date, 
                time: time, 
                guest: guest, 
                food_preferences: food_preferences, 
                special_request: special_request
            }
        ];
       
        localStorage.setItem(RESERVATION_KEY, JSON.stringify(res));
    }
   
    
}

function getReservation() {
    const data = localStorage.getItem(RESERVATION_KEY);
    return JSON.parse(data);
}



export {
  createReservation
}
