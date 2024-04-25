import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { addViewToListRoute } from "./addViewToListing";
import { getUserListingsRouter } from "./getUserListings";
import { createNewListingRoute } from "./createNewListing";
import { updateListings } from "./updateListings";
import { deleteListingRoute } from "./deleteListing";
import { staticFilesRoute, filesRoutes} from "./files";

export default [
    getAllListingsRoute,
    getListingRoute,
    addViewToListRoute,
    getUserListingsRouter,
    createNewListingRoute,
    updateListings,
    deleteListingRoute,
    staticFilesRoute,
    ...filesRoutes,
]