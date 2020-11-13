"use strict";
exports.__esModule = true;
exports.selectOnFocus = void 0;
function selectOnFocus(node) {
    if (node && typeof node.select === "function") {
        var onFocus_1 = function (event) { return node.select(); };
        node.addEventListener("focus", onFocus_1);
        return {
            destroy: function () { return node.removeEventListener("focus", onFocus_1); }
        };
    }
}
exports.selectOnFocus = selectOnFocus;
