const models = require('../models/shop');

const GROUP_NAME = 'shops';

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: async (request, reply) => {
            const { rows: results, count: totalCount } = 
                await models.shops.findAndCountAll({
                    attributes: [
                        'id',
                        'name'
                    ],
                    limit: 2,
                    offset: 0
                })
            // controller
            reply({
                results,
                totalCount
            })
        }
    }
    
]