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
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("planets").dropTable("star");
};

// id: "eris",
// englishName: "136199 Eris",
// perihelion: 5765732799,
// aphelion: 14594512904,
// inclination: 44.0445,
// massValue: 1.66,
// massExponent: 22,
// meanRadius: 1163.0,
// sideralOrbit: 203830.0,
// sideralRotation: 25.92,
// discoveredBy: "Michael E. Brown, Chadwick Trujillo, David L. Rabinowitz",
// discoveryDate: "05/01/2005",
// bodyType: "Dwarf Planet",
