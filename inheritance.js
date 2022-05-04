
let BasicsInCar={
    wheel:1,
    tyers:4,
    seatbelts:"to every seat",
    capacity:5
}

let Car1=Object.create(BasicsInCar)

Car1.color="red"
Car1.name="Tata"

let Car2=Object.create(BasicsInCar)

Car2.name="SUV"
Car2.roof="Roofless"
Car2.color="Black"

console.log(Car2)