"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _getAllListings = require("./getAllListings");
var _getListing = require("./getListing");
var _addViewToListing = require("./addViewToListing");
var _getUserListings = require("./getUserListings");
var _createNewListing = require("./createNewListing");
var _updateListings = require("./updateListings");
var _deleteListing = require("./deleteListing");
var _files = require("./files");
var _default = exports["default"] = [_getAllListings.getAllListingsRoute, _getListing.getListingRoute, _addViewToListing.addViewToListRoute, _getUserListings.getUserListingsRouter, _createNewListing.createNewListingRoute, _updateListings.updateListings, _deleteListing.deleteListingRoute, _files.staticFilesRoute].concat((0, _toConsumableArray2["default"])(_files.filesRoutes));