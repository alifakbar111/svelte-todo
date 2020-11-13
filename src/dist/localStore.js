"use strict";
exports.__esModule = true;
exports.localStore = void 0;
var store_1 = require("svelte/store");
exports.localStore = function (key, initial) {
    // receives the key of the local storage and an initial value
    var toString = function (value) { return JSON.stringify(value, null, 2); }; // helper function
    var toObj = JSON.parse; // helper function
    if (localStorage.getItem(key) === null) {
        // item not present in local storage
        localStorage.setItem(key, toString(initial)); // initialize local storage with initial value
    }
    var saved = toObj(localStorage.getItem(key)); // convert to object
    var _a = store_1.writable(saved), subscribe = _a.subscribe, set = _a.set, update = _a.update; // create the underlying writable store
    return {
        subscribe: subscribe,
        set: function (value) {
            localStorage.setItem(key, toString(value)); // save also to local storage as a string
            return set(value);
        },
        update: update
    };
};
