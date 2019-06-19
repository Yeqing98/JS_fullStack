- sequelize 数据库脚手架
    mysql2 数据库驱动
    sequelize orm 工具  table -> object
    对底层的sql API化
    sequelize-cli  命令行工具

- config
    ./node_modules/.bin/sequelize init
    ./node_modeles/.bin/sequelize db:create
    ./node_modeles/.bin/sequelize migration:create --name create-shops-table   建表或者修改表
    ./node_modeles/.bin/sequelize db:migrate   执行迁移

    ./node_modeles/.bin/sequelize seed:create --name init-shops    初始化