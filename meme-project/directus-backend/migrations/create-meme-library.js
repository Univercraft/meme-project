module.exports = {
  up: async (knex) => {
    await knex.schema.createTable('memes', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('image_url').notNullable();
      table.text('description');
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.timestamps(true, true);
    });
  },

  down: async (knex) => {
    await knex.schema.dropTableIfExists('memes');
  }
};