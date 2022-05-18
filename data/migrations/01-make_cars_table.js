exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable("cars", tbl => {
    tbl.increments() // creates automated id (in increments)

    tbl.string("vin", 13) // constraints for that table w/ 13 digits
    .notNullable()
    .unique()

    tbl.string("make", 50)
    .notNullable()

    tbl.string("model", 50)
    .notNullable()

    tbl.numeric("mileage")
    .notNullable()
    .unsigned()

    tbl.string("title", 50)
    .defaultTo("clean")

    tbl.string("transmission", 50)
    .defaultTo("automatic")
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};
