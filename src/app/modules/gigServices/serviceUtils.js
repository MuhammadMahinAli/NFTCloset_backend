import {Fashion} from "./fashion/fashion.model.js";
import {FullDesign} from "./fullDesign/fullDesign.model.js";
import {Garment} from "./garment/garment.model.js";
import {Pattern} from "./pattern/pattern.model.js";
import {TechPack} from "./techPack/techPack.model.js";

export const createService = async (service, session) => {
  if (service.title === "Technical Drawing and Tech Pack") {
    const result = await TechPack.create([service], {session});
  }
  if (service.title === "Fashion Illustration") {
    const result = await Fashion.create([service], {session});
  }
  if (service.title === "3D Garment Design") {
    const result = await Garment.create([service], {session});
  }
  if (service.title === "Pattern Making") {
    const result = await Pattern.create([service], {session});
  }
  if (service.title === "Full Design Process") {
    const result = await FullDesign.create([service], {session});
  }
};
