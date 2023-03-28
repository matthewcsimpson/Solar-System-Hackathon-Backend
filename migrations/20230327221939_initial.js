/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return (
    knex.schema
      // Star
      .createTable("star", (table) => {
        table.string("star_id");
        table.string("englishName", 10);
        table.float("massValue", 8, 5);
        table.bigint("massExponent");
        table.float("meanRadius");
        table.primary("star_id");
      })
      // Planets
      .createTable("planets", (table) => {
        table.string("planet_id");
        table.string("englishName");
        table.bigint("perihelion");
        table.bigint("aphelion");
        table.float("inclination", 8, 5);
        table.float("massValue", 8, 5);
        table.bigint("massExponent");
        table.float("gravity");
        table.float("meanRadius");
        table.float("sideralOrbit");
        table.float("sideralRotation");
        table.string("discoveredBy");
        table.string("discoveryDate");
        table.enu("bodyType", ["Planet", "Dwarf Planet"]);
        table.primary("planet_id");
        table
          .string("star_id")
          .references("star_id")
          .inTable("star")
          .onDelete("cascade")
          .onDelete("cascade");
      })
      // Moons
      .createTable("moons", (table) => {
        table.string("moon_id");
        table.string("englishName");
        table.text("nameDetail");
        table.bigint("perihelion");
        table.bigint("aphelion");
        table.float("inclination", 8, 5);
        table.float("massValue", 8, 5);
        table.bigint("massExponent");
        table.float("gravity");
        table.float("meanRadius");
        table.float("sideralOrbit");
        table.float("sideralRotation");
        table
          .string("planet_id")
          .references("planet_id")
          .inTable("planets")
          .onUpdate("cascade")
          .onDelete("cascade");
        table.string("discoveredBy");
        table.string("discoveryDate");
        table.string("bodyType");
      })
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("moons").dropTable("planets").dropTable("star");
};
