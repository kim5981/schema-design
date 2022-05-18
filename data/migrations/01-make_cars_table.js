exports.up = function (knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments() // creates automated id (in increments)

    tbl.string("vin", 13) // constraints for that table w/ 13 digits
    .notNullable()
    .unique()

    tbl.string("make", 50)
    .notNullable()

    tbl.string("model", 55)
    .notNullable()

    tbl.integer("mileage")
    .notNullable()
    .unsigned()

    tbl.string("title", 50)
    .defaultTo("clean")

    tbl.string("transmission", 50)
    .defaultTo("automatic")
  })
};

exports.down = function (knex) {
  // undo's what up fn does
  return knex.schema.dropTableIfExists("cars")
  // if more than one "cars" exists, it drops in reverse order
  // in which it was created
  //* when a table is dropped, it drops e/ item in reverse order
};
