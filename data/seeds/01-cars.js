// STRETCH
const cars = [
    {
        vin: "3GTP2VE32BG373824",
        make: "G-Class",
        model: "Mercedes-Benz",
        mileage: 10000,
        title: "clean",
        transmission: "automatic"
    },
    {
        vin: "1GNFC13048R128369",
        make: "Highlander",
        model: "Toyota",
        mileage: 50000,
        title: "salvage"
    },
    {
        vin: "3GSCL53719S582565",
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