import { atom } from "recoil";    //import from recoil

export const countAtom=atom({
    key: "countAtom",    //must be different;same key for 2 atom will be conflicting
    default: 0   //default value
});