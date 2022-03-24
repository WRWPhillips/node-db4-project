

exports.seed = function(knex, promise) {
    return knex('step_ingredients').insert([
      {recipe_id: 1, step_id: 1, ingredient_id: 1, quantity: 4 },
      {recipe_id: 1, step_id: 2, ingredient_id: 5, quantity: 2 },
      {recipe_id: 2, step_id: 1, ingredient_id: 3, quantity: 15 },
      {recipe_id: 2, step_id: 2, ingredient_id: 4, quantity: 1},
      {recipe_id: 3, step_id: 1, ingredient_id: 2, quantity: 16 },
      {recipe_id: 3, step_id: 1, ingredient_id: 3, quantity: 76 },
      {recipe_id: 3, step_id: 1, ingredient_id: 4, quantity: 22 },
      {recipe_id: 3, step_id: 2, ingredient_id: 5, quantity: 1},
    ])
}

