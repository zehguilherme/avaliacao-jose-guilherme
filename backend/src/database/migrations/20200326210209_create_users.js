// Criação da tabela de usuários
exports.up = function (knex) {
  knex.schema.createTable('users', function (table) {
    table.string('user_name').primary()      //nome de usuário - não nulo (chave primária)
    table.string('email').notNullable()      //email - não nulo
    table.string('phone').notNullable()      //phone - não nulo
    table.string('password').notNullable()   //password - não nulo
  })
};

// Deu algum problema / erro
exports.down = function (knex) {
  knex.schema.dropTable('users')  //excluir tabela
};
