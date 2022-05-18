// STRETCH
const cars = [
    {
        vin: "0000000000000",
        make: "G-Class",
        model: "Mercedes-Benz",
        mileage: 10000,
        title: "clean",
        transmission: "automatic"
    },
    {
        vin: "0000000000001",
        make: "Highlander",
        model: "Toyota",
        mileage: 50000,
        title: "salvage"
    },
    {
        vin: "0000000000002",
        make: "A8",
        model: "Audi",
        mileage: 45000,
        title: "clean",
        transmission: "automatic"
    },
]

// exports.seed = function(knex) {
//     return knex("cars")
//         .truncate().then(() => {
//             return knex("cars").insert(cars) 
//         })
// }

exports.seed = async function (knex) {
    await knex("cars").truncate()
    await knex("cars").insert(cars)
}