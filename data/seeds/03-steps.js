exports.seed = function(knex, promise) {
    return knex('steps').insert([
        {instructions: 'roll pig in dough', recipe_id: 1, step_number: 1},
        {instructions: 'put it in the oven', recipe_id: 1, step_number: 2},
        {instructions: 'roll fritos in dough', recipe_id: 2, step_number: 1},
        {instructions: 'put it in the oven', recipe_id: 2, step_number: 2},
        {instructions: 'mince meat', recipe_id: 3, step_number: 1},
        {instructions: 'boil', recipe_id: 3, step_number: 2},
    ]);
}