// 单点入口
const Hapi = require('hapi');
const server = new Hapi.Server();
const routesHelloHapi = require('./routes/hello-hapi');
const routesShop = require('./routes/shops');
const routesOrders = require('./routes/orders');
const pluginHapiSwagger = require('./plugins/hapi-swagger');

const configIndex = require('./config/index')


server.connection({
    port: configIndex.port,
    host: configIndex.host
})

const init = async () => {
    await server.register([
        ...pluginHapiSwagger,
    ]);
    // 启动服务
    server.route([
        ...routesHelloHapi,
        ...routesShop,
        ...routesOrders
    ]);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
}

init();