import express from "express";
import {UserRoutes} from "../modules/user/user.routes.js";
import {AuthRoutes} from "../modules/auth/auth.routes.js";
import {VersionRoutes} from "../modules/version/version.routes.js";
import {ProductRoutes} from "../modules/product/product.routes.js";
import {CollectionRoutes} from "../modules/collection/collection.routes.js";
import {LuckyDrawRoutes} from "../modules/luckyDraw/luckyDraw.routes.js";
import {AuctionRoutes} from "../modules/auction/auction.routes.js";
import {CartRoutes} from "../modules/cart/cart.routes.js";
import {DropRoutes} from "../modules/drop/drop.routes.js";
import {MintNFTRoutes} from "../modules/mintNFT/mintNFT.routes.js";
import {NotificationRoutes} from "../modules/notification/notification.routes.js";
import {OfferRoutes} from "../modules/offer/offer.routes.js";
import {OrderRoutes} from "../modules/order/order.routes.js";
import {RecycleRoutes} from "../modules/recycle/recycle.routes.js";
import {WishListRoutes} from "../modules/wishList/wishList.routes.js";
import {MetaDataRoutes} from "../modules/metadata/metadata.routes.js";
import {LuckyDrawTokenRoutes} from "../modules/luckyDrawToken/token.routes.js";

const router = express.Router();
const moduleRoutes = [
  {path: "/user", route: UserRoutes},
  {path: "/auth", route: AuthRoutes},
  {path: "/product", route: ProductRoutes},
  {path: "/version", route: VersionRoutes},
  {path: "/collection", route: CollectionRoutes},
  {path: "/luckyDraw", route: LuckyDrawRoutes},
  {path: "/luckyDrawToken", route: LuckyDrawTokenRoutes},
  {path: "/auction", route: AuctionRoutes},
  {path: "/cart", route: CartRoutes},
  {path: "/drop", route: DropRoutes},
  {path: "/mintNFT", route: MintNFTRoutes},
  {path: "/notification", route: NotificationRoutes},
  {path: "/offer", route: OfferRoutes},
  {path: "/order", route: OrderRoutes},
  {path: "/recycle", route: RecycleRoutes},
  {path: "/wishlist", route: WishListRoutes},
  {path: "/metadata", route: MetaDataRoutes},
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
