// Criação da tabela de clientes
exports.up = function (knex) {
  knex.schema.createTable('clients', function (table) {
    table.string('name').primary()           //nome - não nulo (chave primária)
    table.string('cpf').notNullable()        //CPF - não nulo
    table.string('address').notNullable()    //endereço - não nulo
    table.string('phone').notNullable()      //telefone - não nulo
  })
};

// Deu algum problema / erro
exports.down = function (knex) {
  knex.schema.dropTable('clients')  //excluir tabela
};
