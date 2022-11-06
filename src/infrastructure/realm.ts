import Realm from "realm";
import ProductSchema from "../business/models/Task";

const getRealm = async () => 
    await Realm.open({
        path:'myrealmpowdermix',
        schema: [ProductSchema],
});

export default getRealm;