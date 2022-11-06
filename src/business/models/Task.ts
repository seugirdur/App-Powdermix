import { ObjectSchema } from 'realm';

const ProductSchema: ObjectSchema = {
    name: "Product",
    properties: {
        _id: 'string',
        productName: 'string',
        description: 'string',
        price: 'string',
        imgUrl: 'string'
    },
    primaryKey: '_id',
};

export default ProductSchema;