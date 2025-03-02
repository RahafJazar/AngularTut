"use strict";
function getLocation(location) {
    var _a;
    return (_a = location.city) !== null && _a !== void 0 ? _a : location.country;
}
const location1 = getLocation({ country: "Jordan", city: "Amman" });
const location2 = getLocation({ country: "Jordan", city: null });
console.log("location 1  : ", location1);
console.log("location 2 : ", location2);
//# sourceMappingURL=Question6.js.map