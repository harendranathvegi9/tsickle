goog.module('test_files.export.export_helper');var module = module || {id: 'test_files/export/export_helper.js'};
Object.defineProperty(exports, "__esModule", { value: true });
// This file isn't itself a test case, but it is imported by the
// export.in.ts test case.
var export_helper_2_1 = goog.require('test_files.export.export_helper_2');
exports.export4 = export_helper_2_1.export4;
exports.export1 = 3;
exports.export2 = 3;
/** @record */
function Bar() { }
exports.Bar = Bar;
/** @type {number} */
Bar.prototype.barField;
exports.export5 = 3;
