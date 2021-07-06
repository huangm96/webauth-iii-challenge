
exports.up = function(knex) {
  return knex.schema.createTable("usersAuth3", tbl => {
    tbl.increments();
    tbl
      .string("userName", 255)
      .notNullable()
      .unique();
      tbl.string("password", 255).notNullable();
      tbl.string('department',255)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("usersAuth3");
};
