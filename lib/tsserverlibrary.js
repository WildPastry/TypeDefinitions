/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* @internal */
var ts;
(function (ts) {
    function createMapData() {
        var sentinel = {};
        sentinel.prev = sentinel;
        return { head: sentinel, tail: sentinel, size: 0 };
    }
    function createMapEntry(key, value) {
        return { key: key, value: value, next: undefined, prev: undefined };
    }
    function sameValueZero(x, y) {
        // Treats -0 === 0 and NaN === NaN
        return x === y || x !== x && y !== y;
    }
    function getPrev(entry) {
        var prev = entry.prev;
        // Entries without a 'prev' have been removed from the map.
        // An entry whose 'prev' points to itself is the head of the list and is invalid here.
        if (!prev || prev === entry)
            throw new Error("Illegal state");
        return prev;
    }
    function getNext(entry) {
        while (entry) {
            // Entries without a 'prev' have been removed from the map. Their 'next'
            // pointer should point to the previous entry prior to deletion and
            // that entry should be skipped to resume iteration.
            var skipNext = !entry.prev;
            entry = entry.next;
            if (skipNext) {
                continue;
            }
            return entry;
        }
    }
    function getEntry(data, key) {
        // We walk backwards from 'tail' to prioritize recently added entries.
        // We skip 'head' because it is an empty entry used to track iteration start.
        for (var entry = data.tail; entry !== data.head; entry = getPrev(entry)) {
            if (sameValueZero(entry.key, key)) {
                return entry;
            }
        }
    }
    function addOrUpdateEntry(data, key, value) {
        var existing = getEntry(data, key);
        if (existing) {
            existing.value = value;
            return;
        }
        var entry = createMapEntry(key, value);
        entry.prev = data.tail;
        data.tail.next = entry;
        data.tail = entry;
        data.size++;
        return entry;
    }
    function deleteEntry(data, key) {
        // We walk backwards from 'tail' to prioritize recently added entries.
        // We skip 'head' because it is an empty entry used to track iteration start.
        for (var entry = data.tail; entry !== data.head; entry = getPrev(entry)) {
            // all entries in the map should have a 'prev' pointer.
            if (entry.prev === undefined)
                throw new Error("Illegal state");
            if (sameValueZero(entry.key, key)) {
                if (entry.next) {
                    entry.next.prev = entry.prev;
                }
                else {
                    // an entry in the map without a 'next' pointer must be the 'tail'.
                    if (data.tail !== entry)
                        throw new Error("Illegal state");
                    data.tail = entry.prev;
                }
                entry.prev.next = entry.next;
                entry.next = entry.prev;
                entry.prev = undefined;
                data.size--;
                return entry;
            }
        }
    }
    function clearEntries(data) {
        var node = data.tail;
        while (node !== data.head) {
            var prev = getPrev(node);
            node.next = data.head;
            node.prev = undefined;
            node = prev;
        }
        data.head.next = undefined;
        data.tail = data.head;
        data.size = 0;
    }
    function forEachEntry(data, action) {
        var entry = data.head;
        while (entry) {
            entry = getNext(entry);
            if (entry) {
                action(entry.value, entry.key);
            }
        }
    }
    function forEachIteration(iterator, action) {
        if (iterator) {
            for (var step = iterator.next(); !step.done; step = iterator.next()) {
                action(step.value);
            }
        }
    }
    function createIteratorData(data, selector) {
        return { current: data.head, selector: selector };
    }
    function iteratorNext(data) {
        // Navigate to the next entry.
        data.current = getNext(data.current);
        if (data.current) {
            return { value: data.selector(data.current.key, data.current.value), done: false };
        }
        else {
            return { value: undefined, done: true };
        }
    }
    /* @internal */
    var ShimCollections;
    (function (ShimCollections) {
        function createMapShim(getIterator) {
            var MapIterator = /** @class */ (function () {
                function MapIterator(data, selector) {
                    this._data = createIteratorData(data, selector);
                }
                MapIterator.prototype.next = function () { return iteratorNext(this._data); };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map(iterable) {
                    var _this = this;
                    this._mapData = createMapData();
                    forEachIteration(getIterator(iterable), function (_a) {
                        var key = _a[0], value = _a[1];
                        return _this.set(key, value);
                    });
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._mapData.size; },
                    enumerable: false,
                    configurable: true
                });
                Map.prototype.get = function (key) { var _a; return (_a = getEntry(this._mapData, key)) === null || _a === void 0 ? void 0 : _a.value; };
                Map.prototype.set = function (key, value) { return addOrUpdateEntry(this._mapData, key, value), this; };
                Map.prototype.has = function (key) { return !!getEntry(this._mapData, key); };
                Map.prototype.delete = function (key) { return !!deleteEntry(this._mapData, key); };
                Map.prototype.clear = function () { clearEntries(this._mapData); };
                Map.prototype.keys = function () { return new MapIterator(this._mapData, function (key, _value) { return key; }); };
                Map.prototype.values = function () { return new MapIterator(this._mapData, function (_key, value) { return value; }); };
                Map.prototype.entries = function () { return new MapIterator(this._mapData, function (key, value) { return [key, value]; }); };
                Map.prototype.forEach = function (action) { forEachEntry(this._mapData, action); };
                return Map;
            }());
        }
        ShimCollections.createMapShim = createMapShim;
        function createSetShim(getIterator) {
            var SetIterator = /** @class */ (function () {
                function SetIterator(data, selector) {
                    this._data = createIteratorData(data, selector);
                }
                SetIterator.prototype.next = function () { return iteratorNext(this._data); };
                return SetIterator;
            }());
            return /** @class */ (function () {
                function Set(iterable) {
                    var _this = this;
                    this._mapData = createMapData();
                    forEachIteration(getIterator(iterable), function (value) { return _this.add(value); });
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._mapData.size; },
                    enumerable: false,
                    configurable: true
                });
                Set.prototype.add = function (value) { return addOrUpdateEntry(this._mapData, value, value), this; };
                Set.prototype.has = function (value) { return !!getEntry(this._mapData, value); };
                Set.prototype.delete = function (value) { return !!deleteEntry(this._mapData, value); };
                Set.prototype.clear = function () { clearEntries(this._mapData); };
                Set.prototype.keys = function () { return new SetIterator(this._mapData, function (key, _value) { return key; }); };
                Set.prototype.values = function () { return new SetIterator(this._mapData, function (_key, value) { return value; }); };
                Set.prototype.entries = function () { return new SetIterator(this._mapData, function (key, value) { return [key, value]; }); };
                Set.prototype.forEach = function (action) { forEachEntry(this._mapData, action); };
                return Set;
            }());
        }
        ShimCollections.createSetShim = createSetShim;
    })(ShimCollections = ts.ShimCollections || (ts.ShimCollections = {}));
})(ts || (ts = {}));
var ts;
(function (ts) {
    // WARNING: The script `configurePrerelease.ts` uses a regexp to parse out these values.
    // If changing the text in this section, be sure to test `configurePrerelease` too.
    ts.versionMajorMinor = "4.8";
    // The following is baselined as a literal template type without intervention
    /** The version of the TypeScript compiler release */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    ts.version = "4.8.3";
    /* @internal */
    var Comparison;
    (function (Comparison) {
        Comparison[Comparison["LessThan"] = -1] = "LessThan";
        Comparison[Comparison["EqualTo"] = 0] = "EqualTo";
        Comparison[Comparison["GreaterThan"] = 1] = "GreaterThan";
    })(Comparison = ts.Comparison || (ts.Comparison = {}));
    /* @internal */
    var NativeCollections;
    (function (NativeCollections) {
        var globals = typeof globalThis !== "undefined" ? globalThis :
            typeof global !== "undefined" ? global :
                typeof self !== "undefined" ? self :
                    undefined;
        /**
         * Returns the native Map implementation if it is available and compatible (i.e. supports iteration).
         */
        function tryGetNativeMap() {
            // Internet Explorer's Map doesn't support iteration, so don't use it.
            var gMap = globals === null || globals === void 0 ? void 0 : globals.Map;
            // eslint-disable-next-line no-in-operator
            return typeof gMap !== "undefined" && "entries" in gMap.prototype && new gMap([[0, 0]]).size === 1 ? gMap : undefined;
        }
        NativeCollections.tryGetNativeMap = tryGetNativeMap;
        /**
         * Returns the native Set implementation if it is available and compatible (i.e. supports iteration).
         */
        function tryGetNativeSet() {
            // Internet Explorer's Set doesn't support iteration, so don't use it.
            var gSet = globals === null || globals === void 0 ? void 0 : globals.Set;
            // eslint-disable-next-line no-in-operator
            return typeof gSet !== "undefined" && "entries" in gSet.prototype && new gSet([0]).size === 1 ? gSet : undefined;
        }
        NativeCollections.tryGetNativeSet = tryGetNativeSet;
    })(NativeCollections || (NativeCollections = {}));
    /* @internal */
    ts.Map = getCollectionImplementation("Map", "tryGetNativeMap", "createMapShim");
    /* @internal */
    ts.Set = getCollectionImplementation("Set", "tryGetNativeSet", "createSetShim");
    /* @internal */
    function getCollectionImplementation(name, nativeFactory, shimFactory) {
        var _a;
        // NOTE: ts.ShimCollections will be defined for typescriptServices.js but not for tsc.js, so we must test for it.
        var constructor = (_a = NativeCollections[nativeFactory]()) !== null && _a !== void 0 ? _a : ts.ShimCollections === null || ts.ShimCollections === void 0 ? void 0 : ts.ShimCollections[shimFactory](ts.getIterator);
        if (constructor)
            return constructor;
        throw new Error("TypeScript requires an environment that provides a compatible native ".concat(name, " implementation."));
    }
})(ts || (ts = {}));
/* @internal */
var ts;
(function (ts) {
    function getIterator(iterable) {
        if (iterable) {
            if (isArray(iterable))
                return arrayIterator(iterable);
            if (iterable instanceof ts.Map)
                return iterable.entries();
            if (iterable instanceof ts.Set)
                return iterable.values();
            throw new Error("Iteration not supported.");
        }
    }
    ts.getIterator = getIterator;
    ts.emptyArray = [];
    ts.emptyMap = new ts.Map();
    ts.emptySet = new ts.Set();
    function length(array) {
        return array ? array.length : 0;
    }
    ts.length = length;
    /**
     * Iterates through 'array' by index and performs the callback on each element of array until the callback
     * returns a truthy value, then returns that value.
     * If no such value is found, the callback is applied to each element of array and undefined is returned.
     */
    function forEach(array, callback) {
        if (array) {
            for (var i = 0; i < array.length; i++) {
                var result = callback(array[i], i);
                if (result) {
                    return result;
                }
            }
        }
        return undefined;
    }
    ts.forEach = forEach;
    /**
     * Like `forEach`, but iterates in reverse order.
     */
    function forEachRight(array, callback) {
        if (array) {
            for (var i = array.length - 1; i >= 0; i--) {
                var result = callback(array[i], i);
                if (result) {
                    return result;
                }
            }
        }
        return undefined;
    }
    ts.forEachRight = forEachRight;
    /** Like `forEach`, but suitable for use with numbers and strings (which may be falsy). */
    function firstDefined(array, callback) {
        if (array === undefined) {
            return undefined;
        }
        for (var i = 0; i < array.length; i++) {
            var result = callback(array[i], i);
            if (result !== undefined) {
                return result;
            }
        }
        return undefined;
    }
    ts.firstDefined = firstDefined;
    function firstDefinedIterator(iter, callback) {
        while (true) {
            var iterResult = iter.next();
            if (iterResult.done) {
                return undefined;
            }
            var result = callback(iterResult.value);
            if (result !== undefined) {
                return result;
            }
        }
    }
    ts.firstDefinedIterator = firstDefinedIterator;
    function reduceLeftIterator(iterator, f, initial) {
        var result = initial;
        if (iterator) {
            for (var step = iterator.next(), pos = 0; !step.done; step = iterator.next(), pos++) {
                result = f(result, step.value, pos);
            }
        }
        return result;
    }
    ts.reduceLeftIterator = reduceLeftIterator;
    function zipWith(arrayA, arrayB, callback) {
        var result = [];
        ts.Debug.assertEqual(arrayA.length, arrayB.length);
        for (var i = 0; i < arrayA.length; i++) {
            result.push(callback(arrayA[i], arrayB[i], i));
        }
        return result;
    }
    ts.zipWith = zipWith;
    function zipToIterator(arrayA, arrayB) {
        ts.Debug.assertEqual(arrayA.length, arrayB.length);
        var i = 0;
        return {
            next: function () {
                if (i === arrayA.length) {
                    return { value: undefined, done: true };
                }
                i++;
                return { value: [arrayA[i - 1], arrayB[i - 1]], done: false };
            }
        };
    }
    ts.zipToIterator = zipToIterator;
    function zipToMap(keys, values) {
        ts.Debug.assert(keys.length === values.length);
        var map = new ts.Map();
        for (var i = 0; i < keys.length; ++i) {
            map.set(keys[i], values[i]);
        }
        return map;
    }
    ts.zipToMap = zipToMap;
    /**
     * Creates a new array with `element` interspersed in between each element of `input`
     * if there is more than 1 value in `input`. Otherwise, returns the existing array.
     */
    function intersperse(input, element) {
        if (input.length <= 1) {
            return input;
        }
        var result = [];
        for (var i = 0, n = input.length; i < n; i++) {
            if (i)
                result.push(element);
            result.push(input[i]);
        }
        return result;
    }
    ts.intersperse = intersperse;
    /**
     * Iterates through `array` by index and performs the callback on each element of array until the callback
     * returns a falsey value, then returns false.
     * If no such value is found, the callback is applied to each element of array and `true` is returned.
     */
    function every(array, callback) {
        if (array) {
            for (var i = 0; i < array.length; i++) {
                if (!callback(array[i], i)) {
                    return false;
                }
            }
        }
        return true;
    }
    ts.every = every;
    function find(array, predicate, startIndex) {
        if (array === undefined)
            return undefined;
        for (var i = startIndex !== null && startIndex !== void 0 ? startIndex : 0; i < array.length; i++) {
            var value = array[i];
            if (predicate(value, i)) {
                return value;
            }
        }
        return undefined;
    }
    ts.find = find;
    function findLast(array, predicate, startIndex) {
        if (array === undefined)
            return undefined;
        for (var i = startIndex !== null && startIndex !== void 0 ? startIndex : array.length - 1; i >= 0; i--) {
            var value = array[i];
            if (predicate(value, i)) {
                return value;
            }
        }
        return undefined;
    }
    ts.findLast = findLast;
    /** Works like Array.prototype.findIndex, returning `-1` if no element satisfying the predicate is found. */
    function findIndex(array, predicate, startIndex) {
        if (array === undefined)
            return -1;
        for (var i = startIndex !== null && startIndex !== void 0 ? startIndex : 0; i < array.length; i++) {
            if (predicate(array[i], i)) {
                return i;
            }
        }
        return -1;
    }
    ts.findIndex = findIndex;
    function findLastIndex(array, predicate, startIndex) {
        if (array === undefined)
            return -1;
        for (var i = startIndex !== null && startIndex !== void 0 ? startIndex : array.length - 1; i >= 0; i--) {
            if (predicate(array[i], i)) {
                return i;
            }
        }
        return -1;
    }
    ts.findLastIndex = findLastIndex;
    /**
     * Returns the first truthy result of `callback`, or else fails.
     * This is like `forEach`, but never returns undefined.
     */
    function findMap(array, callback) {
        for (var i = 0; i < array.length; i++) {
            var result = callback(array[i], i);
            if (result) {
                return result;
            }
        }
        return ts.Debug.fail();
    }
    ts.findMap = findMap;
    function contains(array, value, equalityComparer) {
        if (equalityComparer === void 0) { equalityComparer = equateValues; }
        if (array) {
            for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                var v = array_1[_i];
                if (equalityComparer(v, value)) {
                    return true;
                }
            }
        }
        return false;
    }
    ts.contains = contains;
    function arraysEqual(a, b, equalityComparer) {
        if (equalityComparer === void 0) { equalityComparer = equateValues; }
        return a.length === b.length && a.every(function (x, i) { return equalityComparer(x, b[i]); });
    }
    ts.arraysEqual = arraysEqual;
    function indexOfAnyCharCode(text, charCodes, start) {
        for (var i = start || 0; i < text.length; i++) {
            if (contains(charCodes, text.charCodeAt(i))) {
                return i;
            }
        }
        return -1;
    }
    ts.indexOfAnyCharCode = indexOfAnyCharCode;
    function countWhere(array, predicate) {
        var count = 0;
        if (array) {
            for (var i = 0; i < array.length; i++) {
                var v = array[i];
                if (predicate(v, i)) {
                    count++;
                }
            }
        }
        return count;
    }
    ts.countWhere = countWhere;
    function filter(array, f) {
        if (array) {
            var len = array.length;
            var i = 0;
            while (i < len && f(array[i]))
                i++;
            if (i < len) {
                var result = array.slice(0, i);
                i++;
                while (i < len) {
                    var item = array[i];
                    if (f(item)) {
                        result.push(item);
                    }
                    i++;
                }
                return result;
            }
        }
        return array;
    }
    ts.filter = filter;
    function filterMutate(array, f) {
        var outIndex = 0;
        for (var i = 0; i < array.length; i++) {
            if (f(array[i], i, array)) {
                array[outIndex] = array[i];
                outIndex++;
            }
        }
        array.length = outIndex;
    }
    ts.filterMutate = filterMutate;
    function clear(array) {
        array.length = 0;
    }
    ts.clear = clear;
    function map(array, f) {
        var result;
        if (array) {
            result = [];
            for (var i = 0; i < array.length; i++) {
                result.push(f(array[i], i));
            }
        }
        return result;
    }
    ts.map = map;
    function mapIterator(iter, mapFn) {
        return {
            next: function () {
                var iterRes = iter.next();
                return iterRes.done ? iterRes : { value: mapFn(iterRes.value), done: false };
            }
        };
    }
    ts.mapIterator = mapIterator;
    function sameMap(array, f) {
        if (array) {
            for (var i = 0; i < array.length; i++) {
                var item = array[i];
                var mapped = f(item, i);
                if (item !== mapped) {
                    var result = array.slice(0, i);
                    result.push(mapped);
                    for (i++; i < array.length; i++) {
                        result.push(f(array[i], i));
                    }
                    return result;
                }
            }
        }
        return array;
    }
    ts.sameMap = sameMap;
    /**
     * Flattens an array containing a mix of array or non-array elements.
     *
     * @param array The array to flatten.
     */
    function flatten(array) {
        var result = [];
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var v = array_2[_i];
            if (v) {
                if (isArray(v)) {
                    addRange(result, v);
                }
                else {
                    result.push(v);
                }
            }
        }
        return result;
    }
    ts.flatten = flatten;
    /**
     * Maps an array. If the mapped value is an array, it is spread into the result.
     *
     * @param array The array to map.
     * @param mapfn The callback used to map the result into one or more values.
     */
    function flatMap(array, mapfn) {
        var result;
        if (array) {
            for (var i = 0; i < array.length; i++) {
                var v = mapfn(array[i], i);
                if (v) {
                    if (isArray(v)) {
                        result = addRange(result, v);
                    }
                    else {
                        result = append(result, v);
                    }
                }
            }
        }
        return result || ts.emptyArray;
    }
    ts.flatMap = flatMap;
    function flatMapToMutable(array, mapfn) {
        var result = [];
        if (array) {
            for (var i = 0; i < array.length; i++) {
                var v = mapfn(array[i], i);
                if (v) {
                    if (isArray(v)) {
                        addRange(result, v);
                    }
                    else {
                        result.push(v);
                    }
                }
            }
        }
        return result;
    }
    ts.flatMapToMutable = flatMapToMutable;
    function flatMapIterator(iter, mapfn) {
        var first = iter.next();
        if (first.done) {
            return ts.emptyIterator;
        }
        var currentIter = getIterator(first.value);
        return {
            next: function () {
                while (true) {
                    var currentRes = currentIter.next();
                    if (!currentRes.done) {
                        return currentRes;
                    }
                    var iterRes = iter.next();
                    if (iterRes.done) {
                        return iterRes;
                    }
                    currentIter = getIterator(iterRes.value);
                }
            },
        };
        function getIterator(x) {
            var res = mapfn(x);
            return res === undefined ? ts.emptyIterator : isArray(res) ? arrayIterator(res) : res;
        }
    }
    ts.flatMapIterator = flatMapIterator;
    function sameFlatMap(array, mapfn) {
        var result;
        if (array) {
            for (var i = 0; i < array.length; i++) {
                var item = array[i];
                var mapped = mapfn(item, i);
                if (result || item !== mapped || isArray(mapped)) {
                    if (!result) {
                        result = array.slice(0, i);
                    }
                    if (isArray(mapped)) {
                        addRange(result, mapped);
                    }
                    else {
                        result.push(mapped);
                    }
                }
            }
        }
        return result || array;
    }
    ts.sameFlatMap = sameFlatMap;
    function mapAllOrFail(array, mapFn) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            var mapped = mapFn(array[i], i);
            if (mapped === undefined) {
                return undefined;
            }
            result.push(mapped);
        }
        return result;
    }
    ts.mapAllOrFail = mapAllOrFail;
    function mapDefined(array, mapFn) {
        var result = [];
        if (array) {
            for (var i = 0; i < array.length; i++) {
                var mapped = mapFn(array[i], i);
                if (mapped !== undefined) {
                    result.push(mapped);
                }
            }
        }
        return result;
    }
    ts.mapDefined = mapDefined;
    function mapDefinedIterator(iter, mapFn) {
        return {
            next: function () {
                while (true) {
                    var res = iter.next();
                    if (res.done) {
                        return res;
                    }
                    var value = mapFn(res.value);
                    if (value !== undefined) {
                        return { value: value, done: false };
                    }
                }
            }
        };
    }
    ts.mapDefinedIterator = mapDefinedIterator;
    function mapDefinedEntries(map, f) {
        if (!map) {
            return undefined;
        }
        var result = new ts.Map();
        map.forEach(function (value, key) {
            var entry = f(key, value);
            if (entry !== undefined) {
                var newKey = entry[0], newValue = entry[1];
                if (newKey !== undefined && newValue !== undefined) {
                    result.set(newKey, newValue);
                }
            }
        });
        return result;
    }
    ts.mapDefinedEntries = mapDefinedEntries;
    function mapDefinedValues(set, f) {
        if (set) {
            var result_1 = new ts.Set();
            set.forEach(function (value) {
                var newValue = f(value);
                if (newValue !== undefined) {
                    result_1.add(newValue);
                }
            });
            return result_1;
        }
    }
    ts.mapDefinedValues = mapDefinedValues;
    function getOrUpdate(map, key, callback) {
        if (map.has(key)) {
            return map.get(key);
        }
        var value = callback();
        map.set(key, value);
        return value;
    }
    ts.getOrUpdate = getOrUpdate;
    function tryAddToSet(set, value) {
        if (!set.has(value)) {
            set.add(value);
            return true;
        }
        return false;
    }
    ts.tryAddToSet = tryAddToSet;
    ts.emptyIterator = { next: function () { return ({ value: undefined, done: true }); } };
    function singleIterator(value) {
        var done = false;
        return {
            next: function () {
                var wasDone = done;
                done = true;
                return wasDone ? { value: undefined, done: true } : { value: value, done: false };
            }
        };
    }
    ts.singleIterator = singleIterator;
    function spanMap(array, keyfn, mapfn) {
        var result;
        if (array) {
            result = [];
            var len = array.length;
            var previousKey = void 0;
            var key = void 0;
            var start = 0;
            var pos = 0;
            while (start < len) {
                while (pos < len) {
                    var value = array[pos];
                    key = keyfn(value, pos);
                    if (pos === 0) {
                        previousKey = key;
                    }
                    else if (key !== previousKey) {
                        break;
                    }
                    pos++;
                }
                if (start < pos) {
                    var v = mapfn(array.slice(start, pos), previousKey, start, pos);
                    if (v) {
                        result.push(v);
                    }
                    start = pos;
                }
                previousKey = key;
                pos++;
            }
        }
        return result;
    }
    ts.spanMap = spanMap;
    function mapEntries(map, f) {
        if (!map) {
            return undefined;
        }
        var result = new ts.Map();
        map.forEach(function (value, key) {
            var _a = f(key, value), newKey = _a[0], newValue = _a[1];
            result.set(newKey, newValue);
        });
        return result;
    }
    ts.mapEntries = mapEntries;
    function some(array, predicate) {
        if (array) {
            if (predicate) {
                for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
                    var v = array_3[_i];
                    if (predicate(v)) {
                        return true;
                    }
                }
            }
            else {
                return array.length > 0;
            }
        }
        return false;
    }
    ts.some = some;
    /** Calls the callback with (start, afterEnd) index pairs for each range where 'pred' is true. */
    function getRangesWhere(arr, pred, cb) {
        var start;
        for (var i = 0; i < arr.length; i++) {
            if (pred(arr[i])) {
                start = start === undefined ? i : start;
            }
            else {
                if (start !== undefined) {
                    cb(start, i);
                    start = undefined;
                }
            }
        }
        if (start !== undefined)
            cb(start, arr.length);
    }
    ts.getRangesWhere = getRangesWhere;
    function concatenate(array1, array2) {
        if (!some(array2))
            return array1;
        if (!some(array1))
            return array2;
        return __spreadArray(__spreadArray([], array1, true), array2, true);
    }
    ts.concatenate = concatenate;
    function selectIndex(_, i) {
        return i;
    }
    function indicesOf(array) {
        return array.map(selectIndex);
    }
    ts.indicesOf = indicesOf;
    function deduplicateRelational(array, equalityComparer, comparer) {
        // Perform a stable sort of the array. This ensures the first entry in a list of
        // duplicates remains the first entry in the result.
        var indices = indicesOf(array);
        stableSortIndices(array, indices, comparer);
        var last = array[indices[0]];
        var deduplicated = [indices[0]];
        for (var i = 1; i < indices.length; i++) {
            var index = indices[i];
            var item = array[index];
            if (!equalityComparer(last, item)) {
                deduplicated.push(index);
                last = item;
            }
        }
        // restore original order
        deduplicated.sort();
        return deduplicated.map(function (i) { return array[i]; });
    }
    function deduplicateEquality(array, equalityComparer) {
        var result = [];
        for (var _i = 0, array_4 = array; _i < array_4.length; _i++) {
            var item = array_4[_i];
            pushIfUnique(result, item, equalityComparer);
        }
        return result;
    }
    /**
     * Deduplicates an unsorted array.
     * @param equalityComparer An `EqualityComparer` used to determine if two values are duplicates.
     * @param comparer An optional `Comparer` used to sort entries before comparison, though the
     * result will remain in the original order in `array`.
     */
    function deduplicate(array, equalityComparer, comparer) {
        return array.length === 0 ? [] :
            array.length === 1 ? array.slice() :
                comparer ? deduplicateRelational(array, equalityComparer, comparer) :
                    deduplicateEquality(array, equalityComparer);
    }
    ts.deduplicate = deduplicate;
    /**
     * Deduplicates an array that has already been sorted.
     */
    function deduplicateSorted(array, comparer) {
        if (array.length === 0)
            return ts.emptyArray;
        var last = array[0];
        var deduplicated = [last];
        for (var i = 1; i < array.length; i++) {
            var next = array[i];
            switch (comparer(next, last)) {
                // equality comparison
                case true:
                // relational comparison
                // falls through
                case 0 /* Comparison.EqualTo */:
                    continue;
                case -1 /* Comparison.LessThan */:
                    // If `array` is sorted, `next` should **never** be less than `last`.
                    return ts.Debug.fail("Array is unsorted.");
            }
            deduplicated.push(last = next);
        }
        return deduplicated;
    }
    function createSortedArray() {
        return []; // TODO: GH#19873
    }
    ts.createSortedArray = createSortedArray;
    function insertSorted(array, insert, compare, allowDuplicates) {
        if (array.length === 0) {
            array.push(insert);
            return;
        }
        var insertIndex = binarySearch(array, insert, identity, compare);
        if (insertIndex < 0) {
            array.splice(~insertIndex, 0, insert);
        }
        else if (allowDuplicates) {
            array.splice(insertIndex, 0, insert);
        }
    }
    ts.insertSorted = insertSorted;
    function sortAndDeduplicate(array, comparer, equalityComparer) {
        return deduplicateSorted(sort(array, comparer), equalityComparer || comparer || compareStringsCaseSensitive);
    }
    ts.sortAndDeduplicate = sortAndDeduplicate;
    function arrayIsSorted(array, comparer) {
        if (array.length < 2)
            return true;
        var prevElement = array[0];
        for (var _i = 0, _a = array.slice(1); _i < _a.length; _i++) {
            var element = _a[_i];
            if (comparer(prevElement, element) === 1 /* Comparison.GreaterThan */) {
                return false;
            }
            prevElement = element;
        }
        return true;
    }
    ts.arrayIsSorted = arrayIsSorted;
    function arrayIsEqualTo(array1, array2, equalityComparer) {
        if (equalityComparer === void 0) { equalityComparer = equateValues; }
        if (!array1 || !array2) {
            return array1 === array2;
        }
        if (array1.length !== array2.length) {
            return false;
        }
        for (var i = 0; i < array1.length; i++) {
            if (!equalityComparer(array1[i], array2[i], i)) {
                return false;
            }
        }
        return true;
    }
    ts.arrayIsEqualTo = arrayIsEqualTo;
    function compact(array) {
        var result;
        if (array) {
            for (var i = 0; i < array.length; i++) {
                var v = array[i];
                if (result || !v) {
                    if (!result) {
                        result = array.slice(0, i);
                    }
                    if (v) {
                        result.push(v);
                    }
                }
            }
        }
        return result || array;
    }
    ts.compact = compact;
    /**
     * Gets the relative complement of `arrayA` with respect to `arrayB`, returning the elements that
     * are not present in `arrayA` but are present in `arrayB`. Assumes both arrays are sorted
     * based on the provided comparer.
     */
    function relativeComplement(arrayA, arrayB, comparer) {
        if (!arrayB || !arrayA || arrayB.length === 0 || arrayA.length === 0)
            return arrayB;
        var result = [];
        loopB: for (var offsetA = 0, offsetB = 0; offsetB < arrayB.length; offsetB++) {
            if (offsetB > 0) {
                // Ensure `arrayB` is properly sorted.
                ts.Debug.assertGreaterThanOrEqual(comparer(arrayB[offsetB], arrayB[offsetB - 1]), 0 /* Comparison.EqualTo */);
            }
            loopA: for (var startA = offsetA; offsetA < arrayA.length; offsetA++) {
                if (offsetA > startA) {
                    // Ensure `arrayA` is properly sorted. We only need to perform this check if
                    // `offsetA` has changed since we entered the loop.
                    ts.Debug.assertGreaterThanOrEqual(comparer(arrayA[offsetA], arrayA[offsetA - 1]), 0 /* Comparison.EqualTo */);
                }
                switch (comparer(arrayB[offsetB], arrayA[offsetA])) {
                    case -1 /* Comparison.LessThan */:
                        // If B is less than A, B does not exist in arrayA. Add B to the result and
                        // move to the next element in arrayB without changing the current position
                        // in arrayA.
                        result.push(arrayB[offsetB]);
                        continue loopB;
                    case 0 /* Comparison.EqualTo */:
                        // If B is equal to A, B exists in arrayA. Move to the next element in
                        // arrayB without adding B to the result or changing the current position
                        // in arrayA.
                        continue loopB;
                    case 1 /* Comparison.GreaterThan */:
                        // If B is greater than A, we need to keep looking for B in arrayA. Move to
                        // the next element in arrayA and recheck.
                        continue loopA;
                }
            }
        }
        return result;
    }
    ts.relativeComplement = relativeComplement;
    function sum(array, prop) {
        var result = 0;
        for (var _i = 0, array_5 = array; _i < array_5.length; _i++) {
            var v = array_5[_i];
            result += v[prop];
        }
        return result;
    }
    ts.sum = sum;
    function append(to, value) {
        if (value === undefined)
            return to;
        if (to === undefined)
            return [value];
        to.push(value);
        return to;
    }
    ts.append = append;
    function combine(xs, ys) {
        if (xs === undefined)
            return ys;
        if (ys === undefined)
            return xs;
        if (isArray(xs))
            return isArray(ys) ? concatenate(xs, ys) : append(xs, ys);
        if (isArray(ys))
            return append(ys, xs);
        return [xs, ys];
    }
    ts.combine = combine;
    /**
     * Gets the actual offset into an array for a relative offset. Negative offsets indicate a
     * position offset from the end of the array.
     */
    function toOffset(array, offset) {
        return offset < 0 ? array.length + offset : offset;
    }
    function addRange(to, from, start, end) {
        if (from === undefined || from.length === 0)
            return to;
        if (to === undefined)
            return from.slice(start, end);
        start = start === undefined ? 0 : toOffset(from, start);
        end = end === undefined ? from.length : toOffset(from, end);
        for (var i = start; i < end && i < from.length; i++) {
            if (from[i] !== undefined) {
                to.push(from[i]);
            }
        }
        return to;
    }
    ts.addRange = addRange;
    /**
     * @return Whether the value was added.
     */
    function pushIfUnique(array, toAdd, equalityComparer) {
        if (contains(array, toAdd, equalityComparer)) {
            return false;
        }
        else {
            array.push(toAdd);
            return true;
        }
    }
    ts.pushIfUnique = pushIfUnique;
    /**
     * Unlike `pushIfUnique`, this can take `undefined` as an input, and returns a new array.
     */
    function appendIfUnique(array, toAdd, equalityComparer) {
        if (array) {
            pushIfUnique(array, toAdd, equalityComparer);
            return array;
        }
        else {
            return [toAdd];
        }
    }
    ts.appendIfUnique = appendIfUnique;
    function stableSortIndices(array, indices, comparer) {
        // sort indices by value then position
        indices.sort(function (x, y) { return comparer(array[x], array[y]) || compareValues(x, y); });
    }
    /**
     * Returns a new sorted array.
     */
    function sort(array, comparer) {
        return (array.length === 0 ? array : array.slice().sort(comparer));
    }
    ts.sort = sort;
    function arrayIterator(array) {
        var i = 0;
        return { next: function () {
                if (i === array.length) {
                    return { value: undefined, done: true };
                }
                else {
                    i++;
                    return { value: array[i - 1], done: false };
                }
            } };
    }
    ts.arrayIterator = arrayIterator;
    function arrayReverseIterator(array) {
        var i = array.length;
        return {
            next: function () {
                if (i === 0) {
                    return { value: undefined, done: true };
                }
                else {
                    i--;
                    return { value: array[i], done: false };
                }
            }
        };
    }
    ts.arrayReverseIterator = arrayReverseIterator;
    /**
     * Stable sort of an array. Elements equal to each other maintain their relative position in the array.
     */
    function stableSort(array, comparer) {
        var indices = indicesOf(array);
        stableSortIndices(array, indices, comparer);
        return indices.map(function (i) { return array[i]; });
    }
    ts.stableSort = stableSort;
    function rangeEquals(array1, array2, pos, end) {
        while (pos < end) {
            if (array1[pos] !== array2[pos]) {
                return false;
            }
            pos++;
        }
        return true;
    }
    ts.rangeEquals = rangeEquals;
    /**
     * Returns the element at a specific offset in an array if non-empty, `undefined` otherwise.
     * A negative offset indicates the element should be retrieved from the end of the array.
     */
    function elementAt(array, offset) {
        if (array) {
            offset = toOffset(array, offset);
            if (offset < array.length) {
                return array[offset];
            }
        }
        return undefined;
    }
    ts.elementAt = elementAt;
    /**
     * Returns the first element of an array if non-empty, `undefined` otherwise.
     */
    function firstOrUndefined(array) {
        return array === undefined || array.length === 0 ? undefined : array[0];
    }
    ts.firstOrUndefined = firstOrUndefined;
    function first(array) {
        ts.Debug.assert(array.length !== 0);
        return array[0];
    }
    ts.first = first;
    /**
     * Returns the last element of an array if non-empty, `undefined` otherwise.
     */
    function lastOrUndefined(array) {
        return array === undefined || array.length === 0 ? undefined : array[array.length - 1];
    }
    ts.lastOrUndefined = lastOrUndefined;
    function last(array) {
        ts.Debug.assert(array.length !== 0);
        return array[array.length - 1];
    }
    ts.last = last;
    /**
     * Returns the only element of an array if it contains only one element, `undefined` otherwise.
     */
    function singleOrUndefined(array) {
        return array && array.length === 1
            ? array[0]
            : undefined;
    }
    ts.singleOrUndefined = singleOrUndefined;
    function singleOrMany(array) {
        return array && array.length === 1
            ? array[0]
            : array;
    }
    ts.singleOrMany = singleOrMany;
    function replaceElement(array, index, value) {
        var result = array.slice(0);
        result[index] = value;
        return result;
    }
    ts.replaceElement = replaceElement;
    /**
     * Performs a binary search, finding the index at which `value` occurs in `array`.
     * If no such index is found, returns the 2's-complement of first index at which
     * `array[index]` exceeds `value`.
     * @param array A sorted array whose first element must be no larger than number
     * @param value The value to be searched for in the array.
     * @param keySelector A callback used to select the search key from `value` and each element of
     * `array`.
     * @param keyComparer A callback used to compare two keys in a sorted array.
     * @param offset An offset into `array` at which to start the search.
     */
    function binarySearch(array, value, keySelector, keyComparer, offset) {
        return binarySearchKey(array, keySelector(value), keySelector, keyComparer, offset);
    }
    ts.binarySearch = binarySearch;
    /**
     * Performs a binary search, finding the index at which an object with `key` occurs in `array`.
     * If no such index is found, returns the 2's-complement of first index at which
     * `array[index]` exceeds `key`.
     * @param array A sorted array whose first element must be no larger than number
     * @param key The key to be searched for in the array.
     * @param keySelector A callback used to select the search key from each element of `array`.
     * @param keyComparer A callback used to compare two keys in a sorted array.
     * @param offset An offset into `array` at which to start the search.
     */
    function binarySearchKey(array, key, keySelector, keyComparer, offset) {
        if (!some(array)) {
            return -1;
        }
        var low = offset || 0;
        var high = array.length - 1;
        while (low <= high) {
            var middle = low + ((high - low) >> 1);
            var midKey = keySelector(array[middle], middle);
            switch (keyComparer(midKey, key)) {
                case -1 /* Comparison.LessThan */:
                    low = middle + 1;
                    break;
                case 0 /* Comparison.EqualTo */:
                    return middle;
                case 1 /* Comparison.GreaterThan */:
                    high = middle - 1;
                    break;
            }
        }
        return ~low;
    }
    ts.binarySearchKey = binarySearchKey;
    function reduceLeft(array, f, initial, start, count) {
        if (array && array.length > 0) {
            var size = array.length;
            if (size > 0) {
                var pos = start === undefined || start < 0 ? 0 : start;
                var end = count === undefined || pos + count > size - 1 ? size - 1 : pos + count;
                var result = void 0;
                if (arguments.length <= 2) {
                    result = array[pos];
                    pos++;
                }
                else {
                    result = initial;
                }
                while (pos <= end) {
                    result = f(result, array[pos], pos);
                    pos++;
                }
                return result;
            }
        }
        return initial;
    }
    ts.reduceLeft = reduceLeft;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    /**
     * Indicates whether a map-like contains an own property with the specified key.
     *
     * @param map A map-like.
     * @param key A property key.
     */
    function hasProperty(map, key) {
        return hasOwnProperty.call(map, key);
    }
    ts.hasProperty = hasProperty;
    /**
     * Gets the value of an owned property in a map-like.
     *
     * @param map A map-like.
     * @param key A property key.
     */
    function getProperty(map, key) {
        return hasOwnProperty.call(map, key) ? map[key] : undefined;
    }
    ts.getProperty = getProperty;
    /**
     * Gets the owned, enumerable property keys of a map-like.
     */
    function getOwnKeys(map) {
        var keys = [];
        for (var key in map) {
            if (hasOwnProperty.call(map, key)) {
                keys.push(key);
            }
        }
        return keys;
    }
    ts.getOwnKeys = getOwnKeys;
    function getAllKeys(obj) {
        var result = [];
        do {
            var names = Object.getOwnPropertyNames(obj);
            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                var name = names_1[_i];
                pushIfUnique(result, name);
            }
        } while (obj = Object.getPrototypeOf(obj));
        return result;
    }
    ts.getAllKeys = getAllKeys;
    function getOwnValues(collection) {
        var values = [];
        for (var key in collection) {
            if (hasOwnProperty.call(collection, key)) {
                values.push(collection[key]);
            }
        }
        return values;
    }
    ts.getOwnValues = getOwnValues;
    var _entries = Object.entries || (function (obj) {
        var keys = getOwnKeys(obj);
        var result = Array(keys.length);
        for (var i = 0; i < keys.length; i++) {
            result[i] = [keys[i], obj[keys[i]]];
        }
        return result;
    });
    function getEntries(obj) {
        return obj ? _entries(obj) : [];
    }
    ts.getEntries = getEntries;
    function arrayOf(count, f) {
        var result = new Array(count);
        for (var i = 0; i < count; i++) {
            result[i] = f(i);
        }
        return result;
    }
    ts.arrayOf = arrayOf;
    function arrayFrom(iterator, map) {
        var result = [];
        for (var iterResult = iterator.next(); !iterResult.done; iterResult = iterator.next()) {
            result.push(map ? map(iterResult.value) : iterResult.value);
        }
        return result;
    }
    ts.arrayFrom = arrayFrom;
    function assign(t) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var arg = args_1[_a];
            if (arg === undefined)
                continue;
            for (var p in arg) {
                if (hasProperty(arg, p)) {
                    t[p] = arg[p];
                }
            }
        }
        return t;
    }
    ts.assign = assign;
    /**
     * Performs a shallow equality comparison of the contents of two map-likes.
     *
     * @param left A map-like whose properties should be compared.
     * @param right A map-like whose properties should be compared.
     */
    function equalOwnProperties(left, right, equalityComparer) {
        if (equalityComparer === void 0) { equalityComparer = equateValues; }
        if (left === right)
            return true;
        if (!left || !right)
            return false;
        for (var key in left) {
            if (hasOwnProperty.call(left, key)) {
                if (!hasOwnProperty.call(right, key))
                    return false;
                if (!equalityComparer(left[key], right[key]))
                    return false;
            }
        }
        for (var key in right) {
            if (hasOwnProperty.call(right, key)) {
                if (!hasOwnProperty.call(left, key))
                    return false;
            }
        }
        return true;
    }
    ts.equalOwnProperties = equalOwnProperties;
    function arrayToMap(array, makeKey, makeValue) {
        if (makeValue === void 0) { makeValue = identity; }
        var result = new ts.Map();
        for (var _i = 0, array_6 = array; _i < array_6.length; _i++) {
            var value = array_6[_i];
            var key = makeKey(value);
            if (key !== undefined)
                result.set(key, makeValue(value));
        }
        return result;
    }
    ts.arrayToMap = arrayToMap;
    function arrayToNumericMap(array, makeKey, makeValue) {
        if (makeValue === void 0) { makeValue = identity; }
        var result = [];
        for (var _i = 0, array_7 = array; _i < array_7.length; _i++) {
            var value = array_7[_i];
            result[makeKey(value)] = makeValue(value);
        }
        return result;
    }
    ts.arrayToNumericMap = arrayToNumericMap;
    function arrayToMultiMap(values, makeKey, makeValue) {
        if (makeValue === void 0) { makeValue = identity; }
        var result = createMultiMap();
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            result.add(makeKey(value), makeValue(value));
        }
        return result;
    }
    ts.arrayToMultiMap = arrayToMultiMap;
    function group(values, getGroupId, resultSelector) {
        if (resultSelector === void 0) { resultSelector = identity; }
        return arrayFrom(arrayToMultiMap(values, getGroupId).values(), resultSelector);
    }
    ts.group = group;
    function clone(object) {
        var result = {};
        for (var id in object) {
            if (hasOwnProperty.call(object, id)) {
                result[id] = object[id];
            }
        }
        return result;
    }
    ts.clone = clone;
    /**
     * Creates a new object by adding the own properties of `second`, then the own properties of `first`.
     *
     * NOTE: This means that if a property exists in both `first` and `second`, the property in `first` will be chosen.
     */
    function extend(first, second) {
        var result = {};
        for (var id in second) {
            if (hasOwnProperty.call(second, id)) {
                result[id] = second[id];
            }
        }
        for (var id in first) {
            if (hasOwnProperty.call(first, id)) {
                result[id] = first[id];
            }
        }
        return result;
    }
    ts.extend = extend;
    function copyProperties(first, second) {
        for (var id in second) {
            if (hasOwnProperty.call(second, id)) {
                first[id] = second[id];
            }
        }
    }
    ts.copyProperties = copyProperties;
    function maybeBind(obj, fn) {
        return fn ? fn.bind(obj) : undefined;
    }
    ts.maybeBind = maybeBind;
    function createMultiMap() {
        var map = new ts.Map();
        map.add = multiMapAdd;
        map.remove = multiMapRemove;
        return map;
    }
    ts.createMultiMap = createMultiMap;
    function multiMapAdd(key, value) {
        var values = this.get(key);
        if (values) {
            values.push(value);
        }
        else {
            this.set(key, values = [value]);
        }
        return values;
    }
    function multiMapRemove(key, value) {
        var values = this.get(key);
        if (values) {
            unorderedRemoveItem(values, value);
            if (!values.length) {
                this.delete(key);
            }
        }
    }
    function createUnderscoreEscapedMultiMap() {
        return createMultiMap();
    }
    ts.createUnderscoreEscapedMultiMap = createUnderscoreEscapedMultiMap;
    function createQueue(items) {
        var elements = (items === null || items === void 0 ? void 0 : items.slice()) || [];
        var headIndex = 0;
        function isEmpty() {
            return headIndex === elements.length;
        }
        function enqueue() {
            var items = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                items[_i] = arguments[_i];
            }
            elements.push.apply(elements, items);
        }
        function dequeue() {
            if (isEmpty()) {
                throw new Error("Queue is empty");
            }
            var result = elements[headIndex];
            elements[headIndex] = undefined; // Don't keep referencing dequeued item
            headIndex++;
            // If more than half of the queue is empty, copy the remaining elements to the
            // front and shrink the array (unless we'd be saving fewer than 100 slots)
            if (headIndex > 100 && headIndex > (elements.length >> 1)) {
                var newLength = elements.length - headIndex;
                elements.copyWithin(/*target*/ 0, /*start*/ headIndex);
                elements.length = newLength;
                headIndex = 0;
            }
            return result;
        }
        return {
            enqueue: enqueue,
            dequeue: dequeue,
            isEmpty: isEmpty,
        };
    }
    ts.createQueue = createQueue;
    /**
     * Creates a Set with custom equality and hash code functionality.  This is useful when you
     * want to use something looser than object identity - e.g. "has the same span".
     *
     * If `equals(a, b)`, it must be the case that `getHashCode(a) === getHashCode(b)`.
     * The converse is not required.
     *
     * To facilitate a perf optimization (lazy allocation of bucket arrays), `TElement` is
     * assumed not to be an array type.
     */
    function createSet(getHashCode, equals) {
        var multiMap = new ts.Map();
        var size = 0;
        function getElementIterator() {
            var valueIt = multiMap.values();
            var arrayIt;
            return {
                next: function () {
                    while (true) {
                        if (arrayIt) {
                            var n = arrayIt.next();
                            if (!n.done) {
                                return { value: n.value };
                            }
                            arrayIt = undefined;
                        }
                        else {
                            var n = valueIt.next();
                            if (n.done) {
                                return { value: undefined, done: true };
                            }
                            if (!isArray(n.value)) {
                                return { value: n.value };
                            }
                            arrayIt = arrayIterator(n.value);
                        }
                    }
                }
            };
        }
        var set = {
            has: function (element) {
                var hash = getHashCode(element);
                if (!multiMap.has(hash))
                    return false;
                var candidates = multiMap.get(hash);
                if (!isArray(candidates))
                    return equals(candidates, element);
                for (var _i = 0, candidates_1 = candidates; _i < candidates_1.length; _i++) {
                    var candidate = candidates_1[_i];
                    if (equals(candidate, element)) {
                        return true;
                    }
                }
                return false;
            },
            add: function (element) {
                var hash = getHashCode(element);
                if (multiMap.has(hash)) {
                    var values = multiMap.get(hash);
                    if (isArray(values)) {
                        if (!contains(values, element, equals)) {
                            values.push(element);
                            size++;
                        }
                    }
                    else {
                        var value = values;
                        if (!equals(value, element)) {
                            multiMap.set(hash, [value, element]);
                            size++;
                        }
                    }
                }
                else {
                    multiMap.set(hash, element);
                    size++;
                }
                return this;
            },
            delete: function (element) {
                var hash = getHashCode(element);
                if (!multiMap.has(hash))
                    return false;
                var candidates = multiMap.get(hash);
                if (isArray(candidates)) {
                    for (var i = 0; i < candidates.length; i++) {
                        if (equals(candidates[i], element)) {
                            if (candidates.length === 1) {
                                multiMap.delete(hash);
                            }
                            else if (candidates.length === 2) {
                                multiMap.set(hash, candidates[1 - i]);
                            }
                            else {
                                unorderedRemoveItemAt(candidates, i);
                            }
                            size--;
                            return true;
                        }
                    }
                }
                else {
                    var candidate = candidates;
                    if (equals(candidate, element)) {
                        multiMap.delete(hash);
                        size--;
                        return true;
                    }
                }
                return false;
            },
            clear: function () {
                multiMap.clear();
                size = 0;
            },
            get size() {
                return size;
            },
            forEach: function (action) {
                for (var _i = 0, _a = arrayFrom(multiMap.values()); _i < _a.length; _i++) {
                    var elements = _a[_i];
                    if (isArray(elements)) {
                        for (var _b = 0, elements_1 = elements; _b < elements_1.length; _b++) {
                            var element = elements_1[_b];
                            action(element, element);
                        }
                    }
                    else {
                        var element = elements;
                        action(element, element);
                    }
                }
            },
            keys: function () {
                return getElementIterator();
            },
            values: function () {
                return getElementIterator();
            },
            entries: function () {
                var it = getElementIterator();
                return {
                    next: function () {
                        var n = it.next();
                        return n.done ? n : { value: [n.value, n.value] };
                    }
                };
            },
        };
        return set;
    }
    ts.createSet = createSet;
    /**
     * Tests whether a value is an array.
     */
    function isArray(value) {
        return Array.isArray ? Array.isArray(value) : value instanceof Array;
    }
    ts.isArray = isArray;
    function toArray(value) {
        return isArray(value) ? value : [value];
    }
    ts.toArray = toArray;
    /**
     * Tests whether a value is string
     */
    function isString(text) {
        return typeof text === "string";
    }
    ts.isString = isString;
    function isNumber(x) {
        return typeof x === "number";
    }
    ts.isNumber = isNumber;
    function tryCast(value, test) {
        return value !== undefined && test(value) ? value : undefined;
    }
    ts.tryCast = tryCast;
    function cast(value, test) {
        if (value !== undefined && test(value))
            return value;
        return ts.Debug.fail("Invalid cast. The supplied value ".concat(value, " did not pass the test '").concat(ts.Debug.getFunctionName(test), "'."));
    }
    ts.cast = cast;
    /** Does nothing. */
    function noop(_) { }
    ts.noop = noop;
    ts.noopPush = {
        push: noop,
        length: 0
    };
    /** Do nothing and return false */
    function returnFalse() {
        return false;
    }
    ts.returnFalse = returnFalse;
    /** Do nothing and return true */
    function returnTrue() {
        return true;
    }
    ts.returnTrue = returnTrue;
    /** Do nothing and return undefined */
    function returnUndefined() {
        return undefined;
    }
    ts.returnUndefined = returnUndefined;
    /** Returns its argument. */
    function identity(x) {
        return x;
    }
    ts.identity = identity;
    /** Returns lower case string */
    function toLowerCase(x) {
        return x.toLowerCase();
    }
    ts.toLowerCase = toLowerCase;
    // We convert the file names to lower case as key for file name on case insensitive file system
    // While doing so we need to handle special characters (eg \u0130) to ensure that we dont convert
    // it to lower case, fileName with its lowercase form can exist along side it.
    // Handle special characters and make those case sensitive instead
    //
    // |-#--|-Unicode--|-Char code-|-Desc-------------------------------------------------------------------|
    // | 1. | i        | 105       | Ascii i                                                                |
    // | 2. | I        | 73        | Ascii I                                                                |
    // |-------- Special characters ------------------------------------------------------------------------|
    // | 3. | \u0130   | 304       | Upper case I with dot above                                            |
    // | 4. | i,\u0307 | 105,775   | i, followed by 775: Lower case of (3rd item)                           |
    // | 5. | I,\u0307 | 73,775    | I, followed by 775: Upper case of (4th item), lower case is (4th item) |
    // | 6. | \u0131   | 305       | Lower case i without dot, upper case is I (2nd item)                   |
    // | 7. | \u00DF   | 223       | Lower case sharp s                                                     |
    //
    // Because item 3 is special where in its lowercase character has its own
    // upper case form we cant convert its case.
    // Rest special characters are either already in lower case format or
    // they have corresponding upper case character so they dont need special handling
    //
    // But to avoid having to do string building for most common cases, also ignore
    // a-z, 0-9, \u0131, \u00DF, \, /, ., : and space
    var fileNameLowerCaseRegExp = /[^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+/g;
    /**
     * Case insensitive file systems have descripencies in how they handle some characters (eg. turkish Upper case I with dot on top - \u0130)
     * This function is used in places where we want to make file name as a key on these systems
     * It is possible on mac to be able to refer to file name with I with dot on top as a fileName with its lower case form
     * But on windows we cannot. Windows can have fileName with I with dot on top next to its lower case and they can not each be referred with the lowercase forms
     * Technically we would want this function to be platform sepcific as well but
     * our api has till now only taken caseSensitive as the only input and just for some characters we dont want to update API and ensure all customers use those api
     * We could use upper case and we would still need to deal with the descripencies but
     * we want to continue using lower case since in most cases filenames are lowercasewe and wont need any case changes and avoid having to store another string for the key
     * So for this function purpose, we go ahead and assume character I with dot on top it as case sensitive since its very unlikely to use lower case form of that special character
     */
    function toFileNameLowerCase(x) {
        return fileNameLowerCaseRegExp.test(x) ?
            x.replace(fileNameLowerCaseRegExp, toLowerCase) :
            x;
    }
    ts.toFileNameLowerCase = toFileNameLowerCase;
    /** Throws an error because a function is not implemented. */
    function notImplemented() {
        throw new Error("Not implemented");
    }
    ts.notImplemented = notImplemented;
    function memoize(callback) {
        var value;
        return function () {
            if (callback) {
                value = callback();
                callback = undefined;
            }
            return value;
        };
    }
    ts.memoize = memoize;
    /** A version of `memoize` that supports a single primitive argument */
    function memoizeOne(callback) {
        var map = new ts.Map();
        return function (arg) {
            var key = "".concat(typeof arg, ":").concat(arg);
            var value = map.get(key);
            if (value === undefined && !map.has(key)) {
                value = callback(arg);
                map.set(key, value);
            }
            return value;
        };
    }
    ts.memoizeOne = memoizeOne;
    function compose(a, b, c, d, e) {
        if (!!e) {
            var args_2 = [];
            for (var i = 0; i < arguments.length; i++) {
                args_2[i] = arguments[i];
            }
            return function (t) { return reduceLeft(args_2, function (u, f) { return f(u); }, t); };
        }
        else if (d) {
            return function (t) { return d(c(b(a(t)))); };
        }
        else if (c) {
            return function (t) { return c(b(a(t))); };
        }
        else if (b) {
            return function (t) { return b(a(t)); };
        }
        else if (a) {
            return function (t) { return a(t); };
        }
        else {
            return function (t) { return t; };
        }
    }
    ts.compose = compose;
    var AssertionLevel;
    (function (AssertionLevel) {
        AssertionLevel[AssertionLevel["None"] = 0] = "None";
        AssertionLevel[AssertionLevel["Normal"] = 1] = "Normal";
        AssertionLevel[AssertionLevel["Aggressive"] = 2] = "Aggressive";
        AssertionLevel[AssertionLevel["VeryAggressive"] = 3] = "VeryAggressive";
    })(AssertionLevel = ts.AssertionLevel || (ts.AssertionLevel = {}));
    function equateValues(a, b) {
        return a === b;
    }
    ts.equateValues = equateValues;
    /**
     * Compare the equality of two strings using a case-sensitive ordinal comparison.
     *
     * Case-sensitive comparisons compare both strings one code-point at a time using the integer
     * value of each code-point after applying `toUpperCase` to each string. We always map both
     * strings to their upper-case form as some unicode characters do not properly round-trip to
     * lowercase (such as `???` (German sharp capital s)).
     */
    function equateStringsCaseInsensitive(a, b) {
        return a === b
            || a !== undefined
                && b !== undefined
                && a.toUpperCase() === b.toUpperCase();
    }
    ts.equateStringsCaseInsensitive = equateStringsCaseInsensitive;
    /**
     * Compare the equality of two strings using a case-sensitive ordinal comparison.
     *
     * Case-sensitive comparisons compare both strings one code-point at a time using the
     * integer value of each code-point.
     */
    function equateStringsCaseSensitive(a, b) {
        return equateValues(a, b);
    }
    ts.equateStringsCaseSensitive = equateStringsCaseSensitive;
    function compareComparableValues(a, b) {
        return a === b ? 0 /* Comparison.EqualTo */ :
            a === undefined ? -1 /* Comparison.LessThan */ :
                b === undefined ? 1 /* Comparison.GreaterThan */ :
                    a < b ? -1 /* Comparison.LessThan */ :
                        1 /* Comparison.GreaterThan */;
    }
    /**
     * Compare two numeric values for their order relative to each other.
     * To compare strings, use any of the `compareStrings` functions.
     */
    function compareValues(a, b) {
        return compareComparableValues(a, b);
    }
    ts.compareValues = compareValues;
    /**
     * Compare two TextSpans, first by `start`, then by `length`.
     */
    function compareTextSpans(a, b) {
        return compareValues(a === null || a === void 0 ? void 0 : a.start, b === null || b === void 0 ? void 0 : b.start) || compareValues(a === null || a === void 0 ? void 0 : a.length, b === null || b === void 0 ? void 0 : b.length);
    }
    ts.compareTextSpans = compareTextSpans;
    function min(a, b, compare) {
        return compare(a, b) === -1 /* Comparison.LessThan */ ? a : b;
    }
    ts.min = min;
    /**
     * Compare two strings using a case-insensitive ordinal comparison.
     *
     * Ordinal comparisons are based on the difference between the unicode code points of both
     * strings. Characters with multiple unicode representations are considered unequal. Ordinal
     * comparisons provide predictable ordering, but place "a" after "B".
     *
     * Case-insensitive comparisons compare both strings one code-point at a time using the integer
     * value of each code-point after applying `toUpperCase` to each string. We always map both
     * strings to their upper-case form as some unicode characters do not properly round-trip to
     * lowercase (such as `???` (German sharp capital s)).
     */
    function compareStringsCaseInsensitive(a, b) {
        if (a === b)
            return 0 /* Comparison.EqualTo */;
        if (a === undefined)
            return -1 /* Comparison.LessThan */;
        if (b === undefined)
            return 1 /* Comparison.GreaterThan */;
        a = a.toUpperCase();
        b = b.toUpperCase();
        return a < b ? -1 /* Comparison.LessThan */ : a > b ? 1 /* Comparison.GreaterThan */ : 0 /* Comparison.EqualTo */;
    }
    ts.compareStringsCaseInsensitive = compareStringsCaseInsensitive;
    /**
     * Compare two strings using a case-sensitive ordinal comparison.
     *
     * Ordinal comparisons are based on the difference between the unicode code points of both
     * strings. Characters with multiple unicode representations are considered unequal. Ordinal
     * comparisons provide predictable ordering, but place "a" after "B".
     *
     * Case-sensitive comparisons compare both strings one code-point at a time using the integer
     * value of each code-point.
     */
    function compareStringsCaseSensitive(a, b) {
        return compareComparableValues(a, b);
    }
    ts.compareStringsCaseSensitive = compareStringsCaseSensitive;
    function getStringComparer(ignoreCase) {
        return ignoreCase ? compareStringsCaseInsensitive : compareStringsCaseSensitive;
    }
    ts.getStringComparer = getStringComparer;
    /**
     * Creates a string comparer for use with string collation in the UI.
     */
    var createUIStringComparer = (function () {
        var defaultComparer;
        var enUSComparer;
        var stringComparerFactory = getStringComparerFactory();
        return createStringComparer;
        function compareWithCallback(a, b, comparer) {
            if (a === b)
                return 0 /* Comparison.EqualTo */;
            if (a === undefined)
                return -1 /* Comparison.LessThan */;
            if (b === undefined)
                return 1 /* Comparison.GreaterThan */;
            var value = comparer(a, b);
            return value < 0 ? -1 /* Comparison.LessThan */ : value > 0 ? 1 /* Comparison.GreaterThan */ : 0 /* Comparison.EqualTo */;
        }
        function createIntlCollatorStringComparer(locale) {
            // Intl.Collator.prototype.compare is bound to the collator. See NOTE in
            // http://www.ecma-international.org/ecma-402/2.0/#sec-Intl.Collator.prototype.compare
            var comparer = new Intl.Collator(locale, { usage: "sort", sensitivity: "variant" }).compare;
            return function (a, b) { return compareWithCallback(a, b, comparer); };
        }
        function createLocaleCompareStringComparer(locale) {
            // if the locale is not the default locale (`undefined`), use the fallback comparer.
            if (locale !== undefined)
                return createFallbackStringComparer();
            return function (a, b) { return compareWithCallback(a, b, compareStrings); };
            function compareStrings(a, b) {
                return a.localeCompare(b);
            }
        }
        function createFallbackStringComparer() {
            // An ordinal comparison puts "A" after "b", but for the UI we want "A" before "b".
            // We first sort case insensitively.  So "Aaa" will come before "baa".
            // Then we sort case sensitively, so "aaa" will come before "Aaa".
            //
            // For case insensitive comparisons we always map both strings to their
            // upper-case form as some unicode characters do not properly round-trip to
            // lowercase (such as `????????????` (German sharp capital s)).
            return function (a, b) { return compareWithCallback(a, b, compareDictionaryOrder); };
            function compareDictionaryOrder(a, b) {
                return compareStrings(a.toUpperCase(), b.toUpperCase()) || compareStrings(a, b);
            }
            function compareStrings(a, b) {
                return a < b ? -1 /* Comparison.LessThan */ : a > b ? 1 /* Comparison.GreaterThan */ : 0 /* Comparison.EqualTo */;
            }
        }
        function getStringComparerFactory() {
            // If the host supports Intl, we use it for comparisons using the default locale.
            if (typeof Intl === "object" && typeof Intl.Collator === "function") {
                return createIntlCollatorStringComparer;
            }
            // If the host does not support Intl, we fall back to localeCompare.
            // localeCompare in Node v0.10 is just an ordinal comparison, so don't use it.
            if (typeof String.prototype.localeCompare === "function" &&
                typeof String.prototype.toLocaleUpperCase === "function" &&
                "a".localeCompare("B") < 0) {
                return createLocaleCompareStringComparer;
            }
            // Otherwise, fall back to ordinal comparison:
            return createFallbackStringComparer;
        }
        function createStringComparer(locale) {
            // Hold onto common string comparers. This avoids constantly reallocating comparers during
            // tests.
            if (locale === undefined) {
                return defaultComparer || (defaultComparer = stringComparerFactory(locale));
            }
            else if (locale === "en-US") {
                return enUSComparer || (enUSComparer = stringComparerFactory(locale));
            }
            else {
                return stringComparerFactory(locale);
            }
        }
    })();
    var uiComparerCaseSensitive;
    var uiLocale;
    function getUILocale() {
        return uiLocale;
    }
    ts.getUILocale = getUILocale;
    function setUILocale(value) {
        if (uiLocale !== value) {
            uiLocale = value;
            uiComparerCaseSensitive = undefined;
        }
    }
    ts.setUILocale = setUILocale;
    /**
     * Compare two strings in a using the case-sensitive sort behavior of the UI locale.
     *
     * Ordering is not predictable between different host locales, but is best for displaying
     * ordered data for UI presentation. Characters with multiple unicode representations may
     * be considered equal.
     *
     * Case-sensitive comparisons compare strings that differ in base characters, or
     * accents/diacritic marks, or case as unequal.
     */
    function compareStringsCaseSensitiveUI(a, b) {
        var comparer = uiComparerCaseSensitive || (uiComparerCaseSensitive = createUIStringComparer(uiLocale));
        return comparer(a, b);
    }
    ts.compareStringsCaseSensitiveUI = compareStringsCaseSensitiveUI;
    function compareProperties(a, b, key, comparer) {
        return a === b ? 0 /* Comparison.EqualTo */ :
            a === undefined ? -1 /* Comparison.LessThan */ :
                b === undefined ? 1 /* Comparison.GreaterThan */ :
                    comparer(a[key], b[key]);
    }
    ts.compareProperties = compareProperties;
    /** True is greater than false. */
    function compareBooleans(a, b) {
        return compareValues(a ? 1 : 0, b ? 1 : 0);
    }
    ts.compareBooleans = compareBooleans;
    /**
     * Given a name and a list of names that are *not* equal to the name, return a spelling suggestion if there is one that is close enough.
     * Names less than length 3 only check for case-insensitive equality.
     *
     * find the candidate with the smallest Levenshtein distance,
     *    except for candidates:
     *      * With no name
     *      * Whose length differs from the target name by more than 0.34 of the length of the name.
     *      * Whose levenshtein distance is more than 0.4 of the length of the name
     *        (0.4 allows 1 substitution/transposition for every 5 characters,
     *         and 1 insertion/deletion at 3 characters)
     */
    function getSpellingSuggestion(name, candidates, getName) {
        var maximumLengthDifference = Math.max(2, Math.floor(name.length * 0.34));
        var bestDistance = Math.floor(name.length * 0.4) + 1; // If the best result is worse than this, don't bother.
        var bestCandidate;
        for (var _i = 0, candidates_2 = candidates; _i < candidates_2.length; _i++) {
            var candidate = candidates_2[_i];
            var candidateName = getName(candidate);
            if (candidateName !== undefined && Math.abs(candidateName.length - name.length) <= maximumLengthDifference) {
                if (candidateName === name) {
                    continue;
                }
                // Only consider candidates less than 3 characters long when they differ by case.
                // Otherwise, don't bother, since a user would usually notice differences of a 2-character name.
                if (candidateName.length < 3 && candidateName.toLowerCase() !== name.toLowerCase()) {
                    continue;
                }
                var distance = levenshteinWithMax(name, candidateName, bestDistance - 0.1);
                if (distance === undefined) {
                    continue;
                }
                ts.Debug.assert(distance < bestDistance); // Else `levenshteinWithMax` should return undefined
                bestDistance = distance;
                bestCandidate = candidate;
            }
        }
        return bestCandidate;
    }
    ts.getSpellingSuggestion = getSpellingSuggestion;
    function levenshteinWithMax(s1, s2, max) {
        var previous = new Array(s2.length + 1);
        var current = new Array(s2.length + 1);
        /** Represents any value > max. We don't care about the particular value. */
        var big = max + 0.01;
        for (var i = 0; i <= s2.length; i++) {
            previous[i] = i;
        }
        for (var i = 1; i <= s1.length; i++) {
            var c1 = s1.charCodeAt(i - 1);
            var minJ = Math.ceil(i > max ? i - max : 1);
            var maxJ = Math.floor(s2.length > max + i ? max + i : s2.length);
            current[0] = i;
            /** Smallest value of the matrix in the ith column. */
            var colMin = i;
            for (var j = 1; j < minJ; j++) {
                current[j] = big;
            }
            for (var j = minJ; j <= maxJ; j++) {
                // case difference should be significantly cheaper than other differences
                var substitutionDistance = s1[i - 1].toLowerCase() === s2[j - 1].toLowerCase()
                    ? (previous[j - 1] + 0.1)
                    : (previous[j - 1] + 2);
                var dist = c1 === s2.charCodeAt(j - 1)
                    ? previous[j - 1]
                    : Math.min(/*delete*/ previous[j] + 1, /*insert*/ current[j - 1] + 1, /*substitute*/ substitutionDistance);
                current[j] = dist;
                colMin = Math.min(colMin, dist);
            }
            for (var j = maxJ + 1; j <= s2.length; j++) {
                current[j] = big;
            }
            if (colMin > max) {
                // Give up -- everything in this column is > max and it can't get better in future columns.
                return undefined;
            }
            var temp = previous;
            previous = current;
            current = temp;
        }
        var res = previous[s2.length];
        return res > max ? undefined : res;
    }
    function endsWith(str, suffix) {
        var expectedPos = str.length - suffix.length;
        return expectedPos >= 0 && str.indexOf(suffix, expectedPos) === expectedPos;
    }
    ts.endsWith = endsWith;
    function removeSuffix(str, suffix) {
        return endsWith(str, suffix) ? str.slice(0, str.length - suffix.length) : str;
    }
    ts.removeSuffix = removeSuffix;
    function tryRemoveSuffix(str, suffix) {
        return endsWith(str, suffix) ? str.slice(0, str.length - suffix.length) : undefined;
    }
    ts.tryRemoveSuffix = tryRemoveSuffix;
    function stringContains(str, substring) {
        return str.indexOf(substring) !== -1;
    }
    ts.stringContains = stringContains;
    /**
     * Takes a string like "jquery-min.4.2.3" and returns "jquery"
     */
    function removeMinAndVersionNumbers(fileName) {
        // We used to use the regex /[.-]((min)|(\d+(\.\d+)*))$/ and would just .replace it twice.
        // Unfortunately, that regex has O(n^2) performance because v8 doesn't match from the end of the string.
        // Instead, we now essentially scan the filename (backwards) ourselves.
        var end = fileName.length;
        for (var pos = end - 1; pos > 0; pos--) {
            var ch = fileName.charCodeAt(pos);
            if (ch >= 48 /* CharacterCodes._0 */ && ch <= 57 /* CharacterCodes._9 */) {
                // Match a \d+ segment
                do {
                    --pos;
                    ch = fileName.charCodeAt(pos);
                } while (pos > 0 && ch >= 48 /* CharacterCodes._0 */ && ch <= 57 /* CharacterCodes._9 */);
            }
            else if (pos > 4 && (ch === 110 /* CharacterCodes.n */ || ch === 78 /* CharacterCodes.N */)) {
                // Looking for "min" or "min"
                // Already matched the 'n'
                --pos;
                ch = fileName.charCodeAt(pos);
                if (ch !== 105 /* CharacterCodes.i */ && ch !== 73 /* CharacterCodes.I */) {
                    break;
                }
                --pos;
                ch = fileName.charCodeAt(pos);
                if (ch !== 109 /* CharacterCodes.m */ && ch !== 77 /* CharacterCodes.M */) {
                    break;
                }
                --pos;
                ch = fileName.charCodeAt(pos);
            }
            else {
                // This character is not part of either suffix pattern
                break;
            }
            if (ch !== 45 /* CharacterCodes.minus */ && ch !== 46 /* CharacterCodes.dot */) {
                break;
            }
            end = pos;
        }
        // end might be fileName.length, in which case this should internally no-op
        return end === fileName.length ? fileName : fileName.slice(0, end);
    }
    ts.removeMinAndVersionNumbers = removeMinAndVersionNumbers;
    /** Remove an item from an array, moving everything to its right one space left. */
    function orderedRemoveItem(array, item) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === item) {
                orderedRemoveItemAt(array, i);
                return true;
            }
        }
        return false;
    }
    ts.orderedRemoveItem = orderedRemoveItem;
    /** Remove an item by index from an array, moving everything to its right one space left. */
    function orderedRemoveItemAt(array, index) {
        // This seems to be faster than either `array.splice(i, 1)` or `array.copyWithin(i, i+ 1)`.
        for (var i = index; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }
        array.pop();
    }
    ts.orderedRemoveItemAt = orderedRemoveItemAt;
    function unorderedRemoveItemAt(array, index) {
        // Fill in the "hole" left at `index`.
        array[index] = array[array.length - 1];
        array.pop();
    }
    ts.unorderedRemoveItemAt = unorderedRemoveItemAt;
    /** Remove the *first* occurrence of `item` from the array. */
    function unorderedRemoveItem(array, item) {
        return unorderedRemoveFirstItemWhere(array, function (element) { return element === item; });
    }
    ts.unorderedRemoveItem = unorderedRemoveItem;
    /** Remove the *first* element satisfying `predicate`. */
    function unorderedRemoveFirstItemWhere(array, predicate) {
        for (var i = 0; i < array.length; i++) {
            if (predicate(array[i])) {
                unorderedRemoveItemAt(array, i);
                return true;
            }
        }
        return false;
    }
    function createGetCanonicalFileName(useCaseSensitiveFileNames) {
        return useCaseSensitiveFileNames ? identity : toFileNameLowerCase;
    }
    ts.createGetCanonicalFileName = createGetCanonicalFileName;
    function patternText(_a) {
        var prefix = _a.prefix, suffix = _a.suffix;
        return "".concat(prefix, "*").concat(suffix);
    }
    ts.patternText = patternText;
    /**
     * Given that candidate matches pattern, returns the text matching the '*'.
     * E.g.: matchedText(tryParsePattern("foo*baz"), "foobarbaz") === "bar"
     */
    function matchedText(pattern, candidate) {
        ts.Debug.assert(isPatternMatch(pattern, candidate));
        return candidate.substring(pattern.prefix.length, candidate.length - pattern.suffix.length);
    }
    ts.matchedText = matchedText;
    /** Return the object corresponding to the best pattern to match `candidate`. */
    function findBestPatternMatch(values, getPattern, candidate) {
        var matchedValue;
        // use length of prefix as betterness criteria
        var longestMatchPrefixLength = -1;
        for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
            var v = values_2[_i];
            var pattern = getPattern(v);
            if (isPatternMatch(pattern, candidate) && pattern.prefix.length > longestMatchPrefixLength) {
                longestMatchPrefixLength = pattern.prefix.length;
                matchedValue = v;
            }
        }
        return matchedValue;
    }
    ts.findBestPatternMatch = findBestPatternMatch;
    function startsWith(str, prefix) {
        return str.lastIndexOf(prefix, 0) === 0;
    }
    ts.startsWith = startsWith;
    function removePrefix(str, prefix) {
        return startsWith(str, prefix) ? str.substr(prefix.length) : str;
    }
    ts.removePrefix = removePrefix;
    function tryRemovePrefix(str, prefix, getCanonicalFileName) {
        if (getCanonicalFileName === void 0) { getCanonicalFileName = identity; }
        return startsWith(getCanonicalFileName(str), getCanonicalFileName(prefix)) ? str.substring(prefix.length) : undefined;
    }
    ts.tryRemovePrefix = tryRemovePrefix;
    function isPatternMatch(_a, candidate) {
        var prefix = _a.prefix, suffix = _a.suffix;
        return candidate.length >= prefix.length + suffix.length &&
            startsWith(candidate, prefix) &&
            endsWith(candidate, suffix);
    }
    ts.isPatternMatch = isPatternMatch;
    function and(f, g) {
        return function (arg) { return f(arg) && g(arg); };
    }
    ts.and = and;
    function or() {
        var fs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fs[_i] = arguments[_i];
        }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var lastResult;
            for (var _a = 0, fs_1 = fs; _a < fs_1.length; _a++) {
                var f = fs_1[_a];
                lastResult = f.apply(void 0, args);
                if (lastResult) {
                    return lastResult;
                }
            }
            return lastResult;
        };
    }
    ts.or = or;
    function not(fn) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return !fn.apply(void 0, args);
        };
    }
    ts.not = not;
    function assertType(_) { }
    ts.assertType = assertType;
    function singleElementArray(t) {
        return t === undefined ? undefined : [t];
    }
    ts.singleElementArray = singleElementArray;
    function enumerateInsertsAndDeletes(newItems, oldItems, comparer, inserted, deleted, unchanged) {
        unchanged = unchanged || noop;
        var newIndex = 0;
        var oldIndex = 0;
        var newLen = newItems.length;
        var oldLen = oldItems.length;
        var hasChanges = false;
        while (newIndex < newLen && oldIndex < oldLen) {
            var newItem = newItems[newIndex];
            var oldItem = oldItems[oldIndex];
            var compareResult = comparer(newItem, oldItem);
            if (compareResult === -1 /* Comparison.LessThan */) {
                inserted(newItem);
                newIndex++;
                hasChanges = true;
            }
            else if (compareResult === 1 /* Comparison.GreaterThan */) {
                deleted(oldItem);
                oldIndex++;
                hasChanges = true;
            }
            else {
                unchanged(oldItem, newItem);
                newIndex++;
                oldIndex++;
            }
        }
        while (newIndex < newLen) {
            inserted(newItems[newIndex++]);
            hasChanges = true;
        }
        while (oldIndex < oldLen) {
            deleted(oldItems[oldIndex++]);
            hasChanges = true;
        }
        return hasChanges;
    }
    ts.enumerateInsertsAndDeletes = enumerateInsertsAndDeletes;
    function fill(length, cb) {
        var result = Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = cb(i);
        }
        return result;
    }
    ts.fill = fill;
    function cartesianProduct(arrays) {
        var result = [];
        cartesianProductWorker(arrays, result, /*outer*/ undefined, 0);
        return result;
    }
    ts.cartesianProduct = cartesianProduct;
    function cartesianProductWorker(arrays, result, outer, index) {
        for (var _i = 0, _a = arrays[index]; _i < _a.length; _i++) {
            var element = _a[_i];
            var inner = void 0;
            if (outer) {
                inner = outer.slice();
                inner.push(element);
            }
            else {
                inner = [element];
            }
            if (index === arrays.length - 1) {
                result.push(inner);
            }
            else {
                cartesianProductWorker(arrays, result, inner, index + 1);
            }
        }
    }
    /**
     * Returns string left-padded with spaces or zeros until it reaches the given length.
     *
     * @param s String to pad.
     * @param length Final padded length. If less than or equal to 's.length', returns 's' unchanged.
     * @param padString Character to use as padding (default " ").
     */
    function padLeft(s, length, padString) {
        if (padString === void 0) { padString = " "; }
        return length <= s.length ? s : padString.repeat(length - s.length) + s;
    }
    ts.padLeft = padLeft;
    /**
     * Returns string right-padded with spaces until it reaches the given length.
     *
     * @param s String to pad.
     * @param length Final padded length. If less than or equal to 's.length', returns 's' unchanged.
     * @param padString Character to use as padding (default " ").
     */
    function padRight(s, length, padString) {
        if (padString === void 0) { padString = " "; }
        return length <= s.length ? s : s + padString.repeat(length - s.length);
    }
    ts.padRight = padRight;
    function takeWhile(array, predicate) {
        var len = array.length;
        var index = 0;
        while (index < len && predicate(array[index])) {
            index++;
        }
        return array.slice(0, index);
    }
    ts.takeWhile = takeWhile;
    /**
     * Removes the leading and trailing white space and line terminator characters from a string.
     */
    ts.trimString = !!String.prototype.trim ? (function (s) { return s.trim(); }) : function (s) { return ts.trimStringEnd(ts.trimStringStart(s)); };
    /**
     * Returns a copy with trailing whitespace removed.
     */
    ts.trimStringEnd = !!String.prototype.trimEnd ? (function (s) { return s.trimEnd(); }) : trimEndImpl;
    /**
     * Returns a copy with leading whitespace removed.
     */
    ts.trimStringStart = !!String.prototype.trimStart ? (function (s) { return s.trimStart(); }) : function (s) { return s.replace(/^\s+/g, ""); };
    /**
     * https://jsbench.me/gjkoxld4au/1
     * The simple regex for this, /\s+$/g is O(n^2) in v8.
     * The native .trimEnd method is by far best, but since that's technically ES2019,
     * we provide a (still much faster than the simple regex) fallback.
     */
    function trimEndImpl(s) {
        var end = s.length - 1;
        while (end >= 0) {
            if (!ts.isWhiteSpaceLike(s.charCodeAt(end)))
                break;
            end--;
        }
        return s.slice(0, end + 1);
    }
})(ts || (ts = {}));
/* @internal */
var ts;
(function (ts) {
    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["Off"] = 0] = "Off";
        LogLevel[LogLevel["Error"] = 1] = "Error";
        LogLevel[LogLevel["Warning"] = 2] = "Warning";
        LogLevel[LogLevel["Info"] = 3] = "Info";
        LogLevel[LogLevel["Verbose"] = 4] = "Verbose";
    })(LogLevel = ts.LogLevel || (ts.LogLevel = {}));
    var Debug;
    (function (Debug) {
        var typeScriptVersion;
        /* eslint-disable prefer-const */
        var currentAssertionLevel = 0 /* AssertionLevel.None */;
        Debug.currentLogLevel = LogLevel.Warning;
        Debug.isDebugging = false;
        Debug.enableDeprecationWarnings = true;
        function getTypeScriptVersion() {
            return typeScriptVersion !== null && typeScriptVersion !== void 0 ? typeScriptVersion : (typeScriptVersion = new ts.Version(ts.version));
        }
        Debug.getTypeScriptVersion = getTypeScriptVersion;
        function shouldLog(level) {
            return Debug.currentLogLevel <= level;
        }
        Debug.shouldLog = shouldLog;
        function logMessage(level, s) {
            if (Debug.loggingHost && shouldLog(level)) {
                Debug.loggingHost.log(level, s);
            }
        }
        function log(s) {
            logMessage(LogLevel.Info, s);
        }
        Debug.log = log;
        (function (log_1) {
            function error(s) {
                logMessage(LogLevel.Error, s);
            }
            log_1.error = error;
            function warn(s) {
                logMessage(LogLevel.Warning, s);
            }
            log_1.warn = warn;
            function log(s) {
                logMessage(LogLevel.Info, s);
            }
            log_1.log = log;
            function trace(s) {
                logMessage(LogLevel.Verbose, s);
            }
            log_1.trace = trace;
        })(log = Debug.log || (Debug.log = {}));
        var assertionCache = {};
        function getAssertionLevel() {
            return currentAssertionLevel;
        }
        Debug.getAssertionLevel = getAssertionLevel;
        function setAssertionLevel(level) {
            var prevAssertionLevel = currentAssertionLevel;
            currentAssertionLevel = level;
            if (level > prevAssertionLevel) {
                // restore assertion functions for the current assertion level (see `shouldAssertFunction`).
                for (var _i = 0, _a = ts.getOwnKeys(assertionCache); _i < _a.length; _i++) {
                    var key = _a[_i];
                    var cachedFunc = assertionCache[key];
                    if (cachedFunc !== undefined && Debug[key] !== cachedFunc.assertion && level >= cachedFunc.level) {
                        Debug[key] = cachedFunc;
                        assertionCache[key] = undefined;
                    }
                }
            }
        }
        Debug.setAssertionLevel = setAssertionLevel;
        function shouldAssert(level) {
            return currentAssertionLevel >= level;
        }
        Debug.shouldAssert = shouldAssert;
        /**
         * Tests whether an assertion function should be executed. If it shouldn't, it is cached and replaced with `ts.noop`.
         * Replaced assertion functions are restored when `Debug.setAssertionLevel` is set to a high enough level.
         * @param level The minimum assertion level required.
         * @param name The name of the current assertion function.
         */
        function shouldAssertFunction(level, name) {
            if (!shouldAssert(level)) {
                assertionCache[name] = { level: level, assertion: Debug[name] };
                Debug[name] = ts.noop;
                return false;
            }
            return true;
        }
        function fail(message, stackCrawlMark) {
            debugger;
            var e = new Error(message ? "Debug Failure. ".concat(message) : "Debug Failure.");
            if (Error.captureStackTrace) {
                Error.captureStackTrace(e, stackCrawlMark || fail);
            }
            throw e;
        }
        Debug.fail = fail;
        function failBadSyntaxKind(node, message, stackCrawlMark) {
            return fail("".concat(message || "Unexpected node.", "\r\nNode ").concat(formatSyntaxKind(node.kind), " was unexpected."), stackCrawlMark || failBadSyntaxKind);
        }
        Debug.failBadSyntaxKind = failBadSyntaxKind;
        function assert(expression, message, verboseDebugInfo, stackCrawlMark) {
            if (!expression) {
                message = message ? "False expression: ".concat(message) : "False expression.";
                if (verboseDebugInfo) {
                    message += "\r\nVerbose Debug Information: " + (typeof verboseDebugInfo === "string" ? verboseDebugInfo : verboseDebugInfo());
                }
                fail(message, stackCrawlMark || assert);
            }
        }
        Debug.assert = assert;
        function assertEqual(a, b, msg, msg2, stackCrawlMark) {
            if (a !== b) {
                var message = msg ? msg2 ? "".concat(msg, " ").concat(msg2) : msg : "";
                fail("Expected ".concat(a, " === ").concat(b, ". ").concat(message), stackCrawlMark || assertEqual);
            }
        }
        Debug.assertEqual = assertEqual;
        function assertLessThan(a, b, msg, stackCrawlMark) {
            if (a >= b) {
                fail("Expected ".concat(a, " < ").concat(b, ". ").concat(msg || ""), stackCrawlMark || assertLessThan);
            }
        }
        Debug.assertLessThan = assertLessThan;
        function assertLessThanOrEqual(a, b, stackCrawlMark) {
            if (a > b) {
                fail("Expected ".concat(a, " <= ").concat(b), stackCrawlMark || assertLessThanOrEqual);
            }
        }
        Debug.assertLessThanOrEqual = assertLessThanOrEqual;
        function assertGreaterThanOrEqual(a, b, stackCrawlMark) {
            if (a < b) {
                fail("Expected ".concat(a, " >= ").concat(b), stackCrawlMark || assertGreaterThanOrEqual);
            }
        }
        Debug.assertGreaterThanOrEqual = assertGreaterThanOrEqual;
        function assertIsDefined(value, message, stackCrawlMark) {
            // eslint-disable-next-line no-null/no-null
            if (value === undefined || value === null) {
                fail(message, stackCrawlMark || assertIsDefined);
            }
        }
        Debug.assertIsDefined = assertIsDefined;
        function checkDefined(value, message, stackCrawlMark) {
            assertIsDefined(value, message, stackCrawlMark || checkDefined);
            return value;
        }
        Debug.checkDefined = checkDefined;
        function assertEachIsDefined(value, message, stackCrawlMark) {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var v = value_1[_i];
                assertIsDefined(v, message, stackCrawlMark || assertEachIsDefined);
            }
        }
        Debug.assertEachIsDefined = assertEachIsDefined;
        function checkEachDefined(value, message, stackCrawlMark) {
            assertEachIsDefined(value, message, stackCrawlMark || checkEachDefined);
            return value;
        }
        Debug.checkEachDefined = checkEachDefined;
        function assertNever(member, message, stackCrawlMark) {
            if (message === void 0) { message = "Illegal value:"; }
            var detail = typeof member === "object" && ts.hasProperty(member, "kind") && ts.hasProperty(member, "pos") ? "SyntaxKind: " + formatSyntaxKind(member.kind) : JSON.stringify(member);
            return fail("".concat(message, " ").concat(detail), stackCrawlMark || assertNever);
        }
        Debug.assertNever = assertNever;
        function assertEachNode(nodes, test, message, stackCrawlMark) {
            if (shouldAssertFunction(1 /* AssertionLevel.Normal */, "assertEachNode")) {
                assert(test === undefined || ts.every(nodes, test), message || "Unexpected node.", function () { return "Node array did not pass test '".concat(getFunctionName(test), "'."); }, stackCrawlMark || assertEachNode);
            }
        }
        Debug.assertEachNode = assertEachNode;
        function assertNode(node, test, message, stackCrawlMark) {
            if (shouldAssertFunction(1 /* AssertionLevel.Normal */, "assertNode")) {
                assert(node !== undefined && (test === undefined || test(node)), message || "Unexpected node.", function () { return "Node ".concat(formatSyntaxKind(node === null || node === void 0 ? void 0 : node.kind), " did not pass test '").concat(getFunctionName(test), "'."); }, stackCrawlMark || assertNode);
            }
        }
        Debug.assertNode = assertNode;
        function assertNotNode(node, test, message, stackCrawlMark) {
            if (shouldAssertFunction(1 /* AssertionLevel.Normal */, "assertNotNode")) {
                assert(node === undefined || test === undefined || !test(node), message || "Unexpected node.", function () { return "Node ".concat(formatSyntaxKind(node.kind), " should not have passed test '").concat(getFunctionName(test), "'."); }, stackCrawlMark || assertNotNode);
            }
        }
        Debug.assertNotNode = assertNotNode;
        function assertOptionalNode(node, test, message, stackCrawlMark) {
            if (shouldAssertFunction(1 /* AssertionLevel.Normal */, "assertOptionalNode")) {
                assert(test === undefined || node === undefined || test(node), message || "Unexpected node.", function () { return "Node ".concat(formatSyntaxKind(node === null || node === void 0 ? void 0 : node.kind), " did not pass test '").concat(getFunctionName(test), "'."); }, stackCrawlMark || assertOptionalNode);
            }
        }
        Debug.assertOptionalNode = assertOptionalNode;
        function assertOptionalToken(node, kind, message, stackCrawlMark) {
            if (shouldAssertFunction(1 /* AssertionLevel.Normal */, "assertOptionalToken")) {
                assert(kind === undefined || node === undefined || node.kind === kind, message || "Unexpected node.", function () { return "Node ".concat(formatSyntaxKind(node === null || node === void 0 ? void 0 : node.kind), " was not a '").concat(formatSyntaxKind(kind), "' token."); }, stackCrawlMark || assertOptionalToken);
            }
        }
        Debug.assertOptionalToken = assertOptionalToken;
        function assertMissingNode(node, message, stackCrawlMark) {
            if (shouldAssertFunction(1 /* AssertionLevel.Normal */, "assertMissingNode")) {
                assert(node === undefined, message || "Unexpected node.", function () { return "Node ".concat(formatSyntaxKind(node.kind), " was unexpected'."); }, stackCrawlMark || assertMissingNode);
            }
        }
        Debug.assertMissingNode = assertMissingNode;
        function type(_value) { }
        Debug.type = type;
        function getFunctionName(func) {
            if (typeof func !== "function") {
                return "";
            }
            else if (func.hasOwnProperty("name")) {
                return func.name;
            }
            else {
                var text = Function.prototype.toString.call(func);
                var match = /^function\s+([\w\$]+)\s*\(/.exec(text);
                return match ? match[1] : "";
            }
        }
        Debug.getFunctionName = getFunctionName;
        function formatSymbol(symbol) {
            return "{ name: ".concat(ts.unescapeLeadingUnderscores(symbol.escapedName), "; flags: ").concat(formatSymbolFlags(symbol.flags), "; declarations: ").concat(ts.map(symbol.declarations, function (node) { return formatSyntaxKind(node.kind); }), " }");
        }
        Debug.formatSymbol = formatSymbol;
        /**
         * Formats an enum value as a string for debugging and debug assertions.
         */
        function formatEnum(value, enumObject, isFlags) {
            if (value === void 0) { value = 0; }
            var members = getEnumMembers(enumObject);
            if (value === 0) {
                return members.length > 0 && members[0][0] === 0 ? members[0][1] : "0";
            }
            if (isFlags) {
                var result = [];
                var remainingFlags = value;
                for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
                    var _a = members_1[_i], enumValue = _a[0], enumName = _a[1];
                    if (enumValue > value) {
                        break;
                    }
                    if (enumValue !== 0 && enumValue & value) {
                        result.push(enumName);
                        remainingFlags &= ~enumValue;
                    }
                }
                if (remainingFlags === 0) {
                    return result.join("|");
                }
            }
            else {
                for (var _b = 0, members_2 = members; _b < members_2.length; _b++) {
                    var _c = members_2[_b], enumValue = _c[0], enumName = _c[1];
                    if (enumValue === value) {
                        return enumName;
                    }
                }
            }
            return value.toString();
        }
        Debug.formatEnum = formatEnum;
        var enumMemberCache = new ts.Map();
        function getEnumMembers(enumObject) {
            // Assuming enum objects do not change at runtime, we can cache the enum members list
            // to reuse later. This saves us from reconstructing this each and every time we call
            // a formatting function (which can be expensive for large enums like SyntaxKind).
            var existing = enumMemberCache.get(enumObject);
            if (existing) {
                return existing;
            }
            var result = [];
            for (var name in enumObject) {
                var value = enumObject[name];
                if (typeof value === "number") {
                    result.push([value, name]);
                }
            }
            var sorted = ts.stableSort(result, function (x, y) { return ts.compareValues(x[0], y[0]); });
            enumMemberCache.set(enumObject, sorted);
            return sorted;
        }
        function formatSyntaxKind(kind) {
            return formatEnum(kind, ts.SyntaxKind, /*isFlags*/ false);
        }
        Debug.formatSyntaxKind = formatSyntaxKind;
        function formatSnippetKind(kind) {
            return formatEnum(kind, ts.SnippetKind, /*isFlags*/ false);
        }
        Debug.formatSnippetKind = formatSnippetKind;
        function formatNodeFlags(flags) {
            return formatEnum(flags, ts.NodeFlags, /*isFlags*/ true);
        }
        Debug.formatNodeFlags = formatNodeFlags;
        function formatModifierFlags(flags) {
            return formatEnum(flags, ts.ModifierFlags, /*isFlags*/ true);
        }
        Debug.formatModifierFlags = formatModifierFlags;
        function formatTransformFlags(flags) {
            return formatEnum(flags, ts.TransformFlags, /*isFlags*/ true);
        }
        Debug.formatTransformFlags = formatTransformFlags;
        function formatEmitFlags(flags) {
            return formatEnum(flags, ts.EmitFlags, /*isFlags*/ true);
        }
        Debug.formatEmitFlags = formatEmitFlags;
        function formatSymbolFlags(flags) {
            return formatEnum(flags, ts.SymbolFlags, /*isFlags*/ true);
        }
        Debug.formatSymbolFlags = formatSymbolFlags;
        function formatTypeFlags(flags) {
            return formatEnum(flags, ts.TypeFlags, /*isFlags*/ true);
        }
        Debug.formatTypeFlags = formatTypeFlags;
        function formatSignatureFlags(flags) {
            return formatEnum(flags, ts.SignatureFlags, /*isFlags*/ true);
        }
        Debug.formatSignatureFlags = formatSignatureFlags;
        function formatObjectFlags(flags) {
            return formatEnum(flags, ts.ObjectFlags, /*isFlags*/ true);
        }
        Debug.formatObjectFlags = formatObjectFlags;
        function formatFlowFlags(flags) {
            return formatEnum(flags, ts.FlowFlags, /*isFlags*/ true);
        }
        Debug.formatFlowFlags = formatFlowFlags;
        function formatRelationComparisonResult(result) {
            return formatEnum(result, ts.RelationComparisonResult, /*isFlags*/ true);
        }
        Debug.formatRelationComparisonResult = formatRelationComparisonResult;
        function formatCheckMode(mode) {
            return formatEnum(mode, ts.CheckMode, /*isFlags*/ true);
        }
        Debug.formatCheckMode = formatCheckMode;
        function formatSignatureCheckMode(mode) {
            return formatEnum(mode, ts.SignatureCheckMode, /*isFlags*/ true);
        }
        Debug.formatSignatureCheckMode = formatSignatureCheckMode;
        function formatTypeFacts(facts) {
            return formatEnum(facts, ts.TypeFacts, /*isFlags*/ true);
        }
        Debug.formatTypeFacts = formatTypeFacts;
        var isDebugInfoEnabled = false;
        var extendedDebugModule;
        function extendedDebug() {
            enableDebugInfo();
            if (!extendedDebugModule) {
                throw new Error("Debugging helpers could not be loaded.");
            }
            return extendedDebugModule;
        }
        function printControlFlowGraph(flowNode) {
            return console.log(formatControlFlowGraph(flowNode));
        }
        Debug.printControlFlowGraph = printControlFlowGraph;
        function formatControlFlowGraph(flowNode) {
            return extendedDebug().formatControlFlowGraph(flowNode);
        }
        Debug.formatControlFlowGraph = formatControlFlowGraph;
        var flowNodeProto;
        function attachFlowNodeDebugInfoWorker(flowNode) {
            if (!("__debugFlowFlags" in flowNode)) { // eslint-disable-line no-in-operator
                Object.defineProperties(flowNode, {
                    // for use with vscode-js-debug's new customDescriptionGenerator in launch.json
                    __tsDebuggerDisplay: {
                        value: function () {
                            var flowHeader = this.flags & 2 /* FlowFlags.Start */ ? "FlowStart" :
                                this.flags & 4 /* FlowFlags.BranchLabel */ ? "FlowBranchLabel" :
                                    this.flags & 8 /* FlowFlags.LoopLabel */ ? "FlowLoopLabel" :
                                        this.flags & 16 /* FlowFlags.Assignment */ ? "FlowAssignment" :
                                            this.flags & 32 /* FlowFlags.TrueCondition */ ? "FlowTrueCondition" :
                                                this.flags & 64 /* FlowFlags.FalseCondition */ ? "FlowFalseCondition" :
                                                    this.flags & 128 /* FlowFlags.SwitchClause */ ? "FlowSwitchClause" :
                                                        this.flags & 256 /* FlowFlags.ArrayMutation */ ? "FlowArrayMutation" :
                                                            this.flags & 512 /* FlowFlags.Call */ ? "FlowCall" :
                                                                this.flags & 1024 /* FlowFlags.ReduceLabel */ ? "FlowReduceLabel" :
                                                                    this.flags & 1 /* FlowFlags.Unreachable */ ? "FlowUnreachable" :
                                                                        "UnknownFlow";
                            var remainingFlags = this.flags & ~(2048 /* FlowFlags.Referenced */ - 1);
                            return "".concat(flowHeader).concat(remainingFlags ? " (".concat(formatFlowFlags(remainingFlags), ")") : "");
                        }
                    },
                    __debugFlowFlags: { get: function () { return formatEnum(this.flags, ts.FlowFlags, /*isFlags*/ true); } },
                    __debugToString: { value: function () { return formatControlFlowGraph(this); } }
                });
            }
        }
        function attachFlowNodeDebugInfo(flowNode) {
            if (isDebugInfoEnabled) {
                if (typeof Object.setPrototypeOf === "function") {
                    // if we're in es2015, attach the method to a shared prototype for `FlowNode`
                    // so the method doesn't show up in the watch window.
                    if (!flowNodeProto) {
                        flowNodeProto = Object.create(Object.prototype);
                        attachFlowNodeDebugInfoWorker(flowNodeProto);
                    }
                    Object.setPrototypeOf(flowNode, flowNodeProto);
                }
                else {
                    // not running in an es2015 environment, attach the method directly.
                    attachFlowNodeDebugInfoWorker(flowNode);
                }
            }
        }
        Debug.attachFlowNodeDebugInfo = attachFlowNodeDebugInfo;
        var nodeArrayProto;
        function attachNodeArrayDebugInfoWorker(array) {
            if (!("__tsDebuggerDisplay" in array)) { // eslint-disable-line no-in-operator
                Object.defineProperties(array, {
                    __tsDebuggerDisplay: {
                        value: function (defaultValue) {
                            // An `Array` with extra properties is rendered as `[A, B, prop1: 1, prop2: 2]`. Most of
                            // these aren't immediately useful so we trim off the `prop1: ..., prop2: ...` part from the
                            // formatted string.
                            // This regex can trigger slow backtracking because of overlapping potential captures.
                            // We don't care, this is debug code that's only enabled with a debugger attached -
                            // we're just taking note of it for anyone checking regex performance in the future.
                            defaultValue = String(defaultValue).replace(/(?:,[\s\w\d_]+:[^,]+)+\]$/, "]");
                            return "NodeArray ".concat(defaultValue);
                        }
                    }
                });
            }
        }
        function attachNodeArrayDebugInfo(array) {
            if (isDebugInfoEnabled) {
                if (typeof Object.setPrototypeOf === "function") {
                    // if we're in es2015, attach the method to a shared prototype for `NodeArray`
                    // so the method doesn't show up in the watch window.
                    if (!nodeArrayProto) {
                        nodeArrayProto = Object.create(Array.prototype);
                        attachNodeArrayDebugInfoWorker(nodeArrayProto);
                    }
                    Object.setPrototypeOf(array, nodeArrayProto);
                }
                else {
                    // not running in an es2015 environment, attach the method directly.
                    attachNodeArrayDebugInfoWorker(array);
                }
            }
        }
        Debug.attachNodeArrayDebugInfo = attachNodeArrayDebugInfo;
        /**
         * Injects debug information into frequently used types.
         */
        function enableDebugInfo() {
            if (isDebugInfoEnabled)
                return;
            // avoid recomputing
            var weakTypeTextMap;
            var weakNodeTextMap;
            function getWeakTypeTextMap() {
                if (weakTypeTextMap === undefined) {
                    if (typeof WeakMap === "function")
                        weakTypeTextMap = new WeakMap();
                }
                return weakTypeTextMap;
            }
            function getWeakNodeTextMap() {
                if (weakNodeTextMap === undefined) {
                    if (typeof WeakMap === "function")
                        weakNodeTextMap = new WeakMap();
                }
                return weakNodeTextMap;
            }
            // Add additional properties in debug mode to assist with debugging.
            Object.defineProperties(ts.objectAllocator.getSymbolConstructor().prototype, {
                // for use with vscode-js-debug's new customDescriptionGenerator in launch.json
                __tsDebuggerDisplay: {
                    value: function () {
                        var symbolHeader = this.flags & 33554432 /* SymbolFlags.Transient */ ? "TransientSymbol" :
                            "Symbol";
                        var remainingSymbolFlags = this.flags & ~33554432 /* SymbolFlags.Transient */;
                        return "".concat(symbolHeader, " '").concat(ts.symbolName(this), "'").concat(remainingSymbolFlags ? " (".concat(formatSymbolFlags(remainingSymbolFlags), ")") : "");
                    }
                },
                __debugFlags: { get: function () { return formatSymbolFlags(this.flags); } }
            });
            Object.defineProperties(ts.objectAllocator.getTypeConstructor().prototype, {
                // for use with vscode-js-debug's new customDescriptionGenerator in launch.json
                __tsDebuggerDisplay: {
                    value: function () {
                        var typeHeader = this.flags & 98304 /* TypeFlags.Nullable */ ? "NullableType" :
                            this.flags & 384 /* TypeFlags.StringOrNumberLiteral */ ? "LiteralType ".concat(JSON.stringify(this.value)) :
                                this.flags & 2048 /* TypeFlags.BigIntLiteral */ ? "LiteralType ".concat(this.value.negative ? "-" : "").concat(this.value.base10Value, "n") :
                                    this.flags & 8192 /* TypeFlags.UniqueESSymbol */ ? "UniqueESSymbolType" :
                                        this.flags & 32 /* TypeFlags.Enum */ ? "EnumType" :
                                            this.flags & 67359327 /* TypeFlags.Intrinsic */ ? "IntrinsicType ".concat(this.intrinsicName) :
                                                this.flags & 1048576 /* TypeFlags.Union */ ? "UnionType" :
                                                    this.flags & 2097152 /* TypeFlags.Intersection */ ? "IntersectionType" :
                                                        this.flags & 4194304 /* TypeFlags.Index */ ? "IndexType" :
                                                            this.flags & 8388608 /* TypeFlags.IndexedAccess */ ? "IndexedAccessType" :
                                                                this.flags & 16777216 /* TypeFlags.Conditional */ ? "ConditionalType" :
                                                                    this.flags & 33554432 /* TypeFlags.Substitution */ ? "SubstitutionType" :
                                                                        this.flags & 262144 /* TypeFlags.TypeParameter */ ? "TypeParameter" :
                                                                            this.flags & 524288 /* TypeFlags.Object */ ?
                                                                                this.objectFlags & 3 /* ObjectFlags.ClassOrInterface */ ? "InterfaceType" :
                                                                                    this.objectFlags & 4 /* ObjectFlags.Reference */ ? "TypeReference" :
                                                                                        this.objectFlags & 8 /* ObjectFlags.Tuple */ ? "TupleType" :
                                                                                            this.objectFlags & 16 /* ObjectFlags.Anonymous */ ? "AnonymousType" :
                                                                                                this.objectFlags & 32 /* ObjectFlags.Mapped */ ? "MappedType" :
                                                                                                    this.objectFlags & 1024 /* ObjectFlags.ReverseMapped */ ? "ReverseMappedType" :
                                                                                                        this.objectFlags & 256 /* ObjectFlags.EvolvingArray */ ? "EvolvingArrayType" :
                                                                                                            "ObjectType" :
                                                                                "Type";
                        var remainingObjectFlags = this.flags & 524288 /* TypeFlags.Object */ ? this.objectFlags & ~1343 /* ObjectFlags.ObjectTypeKindMask */ : 0;
                        return "".concat(typeHeader).concat(this.symbol ? " '".concat(ts.symbolName(this.symbol), "'") : "").concat(remainingObjectFlags ? " (".concat(formatObjectFlags(remainingObjectFlags), ")") : "");
                    }
                },
                __debugFlags: { get: function () { return formatTypeFlags(this.flags); } },
                __debugObjectFlags: { get: function () { return this.flags & 524288 /* TypeFlags.Object */ ? formatObjectFlags(this.objectFlags) : ""; } },
                __debugTypeToString: {
                    value: function () {
                        // avoid recomputing
                        var map = getWeakTypeTextMap();
                        var text = map === null || map === void 0 ? void 0 : map.get(this);
                        if (text === undefined) {
                            text = this.checker.typeToString(this);
                            map === null || map === void 0 ? void 0 : map.set(this, text);
                        }
                        return text;
                    }
                },
            });
            Object.defineProperties(ts.objectAllocator.getSignatureConstructor().prototype, {
                __debugFlags: { get: function () { return formatSignatureFlags(this.flags); } },
                __debugSignatureToString: { value: function () { var _a; return (_a = this.checker) === null || _a === void 0 ? void 0 : _a.signatureToString(this); } }
            });
            var nodeConstructors = [
                ts.objectAllocator.getNodeConstructor(),
                ts.objectAllocator.getIdentifierConstructor(),
                ts.objectAllocator.getTokenConstructor(),
                ts.objectAllocator.getSourceFileConstructor()
            ];
            for (var _i = 0, nodeConstructors_1 = nodeConstructors; _i < nodeConstructors_1.length; _i++) {
                var ctor = nodeConstructors_1[_i];
                if (!ctor.prototype.hasOwnProperty("__debugKind")) {
                    Object.defineProperties(ctor.prototype, {
                        // for use with vscode-js-debug's new customDescriptionGenerator in launch.json
                        __tsDebuggerDisplay: {
                            value: function () {
                                var nodeHeader = ts.isGeneratedIdentifier(this) ? "GeneratedIdentifier" :
                                    ts.isIdentifier(this) ? "Identifier '".concat(ts.idText(this), "'") :
                                        ts.isPrivateIdentifier(this) ? "PrivateIdentifier '".concat(ts.idText(this), "'") :
                                            ts.isStringLiteral(this) ? "StringLiteral ".concat(JSON.stringify(this.text.length < 10 ? this.text : this.text.slice(10) + "...")) :
                                                ts.isNumericLiteral(this) ? "NumericLiteral ".concat(this.text) :
                                                    ts.isBigIntLiteral(this) ? "BigIntLiteral ".concat(this.text, "n") :
                                                        ts.isTypeParameterDeclaration(this) ? "TypeParameterDeclaration" :
                                                            ts.isParameter(this) ? "ParameterDeclaration" :
                                                                ts.isConstructorDeclaration(this) ? "ConstructorDeclaration" :
                                                                    ts.isGetAccessorDeclaration(this) ? "GetAccessorDeclaration" :
                                                                        ts.isSetAccessorDeclaration(this) ? "SetAccessorDeclaration" :
                                                                            ts.isCallSignatureDeclaration(this) ? "CallSignatureDeclaration" :
                                                                                ts.isConstructSignatureDeclaration(this) ? "ConstructSignatureDeclaration" :
                                                                                    ts.isIndexSignatureDeclaration(this) ? "IndexSignatureDeclaration" :
                                                                                        ts.isTypePredicateNode(this) ? "TypePredicateNode" :
                                                                                            ts.isTypeReferenceNode(this) ? "TypeReferenceNode" :
                                                                                                ts.isFunctionTypeNode(this) ? "FunctionTypeNode" :
                                                                                                    ts.isConstructorTypeNode(this) ? "ConstructorTypeNode" :
                                                                                                        ts.isTypeQueryNode(this) ? "TypeQueryNode" :
                                                                                                            ts.isTypeLiteralNode(this) ? "TypeLiteralNode" :
                                                                                                                ts.isArrayTypeNode(this) ? "ArrayTypeNode" :
                                                                                                                    ts.isTupleTypeNode(this) ? "TupleTypeNode" :
                                                                                                                        ts.isOptionalTypeNode(this) ? "OptionalTypeNode" :
                                                                                                                            ts.isRestTypeNode(this) ? "RestTypeNode" :
                                                                                                                                ts.isUnionTypeNode(this) ? "UnionTypeNode" :
                                                                                                                                    ts.isIntersectionTypeNode(this) ? "IntersectionTypeNode" :
                                                                                                                                        ts.isConditionalTypeNode(this) ? "ConditionalTypeNode" :
                                                                                                                                            ts.isInferTypeNode(this) ? "InferTypeNode" :
                                                                                                                                                ts.isParenthesizedTypeNode(this) ? "ParenthesizedTypeNode" :
                                                                                                                                                    ts.isThisTypeNode(this) ? "ThisTypeNode" :
                                                                                                                                                        ts.isTypeOperatorNode(this) ? "TypeOperatorNode" :
                                                                                                                                                            ts.isIndexedAccessTypeNode(this) ? "IndexedAccessTypeNode" :
                                                                                                                                                                ts.isMappedTypeNode(this) ? "MappedTypeNode" :
                                                                                                                                                                    ts.isLiteralTypeNode(this) ? "LiteralTypeNode" :
                                                                                                                                                                        ts.isNamedTupleMember(this) ? "NamedTupleMember" :
                                                                                                                                                                            ts.isImportTypeNode(this) ? "ImportTypeNode" :
                                                                                                                                                                                formatSyntaxKind(this.kind);
                                return "".concat(nodeHeader).concat(this.flags ? " (".concat(formatNodeFlags(this.flags), ")") : "");
                            }
                        },
                        __debugKind: { get: function () { return formatSyntaxKind(this.kind); } },
                        __debugNodeFlags: { get: function () { return formatNodeFlags(this.flags); } },
                        __debugModifierFlags: { get: function () { return formatModifierFlags(ts.getEffectiveModifierFlagsNoCache(this)); } },
                        __debugTransformFlags: { get: function () { return formatTransformFlags(this.transformFlags); } },
                        __debugIsParseTreeNode: { get: function () { return ts.isParseTreeNode(this); } },
                        __debugEmitFlags: { get: function () { return formatEmitFlags(ts.getEmitFlags(this)); } },
                        __debugGetText: {
                            value: function (includeTrivia) {
                                if (ts.nodeIsSynthesized(this))
                                    return "";
                                // avoid recomputing
                                var map = getWeakNodeTextMap();
                                var text = map === null || map === void 0 ? void 0 : map.get(this);
                                if (text === undefined) {
                                    var parseNode = ts.getParseTreeNode(this);
                                    var sourceFile = parseNode && ts.getSourceFileOfNode(parseNode);
                                    text = sourceFile ? ts.getSourceTextOfNodeFromSourceFile(sourceFile, parseNode, includeTrivia) : "";
                                    map === null || map === void 0 ? void 0 : map.set(this, text);
                                }
                                return text;
                            }
                        }
                    });
                }
            }
            // attempt to load extended debugging information
            try {
                if (ts.sys && ts.sys.require) {
                    var basePath = ts.getDirectoryPath(ts.resolvePath(ts.sys.getExecutingFilePath()));
                    var result = ts.sys.require(basePath, "./compiler-debug");
                    if (!result.error) {
                        result.module.init(ts);
                        extendedDebugModule = result.module;
                    }
                }
            }
            catch (_a) {
                // do nothing
            }
            isDebugInfoEnabled = true;
        }
        Debug.enableDebugInfo = enableDebugInfo;
        function formatDeprecationMessage(name, error, errorAfter, since, message) {
            var deprecationMessage = error ? "DeprecationError: " : "DeprecationWarning: ";
            deprecationMessage += "'".concat(name, "' ");
            deprecationMessage += since ? "has been deprecated since v".concat(since) : "is deprecated";
            deprecationMessage += error ? " and can no longer be used." : errorAfter ? " and will no longer be usable after v".concat(errorAfter, ".") : ".";
            deprecationMessage += message ? " ".concat(ts.formatStringFromArgs(message, [name], 0)) : "";
            return deprecationMessage;
        }
        function createErrorDeprecation(name, errorAfter, since, message) {
            var deprecationMessage = formatDeprecationMessage(name, /*error*/ true, errorAfter, since, message);
            return function () {
                throw new TypeError(deprecationMessage);
            };
        }
        function createWarningDeprecation(name, errorAfter, since, message) {
            var hasWrittenDeprecation = false;
            return function () {
                if (Debug.enableDeprecationWarnings && !hasWrittenDeprecation) {
                    log.warn(formatDeprecationMessage(name, /*error*/ false, errorAfter, since, message));
                    hasWrittenDeprecation = true;
                }
            };
        }
        function createDeprecation(name, options) {
            var _a, _b;
            if (options === void 0) { options = {}; }
            var version = typeof options.typeScriptVersion === "string" ? new ts.Version(options.typeScriptVersion) : (_a = options.typeScriptVersion) !== null && _a !== void 0 ? _a : getTypeScriptVersion();
            var errorAfter = typeof options.errorAfter === "string" ? new ts.Version(options.errorAfter) : options.errorAfter;
            var warnAfter = typeof options.warnAfter === "string" ? new ts.Version(options.warnAfter) : options.warnAfter;
            var since = typeof options.since === "string" ? new ts.Version(options.since) : (_b = options.since) !== null && _b !== void 0 ? _b : warnAfter;
            var error = options.error || errorAfter && version.compareTo(errorAfter) <= 0;
            var warn = !warnAfter || version.compareTo(warnAfter) >= 0;
            return error ? createErrorDeprecation(name, errorAfter, since, options.message) :
                warn ? createWarningDeprecation(name, errorAfter, since, options.message) :
                    ts.noop;
        }
        Debug.createDeprecation = createDeprecation;
        function wrapFunction(deprecation, func) {
            return function () {
                deprecation();
                return func.apply(this, arguments);
            };
        }
        function deprecate(func, options) {
            var _a;
            var deprecation = createDeprecation((_a = options === null || options === void 0 ? void 0 : options.name) !== null && _a !== void 0 ? _a : getFunctionName(func), options);
            return wrapFunction(deprecation, func);
        }
        Debug.deprecate = deprecate;
        function formatVariance(varianceFlags) {
            var variance = varianceFlags & 7 /* VarianceFlags.VarianceMask */;
            var result = variance === 0 /* VarianceFlags.Invariant */ ? "in out" :
                variance === 3 /* VarianceFlags.Bivariant */ ? "[bivariant]" :
                    variance === 2 /* VarianceFlags.Contravariant */ ? "in" :
                        variance === 1 /* VarianceFlags.Covariant */ ? "out" :
                            variance === 4 /* VarianceFlags.Independent */ ? "[independent]" : "";
            if (varianceFlags & 8 /* VarianceFlags.Unmeasurable */) {
                result += " (unmeasurable)";
            }
            else if (varianceFlags & 16 /* VarianceFlags.Unreliable */) {
                result += " (unreliable)";
            }
            return result;
        }
        Debug.formatVariance = formatVariance;
        var DebugTypeMapper = /** @class */ (function () {
            function DebugTypeMapper() {
            }
            DebugTypeMapper.prototype.__debugToString = function () {
                var _a;
                type(this);
                switch (this.kind) {
                    case 3 /* TypeMapKind.Function */: return ((_a = this.debugInfo) === null || _a === void 0 ? void 0 : _a.call(this)) || "(function mapper)";
                    case 0 /* TypeMapKind.Simple */: return "".concat(this.source.__debugTypeToString(), " -> ").concat(this.target.__debugTypeToString());
                    case 1 /* TypeMapKind.Array */: return ts.zipWith(this.sources, this.targets || ts.map(this.sources, function () { return "any"; }), function (s, t) { return "".concat(s.__debugTypeToString(), " -> ").concat(typeof t === "string" ? t : t.__debugTypeToString()); }).join(", ");
                    case 2 /* TypeMapKind.Deferred */: return ts.zipWith(this.sources, this.targets, function (s, t) { return "".concat(s.__debugTypeToString(), " -> ").concat(t().__debugTypeToString()); }).join(", ");
                    case 5 /* TypeMapKind.Merged */:
                    case 4 /* TypeMapKind.Composite */: return "m1: ".concat(this.mapper1.__debugToString().split("\n").join("\n    "), "\nm2: ").concat(this.mapper2.__debugToString().split("\n").join("\n    "));
                    default: return assertNever(this);
                }
            };
            return DebugTypeMapper;
        }());
        Debug.DebugTypeMapper = DebugTypeMapper;
        function attachDebugPrototypeIfDebug(mapper) {
            if (Debug.isDebugging) {
                return Object.setPrototypeOf(mapper, DebugTypeMapper.prototype);
            }
            return mapper;
        }
        Debug.attachDebugPrototypeIfDebug = attachDebugPrototypeIfDebug;
    })(Debug = ts.Debug || (ts.Debug = {}));
})(ts || (ts = {}));
/* @internal */
var ts;
(function (ts) {
    // https://semver.org/#spec-item-2
    // > A normal version number MUST take the form X.Y.Z where X, Y, and Z are non-negative
    // > integers, and MUST NOT contain leading zeroes. X is the major version, Y is the minor
    // > version, and Z is the patch version. Each element MUST increase numerically.
    //
    // NOTE: We differ here in that we allow X and X.Y, with missing parts having the default
    // value of `0`.
    var versionRegExp = /^(0|[1-9]\d*)(?:\.(0|[1-9]\d*)(?:\.(0|[1-9]\d*)(?:\-([a-z0-9-.]+))?(?:\+([a-z0-9-.]+))?)?)?$/i;
    // https://semver.org/#spec-item-9
    // > A pre-release version MAY be denoted by appending a hyphen and a series of dot separated
    // > identifiers immediately following the patch version. Identifiers MUST comprise only ASCII
    // > alphanumerics and hyphen [0-9A-Za-z-]. Identifiers MUST NOT be empty. Numeric identifiers
    // > MUST NOT include leading zeroes.
    var prereleaseRegExp = /^(?:0|[1-9]\d*|[a-z-][a-z0-9-]*)(?:\.(?:0|[1-9]\d*|[a-z-][a-z0-9-]*))*$/i;
    // https://semver.org/#spec-item-10
    // > Build metadata MAY be denoted by appending a plus sign and a series of dot separated
    // > identifiers immediately following the patch or pre-release version. Identifiers MUST
    // > comprise only ASCII alphanumerics and hyphen [0-9A-Za-z-]. Identifiers MUST NOT be empty.
    var buildRegExp = /^[a-z0-9-]+(?:\.[a-z0-9-]+)*$/i;
    // https://semver.org/#spec-item-9
    // > Numeric identifiers MUST NOT include leading zeroes.
    var numericIdentifierRegExp = /^(0|[1-9]\d*)$/;
    /**
     * Describes a precise semantic version number, https://semver.org
     */
    var Version = /** @class */ (function () {
        function Version(major, minor, patch, prerelease, build) {
            if (minor === void 0) { minor = 0; }
            if (patch === void 0) { patch = 0; }
            if (prerelease === void 0) { prerelease = ""; }
            if (build === void 0) { build = ""; }
            if (typeof major === "string") {
                var result = ts.Debug.checkDefined(tryParseComponents(major), "Invalid version");
                (major = result.major, minor = result.minor, patch = result.patch, prerelease = result.prerelease, build = result.build);
            }
            ts.Debug.assert(major >= 0, "Invalid argument: major");
            ts.Debug.assert(minor >= 0, "Invalid argument: minor");
            ts.Debug.assert(patch >= 0, "Invalid argument: patch");
            ts.Debug.assert(!prerelease || prereleaseRegExp.test(prerelease), "Invalid argument: prerelease");
            ts.Debug.assert(!build || buildRegExp.test(build), "Invalid argument: build");
            this.major = major;
            this.minor = minor;
            this.patch = patch;
            this.prerelease = prerelease ? prerelease.split(".") : ts.emptyArray;
            this.build = build ? build.split(".") : ts.emptyArray;
        }
        Version.tryParse = function (text) {
            var result = tryParseComponents(text);
            if (!result)
                return undefined;
            var major = result.major, minor = result.minor, patch = result.patch, prerelease = result.prerelease, build = result.build;
            return new Version(major, minor, patch, prerelease, build);
        };
        Version.prototype.compareTo = function (other) {
            // https://semver.org/#spec-item-11
            // > Precedence is determined by the first difference when comparing each of these
            // > identifiers from left to right as follows: Major, minor, and patch versions are
            // > always compared numerically.
            //
            // https://semver.org/#spec-item-11
            // > Precedence for two pre-release versions with the same major, minor, and patch version
            // > MUST be determined by comparing each dot separated identifier from left to right until
            // > a difference is found [...]
            //
            // https://semver.org/#spec-item-11
            // > Build metadata does not figure into precedence
            if (this === other)
                return 0 /* Comparison.EqualTo */;
            if (other === undefined)
                return 1 /* Comparison.GreaterThan */;
            return ts.compareValues(this.major, other.major)
                || ts.compareValues(this.minor, other.minor)
                || ts.compareValues(this.patch, other.patch)
                || comparePrereleaseIdentifiers(this.prerelease, other.prerelease);
        };
        Version.prototype.increment = function (field) {
            switch (field) {
                case "major": return new Version(this.major + 1, 0, 0);
                case "minor": return new Version(this.major, this.minor + 1, 0);
                case "patch": return new Version(this.major, this.minor, this.patch + 1);
                default: return ts.Debug.assertNever(field);
            }
        };
        Version.prototype.toString = function () {
            var result = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch);
            if (ts.some(this.prerelease))
                result += "-".concat(this.prerelease.join("."));
            if (ts.some(this.build))
                result += "+".concat(this.build.join("."));
            return result;
        };
        Version.zero = new Version(0, 0, 0);
        return Version;
    }());
    ts.Version = Version;
    function tryParseComponents(text) {
        var match = versionRegExp.exec(text);
        if (!match)
            return undefined;
        var major = match[1], _a = match[2], minor = _a === void 0 ? "0" : _a, _b = match[3], patch = _b === void 0 ? "0" : _b, _c = match[4], prerelease = _c === void 0 ? "" : _c, _d = match[5], build = _d === void 0 ? "" : _d;
        if (prerelease && !prereleaseRegExp.test(prerelease))
            return undefined;
        if (build && !buildRegExp.test(build))
            return undefined;
        return {
            major: parseInt(major, 10),
            minor: parseInt(minor, 10),
            patch: parseInt(patch, 10),
            prerelease: prerelease,
            build: build
        };
    }
    function comparePrereleaseIdentifiers(left, right) {
        // https://semver.org/#spec-item-11
        // > When major, minor, and patch are equal, a pre-release version has lower precedence
        // > than a normal version.
        if (left === right)
            return 0 /* Comparison.EqualTo */;
        if (left.length === 0)
            return right.length === 0 ? 0 /* Comparison.EqualTo */ : 1 /* Comparison.GreaterThan */;
        if (right.length === 0)
            return -1 /* Comparison.LessThan */;
        // https://semver.org/#spec-item-11
        // > Precedence for two pre-release versions with the same major, minor, and patch version
        // > MUST be determined by comparing each dot separated identifier from left to right until
        // > a difference is found [...]
        var length = Math.min(left.length, right.length);
        for (var i = 0; i < length; i++) {
            var leftIdentifier = left[i];
            var rightIdentifier = right[i];
            if (leftIdentifier === rightIdentifier)
                continue;
            var leftIsNumeric = numericIdentifierRegExp.test(leftIdentifier);
            var rightIsNumeric = numericIdentifierRegExp.test(rightIdentifier);
            if (leftIsNumeric || rightIsNumeric) {
                // https://semver.org/#spec-item-11
                // > Numeric identifiers always have lower precedence than non-numeric identifiers.
                if (leftIsNumeric !== rightIsNumeric)
                    return leftIsNumeric ? -1 /* Comparison.LessThan */ : 1 /* Comparison.GreaterThan */;
                // https://semver.org/#spec-item-11
                // > identifiers consisting of only digits are compared numerically
                var result = ts.compareValues(+leftIdentifier, +rightIdentifier);
                if (result)
                    return result;
            }
            else {
                // https://semver.org/#spec-item-11
                // > identifiers with letters or hyphens are compared lexically in ASCII sort order.
                var result = ts.compareStringsCaseSensitive(leftIdentifier, rightIdentifier);
                if (result)
                    return result;
            }
        }
        // https://semver.org/#spec-item-11
        // > A larger set of pre-release fields has a higher precedence than a smaller set, if all
        // > of the preceding identifiers are equal.
        return ts.compareValues(left.length, right.length);
    }
    /**
     * Describes a semantic version range, per https://github.com/npm/node-semver#ranges
     */
    var VersionRange = /** @class */ (function () {
        function VersionRange(spec) {
            this._alternatives = spec ? ts.Debug.checkDefined(parseRange(spec), "Invalid range spec.") : ts.emptyArray;
        }
        VersionRange.tryParse = function (text) {
            var sets = parseRange(text);
            if (sets) {
                var range = new VersionRange("");
                range._alternatives = sets;
                return range;
            }
            return undefined;
        };
        VersionRange.prototype.test = function (version) {
            if (typeof version === "string")
                version = new Version(version);
            return testDisjunction(version, this._alternatives);
        };
        VersionRange.prototype.toString = function () {
            return formatDisjunction(this._alternatives);
        };
        return VersionRange;
    }());
    ts.VersionRange = VersionRange;
    // https://github.com/npm/node-semver#range-grammar
    //
    // range-set    ::= range ( logical-or range ) *
    // range        ::= hyphen | simple ( ' ' simple ) * | ''
    // logical-or   ::= ( ' ' ) * '||' ( ' ' ) *
    var logicalOrRegExp = /\|\|/g;
    var whitespaceRegExp = /\s+/g;
    // https://github.com/npm/node-semver#range-grammar
    //
    // partial      ::= xr ( '.' xr ( '.' xr qualifier ? )? )?
    // xr           ::= 'x' | 'X' | '*' | nr
    // nr           ::= '0' | ['1'-'9'] ( ['0'-'9'] ) *
    // qualifier    ::= ( '-' pre )? ( '+' build )?
    // pre          ::= parts
    // build        ::= parts
    // parts        ::= part ( '.' part ) *
    // part         ::= nr | [-0-9A-Za-z]+
    var partialRegExp = /^([xX*0]|[1-9]\d*)(?:\.([xX*0]|[1-9]\d*)(?:\.([xX*0]|[1-9]\d*)(?:-([a-z0-9-.]+))?(?:\+([a-z0-9-.]+))?)?)?$/i;
    // https://github.com/npm/node-semver#range-grammar
    //
    // hyphen       ::= partial ' - ' partial
    var hyphenRegExp = /^\s*([a-z0-9-+.*]+)\s+-\s+([a-z0-9-+.*]+)\s*$/i;
    // https://github.com/npm/node-semver#range-grammar
    //
    // simple       ::= primitive | partial | tilde | caret
    // primitive    ::= ( '<' | '>' | '>=' | '<=' | '=' ) partial
    // tilde        ::= '~' partial
    // caret        ::= '^' partial
    var rangeRegExp = /^(~|\^|<|<=|>|>=|=)?\s*([a-z0-9-+.*]+)$/i;
    function parseRange(text) {
        var alternatives = [];
        for (var _i = 0, _a = ts.trimString(text).split(logicalOrRegExp); _i < _a.length; _i++) {
            var range = _a[_i];
            if (!range)
                continue;
            var comparators = [];
            range = ts.trimString(range);
            var match = hyphenRegExp.exec(range);
            if (match) {
                if (!parseHyphen(match[1], match[2], comparators))
                    return undefined;
            }
            else {
                for (var _b = 0, _c = range.split(whitespaceRegExp); _b < _c.length; _b++) {
                    var simple = _c[_b];
                    var match_1 = rangeRegExp.exec(ts.trimString(simple));
                    if (!match_1 || !parseComparator(match_1[1], match_1[2], comparators))
                        return undefined;
                }
            }
            alternatives.push(comparators);
        }
        return alternatives;
    }
    function parsePartial(text) {
        var match = partialRegExp.exec(text);
        if (!match)
            return undefined;
        var major = match[1], _a = match[2], minor = _a === void 0 ? "*" : _a, _b = match[3], patch = _b === void 0 ? "*" : _b, prerelease = match[4], build = match[5];
        var version = new Version(isWildcard(major) ? 0 : parseInt(major, 10), isWildcard(major) || isWildcard(minor) ? 0 : parseInt(minor, 10), isWildcard(major) || isWildcard(minor) || isWildcard(patch) ? 0 : parseInt(patch, 10), prerelease, build);
        return { version: version, major: major, minor: minor, patch: patch };
    }
    function parseHyphen(left, right, comparators) {
        var leftResult = parsePartial(left);
        if (!leftResult)
            return false;
        var rightResult = parsePartial(right);
        if (!rightResult)
            return false;
        if (!isWildcard(leftResult.major)) {
            comparators.push(createComparator(">=", leftResult.version));
        }
        if (!isWildcard(rightResult.major)) {
            comparators.push(isWildcard(rightResult.minor) ? createComparator("<", rightResult.version.increment("major")) :
                isWildcard(rightResult.patch) ? createComparator("<", rightResult.version.increment("minor")) :
                    createComparator("<=", rightResult.version));
        }
        return true;
    }
    function parseComparator(operator, text, comparators) {
        var result = parsePartial(text);
        if (!result)
            return false;
        var version = result.version, major = result.major, minor = result.minor, patch = result.patch;
        if (!isWildcard(major)) {
            switch (operator) {
                case "~":
                    comparators.push(createComparator(">=", version));
                    comparators.push(createComparator("<", version.increment(isWildcard(minor) ? "major" :
                        "minor")));
                    break;
                case "^":
                    comparators.push(createComparator(">=", version));
                    comparators.push(createComparator("<", version.increment(version.major > 0 || isWildcard(minor) ? "major" :
                        version.minor > 0 || isWildcard(patch) ? "minor" :
                            "patch")));
                    break;
                case "<":
                case ">=":
                    comparators.push(createComparator(operator, version));
                    break;
                case "<=":
                case ">":
                    comparators.push(isWildcard(minor) ? createComparator(operator === "<=" ? "<" : ">=", version.increment("major")) :
                        isWildcard(patch) ? createComparator(operator === "<=" ? "<" : ">=", version.increment("minor")) :
                            createComparator(operator, version));
                    break;
                case "=":
                case undefined:
                    if (isWildcard(minor) || isWildcard(patch)) {
                        comparators.push(createComparator(">=", version));
                        comparators.push(createComparator("<", version.increment(isWildcard(minor) ? "major" : "minor")));
                    }
                    else {
                        comparators.push(createComparator("=", version));
                    }
                    break;
                default:
                    // unrecognized
                    return false;
            }
        }
        else if (operator === "<" || operator === ">") {
            comparators.push(createComparator("<", Version.zero));
        }
        return true;
    }
    function isWildcard(part) {
        return part === "*" || part === "x" || part === "X";
    }
    function createComparator(operator, operand) {
        return { operator: operator, operand: operand };
    }
    function testDisjunction(version, alternatives) {
        // an empty disjunction is treated as "*" (all versions)
        if (alternatives.length === 0)
            return true;
        for (var _i = 0, alternatives_1 = alternatives; _i < alternatives_1.length; _i++) {
            var alternative = alternatives_1[_i];
            if (testAlternative(version, alternative))
                return true;
        }
        return false;
    }
    function testAlternative(version, comparators) {
        for (var _i = 0, comparators_1 = comparators; _i < comparators_1.length; _i++) {
            var comparator = comparators_1[_i];
            if (!testComparator(version, comparator.operator, comparator.operand))
                return false;
        }
        return true;
    }
    function testComparator(version, operator, operand) {
        var cmp = version.compareTo(operand);
        switch (operator) {
            case "<": return cmp < 0;
            case "<=": return cmp <= 0;
            case ">": return cmp > 0;
            case ">=": return cmp >= 0;
            case "=": return cmp === 0;
            default: return ts.Debug.assertNever(operator);
        }
    }
    function formatDisjunction(alternatives) {
        return ts.map(alternatives, formatAlternative).join(" || ") || "*";
    }
    function formatAlternative(comparators) {
        return ts.map(comparators, formatComparator).join(" ");
    }
    function formatComparator(comparator) {
        return "".concat(comparator.operator).concat(comparator.operand);
    }
})(ts || (ts = {}));
/*@internal*/
var ts;
(function (ts) {
    // The following definitions provide the minimum compatible support for the Web Performance User Timings API
    // between browsers and NodeJS:
    // eslint-disable-next-line @typescript-eslint/naming-convention
    function hasRequiredAPI(performance, PerformanceObserver) {
        return typeof performance === "object" &&
            typeof performance.timeOrigin === "number" &&
            typeof performance.mark === "function" &&
            typeof performance.measure === "function" &&
            typeof performance.now === "function" &&
            typeof PerformanceObserver === "function";
    }
    function tryGetWebPerformanceHooks() {
        if (typeof performance === "object" &&
            typeof PerformanceObserver === "function" &&
            hasRequiredAPI(performance, PerformanceObserver)) {
            return {
                // For now we always write native performance events when running in the browser. We may
                // make this conditional in the future if we find that native web performance hooks
                // in the browser also slow down compilation.
                shouldWriteNativeEvents: true,
                performance: performance,
                PerformanceObserver: PerformanceObserver
            };
        }
    }
    function tryGetNodePerformanceHooks() {
        if (typeof process !== "undefined" && process.nextTick && !process.browser && typeof module === "object" && typeof require === "function") {
            try {
                var performance_1;
                var _a = require("perf_hooks"), nodePerformance_1 = _a.performance, PerformanceObserver_1 = _a.PerformanceObserver;
                if (hasRequiredAPI(nodePerformance_1, PerformanceObserver_1)) {
                    performance_1 = nodePerformance_1;
                    // There is a bug in Node's performance.measure prior to 12.16.3/13.13.0 that does not
                    // match the Web Performance API specification. Node's implementation did not allow
                    // optional `start` and `end` arguments for `performance.measure`.
                    // See https://github.com/nodejs/node/pull/32651 for more information.
                    var version_1 = new ts.Version(process.versions.node);
                    var range = new ts.VersionRange("<12.16.3 || 13 <13.13");
                    if (range.test(version_1)) {
                        performance_1 = {
                            get timeOrigin() { return nodePerformance_1.timeOrigin; },
                            now: function () { return nodePerformance_1.now(); },
                            mark: function (name) { return nodePerformance_1.mark(name); },
                            measure: function (name, start, end) {
                                if (start === void 0) { start = "nodeStart"; }
                                if (end === undefined) {
                                    end = "__performance.measure-fix__";
                                    nodePerformance_1.mark(end);
                                }
                                nodePerformance_1.measure(name, start, end);
                                if (end === "__performance.measure-fix__") {
                                    nodePerformance_1.clearMarks("__performance.measure-fix__");
                                }
                            }
                        };
                    }
                    return {
                        // By default, only write native events when generating a cpu profile or using the v8 profiler.
                        shouldWriteNativeEvents: false,
                        performance: performance_1,
                        PerformanceObserver: PerformanceObserver_1
                    };
                }
            }
            catch (_b) {
                // ignore errors
            }
        }
    }
    // Unlike with the native Map/Set 'tryGet' functions in corePublic.ts, we eagerly evaluate these
    // since we will need them for `timestamp`, below.
    var nativePerformanceHooks = tryGetWebPerformanceHooks() || tryGetNodePerformanceHooks();
    var nativePerformance = nativePerformanceHooks === null || nativePerformanceHooks === void 0 ? void 0 : nativePerformanceHooks.performance;
    function tryGetNativePerformanceHooks() {
        return nativePerformanceHooks;
    }
    ts.tryGetNativePerformanceHooks = tryGetNativePerformanceHooks;
    /** Gets a timestamp with (at least) ms resolution */
    ts.timestamp = nativePerformance ? function () { return nativePerformance.now(); } :
        Date.now ? Date.now :
            function () { return +(new Date()); };
})(ts || (ts = {}));
/*@internal*/
/** Performance measurements for the compiler. */
var ts;
(function (ts) {
    var performance;
    (function (performance) {
        var perfHooks;
        // when set, indicates the implementation of `Performance` to use for user timing.
        // when unset, indicates user timing is unavailable or disabled.
        var performanceImpl;
        function createTimerIf(condition, measureName, startMarkName, endMarkName) {
            return condition ? createTimer(measureName, startMarkName, endMarkName) : performance.nullTimer;
        }
        performance.createTimerIf = createTimerIf;
        function createTimer(measureName, startMarkName, endMarkName) {
            var enterCount = 0;
            return {
                enter: enter,
                exit: exit
            };
            function enter() {
                if (++enterCount === 1) {
                    mark(startMarkName);
                }
            }
            function exit() {
                if (--enterCount === 0) {
                    mark(endMarkName);
                    measure(measureName, startMarkName, endMarkName);
                }
                else if (enterCount < 0) {
                    ts.Debug.fail("enter/exit count does not match.");
                }
            }
        }
        performance.createTimer = createTimer;
        performance.nullTimer = { enter: ts.noop, exit: ts.noop };
        var enabled = false;
        var timeorigin = ts.timestamp();
        var marks = new ts.Map();
        var counts = new ts.Map();
        var durations = new ts.Map();
        /**
         * Marks a performance event.
         *
         * @param markName The name of the mark.
         */
        function mark(markName) {
            var _a;
            if (enabled) {
                var count = (_a = counts.get(markName)) !== null && _a !== void 0 ? _a : 0;
                counts.set(markName, count + 1);
                marks.set(markName, ts.timestamp());
                performanceImpl === null || performanceImpl === void 0 ? void 0 : performanceImpl.mark(markName);
            }
        }
        performance.mark = mark;
        /**
         * Adds a performance measurement with the specified name.
         *
         * @param measureName The name of the performance measurement.
         * @param startMarkName The name of the starting mark. If not supplied, the point at which the
         *      profiler was enabled is used.
         * @param endMarkName The name of the ending mark. If not supplied, the current timestamp is
         *      used.
         */
        function measure(measureName, startMarkName, endMarkName) {
            var _a, _b;
            if (enabled) {
                var end = (_a = (endMarkName !== undefined ? marks.get(endMarkName) : undefined)) !== null && _a !== void 0 ? _a : ts.timestamp();
                var start = (_b = (startMarkName !== undefined ? marks.get(startMarkName) : undefined)) !== null && _b !== void 0 ? _b : timeorigin;
                var previousDuration = durations.get(measureName) || 0;
                durations.set(measureName, previousDuration + (end - start));
                performanceImpl === null || performanceImpl === void 0 ? void 0 : performanceImpl.measure(measureName, startMarkName, endMarkName);
            }
        }
        performance.measure = measure;
        /**
         * Gets the number of times a marker was encountered.
         *
         * @param markName The name of the mark.
         */
        function getCount(markName) {
            return counts.get(markName) || 0;
        }
        performance.getCount = getCount;
        /**
         * Gets the total duration of all measurements with the supplied name.
         *
         * @param measureName The name of the measure whose durations should be accumulated.
         */
        function getDuration(measureName) {
            return durations.get(measureName) || 0;
        }
        performance.getDuration = getDuration;
        /**
         * Iterate over each measure, performing some action
         *
         * @param cb The action to perform for each measure
         */
        function forEachMeasure(cb) {
            durations.forEach(function (duration, measureName) { return cb(measureName, duration); });
        }
        performance.forEachMeasure = forEachMeasure;
        /**
         * Indicates whether the performance API is enabled.
         */
        function isEnabled() {
            return enabled;
        }
        performance.isEnabled = isEnabled;
        /** Enables (and resets) performance measurements for the compiler. */
        function enable(system) {
            var _a;
            if (system === void 0) { system = ts.sys; }
            if (!enabled) {
                enabled = true;
                perfHooks || (perfHooks = ts.tryGetNativePerformanceHooks());
                if (perfHooks) {
                    timeorigin = perfHooks.performance.timeOrigin;
                    // NodeJS's Web Performance API is currently slower than expected, but we'd still like
                    // to be able to leverage native trace events when node is run with either `--cpu-prof`
                    // or `--prof`, if we're running with our own `--generateCpuProfile` flag, or when
                    // running in debug mode (since its possible to generate a cpu profile while debugging).
                    if (perfHooks.shouldWriteNativeEvents || ((_a = system === null || system === void 0 ? void 0 : system.cpuProfilingEnabled) === null || _a === void 0 ? void 0 : _a.call(system)) || (system === null || system === void 0 ? void 0 : system.debugMode)) {
                        performanceImpl = perfHooks.performance;
                    }
                }
            }
            return true;
        }
        performance.enable = enable;
        /** Disables performance measurements for the compiler. */
        function disable() {
            if (enabled) {
                marks.clear();
                counts.clear();
                durations.clear();
                performanceImpl = undefined;
                enabled = false;
            }
        }
        performance.disable = disable;
    })(performance = ts.performance || (ts.performance = {}));
})(ts || (ts = {}));
/* @internal */
var ts;
(function (ts) {
    var _a;
    var nullLogger = {
        logEvent: ts.noop,
        logErrEvent: ts.noop,
        logPerfEvent: ts.noop,
        logInfoEvent: ts.noop,
        logStartCommand: ts.noop,
        logStopCommand: ts.noop,
        logStartUpdateProgram: ts.noop,
        logStopUpdateProgram: ts.noop,
        logStartUpdateGraph: ts.noop,
        logStopUpdateGraph: ts.noop,
        logStartResolveModule: ts.noop,
        logStopResolveModule: ts.noop,
        logStartParseSourceFile: ts.noop,
        logStopParseSourceFile: ts.noop,
        logStartReadFile: ts.noop,
        logStopReadFile: ts.noop,
        logStartBindFile: ts.noop,
        logStopBindFile: ts.noop,
        logStartScheduledOperation: ts.noop,
        logStopScheduledOperation: ts.noop,
    };
    // Load optional module to enable Event Tracing for Windows
    // See https://github.com/microsoft/typescript-etw for more information
    var etwModule;
    try {
        var etwModulePath = (_a = process.env.TS_ETW_MODULE_PATH) !== null && _a !== void 0 ? _a : "./node_modules/@microsoft/typescript-etw";
        // require() will throw an exception if the module is not found
        // It may also return undefined if not installed properly
        etwModule = require(etwModulePath);
    }
    catch (e) {
        etwModule = undefined;
    }
    /** Performance logger that will generate ETW events if possible - check for `logEvent` member, as `etwModule` will be `{}` when browserified */
    ts.perfLogger = etwModule && etwModule.logEvent ? etwModule : nullLogger;
})(ts || (ts = {}));
/* Tracing events for the compiler. */
/*@internal*/
var ts;
(function (ts) {
    // enable the above using startTracing()
    // `tracingEnabled` should never be used directly, only through the above
    var tracingEnabled;
    (function (tracingEnabled) {
        var fs;
        var traceCount = 0;
        var traceFd = 0;
        var mode;
        var typeCatalog = []; // NB: id is index + 1
        var legendPath;
        var legend = [];
        ;
        /** Starts tracing for the given project. */
        function startTracing(tracingMode, traceDir, configFilePath) {
            ts.Debug.assert(!ts.tracing, "Tracing already started");
            if (fs === undefined) {
                try {
                    fs = require("fs");
                }
                catch (e) {
                    throw new Error("tracing requires having fs\n(original error: ".concat(e.message || e, ")"));
                }
            }
            mode = tracingMode;
            typeCatalog.length = 0;
            if (legendPath === undefined) {
                legendPath = ts.combinePaths(traceDir, "legend.json");
            }
            // Note that writing will fail later on if it exists and is not a directory
            if (!fs.existsSync(traceDir)) {
                fs.mkdirSync(traceDir, { recursive: true });
            }
            var countPart = mode === "build" ? ".".concat(process.pid, "-").concat(++traceCount)
                : mode === "server" ? ".".concat(process.pid)
                    : "";
            var tracePath = ts.combinePaths(traceDir, "trace".concat(countPart, ".json"));
            var typesPath = ts.combinePaths(traceDir, "types".concat(countPart, ".json"));
            legend.push({
                configFilePath: configFilePath,
                tracePath: tracePath,
                typesPath: typesPath,
            });
            traceFd = fs.openSync(tracePath, "w");
            ts.tracing = tracingEnabled; // only when traceFd is properly set
            // Start with a prefix that contains some metadata that the devtools profiler expects (also avoids a warning on import)
            var meta = { cat: "__metadata", ph: "M", ts: 1000 * ts.timestamp(), pid: 1, tid: 1 };
            fs.writeSync(traceFd, "[\n"
                + [__assign({ name: "process_name", args: { name: "tsc" } }, meta), __assign({ name: "thread_name", args: { name: "Main" } }, meta), __assign(__assign({ name: "TracingStartedInBrowser" }, meta), { cat: "disabled-by-default-devtools.timeline" })]
                    .map(function (v) { return JSON.stringify(v); }).join(",\n"));
        }
        tracingEnabled.startTracing = startTracing;
        /** Stops tracing for the in-progress project and dumps the type catalog. */
        function stopTracing() {
            ts.Debug.assert(ts.tracing, "Tracing is not in progress");
            ts.Debug.assert(!!typeCatalog.length === (mode !== "server")); // Have a type catalog iff not in server mode
            fs.writeSync(traceFd, "\n]\n");
            fs.closeSync(traceFd);
            ts.tracing = undefined;
            if (typeCatalog.length) {
                dumpTypes(typeCatalog);
            }
            else {
                // We pre-computed this path for convenience, but clear it
                // now that the file won't be created.
                legend[legend.length - 1].typesPath = undefined;
            }
        }
        tracingEnabled.stopTracing = stopTracing;
        function recordType(type) {
            if (mode !== "server") {
                typeCatalog.push(type);
            }
        }
        tracingEnabled.recordType = recordType;
        var Phase;
        (function (Phase) {
            Phase["Parse"] = "parse";
            Phase["Program"] = "program";
            Phase["Bind"] = "bind";
            Phase["Check"] = "check";
            Phase["CheckTypes"] = "checkTypes";
            Phase["Emit"] = "emit";
            Phase["Session"] = "session";
        })(Phase = tracingEnabled.Phase || (tracingEnabled.Phase = {}));
        function instant(phase, name, args) {
            writeEvent("I", phase, name, args, "\"s\":\"g\"");
        }
        tracingEnabled.instant = instant;
        var eventStack = [];
        /**
         * @param separateBeginAndEnd - used for special cases where we need the trace point even if the event
         * never terminates (typically for reducing a scenario too big to trace to one that can be completed).
         * In the future we might implement an exit handler to dump unfinished events which would deprecate
         * these operations.
         */
        function push(phase, name, args, separateBeginAndEnd) {
            if (separateBeginAndEnd === void 0) { separateBeginAndEnd = false; }
            if (separateBeginAndEnd) {
                writeEvent("B", phase, name, args);
            }
            eventStack.push({ phase: phase, name: name, args: args, time: 1000 * ts.timestamp(), separateBeginAndEnd: separateBeginAndEnd });
        }
        tracingEnabled.push = push;
        function pop(results) {
            ts.Debug.assert(eventStack.length > 0);
            writeStackEvent(eventStack.length - 1, 1000 * ts.timestamp(), results);
            eventStack.length--;
        }
        tracingEnabled.pop = pop;
        function popAll() {
            var endTime = 1000 * ts.timestamp();
            for (var i = eventStack.length - 1; i >= 0; i--) {
                writeStackEvent(i, endTime);
            }
            eventStack.length = 0;
        }
        tracingEnabled.popAll = popAll;
        // sample every 10ms
        var sampleInterval = 1000 * 10;
        function writeStackEvent(index, endTime, results) {
            var _a = eventStack[index], phase = _a.phase, name = _a.name, args = _a.args, time = _a.time, separateBeginAndEnd = _a.separateBeginAndEnd;
            if (separateBeginAndEnd) {
                ts.Debug.assert(!results, "`results` are not supported for events with `separateBeginAndEnd`");
                writeEvent("E", phase, name, args, /*extras*/ undefined, endTime);
            }
            // test if [time,endTime) straddles a sampling point
            else if (sampleInterval - (time % sampleInterval) <= endTime - time) {
                writeEvent("X", phase, name, __assign(__assign({}, args), { results: results }), "\"dur\":".concat(endTime - time), time);
            }
        }
        function writeEvent(eventType, phase, name, args, extras, time) {
            if (time === void 0) { time = 1000 * ts.timestamp(); }
            // In server mode, there's no easy way to dump type information, so we drop events that would require it.
            if (mode === "server" && phase === "checkTypes" /* Phase.CheckTypes */)
                return;
            ts.performance.mark("beginTracing");
            fs.writeSync(traceFd, ",\n{\"pid\":1,\"tid\":1,\"ph\":\"".concat(eventType, "\",\"cat\":\"").concat(phase, "\",\"ts\":").concat(time, ",\"name\":\"").concat(name, "\""));
            if (extras)
                fs.writeSync(traceFd, ",".concat(extras));
            if (args)
                fs.writeSync(traceFd, ",\"args\":".concat(JSON.stringify(args)));
            fs.writeSync(traceFd, "}");
            ts.performance.mark("endTracing");
            ts.performance.measure("Tracing", "beginTracing", "endTracing");
        }
        function getLocation(node) {
            var file = ts.getSourceFileOfNode(node);
            return !file
                ? undefined
                : {
                    path: file.path,
                    start: indexFromOne(ts.getLineAndCharacterOfPosition(file, node.pos)),
                    end: indexFromOne(ts.getLineAndCharacterOfPosition(file, node.end)),
                };
            function indexFromOne(lc) {
                return {
                    line: lc.line + 1,
                    character: lc.character + 1,
                };
            }
        }
        function dumpTypes(types) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
            ts.performance.mark("beginDumpTypes");
            var typesPath = legend[legend.length - 1].typesPath;
            var typesFd = fs.openSync(typesPath, "w");
            var recursionIdentityMap = new ts.Map();
            // Cleverness: no line break here so that the type ID will match the line number
            fs.writeSync(typesFd, "[");
            var numTypes = types.length;
            for (var i = 0; i < numTypes; i++) {
                var type = types[i];
                var objectFlags = type.objectFlags;
                var symbol = (_a = type.aliasSymbol) !== null && _a !== void 0 ? _a : type.symbol;
                // It's slow to compute the display text, so skip it unless it's really valuable (or cheap)
                var display = void 0;
                if ((objectFlags & 16 /* ObjectFlags.Anonymous */) | (type.flags & 2944 /* TypeFlags.Literal */)) {
                    try {
                        display = (_b = type.checker) === null || _b === void 0 ? void 0 : _b.typeToString(type);
                    }
                    catch (_y) {
                        display = undefined;
                    }
                }
                var indexedAccessProperties = {};
                if (type.flags & 8388608 /* TypeFlags.IndexedAccess */) {
                    var indexedAccessType = type;
                    indexedAccessProperties = {
                        indexedAccessObjectType: (_c = indexedAccessType.objectType) === null || _c === void 0 ? void 0 : _c.id,
                        indexedAccessIndexType: (_d = indexedAccessType.indexType) === null || _d === void 0 ? void 0 : _d.id,
                    };
                }
                var referenceProperties = {};
                if (objectFlags & 4 /* ObjectFlags.Reference */) {
                    var referenceType = type;
                    referenceProperties = {
                        instantiatedType: (_e = referenceType.target) === null || _e === void 0 ? void 0 : _e.id,
                        typeArguments: (_f = referenceType.resolvedTypeArguments) === null || _f === void 0 ? void 0 : _f.map(function (t) { return t.id; }),
                        referenceLocation: getLocation(referenceType.node),
                    };
                }
                var conditionalProperties = {};
                if (type.flags & 16777216 /* TypeFlags.Conditional */) {
                    var conditionalType = type;
                    conditionalProperties = {
                        conditionalCheckType: (_g = conditionalType.checkType) === null || _g === void 0 ? void 0 : _g.id,
                        conditionalExtendsType: (_h = conditionalType.extendsType) === null || _h === void 0 ? void 0 : _h.id,
                        conditionalTrueType: (_k = (_j = conditionalType.resolvedTrueType) === null || _j === void 0 ? void 0 : _j.id) !== null && _k !== void 0 ? _k : -1,
                        conditionalFalseType: (_m = (_l = conditionalType.resolvedFalseType) === null || _l === void 0 ? void 0 : _l.id) !== null && _m !== void 0 ? _m : -1,
                    };
                }
                var substitutionProperties = {};
                if (type.flags & 33554432 /* TypeFlags.Substitution */) {
                    var substitutionType = type;
                    substitutionProperties = {
                        substitutionBaseType: (_o = substitutionType.baseType) === null || _o === void 0 ? void 0 : _o.id,
                        substituteType: (_p = substitutionType.substitute) === null || _p === void 0 ? void 0 : _p.id,
                    };
                }
                var reverseMappedProperties = {};
                if (objectFlags & 1024 /* ObjectFlags.ReverseMapped */) {
                    var reverseMappedType = type;
                    reverseMappedProperties = {
                        reverseMappedSourceType: (_q = reverseMappedType.source) === null || _q === void 0 ? void 0 : _q.id,
                        reverseMappedMappedType: (_r = reverseMappedType.mappedType) === null || _r === void 0 ? void 0 : _r.id,
                        reverseMappedConstraintType: (_s = reverseMappedType.constraintType) === null || _s === void 0 ? void 0 : _s.id,
                    };
                }
                var evolvingArrayProperties = {};
                if (objectFlags & 256 /* ObjectFlags.EvolvingArray */) {
                    var evolvingArrayType = type;
                    evolvingArrayProperties = {
                        evolvingArrayElementType: evolvingArrayType.elementType.id,
                        evolvingArrayFinalType: (_t = evolvingArrayType.finalArrayType) === null || _t === void 0 ? void 0 : _t.id,
                    };
                }
                // We can't print out an arbitrary object, so just assign each one a unique number.
                // Don't call it an "id" so people don't treat it as a type id.
                var recursionToken = void 0;
                var recursionIdentity = type.checker.getRecursionIdentity(type);
                if (recursionIdentity) {
                    recursionToken = recursionIdentityMap.get(recursionIdentity);
                    if (!recursionToken) {
                        recursionToken = recursionIdentityMap.size;
                        recursionIdentityMap.set(recursionIdentity, recursionToken);
                    }
                }
                var descriptor = __assign(__assign(__assign(__assign(__assign(__assign(__assign({ id: type.id, intrinsicName: type.intrinsicName, symbolName: (symbol === null || symbol === void 0 ? void 0 : symbol.escapedName) && ts.unescapeLeadingUnderscores(symbol.escapedName), recursionId: recursionToken, isTuple: objectFlags & 8 /* ObjectFlags.Tuple */ ? true : undefined, unionTypes: (type.flags & 1048576 /* TypeFlags.Union */) ? (_u = type.types) === null || _u === void 0 ? void 0 : _u.map(function (t) { return t.id; }) : undefined, intersectionTypes: (type.flags & 2097152 /* TypeFlags.Intersection */) ? type.types.map(function (t) { return t.id; }) : undefined, aliasTypeArguments: (_v = type.aliasTypeArguments) === null || _v === void 0 ? void 0 : _v.map(function (t) { return t.id; }), keyofType: (type.flags & 4194304 /* TypeFlags.Index */) ? (_w = type.type) === null || _w === void 0 ? void 0 : _w.id : undefined }, indexedAccessProperties), referenceProperties), conditionalProperties), substitutionProperties), reverseMappedProperties), evolvingArrayProperties), { destructuringPattern: getLocation(type.pattern), firstDeclaration: getLocation((_x = symbol === null || symbol === void 0 ? void 0 : symbol.declarations) === null || _x === void 0 ? void 0 : _x[0]), flags: ts.Debug.formatTypeFlags(type.flags).split("|"), display: display });
                fs.writeSync(typesFd, JSON.stringify(descriptor));
                if (i < numTypes - 1) {
                    fs.writeSync(typesFd, ",\n");
                }
            }
            fs.writeSync(typesFd, "]\n");
            fs.closeSync(typesFd);
            ts.performance.mark("endDumpTypes");
            ts.performance.measure("Dump types", "beginDumpTypes", "endDumpTypes");
        }
        function dumpLegend() {
            if (!legendPath) {
                return;
            }
            fs.writeFileSync(legendPath, JSON.stringify(legend));
        }
        tracingEnabled.dumpLegend = dumpLegend;
    })(tracingEnabled || (tracingEnabled = {}));
    // define after tracingEnabled is initialized
    ts.startTracing = tracingEnabled.startTracing;
    ts.dumpTracingLegend = tracingEnabled.dumpLegend;
})(ts || (ts = {}));
var ts;
(function (ts) {
    // token > SyntaxKind.Identifier => token is a keyword
    // Also, If you add a new SyntaxKind be sure to keep the `Markers` section at the bottom in sync
    var SyntaxKind;
    (function (SyntaxKind) {
        SyntaxKind[SyntaxKind["Unknown"] = 0] = "Unknown";
        SyntaxKind[SyntaxKind["EndOfFileToken"] = 1] = "EndOfFileToken";
        SyntaxKind[SyntaxKind["SingleLineCommentTrivia"] = 2] = "SingleLineCommentTrivia";
        SyntaxKind[SyntaxKind["MultiLineCommentTrivia"] = 3] = "MultiLineCommentTrivia";
        SyntaxKind[SyntaxKind["NewLineTrivia"] = 4] = "NewLineTrivia";
        SyntaxKind[SyntaxKind["WhitespaceTrivia"] = 5] = "WhitespaceTrivia";
        // We detect and preserve #! on the first line
        SyntaxKind[SyntaxKind["ShebangTrivia"] = 6] = "ShebangTrivia";
        // We detect and provide better error recovery when we encounter a git merge marker.  This
        // allows us to edit files with git-conflict markers in them in a much more pleasant manner.
        SyntaxKind[SyntaxKind["ConflictMarkerTrivia"] = 7] = "ConflictMarkerTrivia";
        // Literals
        SyntaxKind[SyntaxKind["NumericLiteral"] = 8] = "NumericLiteral";
        SyntaxKind[SyntaxKind["BigIntLiteral"] = 9] = "BigIntLiteral";
        SyntaxKind[SyntaxKind["StringLiteral"] = 10] = "StringLiteral";
        SyntaxKind[SyntaxKind["JsxText"] = 11] = "JsxText";
        SyntaxKind[SyntaxKind["JsxTextAllWhiteSpaces"] = 12] = "JsxTextAllWhiteSpaces";
        SyntaxKind[SyntaxKind["RegularExpressionLiteral"] = 13] = "RegularExpressionLiteral";
        SyntaxKind[SyntaxKind["NoSubstitutionTemplateLiteral"] = 14] = "NoSubstitutionTemplateLiteral";
        // Pseudo-literals
        SyntaxKind[SyntaxKind["TemplateHead"] = 15] = "TemplateHead";
        SyntaxKind[SyntaxKind["TemplateMiddle"] = 16] = "TemplateMiddle";
        SyntaxKind[SyntaxKind["TemplateTail"] = 17] = "TemplateTail";
        // Punctuation
        SyntaxKind[SyntaxKind["OpenBraceToken"] = 18] = "OpenBraceToken";
        SyntaxKind[SyntaxKind["CloseBraceToken"] = 19] = "CloseBraceToken";
        SyntaxKind[SyntaxKind["OpenParenToken"] = 20] = "OpenParenToken";
        SyntaxKind[SyntaxKind["CloseParenToken"] = 21] = "CloseParenToken";
        SyntaxKind[SyntaxKind["OpenBracketToken"] = 22] = "OpenBracketToken";
        SyntaxKind[SyntaxKind["CloseBracketToken"] = 23] = "CloseBracketToken";
        SyntaxKind[SyntaxKind["DotToken"] = 24] = "DotToken";
        SyntaxKind[SyntaxKind["DotDotDotToken"] = 25] = "DotDotDotToken";
        SyntaxKind[SyntaxKind["SemicolonToken"] = 26] = "SemicolonToken";
        SyntaxKind[SyntaxKind["CommaToken"] = 27] = "CommaToken";
        SyntaxKind[SyntaxKind["QuestionDotToken"] = 28] = "QuestionDotToken";
        SyntaxKind[SyntaxKind["LessThanToken"] = 29] = "LessThanToken";
        SyntaxKind[SyntaxKind["LessThanSlashToken"] = 30] = "LessThanSlashToken";
        SyntaxKind[SyntaxKind["GreaterThanToken"] = 31] = "GreaterThanToken";
        SyntaxKind[SyntaxKind["LessThanEqualsToken"] = 32] = "LessThanEqualsToken";
        SyntaxKind[SyntaxKind["GreaterThanEqualsToken"] = 33] = "GreaterThanEqualsToken";
        SyntaxKind[SyntaxKind["EqualsEqualsToken"] = 34] = "EqualsEqualsToken";
        SyntaxKind[SyntaxKind["ExclamationEqualsToken"] = 35] = "ExclamationEqualsToken";
        SyntaxKind[SyntaxKind["EqualsEqualsEqualsToken"] = 36] = "EqualsEqualsEqualsToken";
        SyntaxKind[SyntaxKind["ExclamationEqualsEqualsToken"] = 37] = "ExclamationEqualsEqualsToken";
        SyntaxKind[SyntaxKind["EqualsGreaterThanToken"] = 38] = "EqualsGreaterThanToken";
        SyntaxKind[SyntaxKind["PlusToken"] = 39] = "PlusToken";
        SyntaxKind[SyntaxKind["MinusToken"] = 40] = "MinusToken";
        SyntaxKind[SyntaxKind["AsteriskToken"] = 41] = "AsteriskToken";
        SyntaxKind[SyntaxKind["AsteriskAsteriskToken"] = 42] = "AsteriskAsteriskToken";
        SyntaxKind[SyntaxKind["SlashToken"] = 43] = "SlashToken";
        SyntaxKind[SyntaxKind["PercentToken"] = 44] = "PercentToken";
        SyntaxKind[SyntaxKind["PlusPlusToken"] = 45] = "PlusPlusToken";
        SyntaxKind[SyntaxKind["MinusMinusToken"] = 46] = "MinusMinusToken";
        SyntaxKind[SyntaxKind["LessThanLessThanToken"] = 47] = "LessThanLessThanToken";
        SyntaxKind[SyntaxKind["GreaterThanGreaterThanToken"] = 48] = "GreaterThanGreaterThanToken";
        SyntaxKind[SyntaxKind["GreaterThanGreaterThanGreaterThanToken"] = 49] = "GreaterThanGreaterThanGreaterThanToken";
        SyntaxKind[SyntaxKind["AmpersandToken"] = 50] = "AmpersandToken";
        SyntaxKind[SyntaxKind["BarToken"] = 51] = "BarToken";
        SyntaxKind[SyntaxKind["CaretToken"] = 52] = "CaretToken";
        SyntaxKind[SyntaxKind["ExclamationToken"] = 53] = "ExclamationToken";
        SyntaxKind[SyntaxKind["TildeToken"] = 54] = "TildeToken";
        SyntaxKind[SyntaxKind["AmpersandAmpersandToken"] = 55] = "AmpersandAmpersandToken";
        SyntaxKind[SyntaxKind["BarBarToken"] = 56] = "BarBarToken";
        SyntaxKind[SyntaxKind["QuestionToken"] = 57] = "QuestionToken";
        SyntaxKind[SyntaxKind["ColonToken"] = 58] = "ColonToken";
        SyntaxKind[SyntaxKind["AtToken"] = 59] = "AtToken";
        SyntaxKind[SyntaxKind["QuestionQuestionToken"] = 60] = "QuestionQuestionToken";
        /** Only the JSDoc scanner produces BacktickToken. The normal scanner produces NoSubstitutionTemplateLiteral and related kinds. */
        SyntaxKind[SyntaxKind["BacktickToken"] = 61] = "BacktickToken";
        /** Only the JSDoc scanner produces HashToken. The normal scanner produces PrivateIdentifier. */
        SyntaxKind[SyntaxKind["HashToken"] = 62] = "HashToken";
        // Assignments
        SyntaxKind[SyntaxKind["EqualsToken"] = 63] = "EqualsToken";
        SyntaxKind[SyntaxKind["PlusEqualsToken"] = 64] = "PlusEqualsToken";
        SyntaxKind[SyntaxKind["MinusEqualsToken"] = 65] = "MinusEqualsToken";
        SyntaxKind[SyntaxKind["AsteriskEqualsToken"] = 66] = "AsteriskEqualsToken";
        SyntaxKind[SyntaxKind["AsteriskAsteriskEqualsToken"] = 67] = "AsteriskAsteriskEqualsToken";
        SyntaxKind[SyntaxKind["SlashEqualsToken"] = 68] = "SlashEqualsToken";
        SyntaxKind[SyntaxKind["PercentEqualsToken"] = 69] = "PercentEqualsToken";
        SyntaxKind[SyntaxKind["LessThanLessThanEqualsToken"] = 70] = "LessThanLessThanEqualsToken";
        SyntaxKind[SyntaxKind["GreaterThanGreaterThanEqualsToken"] = 71] = "GreaterThanGreaterThanEqualsToken";
        SyntaxKind[SyntaxKind["GreaterThanGreaterThanGreaterThanEqualsToken"] = 72] = "GreaterThanGreaterThanGreaterThanEqualsToken";
        SyntaxKind[SyntaxKind["AmpersandEqualsToken"] = 73] = "AmpersandEqualsToken";
        SyntaxKind[SyntaxKind["BarEqualsToken"] = 74] = "BarEqualsToken";
        SyntaxKind[SyntaxKind["BarBarEqualsToken"] = 75] = "BarBarEqualsToken";
        SyntaxKind[SyntaxKind["AmpersandAmpersandEqualsToken"] = 76] = "AmpersandAmpersandEqualsToken";
        SyntaxKind[SyntaxKind["QuestionQuestionEqualsToken"] = 77] = "QuestionQuestionEqualsToken";
        SyntaxKind[SyntaxKind["CaretEqualsToken"] = 78] = "CaretEqualsToken";
        // Identifiers and PrivateIdentifiers
        SyntaxKind[SyntaxKind["Identifier"] = 79] = "Identifier";
        SyntaxKind[SyntaxKind["PrivateIdentifier"] = 80] = "PrivateIdentifier";
        // Reserved words
        SyntaxKind[SyntaxKind["BreakKeyword"] = 81] = "BreakKeyword";
        SyntaxKind[SyntaxKind["CaseKeyword"] = 82] = "CaseKeyword";
        SyntaxKind[SyntaxKind["CatchKeyword"] = 83] = "CatchKeyword";
        SyntaxKind[SyntaxKind["ClassKeyword"] = 84] = "ClassKeyword";
        SyntaxKind[SyntaxKind["ConstKeyword"] = 85] = "ConstKeyword";
        SyntaxKind[SyntaxKind["ContinueKeyword"] = 86] = "ContinueKeyword";
        SyntaxKind[SyntaxKind["DebuggerKeyword"] = 87] = "DebuggerKeyword";
        SyntaxKind[SyntaxKind["DefaultKeyword"] = 88] = "DefaultKeyword";
        SyntaxKind[SyntaxKind["DeleteKeyword"] = 89] = "DeleteKeyword";
        SyntaxKind[SyntaxKind["DoKeyword"] = 90] = "DoKeyword";
        SyntaxKind[SyntaxKind["ElseKeyword"] = 91] = "ElseKeyword";
        SyntaxKind[SyntaxKind["EnumKeyword"] = 92] = "EnumKeyword";
        SyntaxKind[SyntaxKind["ExportKeyword"] = 93] = "ExportKeyword";
        SyntaxKind[SyntaxKind["ExtendsKeyword"] = 94] = "ExtendsKeyword";
        SyntaxKind[SyntaxKind["FalseKeyword"] = 95] = "FalseKeyword";
        SyntaxKind[SyntaxKind["FinallyKeyword"] = 96] = "FinallyKeyword";
        SyntaxKind[SyntaxKind["ForKeyword"] = 97] = "ForKeyword";
        SyntaxKind[SyntaxKind["FunctionKeyword"] = 98] = "FunctionKeyword";
        SyntaxKind[SyntaxKind["IfKeyword"] = 99] = "IfKeyword";
        SyntaxKind[SyntaxKind["ImportKeyword"] = 100] = "ImportKeyword";
        SyntaxKind[SyntaxKind["InKeyword"] = 101] = "InKeyword";
        SyntaxKind[SyntaxKind["InstanceOfKeyword"] = 102] = "InstanceOfKeyword";
        SyntaxKind[SyntaxKind["NewKeyword"] = 103] = "NewKeyword";
        SyntaxKind[SyntaxKind["NullKeyword"] = 104] = "NullKeyword";
        SyntaxKind[SyntaxKind["ReturnKeyword"] = 105] = "ReturnKeyword";
        SyntaxKind[SyntaxKind["SuperKeyword"] = 106] = "SuperKeyword";
        SyntaxKind[SyntaxKind["SwitchKeyword"] = 107] = "SwitchKeyword";
        SyntaxKind[SyntaxKind["ThisKeyword"] = 108] = "ThisKeyword";
        SyntaxKind[SyntaxKind["ThrowKeyword"] = 109] = "ThrowKeyword";
        SyntaxKind[SyntaxKind["TrueKeyword"] = 110] = "TrueKeyword";
        SyntaxKind[SyntaxKind["TryKeyword"] = 111] = "TryKeyword";
        SyntaxKind[SyntaxKind["TypeOfKeyword"] = 112] = "TypeOfKeyword";
        SyntaxKind[SyntaxKind["VarKeyword"] = 113] = "VarKeyword";
        SyntaxKind[SyntaxKind["VoidKeyword"] = 114] = "VoidKeyword";
        SyntaxKind[SyntaxKind["WhileKeyword"] = 115] = "WhileKeyword";
        SyntaxKind[SyntaxKind["WithKeyword"] = 116] = "WithKeyword";
        // Strict mode reserved words
        SyntaxKind[SyntaxKind["ImplementsKeyword"] = 117] = "ImplementsKeyword";
        SyntaxKind[SyntaxKind["InterfaceKeyword"] = 118] = "InterfaceKeyword";
        SyntaxKind[SyntaxKind["LetKeyword"] = 119] = "LetKeyword";
        SyntaxKind[SyntaxKind["PackageKeyword"] = 120] = "PackageKeyword";
        SyntaxKind[SyntaxKind["PrivateKeyword"] = 121] = "PrivateKeyword";
        SyntaxKind[SyntaxKind["ProtectedKeyword"] = 122] = "ProtectedKeyword";
        SyntaxKind[SyntaxKind["PublicKeyword"] = 123] = "PublicKeyword";
        SyntaxKind[SyntaxKind["StaticKeyword"] = 124] = "StaticKeyword";
        SyntaxKind[SyntaxKind["YieldKeyword"] = 125] = "YieldKeyword";
        // Contextual keywords
        SyntaxKind[SyntaxKind["AbstractKeyword"] = 126] = "AbstractKeyword";
        SyntaxKind[SyntaxKind["AsKeyword"] = 127] = "AsKeyword";
        SyntaxKind[SyntaxKind["AssertsKeyword"] = 128] = "AssertsKeyword";
        SyntaxKind[SyntaxKind["AssertKeyword"] = 129] = "AssertKeyword";
        SyntaxKind[SyntaxKind["AnyKeyword"] = 130] = "AnyKeyword";
        SyntaxKind[SyntaxKind["AsyncKeyword"] = 131] = "AsyncKeyword";
        SyntaxKind[SyntaxKind["AwaitKeyword"] = 132] = "AwaitKeyword";
        SyntaxKind[SyntaxKind["BooleanKeyword"] = 133] = "BooleanKeyword";
        SyntaxKind[SyntaxKind["ConstructorKeyword"] = 134] = "ConstructorKeyword";
        SyntaxKind[SyntaxKind["DeclareKeyword"] = 135] = "DeclareKeyword";
        SyntaxKind[SyntaxKind["GetKeyword"] = 136] = "GetKeyword";
        SyntaxKind[SyntaxKind["InferKeyword"] = 137] = "InferKeyword";
        SyntaxKind[SyntaxKind["IntrinsicKeyword"] = 138] = "IntrinsicKeyword";
        SyntaxKind[SyntaxKind["IsKeyword"] = 139] = "IsKeyword";
        SyntaxKind[SyntaxKind["KeyOfKeyword"] = 140] = "KeyOfKeyword";
        SyntaxKind[SyntaxKind["ModuleKeyword"] = 141] = "ModuleKeyword";
        SyntaxKind[SyntaxKind["NamespaceKeyword"] = 142] = "NamespaceKeyword";
        SyntaxKind[SyntaxKind["NeverKeyword"] = 143] = "NeverKeyword";
        SyntaxKind[SyntaxKind["OutKeyword"] = 144] = "OutKeyword";
        SyntaxKind[SyntaxKind["ReadonlyKeyword"] = 145] = "ReadonlyKeyword";
        SyntaxKind[SyntaxKind["RequireKeyword"] = 146] = "RequireKeyword";
        SyntaxKind[SyntaxKind["NumberKeyword"] = 147] = "NumberKeyword";
        SyntaxKind[SyntaxKind["ObjectKeyword"] = 148] = "ObjectKeyword";
        SyntaxKind[SyntaxKind["SetKeyword"] = 149] = "SetKeyword";
        SyntaxKind[SyntaxKind["StringKeyword"] = 150] = "StringKeyword";
        SyntaxKind[SyntaxKind["SymbolKeyword"] = 151] = "SymbolKeyword";
        SyntaxKind[SyntaxKind["TypeKeyword"] = 152] = "TypeKeyword";
        SyntaxKind[SyntaxKind["UndefinedKeyword"] = 153] = "UndefinedKeyword";
        SyntaxKind[SyntaxKind["UniqueKeyword"] = 154] = "UniqueKeyword";
        SyntaxKind[SyntaxKind["UnknownKeyword"] = 155] = "UnknownKeyword";
        SyntaxKind[SyntaxKind["FromKeyword"] = 156] = "FromKeyword";
        SyntaxKind[SyntaxKind["GlobalKeyword"] = 157] = "GlobalKeyword";
        SyntaxKind[SyntaxKind["BigIntKeyword"] = 158] = "BigIntKeyword";
        SyntaxKind[SyntaxKind["OverrideKeyword"] = 159] = "OverrideKeyword";
        SyntaxKind[SyntaxKind["OfKeyword"] = 160] = "OfKeyword";
        // Parse tree nodes
        // Names
        SyntaxKind[SyntaxKind["QualifiedName"] = 161] = "QualifiedName";
        SyntaxKind[SyntaxKind["ComputedPropertyName"] = 162] = "ComputedPropertyName";
        // Signature elements
        SyntaxKind[SyntaxKind["TypeParameter"] = 163] = "TypeParameter";
        SyntaxKind[SyntaxKind["Parameter"] = 164] = "Parameter";
        SyntaxKind[SyntaxKind["Decorator"] = 165] = "Decorator";
        // TypeMember
        SyntaxKind[SyntaxKind["PropertySignature"] = 166] = "PropertySignature";
        SyntaxKind[SyntaxKind["PropertyDeclaration"] = 167] = "PropertyDeclaration";
        SyntaxKind[SyntaxKind["MethodSignature"] = 168] = "MethodSignature";
        SyntaxKind[SyntaxKind["MethodDeclaration"] = 169] = "MethodDeclaration";
        SyntaxKind[SyntaxKind["ClassStaticBlockDeclaration"] = 170] = "ClassStaticBlockDeclaration";
        SyntaxKind[SyntaxKind["Constructor"] = 171] = "Constructor";
        SyntaxKind[SyntaxKind["GetAccessor"] = 172] = "GetAccessor";
        SyntaxKind[SyntaxKind["SetAccessor"] = 173] = "SetAccessor";
        SyntaxKind[SyntaxKind["CallSignature"] = 174] = "CallSignature";
        SyntaxKind[SyntaxKind["ConstructSignature"] = 175] = "ConstructSignature";
        SyntaxKind[SyntaxKind["IndexSignature"] = 176] = "IndexSignature";
        // Type
        SyntaxKind[SyntaxKind["TypePredicate"] = 177] = "TypePredicate";
        SyntaxKind[SyntaxKind["TypeReference"] = 178] = "TypeReference";
        SyntaxKind[SyntaxKind["FunctionType"] = 179] = "FunctionType";
        SyntaxKind[SyntaxKind["ConstructorType"] = 180] = "ConstructorType";
        SyntaxKind[SyntaxKind["TypeQuery"] = 181] = "TypeQuery";
        SyntaxKind[SyntaxKind["TypeLiteral"] = 182] = "TypeLiteral";
        SyntaxKind[SyntaxKind["ArrayType"] = 183] = "ArrayType";
        SyntaxKind[SyntaxKind["TupleType"] = 184] = "TupleType";
        SyntaxKind[SyntaxKind["OptionalType"] = 185] = "OptionalType";
        SyntaxKind[SyntaxKind["RestType"] = 186] = "RestType";
        SyntaxKind[SyntaxKind["UnionType"] = 187] = "UnionType";
        SyntaxKind[SyntaxKind["IntersectionType"] = 188] = "IntersectionType";
        SyntaxKind[SyntaxKind["ConditionalType"] = 189] = "ConditionalType";
        SyntaxKind[SyntaxKind["InferType"] = 190] = "InferType";
        SyntaxKind[SyntaxKind["ParenthesizedType"] = 191] = "ParenthesizedType";
        SyntaxKind[SyntaxKind["ThisType"] = 192] = "ThisType";
        SyntaxKind[SyntaxKind["TypeOperator"] = 193] = "TypeOperator";
        SyntaxKind[SyntaxKind["IndexedAccessType"] = 194] = "IndexedAccessType";
        SyntaxKind[SyntaxKind["MappedType"] = 195] = "MappedType";
        SyntaxKind[SyntaxKind["LiteralType"] = 196] = "LiteralType";
        SyntaxKind[SyntaxKind["NamedTupleMember"] = 197] = "NamedTupleMember";
        SyntaxKind[SyntaxKind["TemplateLiteralType"] = 198] = "TemplateLiteralType";
        SyntaxKind[SyntaxKind["TemplateLiteralTypeSpan"] = 199] = "TemplateLiteralTypeSpan";
        SyntaxKind[SyntaxKind["ImportType"] = 200] = "ImportType";
        // Binding patterns
        SyntaxKind[SyntaxKind["ObjectBindingPattern"] = 201] = "ObjectBindingPattern";
        SyntaxKind[SyntaxKind["ArrayBindingPattern"] = 202] = "ArrayBindingPattern";
        SyntaxKind[SyntaxKind["BindingElement"] = 203] = "BindingElement";
        // Expression
        SyntaxKind[SyntaxKind["ArrayLiteralExpression"] = 204] = "ArrayLiteralExpression";
        SyntaxKind[SyntaxKind["ObjectLiteralExpression"] = 205] = "ObjectLiteralExpression";
        SyntaxKind[SyntaxKind["PropertyAccessExpression"] = 206] = "PropertyAccessExpression";
        SyntaxKind[SyntaxKind["ElementAccessExpression"] = 207] = "ElementAccessExpression";
        SyntaxKind[SyntaxKind["CallExpression"] = 208] = "CallExpression";
        SyntaxKind[SyntaxKind["NewExpression"] = 209] = "NewExpression";
        SyntaxKind[SyntaxKind["TaggedTemplateExpression"] = 210] = "TaggedTemplateExpression";
        SyntaxKind[SyntaxKind["TypeAssertionExpression"] = 211] = "TypeAssertionExpression";
        SyntaxKind[SyntaxKind["ParenthesizedExpression"] = 212] = "ParenthesizedExpression";
        SyntaxKind[SyntaxKind["FunctionExpression"] = 213] = "FunctionExpression";
        SyntaxKind[SyntaxKind["ArrowFunction"] = 214] = "ArrowFunction";
        SyntaxKind[SyntaxKind["DeleteExpression"] = 215] = "DeleteExpression";
        SyntaxKind[SyntaxKind["TypeOfExpression"] = 216] = "TypeOfExpression";
        SyntaxKind[SyntaxKind["VoidExpression"] = 217] = "VoidExpression";
        SyntaxKind[SyntaxKind["AwaitExpression"] = 218] = "AwaitExpression";
        SyntaxKind[SyntaxKind["PrefixUnaryExpression"] = 219] = "PrefixUnaryExpression";
        SyntaxKind[SyntaxKind["PostfixUnaryExpression"] = 220] = "PostfixUnaryExpression";
        SyntaxKind[SyntaxKind["BinaryExpression"] = 221] = "BinaryExpression";
        SyntaxKind[SyntaxKind["ConditionalExpression"] = 222] = "ConditionalExpression";
        SyntaxKind[SyntaxKind["TemplateExpression"] = 223] = "TemplateExpression";
        SyntaxKind[SyntaxKind["YieldExpression"] = 224] = "YieldExpression";
        SyntaxKind[SyntaxKind["SpreadElement"] = 225] = "SpreadElement";
        SyntaxKind[SyntaxKind["ClassExpression"] = 226] = "ClassExpression";
        SyntaxKind[SyntaxKind["OmittedExpression"] = 227] = "OmittedExpression";
        SyntaxKind[SyntaxKind["ExpressionWithTypeArguments"] = 228] = "ExpressionWithTypeArguments";
        SyntaxKind[SyntaxKind["AsExpression"] = 229] = "AsExpression";
        SyntaxKind[SyntaxKind["NonNullExpression"] = 230] = "NonNullExpression";
        SyntaxKind[SyntaxKind["MetaProperty"] = 231] = "MetaProperty";
        SyntaxKind[SyntaxKind["SyntheticExpression"] = 232] = "SyntheticExpression";
        // Misc
        SyntaxKind[SyntaxKind["TemplateSpan"] = 233] = "TemplateSpan";
        SyntaxKind[SyntaxKind["SemicolonClassElement"] = 234] = "SemicolonClassElement";
        // Element
        SyntaxKind[SyntaxKind["Block"] = 235] = "Block";
        SyntaxKind[SyntaxKind["EmptyStatement"] = 236] = "EmptyStatement";
        SyntaxKind[SyntaxKind["VariableStatement"] = 237] = "VariableStatement";
        SyntaxKind[SyntaxKind["ExpressionStatement"] = 238] = "ExpressionStatement";
        SyntaxKind[SyntaxKind["IfStatement"] = 239] = "IfStatement";
        SyntaxKind[SyntaxKind["DoStatement"] = 240] = "DoStatement";
        SyntaxKind[SyntaxKind["WhileStatement"] = 241] = "WhileStatement";
        SyntaxKind[SyntaxKind["ForStatement"] = 242] = "ForStatement";
        SyntaxKind[SyntaxKind["ForInStatement"] = 243] = "ForInStatement";
        SyntaxKind[SyntaxKind["ForOfStatement"] = 244] = "ForOfStatement";
        SyntaxKind[SyntaxKind["ContinueStatement"] = 245] = "ContinueStatement";
        SyntaxKind[SyntaxKind["BreakStatement"] = 246] = "BreakStatement";
        SyntaxKind[SyntaxKind["ReturnStatement"] = 247] = "ReturnStatement";
        SyntaxKind[SyntaxKind["WithStatement"] = 248] = "WithStatement";
        SyntaxKind[SyntaxKind["SwitchStatement"] = 249] = "SwitchStatement";
        SyntaxKind[SyntaxKind["LabeledStatement"] = 250] = "LabeledStatement";
        SyntaxKind[SyntaxKind["ThrowStatement"] = 251] = "ThrowStatement";
        SyntaxKind[SyntaxKind["TryStatement"] = 252] = "TryStatement";
        SyntaxKind[SyntaxKind["DebuggerStatement"] = 253] = "DebuggerStatement";
        SyntaxKind[SyntaxKind["VariableDeclaration"] = 254] = "VariableDeclaration";
        SyntaxKind[SyntaxKind["VariableDeclarationList"] = 255] = "VariableDeclarationList";
        SyntaxKind[SyntaxKind["FunctionDeclaration"] = 256] = "FunctionDeclaration";
        SyntaxKind[SyntaxKind["ClassDeclaration"] = 257] = "ClassDeclaration";
        SyntaxKind[SyntaxKind["InterfaceDeclaration"] = 258] = "InterfaceDeclaration";
        SyntaxKind[SyntaxKind["TypeAliasDeclaration"] = 259] = "TypeAliasDeclaration";
        SyntaxKind[SyntaxKind["EnumDeclaration"] = 260] = "EnumDeclaration";
        SyntaxKind[SyntaxKind["ModuleDeclaration"] = 261] = "ModuleDeclaration";
        SyntaxKind[SyntaxKind["ModuleBlock"] = 262] = "ModuleBlock";
        SyntaxKind[SyntaxKind["CaseBlock"] = 263] = "CaseBlock";
        SyntaxKind[SyntaxKind["NamespaceExportDeclaration"] = 264] = "NamespaceExportDeclaration";
        SyntaxKind[SyntaxKind["ImportEqualsDeclaration"] = 265] = "ImportEqualsDeclaration";
        SyntaxKind[SyntaxKind["ImportDeclaration"] = 266] = "ImportDeclaration";
        SyntaxKind[SyntaxKind["ImportClause"] = 267] = "ImportClause";
        SyntaxKind[SyntaxKind["NamespaceImport"] = 268] = "NamespaceImport";
        SyntaxKind[SyntaxKind["NamedImports"] = 269] = "NamedImports";
        SyntaxKind[SyntaxKind["ImportSpecifier"] = 270] = "ImportSpecifier";
        SyntaxKind[SyntaxKind["ExportAssignment"] = 271] = "ExportAssignment";
        SyntaxKind[SyntaxKind["ExportDeclaration"] = 272] = "ExportDeclaration";
        SyntaxKind[SyntaxKind["NamedExports"] = 273] = "NamedExports";
        SyntaxKind[SyntaxKind["NamespaceExport"] = 274] = "NamespaceExport";
        SyntaxKind[SyntaxKind["ExportSpecifier"] = 275] = "ExportSpecifier";
        SyntaxKind[SyntaxKind["MissingDeclaration"] = 276] = "MissingDeclaration";
        // Module references
        SyntaxKind[SyntaxKind["ExternalModuleReference"] = 277] = "ExternalModuleReference";
        // JSX
        SyntaxKind[SyntaxKind["JsxElement"] = 278] = "JsxElement";
        SyntaxKind[SyntaxKind["JsxSelfClosingElement"] = 279] = "JsxSelfClosingElement";
        SyntaxKind[SyntaxKind["JsxOpeningElement"] = 280] = "JsxOpeningElement";
        SyntaxKind[SyntaxKind["JsxClosingElement"] = 281] = "JsxClosingElement";
        SyntaxKind[SyntaxKind["JsxFragment"] = 282] = "JsxFragment";
        SyntaxKind[SyntaxKind["JsxOpeningFragment"] = 283] = "JsxOpeningFragment";
        SyntaxKind[SyntaxKind["JsxClosingFragment"] = 284] = "JsxClosingFragment";
        SyntaxKind[SyntaxKind["JsxAttribute"] = 285] = "JsxAttribute";
        SyntaxKind[SyntaxKind["JsxAttributes"] = 286] = "JsxAttributes";
        SyntaxKind[SyntaxKind["JsxSpreadAttribute"] = 287] = "JsxSpreadAttribute";
        SyntaxKind[SyntaxKind["JsxExpression"] = 288] = "JsxExpression";
        // Clauses
        SyntaxKind[SyntaxKind["CaseClause"] = 289] = "CaseClause";
        SyntaxKind[SyntaxKind["DefaultClause"] = 290] = "DefaultClause";
        SyntaxKind[SyntaxKind["HeritageClause"] = 291] = "HeritageClause";
        SyntaxKind[SyntaxKind["CatchClause"] = 292] = "CatchClause";
        SyntaxKind[SyntaxKind["AssertClause"] = 293] = "AssertClause";
        SyntaxKind[SyntaxKind["AssertEntry"] = 294] = "AssertEntry";
        SyntaxKind[SyntaxKind["ImportTypeAssertionContainer"] = 295] = "ImportTypeAssertionContainer";
        // Property assignments
        SyntaxKind[SyntaxKind["PropertyAssignment"] = 296] = "PropertyAssignment";
        SyntaxKind[SyntaxKind["ShorthandPropertyAssignment"] = 297] = "ShorthandPropertyAssignment";
        SyntaxKind[SyntaxKind["SpreadAssignment"] = 298] = "SpreadAssignment";
        // Enum
        SyntaxKind[SyntaxKind["EnumMember"] = 299] = "EnumMember";
        // Unparsed
        SyntaxKind[SyntaxKind["UnparsedPrologue"] = 300] = "UnparsedPrologue";
        SyntaxKind[SyntaxKind["UnparsedPrepend"] = 301] = "UnparsedPrepend";
        SyntaxKind[SyntaxKind["UnparsedText"] = 302] = "UnparsedText";
        SyntaxKind[SyntaxKind["UnparsedInternalText"] = 303] = "UnparsedInternalText";
        SyntaxKind[SyntaxKind["UnparsedSyntheticReference"] = 304] = "UnparsedSyntheticReference";
        // Top-level nodes
        SyntaxKind[SyntaxKind["SourceFile"] = 305] = "SourceFile";
        SyntaxKind[SyntaxKind["Bundle"] = 306] = "Bundle";
        SyntaxKind[SyntaxKind["UnparsedSource"] = 307] = "UnparsedSource";
        SyntaxKind[SyntaxKind["InputFiles"] = 308] = "InputFiles";
        // JSDoc nodes
        SyntaxKind[SyntaxKind["JSDocTypeExpression"] = 309] = "JSDocTypeExpression";
        SyntaxKind[SyntaxKind["JSDocNameReference"] = 310] = "JSDocNameReference";
        SyntaxKind[SyntaxKind["JSDocMemberName"] = 311] = "JSDocMemberName";
        SyntaxKind[SyntaxKind["JSDocAllType"] = 312] = "JSDocAllType";
        SyntaxKind[SyntaxKind["JSDocUnknownType"] = 313] = "JSDocUnknownType";
        SyntaxKind[SyntaxKind["JSDocNullableType"] = 314] = "JSDocNullableType";
        SyntaxKind[SyntaxKind["JSDocNonNullableType"] = 315] = "JSDocNonNullableType";
        SyntaxKind[SyntaxKind["JSDocOptionalType"] = 316] = "JSDocOptionalType";
        SyntaxKind[SyntaxKind["JSDocFunctionType"] = 317] = "JSDocFunctionType";
        SyntaxKind[SyntaxKind["JSDocVariadicType"] = 318] = "JSDocVariadicType";
        SyntaxKind[SyntaxKind["JSDocNamepathType"] = 319] = "JSDocNamepathType";
        SyntaxKind[SyntaxKind["JSDoc"] = 320] = "JSDoc";
        /** @deprecated Use SyntaxKind.JSDoc */
        SyntaxKind[SyntaxKind["JSDocComment"] = 320] = "JSDocComment";
        SyntaxKind[SyntaxKind["JSDocText"] = 321] = "JSDocText";
        SyntaxKind[SyntaxKind["JSDocTypeLiteral"] = 322] = "JSDocTypeLiteral";
        SyntaxKind[SyntaxKind["JSDocSignature"] = 323] = "JSDocSignature";
        SyntaxKind[SyntaxKind["JSDocLink"] = 324] = "JSDocLink";
        SyntaxKind[SyntaxKind["JSDocLinkCode"] = 325] = "JSDocLinkCode";
        SyntaxKind[SyntaxKind["JSDocLinkPlain"] = 326] = "JSDocLinkPlain";
        SyntaxKind[SyntaxKind["JSDocTag"] = 327] = "JSDocTag";
        SyntaxKind[SyntaxKind["JSDocAugmentsTag"] = 328] = "JSDocAugmentsTag";
        SyntaxKind[SyntaxKind["JSDocImplementsTag"] = 329] = "JSDocImplementsTag";
        SyntaxKind[SyntaxKind["JSDocAuthorTag"] = 330] = "JSDocAuthorTag";
        SyntaxKind[SyntaxKind["JSDocDeprecatedTag"] = 331] = "JSDocDeprecatedTag";
        SyntaxKind[SyntaxKind["JSDocClassTag"] = 332] = "JSDocClassTag";
        SyntaxKind[SyntaxKind["JSDocPublicTag"] = 333] = "JSDocPublicTag";
        SyntaxKind[SyntaxKind["JSDocPrivateTag"] = 334] = "JSDocPrivateTag";
        SyntaxKind[SyntaxKind["JSDocProtectedTag"] = 335] = "JSDocProtectedTag";
        SyntaxKind[SyntaxKind["JSDocReadonlyTag"] = 336] = "JSDocReadonlyTag";
        SyntaxKind[SyntaxKind["JSDocOverrideTag"] = 337] = "JSDocOverrideTag";
        SyntaxKind[SyntaxKind["JSDocCallbackTag"] = 338] = "JSDocCallbackTag";
        SyntaxKind[SyntaxKind["JSDocEnumTag"] = 339] = "JSDocEnumTag";
        SyntaxKind[SyntaxKind["JSDocParameterTag"] = 340] = "JSDocParameterTag";
        SyntaxKind[SyntaxKind["JSDocReturnTag"] = 341] = "JSDocReturnTag";
        SyntaxKind[SyntaxKind["JSDocThisTag"] = 342] = "JSDocThisTag";
        SyntaxKind[SyntaxKind["JSDocTypeTag"] = 343] = "JSDocTypeTag";
        SyntaxKind[SyntaxKind["JSDocTemplateTag"] = 344] = "JSDocTemplateTag";
        SyntaxKind[SyntaxKind["JSDocTypedefTag"] = 345] = "JSDocTypedefTag";
        SyntaxKind[SyntaxKind["JSDocSeeTag"] = 346] = "JSDocSeeTag";
        SyntaxKind[SyntaxKind["JSDocPropertyTag"] = 347] = "JSDocPropertyTag";
        // Synthesized list
        SyntaxKind[SyntaxKind["SyntaxList"] = 348] = "SyntaxList";
        // Transformation nodes
        SyntaxKind[SyntaxKind["NotEmittedStatement"] = 349] = "NotEmittedStatement";
        SyntaxKind[SyntaxKind["PartiallyEmittedExpression"] = 350] = "PartiallyEmittedExpression";
        SyntaxKind[SyntaxKind["CommaListExpression"] = 351] = "CommaListExpression";
        SyntaxKind[SyntaxKind["MergeDeclarationMarker"] = 352] = "MergeDeclarationMarker";
        SyntaxKind[SyntaxKind["EndOfDeclarationMarker"] = 353] = "EndOfDeclarationMarker";
        SyntaxKind[SyntaxKind["SyntheticReferenceExpression"] = 354] = "SyntheticReferenceExpression";
        // Enum value count
        SyntaxKind[SyntaxKind["Count"] = 355] = "Count";
        // Markers
        SyntaxKind[SyntaxKind["FirstAssignment"] = 63] = "FirstAssignment";
        SyntaxKind[SyntaxKind["LastAssignment"] = 78] = "LastAssignment";
        SyntaxKind[SyntaxKind["FirstCompoundAssignment"] = 64] = "FirstCompoundAssignment";
        SyntaxKind[SyntaxKind["LastCompoundAssignment"] = 78] = "LastCompoundAssignment";
        SyntaxKind[SyntaxKind["FirstReservedWord"] = 81] = "FirstReservedWord";
        SyntaxKind[SyntaxKind["LastReservedWord"] = 116] = "LastReservedWord";
        SyntaxKind[SyntaxKind["FirstKeyword"] = 81] = "FirstKeyword";
        SyntaxKind[SyntaxKind["LastKeyword"] = 160] = "LastKeyword";
        SyntaxKind[SyntaxKind["FirstFutureReservedWord"] = 117] = "FirstFutureReservedWord";
        SyntaxKind[SyntaxKind["LastFutureReservedWord"] = 125] = "LastFutureReservedWord";
        SyntaxKind[SyntaxKind["FirstTypeNode"] = 177] = "FirstTypeNode";
        SyntaxKind[SyntaxKind["LastTypeNode"] = 200] = "LastTypeNode";
        SyntaxKind[SyntaxKind["FirstPunctuation"] = 18] = "FirstPunctuation";
        SyntaxKind[SyntaxKind["LastPunctuation"] = 78] = "LastPunctuation";
        SyntaxKind[SyntaxKind["FirstToken"] = 0] = "FirstToken";
        SyntaxKind[SyntaxKind["LastToken"] = 160] = "LastToken";
        SyntaxKind[SyntaxKind["FirstTriviaToken"] = 2] = "FirstTriviaToken";
        SyntaxKind[SyntaxKind["LastTriviaToken"] = 7] = "LastTriviaToken";
        SyntaxKind[SyntaxKind["FirstLiteralToken"] = 8] = "FirstLiteralToken";
        SyntaxKind[SyntaxKind["LastLiteralToken"] = 14] = "LastLiteralToken";
        SyntaxKind[SyntaxKind["FirstTemplateToken"] = 14] = "FirstTemplateToken";
        SyntaxKind[SyntaxKind["LastTemplateToken"] = 17] = "LastTemplateToken";
        SyntaxKind[SyntaxKind["FirstBinaryOperator"] = 29] = "FirstBinaryOperator";
        SyntaxKind[SyntaxKind["LastBinaryOperator"] = 78] = "LastBinaryOperator";
        SyntaxKind[SyntaxKind["FirstStatement"] = 237] = "FirstStatement";
        SyntaxKind[SyntaxKind["LastStatement"] = 253] = "LastStatement";
        SyntaxKind[SyntaxKind["FirstNode"] = 161] = "FirstNode";
        SyntaxKind[SyntaxKind["FirstJSDocNode"] = 309] = "FirstJSDocNode";
        SyntaxKind[SyntaxKind["LastJSDocNode"] = 347] = "LastJSDocNode";
        SyntaxKind[SyntaxKind["FirstJSDocTagNode"] = 327] = "FirstJSDocTagNode";
        SyntaxKind[SyntaxKind["LastJSDocTagNode"] = 347] = "LastJSDocTagNode";
        /* @internal */ SyntaxKind[SyntaxKind["FirstContextualKeyword"] = 126] = "FirstContextualKeyword";
        /* @internal */ SyntaxKind[SyntaxKind["LastContextualKeyword"] = 160] = "LastContextualKeyword";
    })(SyntaxKind = ts.SyntaxKind || (ts.SyntaxKind = {}));
    var NodeFlags;
    (function (NodeFlags) {
        NodeFlags[NodeFlags["None"] = 0] = "None";
        NodeFlags[NodeFlags["Let"] = 1] = "Let";
        NodeFlags[NodeFlags["Const"] = 2] = "Const";
        NodeFlags[NodeFlags["NestedNamespace"] = 4] = "NestedNamespace";
        NodeFlags[NodeFlags["Synthesized"] = 8] = "Synthesized";
        NodeFlags[NodeFlags["Namespace"] = 16] = "Namespace";
        NodeFlags[NodeFlags["OptionalChain"] = 32] = "OptionalChain";
        NodeFlags[NodeFlags["ExportContext"] = 64] = "ExportContext";
        NodeFlags[NodeFlags["ContainsThis"] = 128] = "ContainsThis";
        NodeFlags[NodeFlags["HasImplicitReturn"] = 256] = "HasImplicitReturn";
        NodeFlags[NodeFlags["HasExplicitReturn"] = 512] = "HasExplicitReturn";
        NodeFlags[NodeFlags["GlobalAugmentation"] = 1024] = "GlobalAugmentation";
        NodeFlags[NodeFlags["HasAsyncFunctions"] = 2048] = "HasAsyncFunctions";
        NodeFlags[NodeFlags["DisallowInContext"] = 4096] = "DisallowInContext";
        NodeFlags[NodeFlags["YieldContext"] = 8192] = "YieldContext";
        NodeFlags[NodeFlags["DecoratorContext"] = 16384] = "DecoratorContext";
        NodeFlags[NodeFlags["AwaitContext"] = 32768] = "AwaitContext";
        NodeFlags[NodeFlags["DisallowConditionalTypesContext"] = 65536] = "DisallowConditionalTypesContext";
        NodeFlags[NodeFlags["ThisNodeHasError"] = 131072] = "ThisNodeHasError";
        NodeFlags[NodeFlags["JavaScriptFile"] = 262144] = "JavaScriptFile";
        NodeFlags[NodeFlags["ThisNodeOrAnySubNodesHasError"] = 524288] = "ThisNodeOrAnySubNodesHasError";
        NodeFlags[NodeFlags["HasAggregatedChildData"] = 1048576] = "HasAggregatedChildData";
        // These flags will be set when the parser encounters a dynamic import expression or 'import.meta' to avoid
        // walking the tree if the flags are not set. However, these flags are just a approximation
        // (hence why it's named "PossiblyContainsDynamicImport") because once set, the flags never get cleared.
        // During editing, if a dynamic import is removed, incremental parsing will *NOT* clear this flag.
        // This means that the tree will always be traversed during module resolution, or when looking for external module indicators.
        // However, the removal operation should not occur often and in the case of the
        // removal, it is likely that users will add the import anyway.
        // The advantage of this approach is its simplicity. For the case of batch compilation,
        // we guarantee that users won't have to pay the price of walking the tree if a dynamic import isn't used.
        /* @internal */ NodeFlags[NodeFlags["PossiblyContainsDynamicImport"] = 2097152] = "PossiblyContainsDynamicImport";
        /* @internal */ NodeFlags[NodeFlags["PossiblyContainsImportMeta"] = 4194304] = "PossiblyContainsImportMeta";
        NodeFlags[NodeFlags["JSDoc"] = 8388608] = "JSDoc";
        /* @internal */ NodeFlags[NodeFlags["Ambient"] = 16777216] = "Ambient";
        /* @internal */ NodeFlags[NodeFlags["InWithStatement"] = 33554432] = "InWithStatement";
        NodeFlags[NodeFlags["JsonFile"] = 67108864] = "JsonFile";
        /* @internal */ NodeFlags[NodeFlags["TypeCached"] = 134217728] = "TypeCached";
        /* @internal */ NodeFlags[NodeFlags["Deprecated"] = 268435456] = "Deprecated";
        NodeFlags[NodeFlags["BlockScoped"] = 3] = "BlockScoped";
        NodeFlags[NodeFlags["ReachabilityCheckFlags"] = 768] = "ReachabilityCheckFlags";
        NodeFlags[NodeFlags["ReachabilityAndEmitFlags"] = 2816] = "ReachabilityAndEmitFlags";
        // Parsing context flags
        NodeFlags[NodeFlags["ContextFlags"] = 50720768] = "ContextFlags";
        // Exclude these flags when parsing a Type
        NodeFlags[NodeFlags["TypeExcludesFlags"] = 40960] = "TypeExcludesFlags";
        // Represents all flags that are potentially set once and
        // never cleared on SourceFiles which get re-used in between incremental parses.
        // See the comment above on `PossiblyContainsDynamicImport` and `PossiblyContainsImportMeta`.
        /* @internal */ NodeFlags[NodeFlags["PermanentlySetIncrementalFlags"] = 6291456] = "PermanentlySetIncrementalFlags";
    })(NodeFlags = ts.NodeFlags || (ts.NodeFlags = {}));
    var ModifierFlags;
    (function (ModifierFlags) {
        ModifierFlags[ModifierFlags["None"] = 0] = "None";
        ModifierFlags[ModifierFlags["Export"] = 1] = "Export";
        ModifierFlags[ModifierFlags["Ambient"] = 2] = "Ambient";
        ModifierFlags[ModifierFlags["Public"] = 4] = "Public";
        ModifierFlags[ModifierFlags["Private"] = 8] = "Private";
        ModifierFlags[ModifierFlags["Protected"] = 16] = "Protected";
        ModifierFlags[ModifierFlags["Static"] = 32] = "Static";
        ModifierFlags[ModifierFlags["Readonly"] = 64] = "Readonly";
        ModifierFlags[ModifierFlags["Abstract"] = 128] = "Abstract";
        ModifierFlags[ModifierFlags["Async"] = 256] = "Async";
        ModifierFlags[ModifierFlags["Default"] = 512] = "Default";
        ModifierFlags[ModifierFlags["Const"] = 2048] = "Const";
        ModifierFlags[ModifierFlags["HasComputedJSDocModifiers"] = 4096] = "HasComputedJSDocModifiers";
        ModifierFlags[ModifierFlags["Deprecated"] = 8192] = "Deprecated";
        ModifierFlags[ModifierFlags["Override"] = 16384] = "Override";
        ModifierFlags[ModifierFlags["In"] = 32768] = "In";
        ModifierFlags[ModifierFlags["Out"] = 65536] = "Out";
        ModifierFlags[ModifierFlags["Decorator"] = 131072] = "Decorator";
        ModifierFlags[ModifierFlags["HasComputedFlags"] = 536870912] = "HasComputedFlags";
        ModifierFlags[ModifierFlags["AccessibilityModifier"] = 28] = "AccessibilityModifier";
        // Accessibility modifiers and 'readonly' can be attached to a parameter in a constructor to make it a property.
        ModifierFlags[ModifierFlags["ParameterPropertyModifier"] = 16476] = "ParameterPropertyModifier";
        ModifierFlags[ModifierFlags["NonPublicAccessibilityModifier"] = 24] = "NonPublicAccessibilityModifier";
        ModifierFlags[ModifierFlags["TypeScriptModifier"] = 116958] = "TypeScriptModifier";
        ModifierFlags[ModifierFlags["ExportDefault"] = 513] = "ExportDefault";
        ModifierFlags[ModifierFlags["All"] = 257023] = "All";
        ModifierFlags[ModifierFlags["Modifier"] = 125951] = "Modifier";
    })(ModifierFlags = ts.ModifierFlags || (ts.ModifierFlags = {}));
    var JsxFlags;
    (function (JsxFlags) {
        JsxFlags[JsxFlags["None"] = 0] = "None";
        /** An element from a named property of the JSX.IntrinsicElements interface */
        JsxFlags[JsxFlags["IntrinsicNamedElement"] = 1] = "IntrinsicNamedElement";
        /** An element inferred from the string index signature of the JSX.IntrinsicElements interface */
        JsxFlags[JsxFlags["IntrinsicIndexedElement"] = 2] = "IntrinsicIndexedElement";
        JsxFlags[JsxFlags["IntrinsicElement"] = 3] = "IntrinsicElement";
    })(JsxFlags = ts.JsxFlags || (ts.JsxFlags = {}));
    /* @internal */
    var RelationComparisonResult;
    (function (RelationComparisonResult) {
        RelationComparisonResult[RelationComparisonResult["Succeeded"] = 1] = "Succeeded";
        RelationComparisonResult[RelationComparisonResult["Failed"] = 2] = "Failed";
        RelationComparisonResult[RelationComparisonResult["Reported"] = 4] = "Reported";
        RelationComparisonResult[RelationComparisonResult["ReportsUnmeasurable"] = 8] = "ReportsUnmeasurable";
        RelationComparisonResult[RelationComparisonResult["ReportsUnreliable"] = 16] = "ReportsUnreliable";
        RelationComparisonResult[RelationComparisonResult["ReportsMask"] = 24] = "ReportsMask";
    })(RelationComparisonResult = ts.RelationComparisonResult || (ts.RelationComparisonResult = {}));
    var GeneratedIdentifierFlags;
    (function (GeneratedIdentifierFlags) {
        // Kinds
        GeneratedIdentifierFlags[GeneratedIdentifierFlags["None"] = 0] = "None";
        /*@internal*/ GeneratedIdentifierFlags[GeneratedIdentifierFlags["Auto"] = 1] = "Auto";
        /*@internal*/ GeneratedIdentifierFlags[GeneratedIdentifierFlags["Loop"] = 2] = "Loop";
        /*@internal*/ GeneratedIdentifierFlags[GeneratedIdentifierFlags["Unique"] = 3] = "Unique";
        /*@internal*/ GeneratedIdentifierFlags[GeneratedIdentifierFlags["Node"] = 4] = "Node";
        /*@internal*/ GeneratedIdentifierFlags[GeneratedIdentifierFlags["KindMask"] = 7] = "KindMask";
        // Flags
        GeneratedIdentifierFlags[GeneratedIdentifierFlags["ReservedInNestedScopes"] = 8] = "ReservedInNestedScopes";
        GeneratedIdentifierFlags[GeneratedIdentifierFlags["Optimistic"] = 16] = "Optimistic";
        GeneratedIdentifierFlags[GeneratedIdentifierFlags["FileLevel"] = 32] = "FileLevel";
        GeneratedIdentifierFlags[GeneratedIdentifierFlags["AllowNameSubstitution"] = 64] = "AllowNameSubstitution";
    })(GeneratedIdentifierFlags = ts.GeneratedIdentifierFlags || (ts.GeneratedIdentifierFlags = {}));
    var TokenFlags;
    (function (TokenFlags) {
        TokenFlags[TokenFlags["None"] = 0] = "None";
        /* @internal */
        TokenFlags[TokenFlags["PrecedingLineBreak"] = 1] = "PrecedingLineBreak";
        /* @internal */
        TokenFlags[TokenFlags["PrecedingJSDocComment"] = 2] = "PrecedingJSDocComment";
        /* @internal */
        TokenFlags[TokenFlags["Unterminated"] = 4] = "Unterminated";
        /* @internal */
        TokenFlags[TokenFlags["ExtendedUnicodeEscape"] = 8] = "ExtendedUnicodeEscape";
        TokenFlags[TokenFlags["Scientific"] = 16] = "Scientific";
        TokenFlags[TokenFlags["Octal"] = 32] = "Octal";
        TokenFlags[TokenFlags["HexSpecifier"] = 64] = "HexSpecifier";
        TokenFlags[TokenFlags["BinarySpecifier"] = 128] = "BinarySpecifier";
        TokenFlags[TokenFlags["OctalSpecifier"] = 256] = "OctalSpecifier";
        /* @internal */
        TokenFlags[TokenFlags["ContainsSeparator"] = 512] = "ContainsSeparator";
        /* @internal */
        TokenFlags[TokenFlags["UnicodeEscape"] = 1024] = "UnicodeEscape";
        /* @internal */
        TokenFlags[TokenFlags["ContainsInvalidEscape"] = 2048] = "ContainsInvalidEscape";
        /* @internal */
        TokenFlags[TokenFlags["BinaryOrOctalSpecifier"] = 384] = "BinaryOrOctalSpecifier";
        /* @internal */
        TokenFlags[TokenFlags["NumericLiteralFlags"] = 1008] = "NumericLiteralFlags";
        /* @internal */
        TokenFlags[TokenFlags["TemplateLiteralLikeFlags"] = 2048] = "TemplateLiteralLikeFlags";
    })(TokenFlags = ts.TokenFlags || (ts.TokenFlags = {}));
    // NOTE: Ensure this is up-to-date with src/debug/debug.ts
    var FlowFlags;
    (function (FlowFlags) {
        FlowFlags[FlowFlags["Unreachable"] = 1] = "Unreachable";
        FlowFlags[FlowFlags["Start"] = 2] = "Start";
        FlowFlags[FlowFlags["BranchLabel"] = 4] = "BranchLabel";
        FlowFlags[FlowFlags["LoopLabel"] = 8] = "LoopLabel";
        FlowFlags[FlowFlags["Assignment"] = 16] = "Assignment";
        FlowFlags[FlowFlags["TrueCondition"] = 32] = "TrueCondition";
        FlowFlags[FlowFlags["FalseCondition"] = 64] = "FalseCondition";
        FlowFlags[FlowFlags["SwitchClause"] = 128] = "SwitchClause";
        FlowFlags[FlowFlags["ArrayMutation"] = 256] = "ArrayMutation";
        FlowFlags[FlowFlags["Call"] = 512] = "Call";
        FlowFlags[FlowFlags["ReduceLabel"] = 1024] = "ReduceLabel";
        FlowFlags[FlowFlags["Referenced"] = 2048] = "Referenced";
        FlowFlags[FlowFlags["Shared"] = 4096] = "Shared";
        FlowFlags[FlowFlags["Label"] = 12] = "Label";
        FlowFlags[FlowFlags["Condition"] = 96] = "Condition";
    })(FlowFlags = ts.FlowFlags || (ts.FlowFlags = {}));
    /* @internal */
    var CommentDirectiveType;
    (function (CommentDirectiveType) {
        CommentDirectiveType[CommentDirectiveType["ExpectError"] = 0] = "ExpectError";
        CommentDirectiveType[CommentDirectiveType["Ignore"] = 1] = "Ignore";
    })(CommentDirectiveType = ts.CommentDirectiveType || (ts.CommentDirectiveType = {}));
    var OperationCanceledException = /** @class */ (function () {
        function OperationCanceledException() {
        }
        return OperationCanceledException;
    }());
    ts.OperationCanceledException = OperationCanceledException;
    /*@internal*/
    var FileIncludeKind;
    (function (FileIncludeKind) {
        FileIncludeKind[FileIncludeKind["RootFile"] = 0] = "RootFile";
        FileIncludeKind[FileIncludeKind["SourceFromProjectReference"] = 1] = "SourceFromProjectReference";
        FileIncludeKind[FileIncludeKind["OutputFromProjectReference"] = 2] = "OutputFromProjectReference";
        FileIncludeKind[FileIncludeKind["Import"] = 3] = "Import";
        FileIncludeKind[FileIncludeKind["ReferenceFile"] = 4] = "ReferenceFile";
        FileIncludeKind[FileIncludeKind["TypeReferenceDirective"] = 5] = "TypeReferenceDirective";
        FileIncludeKind[FileIncludeKind["LibFile"] = 6] = "LibFile";
        FileIncludeKind[FileIncludeKind["LibReferenceDirective"] = 7] = "LibReferenceDirective";
        FileIncludeKind[FileIncludeKind["AutomaticTypeDirectiveFile"] = 8] = "AutomaticTypeDirectiveFile";
    })(FileIncludeKind = ts.FileIncludeKind || (ts.FileIncludeKind = {}));
    /*@internal*/
    var FilePreprocessingDiagnosticsKind;
    (function (FilePreprocessingDiagnosticsKind) {
        FilePreprocessingDiagnosticsKind[FilePreprocessingDiagnosticsKind["FilePreprocessingReferencedDiagnostic"] = 0] = "FilePreprocessingReferencedDiagnostic";
        FilePreprocessingDiagnosticsKind[FilePreprocessingDiagnosticsKind["FilePreprocessingFileExplainingDiagnostic"] = 1] = "FilePreprocessingFileExplainingDiagnostic";
    })(FilePreprocessingDiagnosticsKind = ts.FilePreprocessingDiagnosticsKind || (ts.FilePreprocessingDiagnosticsKind = {}));
    /* @internal */
    var StructureIsReused;
    (function (StructureIsReused) {
        StructureIsReused[StructureIsReused["Not"] = 0] = "Not";
        StructureIsReused[StructureIsReused["SafeModules"] = 1] = "SafeModules";
        StructureIsReused[StructureIsReused["Completely"] = 2] = "Completely";
    })(StructureIsReused = ts.StructureIsReused || (ts.StructureIsReused = {}));
    /** Return code used by getEmitOutput function to indicate status of the function */
    var ExitStatus;
    (function (ExitStatus) {
        // Compiler ran successfully.  Either this was a simple do-nothing compilation (for example,
        // when -version or -help was provided, or this was a normal compilation, no diagnostics
        // were produced, and all outputs were generated successfully.
        ExitStatus[ExitStatus["Success"] = 0] = "Success";
        // Diagnostics were produced and because of them no code was generated.
        ExitStatus[ExitStatus["DiagnosticsPresent_OutputsSkipped"] = 1] = "DiagnosticsPresent_OutputsSkipped";
        // Diagnostics were produced and outputs were generated in spite of them.
        ExitStatus[ExitStatus["DiagnosticsPresent_OutputsGenerated"] = 2] = "DiagnosticsPresent_OutputsGenerated";
        // When build skipped because passed in project is invalid
        ExitStatus[ExitStatus["InvalidProject_OutputsSkipped"] = 3] = "InvalidProject_OutputsSkipped";
        // When build is skipped because project references form cycle
        ExitStatus[ExitStatus["ProjectReferenceCycle_OutputsSkipped"] = 4] = "ProjectReferenceCycle_OutputsSkipped";
        /** @deprecated Use ProjectReferenceCycle_OutputsSkipped instead. */
        ExitStatus[ExitStatus["ProjectReferenceCycle_OutputsSkupped"] = 4] = "ProjectReferenceCycle_OutputsSkupped";
    })(ExitStatus = ts.ExitStatus || (ts.ExitStatus = {}));
    /* @internal */
    var MemberOverrideStatus;
    (function (MemberOverrideStatus) {
        MemberOverrideStatus[MemberOverrideStatus["Ok"] = 0] = "Ok";
        MemberOverrideStatus[MemberOverrideStatus["NeedsOverride"] = 1] = "NeedsOverride";
        MemberOverrideStatus[MemberOverrideStatus["HasInvalidOverride"] = 2] = "HasInvalidOverride";
    })(MemberOverrideStatus = ts.MemberOverrideStatus || (ts.MemberOverrideStatus = {}));
    /* @internal */
    var UnionReduction;
    (function (UnionReduction) {
        UnionReduction[UnionReduction["None"] = 0] = "None";
        UnionReduction[UnionReduction["Literal"] = 1] = "Literal";
        UnionReduction[UnionReduction["Subtype"] = 2] = "Subtype";
    })(UnionReduction = ts.UnionReduction || (ts.UnionReduction = {}));
    /* @internal */
    var ContextFlags;
    (function (ContextFlags) {
        ContextFlags[ContextFlags["None"] = 0] = "None";
        ContextFlags[ContextFlags["Signature"] = 1] = "Signature";
        ContextFlags[ContextFlags["NoConstraints"] = 2] = "NoConstraints";
        ContextFlags[ContextFlags["Completions"] = 4] = "Completions";
        ContextFlags[ContextFlags["SkipBindingPatterns"] = 8] = "SkipBindingPatterns";
    })(ContextFlags = ts.ContextFlags || (ts.ContextFlags = {}));
    // NOTE: If modifying this enum, must modify `TypeFormatFlags` too!
    var NodeBuilderFlags;
    (function (NodeBuilderFlags) {
        NodeBuilderFlags[NodeBuilderFlags["None"] = 0] = "None";
        // Options
        NodeBuilderFlags[NodeBuilderFlags["NoTruncation"] = 1] = "NoTruncation";
        NodeBuilderFlags[NodeBuilderFlags["WriteArrayAsGenericType"] = 2] = "WriteArrayAsGenericType";
        NodeBuilderFlags[NodeBuilderFlags["GenerateNamesForShadowedTypeParams"] = 4] = "GenerateNamesForShadowedTypeParams";
        NodeBuilderFlags[NodeBuilderFlags["UseStructuralFallback"] = 8] = "UseStructuralFallback";
        NodeBuilderFlags[NodeBuilderFlags["ForbidIndexedAccessSymbolReferences"] = 16] = "ForbidIndexedAccessSymbolReferences";
        NodeBuilderFlags[NodeBuilderFlags["WriteTypeArgumentsOfSignature"] = 32] = "WriteTypeArgumentsOfSignature";
        NodeBuilderFlags[NodeBuilderFlags["UseFullyQualifiedType"] = 64] = "UseFullyQualifiedType";
        NodeBuilderFlags[NodeBuilderFlags["UseOnlyExternalAliasing"] = 128] = "UseOnlyExternalAliasing";
        NodeBuilderFlags[NodeBuilderFlags["SuppressAnyReturnType"] = 256] = "SuppressAnyReturnType";
        NodeBuilderFlags[NodeBuilderFlags["WriteTypeParametersInQualifiedName"] = 512] = "WriteTypeParametersInQualifiedName";
        NodeBuilderFlags[NodeBuilderFlags["MultilineObjectLiterals"] = 1024] = "MultilineObjectLiterals";
        NodeBuilderFlags[NodeBuilderFlags["WriteClassExpressionAsTypeLiteral"] = 2048] = "WriteClassExpressionAsTypeLiteral";
        NodeBuilderFlags[NodeBuilderFlags["UseTypeOfFunction"] = 4096] = "UseTypeOfFunction";
        NodeBuilderFlags[NodeBuilderFlags["OmitParameterModifiers"] = 8192] = "OmitParameterModifiers";
        NodeBuilderFlags[NodeBuilderFlags["UseAliasDefinedOutsideCurrentScope"] = 16384] = "UseAliasDefinedOutsideCurrentScope";
        NodeBuilderFlags[NodeBuilderFlags["UseSingleQuotesForStringLiteralType"] = 268435456] = "UseSingleQuotesForStringLiteralType";
        NodeBuilderFlags[NodeBuilderFlags["NoTypeReduction"] = 536870912] = "NoTypeReduction";
        NodeBuilderFlags[NodeBuilderFlags["OmitThisParameter"] = 33554432] = "OmitThisParameter";
        // Error handling
        NodeBuilderFlags[NodeBuilderFlags["AllowThisInObjectLiteral"] = 32768] = "AllowThisInObjectLiteral";
        NodeBuilderFlags[NodeBuilderFlags["AllowQualifiedNameInPlaceOfIdentifier"] = 65536] = "AllowQualifiedNameInPlaceOfIdentifier";
        /** @deprecated AllowQualifedNameInPlaceOfIdentifier. Use AllowQualifiedNameInPlaceOfIdentifier instead. */
        NodeBuilderFlags[NodeBuilderFlags["AllowQualifedNameInPlaceOfIdentifier"] = 65536] = "AllowQualifedNameInPlaceOfIdentifier";
        NodeBuilderFlags[NodeBuilderFlags["AllowAnonymousIdentifier"] = 131072] = "AllowAnonymousIdentifier";
        NodeBuilderFlags[NodeBuilderFlags["AllowEmptyUnionOrIntersection"] = 262144] = "AllowEmptyUnionOrIntersection";
        NodeBuilderFlags[NodeBuilderFlags["AllowEmptyTuple"] = 524288] = "AllowEmptyTuple";
        NodeBuilderFlags[NodeBuilderFlags["AllowUniqueESSymbolType"] = 1048576] = "AllowUniqueESSymbolType";
        NodeBuilderFlags[NodeBuilderFlags["AllowEmptyIndexInfoType"] = 2097152] = "AllowEmptyIndexInfoType";
        // Errors (cont.)
        NodeBuilderFlags[NodeBuilderFlags["AllowNodeModulesRelativePaths"] = 67108864] = "AllowNodeModulesRelativePaths";
        /* @internal */ NodeBuilderFlags[NodeBuilderFlags["DoNotIncludeSymbolChain"] = 134217728] = "DoNotIncludeSymbolChain";
        NodeBuilderFlags[NodeBuilderFlags["IgnoreErrors"] = 70221824] = "IgnoreErrors";
        // State
        NodeBuilderFlags[NodeBuilderFlags["InObjectTypeLiteral"] = 4194304] = "InObjectTypeLiteral";
        NodeBuilderFlags[NodeBuilderFlags["InTypeAlias"] = 8388608] = "InTypeAlias";
        NodeBuilderFlags[NodeBuilderFlags["InInitialEntityName"] = 16777216] = "InInitialEntityName";
    })(NodeBuilderFlags = ts.NodeBuilderFlags || (ts.NodeBuilderFlags = {}));
    // Ensure the shared flags between this and `NodeBuilderFlags` stay in alignment
    var TypeFormatFlags;
    (function (TypeFormatFlags) {
        TypeFormatFlags[TypeFormatFlags["None"] = 0] = "None";
        TypeFormatFlags[TypeFormatFlags["NoTruncation"] = 1] = "NoTruncation";
        TypeFormatFlags[TypeFormatFlags["WriteArrayAsGenericType"] = 2] = "WriteArrayAsGenericType";
        // hole because there's a hole in node builder flags
        TypeFormatFlags[TypeFormatFlags["UseStructuralFallback"] = 8] = "UseStructuralFallback";
        // hole because there's a hole in node builder flags
        TypeFormatFlags[TypeFormatFlags["WriteTypeArgumentsOfSignature"] = 32] = "WriteTypeArgumentsOfSignature";
        TypeFormatFlags[TypeFormatFlags["UseFullyQualifiedType"] = 64] = "UseFullyQualifiedType";
        // hole because `UseOnlyExternalAliasing` is here in node builder flags, but functions which take old flags use `SymbolFormatFlags` instead
        TypeFormatFlags[TypeFormatFlags["SuppressAnyReturnType"] = 256] = "SuppressAnyReturnType";
        // hole because `WriteTypeParametersInQualifiedName` is here in node builder flags, but functions which take old flags use `SymbolFormatFlags` for this instead
        TypeFormatFlags[TypeFormatFlags["MultilineObjectLiterals"] = 1024] = "MultilineObjectLiterals";
        TypeFormatFlags[TypeFormatFlags["WriteClassExpressionAsTypeLiteral"] = 2048] = "WriteClassExpressionAsTypeLiteral";
        TypeFormatFlags[TypeFormatFlags["UseTypeOfFunction"] = 4096] = "UseTypeOfFunction";
        TypeFormatFlags[TypeFormatFlags["OmitParameterModifiers"] = 8192] = "OmitParameterModifiers";
        TypeFormatFlags[TypeFormatFlags["UseAliasDefinedOutsideCurrentScope"] = 16384] = "UseAliasDefinedOutsideCurrentScope";
        TypeFormatFlags[TypeFormatFlags["UseSingleQuotesForStringLiteralType"] = 268435456] = "UseSingleQuotesForStringLiteralType";
        TypeFormatFlags[TypeFormatFlags["NoTypeReduction"] = 536870912] = "NoTypeReduction";
        TypeFormatFlags[TypeFormatFlags["OmitThisParameter"] = 33554432] = "OmitThisParameter";
        // Error Handling
        TypeFormatFlags[TypeFormatFlags["AllowUniqueESSymbolType"] = 1048576] = "AllowUniqueESSymbolType";
        // TypeFormatFlags exclusive
        TypeFormatFlags[TypeFormatFlags["AddUndefined"] = 131072] = "AddUndefined";
        TypeFormatFlags[TypeFormatFlags["WriteArrowStyleSignature"] = 262144] = "WriteArrowStyleSignature";
        // State
        TypeFormatFlags[TypeFormatFlags["InArrayType"] = 524288] = "InArrayType";
        TypeFormatFlags[TypeFormatFlags["InElementType"] = 2097152] = "InElementType";
        TypeFormatFlags[TypeFormatFlags["InFirstTypeArgument"] = 4194304] = "InFirstTypeArgument";
        TypeFormatFlags[TypeFormatFlags["InTypeAlias"] = 8388608] = "InTypeAlias";
        /** @deprecated */ TypeFormatFlags[TypeFormatFlags["WriteOwnNameForAnyLike"] = 0] = "WriteOwnNameForAnyLike";
        TypeFormatFlags[TypeFormatFlags["NodeBuilderFlagsMask"] = 848330091] = "NodeBuilderFlagsMask";
    })(TypeFormatFlags = ts.TypeFormatFlags || (ts.TypeFormatFlags = {}));
    var SymbolFormatFlags;
    (function (SymbolFormatFlags) {
        SymbolFormatFlags[SymbolFormatFlags["None"] = 0] = "None";
        // Write symbols's type argument if it is instantiated symbol
        // eg. class C<T> { p: T }   <-- Show p as C<T>.p here
        //     var a: C<number>;
        //     var p = a.p; <--- Here p is property of C<number> so show it as C<number>.p instead of just C.p
        SymbolFormatFlags[SymbolFormatFlags["WriteTypeParametersOrArguments"] = 1] = "WriteTypeParametersOrArguments";
        // Use only external alias information to get the symbol name in the given context
        // eg.  module m { export class c { } } import x = m.c;
        // When this flag is specified m.c will be used to refer to the class instead of alias symbol x
        SymbolFormatFlags[SymbolFormatFlags["UseOnlyExternalAliasing"] = 2] = "UseOnlyExternalAliasing";
        // Build symbol name using any nodes needed, instead of just components of an entity name
        SymbolFormatFlags[SymbolFormatFlags["AllowAnyNodeKind"] = 4] = "AllowAnyNodeKind";
        // Prefer aliases which are not directly visible
        SymbolFormatFlags[SymbolFormatFlags["UseAliasDefinedOutsideCurrentScope"] = 8] = "UseAliasDefinedOutsideCurrentScope";
        // Skip building an accessible symbol chain
        /* @internal */ SymbolFormatFlags[SymbolFormatFlags["DoNotIncludeSymbolChain"] = 16] = "DoNotIncludeSymbolChain";
    })(SymbolFormatFlags = ts.SymbolFormatFlags || (ts.SymbolFormatFlags = {}));
    /* @internal */
    var SymbolAccessibility;
    (function (SymbolAccessibility) {
        SymbolAccessibility[SymbolAccessibility["Accessible"] = 0] = "Accessible";
        SymbolAccessibility[SymbolAccessibility["NotAccessible"] = 1] = "NotAccessible";
        SymbolAccessibility[SymbolAccessibility["CannotBeNamed"] = 2] = "CannotBeNamed";
    })(SymbolAccessibility = ts.SymbolAccessibility || (ts.SymbolAccessibility = {}));
    /* @internal */
    var SyntheticSymbolKind;
    (function (SyntheticSymbolKind) {
        SyntheticSymbolKind[SyntheticSymbolKind["UnionOrIntersection"] = 0] = "UnionOrIntersection";
        SyntheticSymbolKind[SyntheticSymbolKind["Spread"] = 1] = "Spread";
    })(SyntheticSymbolKind = ts.SyntheticSymbolKind || (ts.SyntheticSymbolKind = {}));
    var TypePredicateKind;
    (function (TypePredicateKind) {
        TypePredicateKind[TypePredicateKind["This"] = 0] = "This";
        TypePredicateKind[TypePredicateKind["Identifier"] = 1] = "Identifier";
        TypePredicateKind[TypePredicateKind["AssertsThis"] = 2] = "AssertsThis";
        TypePredicateKind[TypePredicateKind["AssertsIdentifier"] = 3] = "AssertsIdentifier";
    })(TypePredicateKind = ts.TypePredicateKind || (ts.TypePredicateKind = {}));
    /** Indicates how to serialize the name for a TypeReferenceNode when emitting decorator metadata */
    /* @internal */
    var TypeReferenceSerializationKind;
    (function (TypeReferenceSerializationKind) {
        // The TypeReferenceNode could not be resolved.
        // The type name should be emitted using a safe fallback.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["Unknown"] = 0] = "Unknown";
        // The TypeReferenceNode resolves to a type with a constructor
        // function that can be reached at runtime (e.g. a `class`
        // declaration or a `var` declaration for the static side
        // of a type, such as the global `Promise` type in lib.d.ts).
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["TypeWithConstructSignatureAndValue"] = 1] = "TypeWithConstructSignatureAndValue";
        // The TypeReferenceNode resolves to a Void-like, Nullable, or Never type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["VoidNullableOrNeverType"] = 2] = "VoidNullableOrNeverType";
        // The TypeReferenceNode resolves to a Number-like type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["NumberLikeType"] = 3] = "NumberLikeType";
        // The TypeReferenceNode resolves to a BigInt-like type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["BigIntLikeType"] = 4] = "BigIntLikeType";
        // The TypeReferenceNode resolves to a String-like type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["StringLikeType"] = 5] = "StringLikeType";
        // The TypeReferenceNode resolves to a Boolean-like type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["BooleanType"] = 6] = "BooleanType";
        // The TypeReferenceNode resolves to an Array-like type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["ArrayLikeType"] = 7] = "ArrayLikeType";
        // The TypeReferenceNode resolves to the ESSymbol type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["ESSymbolType"] = 8] = "ESSymbolType";
        // The TypeReferenceNode resolved to the global Promise constructor symbol.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["Promise"] = 9] = "Promise";
        // The TypeReferenceNode resolves to a Function type or a type with call signatures.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["TypeWithCallSignature"] = 10] = "TypeWithCallSignature";
        // The TypeReferenceNode resolves to any other type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["ObjectType"] = 11] = "ObjectType";
    })(TypeReferenceSerializationKind = ts.TypeReferenceSerializationKind || (ts.TypeReferenceSerializationKind = {}));
    var SymbolFlags;
    (function (SymbolFlags) {
        SymbolFlags[SymbolFlags["None"] = 0] = "None";
        SymbolFlags[SymbolFlags["FunctionScopedVariable"] = 1] = "FunctionScopedVariable";
        SymbolFlags[SymbolFlags["BlockScopedVariable"] = 2] = "BlockScopedVariable";
        SymbolFlags[SymbolFlags["Property"] = 4] = "Property";
        SymbolFlags[SymbolFlags["EnumMember"] = 8] = "EnumMember";
        SymbolFlags[SymbolFlags["Function"] = 16] = "Function";
        SymbolFlags[SymbolFlags["Class"] = 32] = "Class";
        SymbolFlags[SymbolFlags["Interface"] = 64] = "Interface";
        SymbolFlags[SymbolFlags["ConstEnum"] = 128] = "ConstEnum";
        SymbolFlags[SymbolFlags["RegularEnum"] = 256] = "RegularEnum";
        SymbolFlags[SymbolFlags["ValueModule"] = 512] = "ValueModule";
        SymbolFlags[SymbolFlags["NamespaceModule"] = 1024] = "NamespaceModule";
        SymbolFlags[SymbolFlags["TypeLiteral"] = 2048] = "TypeLiteral";
        SymbolFlags[SymbolFlags["ObjectLiteral"] = 4096] = "ObjectLiteral";
        SymbolFlags[SymbolFlags["Method"] = 8192] = "Method";
        SymbolFlags[SymbolFlags["Constructor"] = 16384] = "Constructor";
        SymbolFlags[SymbolFlags["GetAccessor"] = 32768] = "GetAccessor";
        SymbolFlags[SymbolFlags["SetAccessor"] = 65536] = "SetAccessor";
        SymbolFlags[SymbolFlags["Signature"] = 131072] = "Signature";
        SymbolFlags[SymbolFlags["TypeParameter"] = 262144] = "TypeParameter";
        SymbolFlags[SymbolFlags["TypeAlias"] = 524288] = "TypeAlias";
        SymbolFlags[SymbolFlags["ExportValue"] = 1048576] = "ExportValue";
        SymbolFlags[SymbolFlags["Alias"] = 2097152] = "Alias";
        SymbolFlags[SymbolFlags["Prototype"] = 4194304] = "Prototype";
        SymbolFlags[SymbolFlags["ExportStar"] = 8388608] = "ExportStar";
        SymbolFlags[SymbolFlags["Optional"] = 16777216] = "Optional";
        SymbolFlags[SymbolFlags["Transient"] = 33554432] = "Transient";
        SymbolFlags[SymbolFlags["Assignment"] = 67108864] = "Assignment";
        SymbolFlags[SymbolFlags["ModuleExports"] = 134217728] = "ModuleExports";
        /* @internal */
        SymbolFlags[SymbolFlags["All"] = 67108863] = "All";
        SymbolFlags[SymbolFlags["Enum"] = 384] = "Enum";
        SymbolFlags[SymbolFlags["Variable"] = 3] = "Variable";
        SymbolFlags[SymbolFlags["Value"] = 111551] = "Value";
        SymbolFlags[SymbolFlags["Type"] = 788968] = "Type";
        SymbolFlags[SymbolFlags["Namespace"] = 1920] = "Namespace";
        SymbolFlags[SymbolFlags["Module"] = 1536] = "Module";
        SymbolFlags[SymbolFlags["Accessor"] = 98304] = "Accessor";
        // Variables can be redeclared, but can not redeclare a block-scoped declaration with the
        // same name, or any other value that is not a variable, e.g. ValueModule or Class
        SymbolFlags[SymbolFlags["FunctionScopedVariableExcludes"] = 111550] = "FunctionScopedVariableExcludes";
        // Block-scoped declarations are not allowed to be re-declared
        // they can not merge with anything in the value space
        SymbolFlags[SymbolFlags["BlockScopedVariableExcludes"] = 111551] = "BlockScopedVariableExcludes";
        SymbolFlags[SymbolFlags["ParameterExcludes"] = 111551] = "ParameterExcludes";
        SymbolFlags[SymbolFlags["PropertyExcludes"] = 0] = "PropertyExcludes";
        SymbolFlags[SymbolFlags["EnumMemberExcludes"] = 900095] = "EnumMemberExcludes";
        SymbolFlags[SymbolFlags["FunctionExcludes"] = 110991] = "FunctionExcludes";
        SymbolFlags[SymbolFlags["ClassExcludes"] = 899503] = "ClassExcludes";
        SymbolFlags[SymbolFlags["InterfaceExcludes"] = 788872] = "InterfaceExcludes";
        SymbolFlags[SymbolFlags["RegularEnumExcludes"] = 899327] = "RegularEnumExcludes";
        SymbolFlags[SymbolFlags["ConstEnumExcludes"] = 899967] = "ConstEnumExcludes";
        SymbolFlags[SymbolFlags["ValueModuleExcludes"] = 110735] = "ValueModuleExcludes";
        SymbolFlags[SymbolFlags["NamespaceModuleExcludes"] = 0] = "NamespaceModuleExcludes";
        SymbolFlags[SymbolFlags["MethodExcludes"] = 103359] = "MethodExcludes";
        SymbolFlags[SymbolFlags["GetAccessorExcludes"] = 46015] = "GetAccessorExcludes";
        SymbolFlags[SymbolFlags["SetAccessorExcludes"] = 78783] = "SetAccessorExcludes";
        SymbolFlags[SymbolFlags["TypeParameterExcludes"] = 526824] = "TypeParameterExcludes";
        SymbolFlags[SymbolFlags["TypeAliasExcludes"] = 788968] = "TypeAliasExcludes";
        SymbolFlags[SymbolFlags["AliasExcludes"] = 2097152] = "AliasExcludes";
        SymbolFlags[SymbolFlags["ModuleMember"] = 2623475] = "ModuleMember";
        SymbolFlags[SymbolFlags["ExportHasLocal"] = 944] = "ExportHasLocal";
        SymbolFlags[SymbolFlags["BlockScoped"] = 418] = "BlockScoped";
        SymbolFlags[SymbolFlags["PropertyOrAccessor"] = 98308] = "PropertyOrAccessor";
        SymbolFlags[SymbolFlags["ClassMember"] = 106500] = "ClassMember";
        /* @internal */
        SymbolFlags[SymbolFlags["ExportSupportsDefaultModifier"] = 112] = "ExportSupportsDefaultModifier";
        /* @internal */
        SymbolFlags[SymbolFlags["ExportDoesNotSupportDefaultModifier"] = -113] = "ExportDoesNotSupportDefaultModifier";
        /* @internal */
        // The set of things we consider semantically classifiable.  Used to speed up the LS during
        // classification.
        SymbolFlags[SymbolFlags["Classifiable"] = 2885600] = "Classifiable";
        /* @internal */
        SymbolFlags[SymbolFlags["LateBindingContainer"] = 6256] = "LateBindingContainer";
    })(SymbolFlags = ts.SymbolFlags || (ts.SymbolFlags = {}));
    /* @internal */
    var EnumKind;
    (function (EnumKind) {
        EnumKind[EnumKind["Numeric"] = 0] = "Numeric";
        EnumKind[EnumKind["Literal"] = 1] = "Literal"; // Literal enum (each member has a TypeFlags.EnumLiteral type)
    })(EnumKind = ts.EnumKind || (ts.EnumKind = {}));
    /* @internal */
    var CheckFlags;
    (function (CheckFlags) {
        CheckFlags[CheckFlags["Instantiated"] = 1] = "Instantiated";
        CheckFlags[CheckFlags["SyntheticProperty"] = 2] = "SyntheticProperty";
        CheckFlags[CheckFlags["SyntheticMethod"] = 4] = "SyntheticMethod";
        CheckFlags[CheckFlags["Readonly"] = 8] = "Readonly";
        CheckFlags[CheckFlags["ReadPartial"] = 16] = "ReadPartial";
        CheckFlags[CheckFlags["WritePartial"] = 32] = "WritePartial";
        CheckFlags[CheckFlags["HasNonUniformType"] = 64] = "HasNonUniformType";
        CheckFlags[CheckFlags["HasLiteralType"] = 128] = "HasLiteralType";
        CheckFlags[CheckFlags["ContainsPublic"] = 256] = "ContainsPublic";
        CheckFlags[CheckFlags["ContainsProtected"] = 512] = "ContainsProtected";
        CheckFlags[CheckFlags["ContainsPrivate"] = 1024] = "ContainsPrivate";
        CheckFlags[CheckFlags["ContainsStatic"] = 2048] = "ContainsStatic";
        CheckFlags[CheckFlags["Late"] = 4096] = "Late";
        CheckFlags[CheckFlags["ReverseMapped"] = 8192] = "ReverseMapped";
        CheckFlags[CheckFlags["OptionalParameter"] = 16384] = "OptionalParameter";
        CheckFlags[CheckFlags["RestParameter"] = 32768] = "RestParameter";
        CheckFlags[CheckFlags["DeferredType"] = 65536] = "DeferredType";
        CheckFlags[CheckFlags["HasNeverType"] = 131072] = "HasNeverType";
        CheckFlags[CheckFlags["Mapped"] = 262144] = "Mapped";
        CheckFlags[CheckFlags["StripOptional"] = 524288] = "StripOptional";
        CheckFlags[CheckFlags["Unresolved"] = 1048576] = "Unresolved";
        CheckFlags[CheckFlags["Synthetic"] = 6] = "Synthetic";
        CheckFlags[CheckFlags["Discriminant"] = 192] = "Discriminant";
        CheckFlags[CheckFlags["Partial"] = 48] = "Partial";
    })(CheckFlags = ts.CheckFlags || (ts.CheckFlags = {}));
    var InternalSymbolName;
    (function (InternalSymbolName) {
        InternalSymbolName["Call"] = "__call";
        InternalSymbolName["Constructor"] = "__constructor";
        InternalSymbolName["New"] = "__new";
        InternalSymbolName["Index"] = "__index";
        InternalSymbolName["ExportStar"] = "__export";
        InternalSymbolName["Global"] = "__global";
        InternalSymbolName["Missing"] = "__missing";
        InternalSymbolName["Type"] = "__type";
        InternalSymbolName["Object"] = "__object";
        InternalSymbolName["JSXAttributes"] = "__jsxAttributes";
        InternalSymbolName["Class"] = "__class";
        InternalSymbolName["Function"] = "__function";
        InternalSymbolName["Computed"] = "__computed";
        InternalSymbolName["Resolving"] = "__resolving__";
        InternalSymbolName["ExportEquals"] = "export=";
        InternalSymbolName["Default"] = "default";
        InternalSymbolName["This"] = "this";
    })(InternalSymbolName = ts.InternalSymbolName || (ts.InternalSymbolName = {}));
    /* @internal */
    var NodeCheckFlags;
    (function (NodeCheckFlags) {
        NodeCheckFlags[NodeCheckFlags["TypeChecked"] = 1] = "TypeChecked";
        NodeCheckFlags[NodeCheckFlags["LexicalThis"] = 2] = "LexicalThis";
        NodeCheckFlags[NodeCheckFlags["CaptureThis"] = 4] = "CaptureThis";
        NodeCheckFlags[NodeCheckFlags["CaptureNewTarget"] = 8] = "CaptureNewTarget";
        NodeCheckFlags[NodeCheckFlags["SuperInstance"] = 256] = "SuperInstance";
        NodeCheckFlags[NodeCheckFlags["SuperStatic"] = 512] = "SuperStatic";
        NodeCheckFlags[NodeCheckFlags["ContextChecked"] = 1024] = "ContextChecked";
        NodeCheckFlags[NodeCheckFlags["AsyncMethodWithSuper"] = 2048] = "AsyncMethodWithSuper";
        NodeCheckFlags[NodeCheckFlags["AsyncMethodWithSuperBinding"] = 4096] = "AsyncMethodWithSuperBinding";
        NodeCheckFlags[NodeCheckFlags["CaptureArguments"] = 8192] = "CaptureArguments";
        NodeCheckFlags[NodeCheckFlags["EnumValuesComputed"] = 16384] = "EnumValuesComputed";
        NodeCheckFlags[NodeCheckFlags["LexicalModuleMergesWithClass"] = 32768] = "LexicalModuleMergesWithClass";
        NodeCheckFlags[NodeCheckFlags["LoopWithCapturedBlockScopedBinding"] = 65536] = "LoopWithCapturedBlockScopedBinding";
        NodeCheckFlags[NodeCheckFlags["ContainsCapturedBlockScopeBinding"] = 131072] = "ContainsCapturedBlockScopeBinding";
        NodeCheckFlags[NodeCheckFlags["CapturedBlockScopedBinding"] = 262144] = "CapturedBlockScopedBinding";
        NodeCheckFlags[NodeCheckFlags["BlockScopedBindingInLoop"] = 524288] = "BlockScopedBindingInLoop";
        NodeCheckFlags[NodeCheckFlags["ClassWithBodyScopedClassBinding"] = 1048576] = "ClassWithBodyScopedClassBinding";
        NodeCheckFlags[NodeCheckFlags["BodyScopedClassBinding"] = 2097152] = "BodyScopedClassBinding";
        NodeCheckFlags[NodeCheckFlags["NeedsLoopOutParameter"] = 4194304] = "NeedsLoopOutParameter";
        NodeCheckFlags[NodeCheckFlags["AssignmentsMarked"] = 8388608] = "AssignmentsMarked";
        NodeCheckFlags[NodeCheckFlags["ClassWithConstructorReference"] = 16777216] = "ClassWithConstructorReference";
        NodeCheckFlags[NodeCheckFlags["ConstructorReferenceInClass"] = 33554432] = "ConstructorReferenceInClass";
        NodeCheckFlags[NodeCheckFlags["ContainsClassWithPrivateIdentifiers"] = 67108864] = "ContainsClassWithPrivateIdentifiers";
        NodeCheckFlags[NodeCheckFlags["ContainsSuperPropertyInStaticInitializer"] = 134217728] = "ContainsSuperPropertyInStaticInitializer";
        NodeCheckFlags[NodeCheckFlags["InCheckIdentifier"] = 268435456] = "InCheckIdentifier";
    })(NodeCheckFlags = ts.NodeCheckFlags || (ts.NodeCheckFlags = {}));
    var TypeFlags;
    (function (TypeFlags) {
        TypeFlags[TypeFlags["Any"] = 1] = "Any";
        TypeFlags[TypeFlags["Unknown"] = 2] = "Unknown";
        TypeFlags[TypeFlags["String"] = 4] = "String";
        TypeFlags[TypeFlags["Number"] = 8] = "Number";
        TypeFlags[TypeFlags["Boolean"] = 16] = "Boolean";
        TypeFlags[TypeFlags["Enum"] = 32] = "Enum";
        TypeFlags[TypeFlags["BigInt"] = 64] = "BigInt";
        TypeFlags[TypeFlags["StringLiteral"] = 128] = "StringLiteral";
        TypeFlags[TypeFlags["NumberLiteral"] = 256] = "NumberLiteral";
        TypeFlags[TypeFlags["BooleanLiteral"] = 512] = "BooleanLiteral";
        TypeFlags[TypeFlags["EnumLiteral"] = 1024] = "EnumLiteral";
        TypeFlags[TypeFlags["BigIntLiteral"] = 2048] = "BigIntLiteral";
        TypeFlags[TypeFlags["ESSymbol"] = 4096] = "ESSymbol";
        TypeFlags[TypeFlags["UniqueESSymbol"] = 8192] = "UniqueESSymbol";
        TypeFlags[TypeFlags["Void"] = 16384] = "Void";
        TypeFlags[TypeFlags["Undefined"] = 32768] = "Undefined";
        TypeFlags[TypeFlags["Null"] = 65536] = "Null";
        TypeFlags[TypeFlags["Never"] = 131072] = "Never";
        TypeFlags[TypeFlags["TypeParameter"] = 262144] = "TypeParameter";
        TypeFlags[TypeFlags["Object"] = 524288] = "Object";
        TypeFlags[TypeFlags["Union"] = 1048576] = "Union";
        TypeFlags[TypeFlags["Intersection"] = 2097152] = "Intersection";
        TypeFlags[TypeFlags["Index"] = 4194304] = "Index";
        TypeFlags[TypeFlags["IndexedAccess"] = 8388608] = "IndexedAccess";
        TypeFlags[TypeFlags["Conditional"] = 16777216] = "Conditional";
        TypeFlags[TypeFlags["Substitution"] = 33554432] = "Substitution";
        TypeFlags[TypeFlags["NonPrimitive"] = 67108864] = "NonPrimitive";
        TypeFlags[TypeFlags["TemplateLiteral"] = 134217728] = "TemplateLiteral";
        TypeFlags[TypeFlags["StringMapping"] = 268435456] = "StringMapping";
        /* @internal */
        TypeFlags[TypeFlags["AnyOrUnknown"] = 3] = "AnyOrUnknown";
        /* @internal */
        TypeFlags[TypeFlags["Nullable"] = 98304] = "Nullable";
        TypeFlags[TypeFlags["Literal"] = 2944] = "Literal";
        TypeFlags[TypeFlags["Unit"] = 109440] = "Unit";
        TypeFlags[TypeFlags["StringOrNumberLiteral"] = 384] = "StringOrNumberLiteral";
        /* @internal */
        TypeFlags[TypeFlags["StringOrNumberLiteralOrUnique"] = 8576] = "StringOrNumberLiteralOrUnique";
        /* @internal */
        TypeFlags[TypeFlags["DefinitelyFalsy"] = 117632] = "DefinitelyFalsy";
        TypeFlags[TypeFlags["PossiblyFalsy"] = 117724] = "PossiblyFalsy";
        /* @internal */
        TypeFlags[TypeFlags["Intrinsic"] = 67359327] = "Intrinsic";
        /* @internal */
        TypeFlags[TypeFlags["Primitive"] = 131068] = "Primitive";
        TypeFlags[TypeFlags["StringLike"] = 402653316] = "StringLike";
        TypeFlags[TypeFlags["NumberLike"] = 296] = "NumberLike";
        TypeFlags[TypeFlags["BigIntLike"] = 2112] = "BigIntLike";
        TypeFlags[TypeFlags["BooleanLike"] = 528] = "BooleanLike";
        TypeFlags[TypeFlags["EnumLike"] = 1056] = "EnumLike";
        TypeFlags[TypeFlags["ESSymbolLike"] = 12288] = "ESSymbolLike";
        TypeFlags[TypeFlags["VoidLike"] = 49152] = "VoidLike";
        /* @internal */
        TypeFlags[TypeFlags["DefinitelyNonNullable"] = 470302716] = "DefinitelyNonNullable";
        /* @internal */
        TypeFlags[TypeFlags["DisjointDomains"] = 469892092] = "DisjointDomains";
        TypeFlags[TypeFlags["UnionOrIntersection"] = 3145728] = "UnionOrIntersection";
        TypeFlags[TypeFlags["StructuredType"] = 3670016] = "StructuredType";
        TypeFlags[TypeFlags["TypeVariable"] = 8650752] = "TypeVariable";
        TypeFlags[TypeFlags["InstantiableNonPrimitive"] = 58982400] = "InstantiableNonPrimitive";
        TypeFlags[TypeFlags["InstantiablePrimitive"] = 406847488] = "InstantiablePrimitive";
        TypeFlags[TypeFlags["Instantiable"] = 465829888] = "Instantiable";
        TypeFlags[TypeFlags["StructuredOrInstantiable"] = 469499904] = "StructuredOrInstantiable";
        /* @internal */
        TypeFlags[TypeFlags["ObjectFlagsType"] = 3899393] = "ObjectFlagsType";
        /* @internal */
        TypeFlags[TypeFlags["Simplifiable"] = 25165824] = "Simplifiable";
        /* @internal */
        TypeFlags[TypeFlags["Singleton"] = 67358815] = "Singleton";
        // 'Narrowable' types are types where narrowing actually narrows.
        // This *should* be every type other than null, undefined, void, and never
        TypeFlags[TypeFlags["Narrowable"] = 536624127] = "Narrowable";
        // The following flags are aggregated during union and intersection type construction
        /* @internal */
        TypeFlags[TypeFlags["IncludesMask"] = 205258751] = "IncludesMask";
        // The following flags are used for different purposes during union and intersection type construction
        /* @internal */
        TypeFlags[TypeFlags["IncludesMissingType"] = 262144] = "IncludesMissingType";
        /* @internal */
        TypeFlags[TypeFlags["IncludesNonWideningType"] = 4194304] = "IncludesNonWideningType";
        /* @internal */
        TypeFlags[TypeFlags["IncludesWildcard"] = 8388608] = "IncludesWildcard";
        /* @internal */
        TypeFlags[TypeFlags["IncludesEmptyObject"] = 16777216] = "IncludesEmptyObject";
        /* @internal */
        TypeFlags[TypeFlags["IncludesInstantiable"] = 33554432] = "IncludesInstantiable";
        /* @internal */
        TypeFlags[TypeFlags["NotPrimitiveUnion"] = 36323363] = "NotPrimitiveUnion";
    })(TypeFlags = ts.TypeFlags || (ts.TypeFlags = {}));
    // Types included in TypeFlags.ObjectFlagsType have an objectFlags property. Some ObjectFlags
    // are specific to certain types and reuse the same bit position. Those ObjectFlags require a check
    // for a certain TypeFlags value to determine their meaning.
    var ObjectFlags;
    (function (ObjectFlags) {
        ObjectFlags[ObjectFlags["Class"] = 1] = "Class";
        ObjectFlags[ObjectFlags["Interface"] = 2] = "Interface";
        ObjectFlags[ObjectFlags["Reference"] = 4] = "Reference";
        ObjectFlags[ObjectFlags["Tuple"] = 8] = "Tuple";
        ObjectFlags[ObjectFlags["Anonymous"] = 16] = "Anonymous";
        ObjectFlags[ObjectFlags["Mapped"] = 32] = "Mapped";
        ObjectFlags[ObjectFlags["Instantiated"] = 64] = "Instantiated";
        ObjectFlags[ObjectFlags["ObjectLiteral"] = 128] = "ObjectLiteral";
        ObjectFlags[ObjectFlags["EvolvingArray"] = 256] = "EvolvingArray";
        ObjectFlags[ObjectFlags["ObjectLiteralPatternWithComputedProperties"] = 512] = "ObjectLiteralPatternWithComputedProperties";
        ObjectFlags[ObjectFlags["ReverseMapped"] = 1024] = "ReverseMapped";
        ObjectFlags[ObjectFlags["JsxAttributes"] = 2048] = "JsxAttributes";
        ObjectFlags[ObjectFlags["JSLiteral"] = 4096] = "JSLiteral";
        ObjectFlags[ObjectFlags["FreshLiteral"] = 8192] = "FreshLiteral";
        ObjectFlags[ObjectFlags["ArrayLiteral"] = 16384] = "ArrayLiteral";
        /* @internal */
        ObjectFlags[ObjectFlags["PrimitiveUnion"] = 32768] = "PrimitiveUnion";
        /* @internal */
        ObjectFlags[ObjectFlags["ContainsWideningType"] = 65536] = "ContainsWideningType";
        /* @internal */
        ObjectFlags[ObjectFlags["ContainsObjectOrArrayLiteral"] = 131072] = "ContainsObjectOrArrayLiteral";
        /* @internal */
        ObjectFlags[ObjectFlags["NonInferrableType"] = 262144] = "NonInferrableType";
        /* @internal */
        ObjectFlags[ObjectFlags["CouldContainTypeVariablesComputed"] = 524288] = "CouldContainTypeVariablesComputed";
        /* @internal */
        ObjectFlags[ObjectFlags["CouldContainTypeVariables"] = 1048576] = "CouldContainTypeVariables";
        ObjectFlags[ObjectFlags["ClassOrInterface"] = 3] = "ClassOrInterface";
        /* @internal */
        ObjectFlags[ObjectFlags["RequiresWidening"] = 196608] = "RequiresWidening";
        /* @internal */
        ObjectFlags[ObjectFlags["PropagatingFlags"] = 458752] = "PropagatingFlags";
        // Object flags that uniquely identify the kind of ObjectType
        /* @internal */
        ObjectFlags[ObjectFlags["ObjectTypeKindMask"] = 1343] = "ObjectTypeKindMask";
        // Flags that require TypeFlags.Object
        ObjectFlags[ObjectFlags["ContainsSpread"] = 2097152] = "ContainsSpread";
        ObjectFlags[ObjectFlags["ObjectRestType"] = 4194304] = "ObjectRestType";
        ObjectFlags[ObjectFlags["InstantiationExpressionType"] = 8388608] = "InstantiationExpressionType";
        /* @internal */
        ObjectFlags[ObjectFlags["IsClassInstanceClone"] = 16777216] = "IsClassInstanceClone";
        // Flags that require TypeFlags.Object and ObjectFlags.Reference
        /* @internal */
        ObjectFlags[ObjectFlags["IdenticalBaseTypeCalculated"] = 33554432] = "IdenticalBaseTypeCalculated";
        /* @internal */
        ObjectFlags[ObjectFlags["IdenticalBaseTypeExists"] = 67108864] = "IdenticalBaseTypeExists";
        // Flags that require TypeFlags.UnionOrIntersection or TypeFlags.Substitution
        /* @internal */
        ObjectFlags[ObjectFlags["IsGenericTypeComputed"] = 2097152] = "IsGenericTypeComputed";
        /* @internal */
        ObjectFlags[ObjectFlags["IsGenericObjectType"] = 4194304] = "IsGenericObjectType";
        /* @internal */
        ObjectFlags[ObjectFlags["IsGenericIndexType"] = 8388608] = "IsGenericIndexType";
        /* @internal */
        ObjectFlags[ObjectFlags["IsGenericType"] = 12582912] = "IsGenericType";
        // Flags that require TypeFlags.Union
        /* @internal */
        ObjectFlags[ObjectFlags["ContainsIntersections"] = 16777216] = "ContainsIntersections";
        /* @internal */
        ObjectFlags[ObjectFlags["IsUnknownLikeUnionComputed"] = 33554432] = "IsUnknownLikeUnionComputed";
        /* @internal */
        ObjectFlags[ObjectFlags["IsUnknownLikeUnion"] = 67108864] = "IsUnknownLikeUnion";
        /* @internal */
        // Flags that require TypeFlags.Intersection
        /* @internal */
        ObjectFlags[ObjectFlags["IsNeverIntersectionComputed"] = 16777216] = "IsNeverIntersectionComputed";
        /* @internal */
        ObjectFlags[ObjectFlags["IsNeverIntersection"] = 33554432] = "IsNeverIntersection";
    })(ObjectFlags = ts.ObjectFlags || (ts.ObjectFlags = {}));
    /* @internal */
    var VarianceFlags;
    (function (VarianceFlags) {
        VarianceFlags[VarianceFlags["Invariant"] = 0] = "Invariant";
        VarianceFlags[VarianceFlags["Covariant"] = 1] = "Covariant";
        VarianceFlags[VarianceFlags["Contravariant"] = 2] = "Contravariant";
        VarianceFlags[VarianceFlags["Bivariant"] = 3] = "Bivariant";
        VarianceFlags[VarianceFlags["Independent"] = 4] = "Independent";
        VarianceFlags[VarianceFlags["VarianceMask"] = 7] = "VarianceMask";
        VarianceFlags[VarianceFlags["Unmeasurable"] = 8] = "Unmeasurable";
        VarianceFlags[VarianceFlags["Unreliable"] = 16] = "Unreliable";
        VarianceFlags[VarianceFlags["AllowsStructuralFallback"] = 24] = "AllowsStructuralFallback";
    })(VarianceFlags = ts.VarianceFlags || (ts.VarianceFlags = {}));
    var ElementFlags;
    (function (ElementFlags) {
        ElementFlags[ElementFlags["Required"] = 1] = "Required";
        ElementFlags[ElementFlags["Optional"] = 2] = "Optional";
        ElementFlags[ElementFlags["Rest"] = 4] = "Rest";
        ElementFlags[ElementFlags["Variadic"] = 8] = "Variadic";
        ElementFlags[ElementFlags["Fixed"] = 3] = "Fixed";
        ElementFlags[ElementFlags["Variable"] = 12] = "Variable";
        ElementFlags[ElementFlags["NonRequired"] = 14] = "NonRequired";
        ElementFlags[ElementFlags["NonRest"] = 11] = "NonRest";
    })(ElementFlags = ts.ElementFlags || (ts.ElementFlags = {}));
    /* @internal */
    var AccessFlags;
    (function (AccessFlags) {
        AccessFlags[AccessFlags["None"] = 0] = "None";
        AccessFlags[AccessFlags["IncludeUndefined"] = 1] = "IncludeUndefined";
        AccessFlags[AccessFlags["NoIndexSignatures"] = 2] = "NoIndexSignatures";
        AccessFlags[AccessFlags["Writing"] = 4] = "Writing";
        AccessFlags[AccessFlags["CacheSymbol"] = 8] = "CacheSymbol";
        AccessFlags[AccessFlags["NoTupleBoundsCheck"] = 16] = "NoTupleBoundsCheck";
        AccessFlags[AccessFlags["ExpressionPosition"] = 32] = "ExpressionPosition";
        AccessFlags[AccessFlags["ReportDeprecated"] = 64] = "ReportDeprecated";
        AccessFlags[AccessFlags["SuppressNoImplicitAnyError"] = 128] = "SuppressNoImplicitAnyError";
        AccessFlags[AccessFlags["Contextual"] = 256] = "Contextual";
        AccessFlags[AccessFlags["Persistent"] = 1] = "Persistent";
    })(AccessFlags = ts.AccessFlags || (ts.AccessFlags = {}));
    /* @internal */
    var JsxReferenceKind;
    (function (JsxReferenceKind) {
        JsxReferenceKind[JsxReferenceKind["Component"] = 0] = "Component";
        JsxReferenceKind[JsxReferenceKind["Function"] = 1] = "Function";
        JsxReferenceKind[JsxReferenceKind["Mixed"] = 2] = "Mixed";
    })(JsxReferenceKind = ts.JsxReferenceKind || (ts.JsxReferenceKind = {}));
    var SignatureKind;
    (function (SignatureKind) {
        SignatureKind[SignatureKind["Call"] = 0] = "Call";
        SignatureKind[SignatureKind["Construct"] = 1] = "Construct";
    })(SignatureKind = ts.SignatureKind || (ts.SignatureKind = {}));
    /* @internal */
    var SignatureFlags;
    (function (SignatureFlags) {
        SignatureFlags[SignatureFlags["None"] = 0] = "None";
        // Propagating flags
        SignatureFlags[SignatureFlags["HasRestParameter"] = 1] = "HasRestParameter";
        SignatureFlags[SignatureFlags["HasLiteralTypes"] = 2] = "HasLiteralTypes";
        SignatureFlags[SignatureFlags["Abstract"] = 4] = "Abstract";
        // Non-propagating flags
        SignatureFlags[SignatureFlags["IsInnerCallChain"] = 8] = "IsInnerCallChain";
        SignatureFlags[SignatureFlags["IsOuterCallChain"] = 16] = "IsOuterCallChain";
        SignatureFlags[SignatureFlags["IsUntypedSignatureInJSFile"] = 32] = "IsUntypedSignatureInJSFile";
        // We do not propagate `IsInnerCallChain` or `IsOuterCallChain` to instantiated signatures, as that would result in us
        // attempting to add `| undefined` on each recursive call to `getReturnTypeOfSignature` when
        // instantiating the return type.
        SignatureFlags[SignatureFlags["PropagatingFlags"] = 39] = "PropagatingFlags";
        SignatureFlags[SignatureFlags["CallChainFlags"] = 24] = "CallChainFlags";
    })(SignatureFlags = ts.SignatureFlags || (ts.SignatureFlags = {}));
    var IndexKind;
    (function (IndexKind) {
        IndexKind[IndexKind["String"] = 0] = "String";
        IndexKind[IndexKind["Number"] = 1] = "Number";
    })(IndexKind = ts.IndexKind || (ts.IndexKind = {}));
    /* @internal */
    var TypeMapKind;
    (function (TypeMapKind) {
        TypeMapKind[TypeMapKind["Simple"] = 0] = "Simple";
        TypeMapKind[TypeMapKind["Array"] = 1] = "Array";
        TypeMapKind[TypeMapKind["Deferred"] = 2] = "Deferred";
        TypeMapKind[TypeMapKind["Function"] = 3] = "Function";
        TypeMapKind[TypeMapKind["Composite"] = 4] = "Composite";
        TypeMapKind[TypeMapKind["Merged"] = 5] = "Merged";
    })(TypeMapKind = ts.TypeMapKind || (ts.TypeMapKind = {}));
    var InferencePriority;
    (function (InferencePriority) {
        InferencePriority[InferencePriority["NakedTypeVariable"] = 1] = "NakedTypeVariable";
        InferencePriority[InferencePriority["SpeculativeTuple"] = 2] = "SpeculativeTuple";
        InferencePriority[InferencePriority["SubstituteSource"] = 4] = "SubstituteSource";
        InferencePriority[InferencePriority["HomomorphicMappedType"] = 8] = "HomomorphicMappedType";
        InferencePriority[InferencePriority["PartialHomomorphicMappedType"] = 16] = "PartialHomomorphicMappedType";
        InferencePriority[InferencePriority["MappedTypeConstraint"] = 32] = "MappedTypeConstraint";
        InferencePriority[InferencePriority["ContravariantConditional"] = 64] = "ContravariantConditional";
        InferencePriority[InferencePriority["ReturnType"] = 128] = "ReturnType";
        InferencePriority[InferencePriority["LiteralKeyof"] = 256] = "LiteralKeyof";
        InferencePriority[InferencePriority["NoConstraints"] = 512] = "NoConstraints";
        InferencePriority[InferencePriority["AlwaysStrict"] = 1024] = "AlwaysStrict";
        InferencePriority[InferencePriority["MaxValue"] = 2048] = "MaxValue";
        InferencePriority[InferencePriority["PriorityImpliesCombination"] = 416] = "PriorityImpliesCombination";
        InferencePriority[InferencePriority["Circularity"] = -1] = "Circularity";
    })(InferencePriority = ts.InferencePriority || (ts.InferencePriority = {}));
    /* @internal */
    var InferenceFlags;
    (function (InferenceFlags) {
        InferenceFlags[InferenceFlags["None"] = 0] = "None";
        InferenceFlags[InferenceFlags["NoDefault"] = 1] = "NoDefault";
        InferenceFlags[InferenceFlags["AnyDefault"] = 2] = "AnyDefault";
        InferenceFlags[InferenceFlags["SkippedGenericFunction"] = 4] = "SkippedGenericFunction";
    })(InferenceFlags = ts.InferenceFlags || (ts.InferenceFlags = {}));
    /**
     * Ternary values are defined such that
     * x & y picks the lesser in the order False < Unknown < Maybe < True, and
     * x | y picks the greater in the order False < Unknown < Maybe < True.
     * Generally, Ternary.Maybe is used as the result of a relation that depends on itself, and
     * Ternary.Unknown is used as the result of a variance check that depends on itself. We make
     * a distinction because we don't want to cache circular variance check results.
     */
    /* @internal */
    var Ternary;
    (function (Ternary) {
        Ternary[Ternary["False"] = 0] = "False";
        Ternary[Ternary["Unknown"] = 1] = "Unknown";
        Ternary[Ternary["Maybe"] = 3] = "Maybe";
        Ternary[Ternary["True"] = -1] = "True";
    })(Ternary = ts.Ternary || (ts.Ternary = {}));
    /* @internal */
    var AssignmentDeclarationKind;
    (function (AssignmentDeclarationKind) {
        AssignmentDeclarationKind[AssignmentDeclarationKind["None"] = 0] = "None";
        /// exports.name = expr
        /// module.exports.name = expr
        AssignmentDeclarationKind[AssignmentDeclarationKind["ExportsProperty"] = 1] = "ExportsProperty";
        /// module.exports = expr
        AssignmentDeclarationKind[AssignmentDeclarationKind["ModuleExports"] = 2] = "ModuleExports";
        /// className.prototype.name = expr
        AssignmentDeclarationKind[AssignmentDeclarationKind["PrototypeProperty"] = 3] = "PrototypeProperty";
        /// this.name = expr
        AssignmentDeclarationKind[AssignmentDeclarationKind["ThisProperty"] = 4] = "ThisProperty";
        // F.name = expr
        AssignmentDeclarationKind[AssignmentDeclarationKind["Property"] = 5] = "Property";
        // F.prototype = { ... }
        AssignmentDeclarationKind[AssignmentDeclarationKind["Prototype"] = 6] = "Prototype";
        // Object.defineProperty(x, 'name', { value: any, writable?: boolean (false by default) });
        // Object.defineProperty(x, 'name', { get: Function, set: Function });
        // Object.defineProperty(x, 'name', { get: Function });
        // Object.defineProperty(x, 'name', { set: Function });
        AssignmentDeclarationKind[AssignmentDeclarationKind["ObjectDefinePropertyValue"] = 7] = "ObjectDefinePropertyValue";
        // Object.defineProperty(exports || module.exports, 'name', ...);
        AssignmentDeclarationKind[AssignmentDeclarationKind["ObjectDefinePropertyExports"] = 8] = "ObjectDefinePropertyExports";
        // Object.defineProperty(Foo.prototype, 'name', ...);
        AssignmentDeclarationKind[AssignmentDeclarationKind["ObjectDefinePrototypeProperty"] = 9] = "ObjectDefinePrototypeProperty";
    })(AssignmentDeclarationKind = ts.AssignmentDeclarationKind || (ts.AssignmentDeclarationKind = {}));
    var DiagnosticCategory;
    (function (DiagnosticCategory) {
        DiagnosticCategory[DiagnosticCategory["Warning"] = 0] = "Warning";
        DiagnosticCategory[DiagnosticCategory["Error"] = 1] = "Error";
        DiagnosticCategory[DiagnosticCategory["Suggestion"] = 2] = "Suggestion";
        DiagnosticCategory[DiagnosticCategory["Message"] = 3] = "Message";
    })(DiagnosticCategory = ts.DiagnosticCategory || (ts.DiagnosticCategory = {}));
    /* @internal */
    function diagnosticCategoryName(d, lowerCase) {
        if (lowerCase === void 0) { lowerCase = true; }
        var name = DiagnosticCategory[d.category];
        return lowerCase ? name.toLowerCase() : name;
    }
    ts.diagnosticCategoryName = diagnosticCategoryName;
    var ModuleResolutionKind;
    (function (ModuleResolutionKind) {
        ModuleResolutionKind[ModuleResolutionKind["Classic"] = 1] = "Classic";
        ModuleResolutionKind[ModuleResolutionKind["NodeJs"] = 2] = "NodeJs";
        // Starting with node12, node's module resolver has significant departures from traditional cjs resolution
        // to better support ecmascript modules and their use within node - however more features are still being added.
        // TypeScript's Node ESM support was introduced after Node 12 went end-of-life, and Node 14 is the earliest stable
        // version that supports both pattern trailers - *but*, Node 16 is the first version that also supports ECMASCript 2022.
        // In turn, we offer both a `NodeNext` moving resolution target, and a `Node16` version-anchored resolution target
        ModuleResolutionKind[ModuleResolutionKind["Node16"] = 3] = "Node16";
        ModuleResolutionKind[ModuleResolutionKind["NodeNext"] = 99] = "NodeNext";
    })(ModuleResolutionKind = ts.ModuleResolutionKind || (ts.ModuleResolutionKind = {}));
    var ModuleDetectionKind;
    (function (ModuleDetectionKind) {
        /**
         * Files with imports, exports and/or import.meta are considered modules
         */
        ModuleDetectionKind[ModuleDetectionKind["Legacy"] = 1] = "Legacy";
        /**
         * Legacy, but also files with jsx under react-jsx or react-jsxdev and esm mode files under moduleResolution: node16+
         */
        ModuleDetectionKind[ModuleDetectionKind["Auto"] = 2] = "Auto";
        /**
         * Consider all non-declaration files modules, regardless of present syntax
         */
        ModuleDetectionKind[ModuleDetectionKind["Force"] = 3] = "Force";
    })(ModuleDetectionKind = ts.ModuleDetectionKind || (ts.ModuleDetectionKind = {}));
    var WatchFileKind;
    (function (WatchFileKind) {
        WatchFileKind[WatchFileKind["FixedPollingInterval"] = 0] = "FixedPollingInterval";
        WatchFileKind[WatchFileKind["PriorityPollingInterval"] = 1] = "PriorityPollingInterval";
        WatchFileKind[WatchFileKind["DynamicPriorityPolling"] = 2] = "DynamicPriorityPolling";
        WatchFileKind[WatchFileKind["FixedChunkSizePolling"] = 3] = "FixedChunkSizePolling";
        WatchFileKind[WatchFileKind["UseFsEvents"] = 4] = "UseFsEvents";
        WatchFileKind[WatchFileKind["UseFsEventsOnParentDirectory"] = 5] = "UseFsEventsOnParentDirectory";
    })(WatchFileKind = ts.WatchFileKind || (ts.WatchFileKind = {}));
    var WatchDirectoryKind;
    (function (WatchDirectoryKind) {
        WatchDirectoryKind[WatchDirectoryKind["UseFsEvents"] = 0] = "UseFsEvents";
        WatchDirectoryKind[WatchDirectoryKind["FixedPollingInterval"] = 1] = "FixedPollingInterval";
        WatchDirectoryKind[WatchDirectoryKind["DynamicPriorityPolling"] = 2] = "DynamicPriorityPolling";
        WatchDirectoryKind[WatchDirectoryKind["FixedChunkSizePolling"] = 3] = "FixedChunkSizePolling";
    })(WatchDirectoryKind = ts.WatchDirectoryKind || (ts.WatchDirectoryKind = {}));
    var PollingWatchKind;
    (function (PollingWatchKind) {
        PollingWatchKind[PollingWatchKind["FixedInterval"] = 0] = "FixedInterval";
        PollingWatchKind[PollingWatchKind["PriorityInterval"] = 1] = "PriorityInterval";
        PollingWatchKind[PollingWatchKind["DynamicPriority"] = 2] = "DynamicPriority";
        PollingWatchKind[PollingWatchKind["FixedChunkSize"] = 3] = "FixedChunkSize";
    })(PollingWatchKind = ts.PollingWatchKind || (ts.PollingWatchKind = {}));
    var ModuleKind;
    (function (ModuleKind) {
        ModuleKind[ModuleKind["None"] = 0] = "None";
        ModuleKind[ModuleKind["CommonJS"] = 1] = "CommonJS";
        ModuleKind[ModuleKind["AMD"] = 2] = "AMD";
        ModuleKind[ModuleKind["UMD"] = 3] = "UMD";
        ModuleKind[ModuleKind["System"] = 4] = "System";
        // NOTE: ES module kinds should be contiguous to more easily check whether a module kind is *any* ES module kind.
        //       Non-ES module kinds should not come between ES2015 (the earliest ES module kind) and ESNext (the last ES
        //       module kind).
        ModuleKind[ModuleKind["ES2015"] = 5] = "ES2015";
        ModuleKind[ModuleKind["ES2020"] = 6] = "ES2020";
        ModuleKind[ModuleKind["ES2022"] = 7] = "ES2022";
        ModuleKind[ModuleKind["ESNext"] = 99] = "ESNext";
        // Node16+ is an amalgam of commonjs (albeit updated) and es2022+, and represents a distinct module system from es2020/esnext
        ModuleKind[ModuleKind["Node16"] = 100] = "Node16";
        ModuleKind[ModuleKind["NodeNext"] = 199] = "NodeNext";
    })(ModuleKind = ts.ModuleKind || (ts.ModuleKind = {}));
    var JsxEmit;
    (function (JsxEmit) {
        JsxEmit[JsxEmit["None"] = 0] = "None";
        JsxEmit[JsxEmit["Preserve"] = 1] = "Preserve";
        JsxEmit[JsxEmit["React"] = 2] = "React";
        JsxEmit[JsxEmit["ReactNative"] = 3] = "ReactNative";
        JsxEmit[JsxEmit["ReactJSX"] = 4] = "ReactJSX";
        JsxEmit[JsxEmit["ReactJSXDev"] = 5] = "ReactJSXDev";
    })(JsxEmit = ts.JsxEmit || (ts.JsxEmit = {}));
    var ImportsNotUsedAsValues;
    (function (ImportsNotUsedAsValues) {
        ImportsNotUsedAsValues[ImportsNotUsedAsValues["Remove"] = 0] = "Remove";
        ImportsNotUsedAsValues[ImportsNotUsedAsValues["Preserve"] = 1] = "Preserve";
        ImportsNotUsedAsValues[ImportsNotUsedAsValues["Error"] = 2] = "Error";
    })(ImportsNotUsedAsValues = ts.ImportsNotUsedAsValues || (ts.ImportsNotUsedAsValues = {}));
    var NewLineKind;
    (function (NewLineKind) {
        NewLineKind[NewLineKind["CarriageReturnLineFeed"] = 0] = "CarriageReturnLineFeed";
        NewLineKind[NewLineKind["LineFeed"] = 1] = "LineFeed";
    })(NewLineKind = ts.NewLineKind || (ts.NewLineKind = {}));
    var ScriptKind;
    (function (ScriptKind) {
        ScriptKind[ScriptKind["Unknown"] = 0] = "Unknown";
        ScriptKind[ScriptKind["JS"] = 1] = "JS";
        ScriptKind[ScriptKind["JSX"] = 2] = "JSX";
        ScriptKind[ScriptKind["TS"] = 3] = "TS";
        ScriptKind[ScriptKind["TSX"] = 4] = "TSX";
        ScriptKind[ScriptKind["External"] = 5] = "External";
        ScriptKind[ScriptKind["JSON"] = 6] = "JSON";
        /**
         * Used on extensions that doesn't define the ScriptKind but the content defines it.
         * Deferred extensions are going to be included in all project contexts.
         */
        ScriptKind[ScriptKind["Deferred"] = 7] = "Deferred";
    })(ScriptKind = ts.ScriptKind || (ts.ScriptKind = {}));
    var ScriptTarget;
    (function (ScriptTarget) {
        ScriptTarget[ScriptTarget["ES3"] = 0] = "ES3";
        ScriptTarget[ScriptTarget["ES5"] = 1] = "ES5";
        ScriptTarget[ScriptTarget["ES2015"] = 2] = "ES2015";
        ScriptTarget[ScriptTarget["ES2016"] = 3] = "ES2016";
        ScriptTarget[ScriptTarget["ES2017"] = 4] = "ES2017";
        ScriptTarget[ScriptTarget["ES2018"] = 5] = "ES2018";
        ScriptTarget[ScriptTarget["ES2019"] = 6] = "ES2019";
        ScriptTarget[ScriptTarget["ES2020"] = 7] = "ES2020";
        ScriptTarget[ScriptTarget["ES2021"] = 8] = "ES2021";
        ScriptTarget[ScriptTarget["ES2022"] = 9] = "ES2022";
        ScriptTarget[ScriptTarget["ESNext"] = 99] = "ESNext";
        ScriptTarget[ScriptTarget["JSON"] = 100] = "JSON";
        ScriptTarget[ScriptTarget["Latest"] = 99] = "Latest";
    })(ScriptTarget = ts.ScriptTarget || (ts.ScriptTarget = {}));
    var LanguageVariant;
    (function (LanguageVariant) {
        LanguageVariant[LanguageVariant["Standard"] = 0] = "Standard";
        LanguageVariant[LanguageVariant["JSX"] = 1] = "JSX";
    })(LanguageVariant = ts.LanguageVariant || (ts.LanguageVariant = {}));
    var WatchDirectoryFlags;
    (function (WatchDirectoryFlags) {
        WatchDirectoryFlags[WatchDirectoryFlags["None"] = 0] = "None";
        WatchDirectoryFlags[WatchDirectoryFlags["Recursive"] = 1] = "Recursive";
    })(WatchDirectoryFlags = ts.WatchDirectoryFlags || (ts.WatchDirectoryFlags = {}));
    /* @internal */
    var CharacterCodes;
    (function (CharacterCodes) {
        CharacterCodes[CharacterCodes["nullCharacter"] = 0] = "nullCharacter";
        CharacterCodes[CharacterCodes["maxAsciiCharacter"] = 127] = "maxAsciiCharacter";
        CharacterCodes[CharacterCodes["lineFeed"] = 10] = "lineFeed";
        CharacterCodes[CharacterCodes["carriageReturn"] = 13] = "carriageReturn";
        CharacterCodes[CharacterCodes["lineSeparator"] = 8232] = "lineSeparator";
        CharacterCodes[CharacterCodes["paragraphSeparator"] = 8233] = "paragraphSeparator";
        CharacterCodes[CharacterCodes["nextLine"] = 133] = "nextLine";
        // Unicode 3.0 space characters
        CharacterCodes[CharacterCodes["space"] = 32] = "space";
        CharacterCodes[CharacterCodes["nonBreakingSpace"] = 160] = "nonBreakingSpace";
        CharacterCodes[CharacterCodes["enQuad"] = 8192] = "enQuad";
        CharacterCodes[CharacterCodes["emQuad"] = 8193] = "emQuad";
        CharacterCodes[CharacterCodes["enSpace"] = 8194] = "enSpace";
        CharacterCodes[CharacterCodes["emSpace"] = 8195] = "emSpace";
        CharacterCodes[CharacterCodes["threePerEmSpace"] = 8196] = "threePerEmSpace";
        CharacterCodes[CharacterCodes["fourPerEmSpace"] = 8197] = "fourPerEmSpace";
        CharacterCodes[CharacterCodes["sixPerEmSpace"] = 8198] = "sixPerEmSpace";
        CharacterCodes[CharacterCodes["figureSpace"] = 8199] = "figureSpace";
        CharacterCodes[CharacterCodes["punctuationSpace"] = 8200] = "punctuationSpace";
        CharacterCodes[CharacterCodes["thinSpace"] = 8201] = "thinSpace";
        CharacterCodes[CharacterCodes["hairSpace"] = 8202] = "hairSpace";
        CharacterCodes[CharacterCodes["zeroWidthSpace"] = 8203] = "zeroWidthSpace";
        CharacterCodes[CharacterCodes["narrowNoBreakSpace"] = 8239] = "narrowNoBreakSpace";
        CharacterCodes[CharacterCodes["ideographicSpace"] = 12288] = "ideographicSpace";
        CharacterCodes[CharacterCodes["mathematicalSpace"] = 8287] = "mathematicalSpace";
        CharacterCodes[CharacterCodes["ogham"] = 5760] = "ogham";
        CharacterCodes[CharacterCodes["_"] = 95] = "_";
        CharacterCodes[CharacterCodes["$"] = 36] = "$";
        CharacterCodes[CharacterCodes["_0"] = 48] = "_0";
        CharacterCodes[CharacterCodes["_1"] = 49] = "_1";
        CharacterCodes[CharacterCodes["_2"] = 50] = "_2";
        CharacterCodes[CharacterCodes["_3"] = 51] = "_3";
        CharacterCodes[CharacterCodes["_4"] = 52] = "_4";
        CharacterCodes[CharacterCodes["_5"] = 53] = "_5";
        CharacterCodes[CharacterCodes["_6"] = 54] = "_6";
        CharacterCodes[CharacterCodes["_7"] = 55] = "_7";
        CharacterCodes[CharacterCodes["_8"] = 56] = "_8";
        CharacterCodes[CharacterCodes["_9"] = 57] = "_9";
        CharacterCodes[CharacterCodes["a"] = 97] = "a";
        CharacterCodes[CharacterCodes["b"] = 98] = "b";
        CharacterCodes[CharacterCodes["c"] = 99] = "c";
        CharacterCodes[CharacterCodes["d"] = 100] = "d";
        CharacterCodes[CharacterCodes["e"] = 101] = "e";
        CharacterCodes[CharacterCodes["f"] = 102] = "f";
        CharacterCodes[CharacterCodes["g"] = 103] = "g";
        CharacterCodes[CharacterCodes["h"] = 104] = "h";
        CharacterCodes[CharacterCodes["i"] = 105] = "i";
        CharacterCodes[CharacterCodes["j"] = 106] = "j";
        CharacterCodes[CharacterCodes["k"] = 107] = "k";
        CharacterCodes[CharacterCodes["l"] = 108] = "l";
        CharacterCodes[CharacterCodes["m"] = 109] = "m";
        CharacterCodes[CharacterCodes["n"] = 110] = "n";
        CharacterCodes[CharacterCodes["o"] = 111] = "o";
        CharacterCodes[CharacterCodes["p"] = 112] = "p";
        CharacterCodes[CharacterCodes["q"] = 113] = "q";
        CharacterCodes[CharacterCodes["r"] = 114] = "r";
        CharacterCodes[CharacterCodes["s"] = 115] = "s";
        CharacterCodes[CharacterCodes["t"] = 116] = "t";
        CharacterCodes[CharacterCodes["u"] = 117] = "u";
        CharacterCodes[CharacterCodes["v"] = 118] = "v";
        CharacterCodes[CharacterCodes["w"] = 119] = "w";
        CharacterCodes[CharacterCodes["x"] = 120] = "x";
        CharacterCodes[CharacterCodes["y"] = 121] = "y";
        CharacterCodes[CharacterCodes["z"] = 122] = "z";
        CharacterCodes[CharacterCodes["A"] = 65] = "A";
        CharacterCodes[CharacterCodes["B"] = 66] = "B";
        CharacterCodes[CharacterCodes["C"] = 67] = "C";
        CharacterCodes[CharacterCodes["D"] = 68] = "D";
        CharacterCodes[CharacterCodes["E"] = 69] = "E";
        CharacterCodes[CharacterCodes["F"] = 70] = "F";
        CharacterCodes[CharacterCodes["G"] = 71] = "G";
        CharacterCodes[CharacterCodes["H"] = 72] = "H";
        CharacterCodes[CharacterCodes["I"] = 73] = "I";
        CharacterCodes[CharacterCodes["J"] = 74] = "J";
        CharacterCodes[CharacterCodes["K"] = 75] = "K";
        CharacterCodes[CharacterCodes["L"] = 76] = "L";
        CharacterCodes[CharacterCodes["M"] = 77] = "M";
        CharacterCodes[CharacterCodes["N"] = 78] = "N";
        CharacterCodes[CharacterCodes["O"] = 79] = "O";
        CharacterCodes[CharacterCodes["P"] = 80] = "P";
        CharacterCodes[CharacterCodes["Q"] = 81] = "Q";
        CharacterCodes[CharacterCodes["R"] = 82] = "R";
        CharacterCodes[CharacterCodes["S"] = 83] = "S";
        CharacterCodes[CharacterCodes["T"] = 84] = "T";
        CharacterCodes[CharacterCodes["U"] = 85] = "U";
        CharacterCodes[CharacterCodes["V"] = 86] = "V";
        CharacterCodes[CharacterCodes["W"] = 87] = "W";
        CharacterCodes[CharacterCodes["X"] = 88] = "X";
        CharacterCodes[CharacterCodes["Y"] = 89] = "Y";
        CharacterCodes[CharacterCodes["Z"] = 90] = "Z";
        CharacterCodes[CharacterCodes["ampersand"] = 38] = "ampersand";
        CharacterCodes[CharacterCodes["asterisk"] = 42] = "asterisk";
        CharacterCodes[CharacterCodes["at"] = 64] = "at";
        CharacterCodes[CharacterCodes["backslash"] = 92] = "backslash";
        CharacterCodes[CharacterCodes["backtick"] = 96] = "backtick";
        CharacterCodes[CharacterCodes["bar"] = 124] = "bar";
        CharacterCodes[CharacterCodes["caret"] = 94] = "caret";
        CharacterCodes[CharacterCodes["closeBrace"] = 125] = "closeBrace";
        CharacterCodes[CharacterCodes["closeBracket"] = 93] = "closeBracket";
        CharacterCodes[CharacterCodes["closeParen"] = 41] = "closeParen";
        CharacterCodes[CharacterCodes["colon"] = 58] = "colon";
        CharacterCodes[CharacterCodes["comma"] = 44] = "comma";
        CharacterCodes[CharacterCodes["dot"] = 46] = "dot";
        CharacterCodes[CharacterCodes["doubleQuote"] = 34] = "doubleQuote";
        CharacterCodes[CharacterCodes["equals"] = 61] = "equals";
        CharacterCodes[CharacterCodes["exclamation"] = 33] = "exclamation";
        CharacterCodes[CharacterCodes["greaterThan"] = 62] = "greaterThan";
        CharacterCodes[CharacterCodes["hash"] = 35] = "hash";
        CharacterCodes[CharacterCodes["lessThan"] = 60] = "lessThan";
        CharacterCodes[CharacterCodes["minus"] = 45] = "minus";
        CharacterCodes[CharacterCodes["openBrace"] = 123] = "openBrace";
        CharacterCodes[CharacterCodes["openBracket"] = 91] = "openBracket";
        CharacterCodes[CharacterCodes["openParen"] = 40] = "openParen";
        CharacterCodes[CharacterCodes["percent"] = 37] = "percent";
        CharacterCodes[CharacterCodes["plus"] = 43] = "plus";
        CharacterCodes[CharacterCodes["question"] = 63] = "question";
        CharacterCodes[CharacterCodes["semicolon"] = 59] = "semicolon";
        CharacterCodes[CharacterCodes["singleQuote"] = 39] = "singleQuote";
        CharacterCodes[CharacterCodes["slash"] = 47] = "slash";
        CharacterCodes[CharacterCodes["tilde"] = 126] = "tilde";
        CharacterCodes[CharacterCodes["backspace"] = 8] = "backspace";
        CharacterCodes[CharacterCodes["formFeed"] = 12] = "formFeed";
        CharacterCodes[CharacterCodes["byteOrderMark"] = 65279] = "byteOrderMark";
        CharacterCodes[CharacterCodes["tab"] = 9] = "tab";
        CharacterCodes[CharacterCodes["verticalTab"] = 11] = "verticalTab";
    })(CharacterCodes = ts.CharacterCodes || (ts.CharacterCodes = {}));
    var Extension;
    (function (Extension) {
        Extension["Ts"] = ".ts";
        Extension["Tsx"] = ".tsx";
        Extension["Dts"] = ".d.ts";
        Extension["Js"] = ".js";
        Extension["Jsx"] = ".jsx";
        Extension["Json"] = ".json";
        Extension["TsBuildInfo"] = ".tsbuildinfo";
        Extension["Mjs"] = ".mjs";
        Extension["Mts"] = ".mts";
        Extension["Dmts"] = ".d.mts";
        Extension["Cjs"] = ".cjs";
        Extension["Cts"] = ".cts";
        Extension["Dcts"] = ".d.cts";
    })(Extension = ts.Extension || (ts.Extension = {}));
    /* @internal */
    var TransformFlags;
    (function (TransformFlags) {
        TransformFlags[TransformFlags["None"] = 0] = "None";
        // Facts
        // - Flags used to indicate that a node or subtree contains syntax that requires transformation.
        TransformFlags[TransformFlags["ContainsTypeScript"] = 1] = "ContainsTypeScript";
        TransformFlags[TransformFlags["ContainsJsx"] = 2] = "ContainsJsx";
        TransformFlags[TransformFlags["ContainsESNext"] = 4] = "ContainsESNext";
        TransformFlags[TransformFlags["ContainsES2022"] = 8] = "ContainsES2022";
        TransformFlags[TransformFlags["ContainsES2021"] = 16] = "ContainsES2021";
        TransformFlags[TransformFlags["ContainsES2020"] = 32] = "ContainsES2020";
        TransformFlags[TransformFlags["ContainsES2019"] = 64] = "ContainsES2019";
        TransformFlags[TransformFlags["ContainsES2018"] = 128] = "ContainsES2018";
        TransformFlags[TransformFlags["ContainsES2017"] = 256] = "ContainsES2017";
        TransformFlags[TransformFlags["ContainsES2016"] = 512] = "ContainsES2016";
        TransformFlags[TransformFlags["ContainsES2015"] = 1024] = "ContainsES2015";
        TransformFlags[TransformFlags["ContainsGenerator"] = 2048] = "ContainsGenerator";
        TransformFlags[TransformFlags["ContainsDestructuringAssignment"] = 4096] = "ContainsDestructuringAssignment";
        // Markers
        // - Flags used to indicate that a subtree contains a specific transformation.
        TransformFlags[TransformFlags["ContainsTypeScriptClassSyntax"] = 8192] = "ContainsTypeScriptClassSyntax";
        TransformFlags[TransformFlags["ContainsLexicalThis"] = 16384] = "ContainsLexicalThis";
        TransformFlags[TransformFlags["ContainsRestOrSpread"] = 32768] = "ContainsRestOrSpread";
        TransformFlags[TransformFlags["ContainsObjectRestOrSpread"] = 65536] = "ContainsObjectRestOrSpread";
        TransformFlags[TransformFlags["ContainsComputedPropertyName"] = 131072] = "ContainsComputedPropertyName";
        TransformFlags[TransformFlags["ContainsBlockScopedBinding"] = 262144] = "ContainsBlockScopedBinding";
        TransformFlags[TransformFlags["ContainsBindingPattern"] = 524288] = "ContainsBindingPattern";
        TransformFlags[TransformFlags["ContainsYield"] = 1048576] = "ContainsYield";
        TransformFlags[TransformFlags["ContainsAwait"] = 2097152] = "ContainsAwait";
        TransformFlags[TransformFlags["ContainsHoistedDeclarationOrCompletion"] = 4194304] = "ContainsHoistedDeclarationOrCompletion";
        TransformFlags[TransformFlags["ContainsDynamicImport"] = 8388608] = "ContainsDynamicImport";
        TransformFlags[TransformFlags["ContainsClassFields"] = 16777216] = "ContainsClassFields";
        TransformFlags[TransformFlags["ContainsDecorators"] = 33554432] = "ContainsDecorators";
        TransformFlags[TransformFlags["ContainsPossibleTopLevelAwait"] = 67108864] = "ContainsPossibleTopLevelAwait";
        TransformFlags[TransformFlags["ContainsLexicalSuper"] = 134217728] = "ContainsLexicalSuper";
        TransformFlags[TransformFlags["ContainsUpdateExpressionForIdentifier"] = 268435456] = "ContainsUpdateExpressionForIdentifier";
        TransformFlags[TransformFlags["ContainsPrivateIdentifierInExpression"] = 536870912] = "ContainsPrivateIdentifierInExpression";
        TransformFlags[TransformFlags["HasComputedFlags"] = -2147483648] = "HasComputedFlags";
        // Assertions
        // - Bitmasks that are used to assert facts about the syntax of a node and its subtree.
        TransformFlags[TransformFlags["AssertTypeScript"] = 1] = "AssertTypeScript";
        TransformFlags[TransformFlags["AssertJsx"] = 2] = "AssertJsx";
        TransformFlags[TransformFlags["AssertESNext"] = 4] = "AssertESNext";
        TransformFlags[TransformFlags["AssertES2022"] = 8] = "AssertES2022";
        TransformFlags[TransformFlags["AssertES2021"] = 16] = "AssertES2021";
        TransformFlags[TransformFlags["AssertES2020"] = 32] = "AssertES2020";
        TransformFlags[TransformFlags["AssertES2019"] = 64] = "AssertES2019";
        TransformFlags[TransformFlags["AssertES2018"] = 128] = "AssertES2018";
        TransformFlags[TransformFlags["AssertES2017"] = 256] = "AssertES2017";
        TransformFlags[TransformFlags["AssertES2016"] = 512] = "AssertES2016";
        TransformFlags[TransformFlags["AssertES2015"] = 1024] = "AssertES2015";
        TransformFlags[TransformFlags["AssertGenerator"] = 2048] = "AssertGenerator";
        TransformFlags[TransformFlags["AssertDestructuringAssignment"] = 4096] = "AssertDestructuringAssignment";
        // Scope Exclusions
        // - Bitmasks that exclude flags from propagating out of a specific context
        //   into the subtree flags of their container.
        TransformFlags[TransformFlags["OuterExpressionExcludes"] = -2147483648] = "OuterExpressionExcludes";
        TransformFlags[TransformFlags["PropertyAccessExcludes"] = -2147483648] = "PropertyAccessExcludes";
        TransformFlags[TransformFlags["NodeExcludes"] = -2147483648] = "NodeExcludes";
        TransformFlags[TransformFlags["ArrowFunctionExcludes"] = -2072174592] = "ArrowFunctionExcludes";
        TransformFlags[TransformFlags["FunctionExcludes"] = -1937940480] = "FunctionExcludes";
        TransformFlags[TransformFlags["ConstructorExcludes"] = -1937948672] = "ConstructorExcludes";
        TransformFlags[TransformFlags["MethodOrAccessorExcludes"] = -2005057536] = "MethodOrAccessorExcludes";
        TransformFlags[TransformFlags["PropertyExcludes"] = -2013249536] = "PropertyExcludes";
        TransformFlags[TransformFlags["ClassExcludes"] = -2147344384] = "ClassExcludes";
        TransformFlags[TransformFlags["ModuleExcludes"] = -1941676032] = "ModuleExcludes";
        TransformFlags[TransformFlags["TypeExcludes"] = -2] = "TypeExcludes";
        TransformFlags[TransformFlags["ObjectLiteralExcludes"] = -2147278848] = "ObjectLiteralExcludes";
        TransformFlags[TransformFlags["ArrayLiteralOrCallOrNewExcludes"] = -2147450880] = "ArrayLiteralOrCallOrNewExcludes";
        TransformFlags[TransformFlags["VariableDeclarationListExcludes"] = -2146893824] = "VariableDeclarationListExcludes";
        TransformFlags[TransformFlags["ParameterExcludes"] = -2147483648] = "ParameterExcludes";
        TransformFlags[TransformFlags["CatchClauseExcludes"] = -2147418112] = "CatchClauseExcludes";
        TransformFlags[TransformFlags["BindingPatternExcludes"] = -2147450880] = "BindingPatternExcludes";
        TransformFlags[TransformFlags["ContainsLexicalThisOrSuper"] = 134234112] = "ContainsLexicalThisOrSuper";
        // Propagating flags
        // - Bitmasks for flags that should propagate from a child
        TransformFlags[TransformFlags["PropertyNamePropagatingFlags"] = 134234112] = "PropertyNamePropagatingFlags";
        // Masks
        // - Additional bitmasks
    })(TransformFlags = ts.TransformFlags || (ts.TransformFlags = {}));
    // Reference: https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax
    /* @internal */
    var SnippetKind;
    (function (SnippetKind) {
        SnippetKind[SnippetKind["TabStop"] = 0] = "TabStop";
        SnippetKind[SnippetKind["Placeholder"] = 1] = "Placeholder";
        SnippetKind[SnippetKind["Choice"] = 2] = "Choice";
        SnippetKind[SnippetKind["Variable"] = 3] = "Variable";
    })(SnippetKind = ts.SnippetKind || (ts.SnippetKind = {}));
    var EmitFlags;
    (function (EmitFlags) {
        EmitFlags[EmitFlags["None"] = 0] = "None";
        EmitFlags[EmitFlags["SingleLine"] = 1] = "SingleLine";
        EmitFlags[EmitFlags["AdviseOnEmitNode"] = 2] = "AdviseOnEmitNode";
        EmitFlags[EmitFlags["NoSubstitution"] = 4] = "NoSubstitution";
        EmitFlags[EmitFlags["CapturesThis"] = 8] = "CapturesThis";
        EmitFlags[EmitFlags["NoLeadingSourceMap"] = 16] = "NoLeadingSourceMap";
        EmitFlags[EmitFlags["NoTrailingSourceMap"] = 32] = "NoTrailingSourceMap";
        EmitFlags[EmitFlags["NoSourceMap"] = 48] = "NoSourceMap";
        EmitFlags[EmitFlags["NoNestedSourceMaps"] = 64] = "NoNestedSourceMaps";
        EmitFlags[EmitFlags["NoTokenLeadingSourceMaps"] = 128] = "NoTokenLeadingSourceMaps";
        EmitFlags[EmitFlags["NoTokenTrailingSourceMaps"] = 256] = "NoTokenTrailingSourceMaps";
        EmitFlags[EmitFlags["NoTokenSourceMaps"] = 384] = "NoTokenSourceMaps";
        EmitFlags[EmitFlags["NoLeadingComments"] = 512] = "NoLeadingComments";
        EmitFlags[EmitFlags["NoTrailingComments"] = 1024] = "NoTrailingComments";
        EmitFlags[EmitFlags["NoComments"] = 1536] = "NoComments";
        EmitFlags[EmitFlags["NoNestedComments"] = 2048] = "NoNestedComments";
        EmitFlags[EmitFlags["HelperName"] = 4096] = "HelperName";
        EmitFlags[EmitFlags["ExportName"] = 8192] = "ExportName";
        EmitFlags[EmitFlags["LocalName"] = 16384] = "LocalName";
        EmitFlags[EmitFlags["InternalName"] = 32768] = "InternalName";
        EmitFlags[EmitFlags["Indented"] = 65536] = "Indented";
        EmitFlags[EmitFlags["NoIndentation"] = 131072] = "NoIndentation";
        EmitFlags[EmitFlags["AsyncFunctionBody"] = 262144] = "AsyncFunctionBody";
        EmitFlags[EmitFlags["ReuseTempVariableScope"] = 524288] = "ReuseTempVariableScope";
        EmitFlags[EmitFlags["CustomPrologue"] = 1048576] = "CustomPrologue";
        EmitFlags[EmitFlags["NoHoisting"] = 2097152] = "NoHoisting";
        EmitFlags[EmitFlags["HasEndOfDeclarationMarker"] = 4194304] = "HasEndOfDeclarationMarker";
        EmitFlags[EmitFlags["Iterator"] = 8388608] = "Iterator";
        EmitFlags[EmitFlags["NoAsciiEscaping"] = 16777216] = "NoAsciiEscaping";
        /*@internal*/ EmitFlags[EmitFlags["TypeScriptClassWrapper"] = 33554432] = "TypeScriptClassWrapper";
        /*@internal*/ EmitFlags[EmitFlags["NeverApplyImportHelper"] = 67108864] = "NeverApplyImportHelper";
        /*@internal*/ EmitFlags[EmitFlags["IgnoreSourceNewlines"] = 134217728] = "IgnoreSourceNewlines";
        /*@internal*/ EmitFlags[EmitFlags["Immutable"] = 268435456] = "Immutable";
        /*@internal*/ EmitFlags[EmitFlags["IndirectCall"] = 536870912] = "IndirectCall";
    })(EmitFlags = ts.EmitFlags || (ts.EmitFlags = {}));
    /**
     * Used by the checker, this enum keeps track of external emit helpers that should be type
     * checked.
     */
    /* @internal */
    var ExternalEmitHelpers;
    (function (ExternalEmitHelpers) {
        ExternalEmitHelpers[ExternalEmitHelpers["Extends"] = 1] = "Extends";
        ExternalEmitHelpers[ExternalEmitHelpers["Assign"] = 2] = "Assign";
        ExternalEmitHelpers[ExternalEmitHelpers["Rest"] = 4] = "Rest";
        ExternalEmitHelpers[ExternalEmitHelpers["Decorate"] = 8] = "Decorate";
        ExternalEmitHelpers[ExternalEmitHelpers["Metadata"] = 16] = "Metadata";
        ExternalEmitHelpers[ExternalEmitHelpers["Param"] = 32] = "Param";
        ExternalEmitHelpers[ExternalEmitHelpers["Awaiter"] = 64] = "Awaiter";
        ExternalEmitHelpers[ExternalEmitHelpers["Generator"] = 128] = "Generator";
        ExternalEmitHelpers[ExternalEmitHelpers["Values"] = 256] = "Values";
        ExternalEmitHelpers[ExternalEmitHelpers["Read"] = 512] = "Read";
        ExternalEmitHelpers[ExternalEmitHelpers["SpreadArray"] = 1024] = "SpreadArray";
        ExternalEmitHelpers[ExternalEmitHelpers["Await"] = 2048] = "Await";
        ExternalEmitHelpers[ExternalEmitHelpers["AsyncGenerator"] = 4096] = "AsyncGenerator";
        ExternalEmitHelpers[ExternalEmitHelpers["AsyncDelegator"] = 8192] = "AsyncDelegator";
        ExternalEmitHelpers[ExternalEmitHelpers["AsyncValues"] = 16384] = "AsyncValues";
        ExternalEmitHelpers[ExternalEmitHelpers["ExportStar"] = 32768] = "ExportStar";
        ExternalEmitHelpers[ExternalEmitHelpers["ImportStar"] = 65536] = "ImportStar";
        ExternalEmitHelpers[ExternalEmitHelpers["ImportDefault"] = 131072] = "ImportDefault";
        ExternalEmitHelpers[ExternalEmitHelpers["MakeTemplateObject"] = 262144] = "MakeTemplateObject";
        ExternalEmitHelpers[ExternalEmitHelpers["ClassPrivateFieldGet"] = 524288] = "ClassPrivateFieldGet";
        ExternalEmitHelpers[ExternalEmitHelpers["ClassPrivateFieldSet"] = 1048576] = "ClassPrivateFieldSet";
        ExternalEmitHelpers[ExternalEmitHelpers["ClassPrivateFieldIn"] = 2097152] = "ClassPrivateFieldIn";
        ExternalEmitHelpers[ExternalEmitHelpers["CreateBinding"] = 4194304] = "CreateBinding";
        ExternalEmitHelpers[ExternalEmitHelpers["FirstEmitHelper"] = 1] = "FirstEmitHelper";
        ExternalEmitHelpers[ExternalEmitHelpers["LastEmitHelper"] = 4194304] = "LastEmitHelper";
        // Helpers included by ES2015 for..of
        ExternalEmitHelpers[ExternalEmitHelpers["ForOfIncludes"] = 256] = "ForOfIncludes";
        // Helpers included by ES2017 for..await..of
        ExternalEmitHelpers[ExternalEmitHelpers["ForAwaitOfIncludes"] = 16384] = "ForAwaitOfIncludes";
        // Helpers included by ES2017 async generators
        ExternalEmitHelpers[ExternalEmitHelpers["AsyncGeneratorIncludes"] = 6144] = "AsyncGeneratorIncludes";
        // Helpers included by yield* in ES2017 async generators
        ExternalEmitHelpers[ExternalEmitHelpers["AsyncDelegatorIncludes"] = 26624] = "AsyncDelegatorIncludes";
        // Helpers included by ES2015 spread
        ExternalEmitHelpers[ExternalEmitHelpers["SpreadIncludes"] = 1536] = "SpreadIncludes";
    })(ExternalEmitHelpers = ts.ExternalEmitHelpers || (ts.ExternalEmitHelpers = {}));
    var EmitHint;
    (function (EmitHint) {
        EmitHint[EmitHint["SourceFile"] = 0] = "SourceFile";
        EmitHint[EmitHint["Expression"] = 1] = "Expression";
        EmitHint[EmitHint["IdentifierName"] = 2] = "IdentifierName";
        EmitHint[EmitHint["MappedTypeParameter"] = 3] = "MappedTypeParameter";
        EmitHint[EmitHint["Unspecified"] = 4] = "Unspecified";
        EmitHint[EmitHint["EmbeddedStatement"] = 5] = "EmbeddedStatement";
        EmitHint[EmitHint["JsxAttributeValue"] = 6] = "JsxAttributeValue";
    })(EmitHint = ts.EmitHint || (ts.EmitHint = {}));
    var OuterExpressionKinds;
    (function (OuterExpressionKinds) {
        OuterExpressionKinds[OuterExpressionKinds["Parentheses"] = 1] = "Parentheses";
        OuterExpressionKinds[OuterExpressionKinds["TypeAssertions"] = 2] = "TypeAssertions";
        OuterExpressionKinds[OuterExpressionKinds["NonNullAssertions"] = 4] = "NonNullAssertions";
        OuterExpressionKinds[OuterExpressionKinds["PartiallyEmittedExpressions"] = 8] = "PartiallyEmittedExpressions";
        OuterExpressionKinds[OuterExpressionKinds["Assertions"] = 6] = "Assertions";
        OuterExpressionKinds[OuterExpressionKinds["All"] = 15] = "All";
        OuterExpressionKinds[OuterExpressionKinds["ExcludeJSDocTypeAssertion"] = 16] = "ExcludeJSDocTypeAssertion";
    })(OuterExpressionKinds = ts.OuterExpressionKinds || (ts.OuterExpressionKinds = {}));
    /* @internal */
    var LexicalEnvironmentFlags;
    (function (LexicalEnvironmentFlags) {
        LexicalEnvironmentFlags[LexicalEnvironmentFlags["None"] = 0] = "None";
        LexicalEnvironmentFlags[LexicalEnvironmentFlags["InParameters"] = 1] = "InParameters";
        LexicalEnvironmentFlags[LexicalEnvironmentFlags["VariablesHoistedInParameters"] = 2] = "VariablesHoistedInParameters"; // a temp variable was hoisted while visiting a parameter list
    })(LexicalEnvironmentFlags = ts.LexicalEnvironmentFlags || (ts.LexicalEnvironmentFlags = {}));
    /*@internal*/
    var BundleFileSectionKind;
    (function (BundleFileSectionKind) {
        BundleFileSectionKind["Prologue"] = "prologue";
        BundleFileSectionKind["EmitHelpers"] = "emitHelpers";
        BundleFileSectionKind["NoDefaultLib"] = "no-default-lib";
        BundleFileSectionKind["Reference"] = "reference";
        BundleFileSectionKind["Type"] = "type";
        BundleFileSectionKind["TypeResolutionModeRequire"] = "type-require";
        BundleFileSectionKind["TypeResolutionModeImport"] = "type-import";
        BundleFileSectionKind["Lib"] = "lib";
        BundleFileSectionKind["Prepend"] = "prepend";
        BundleFileSectionKind["Text"] = "text";
        BundleFileSectionKind["Internal"] = "internal";
        // comments?
    })(BundleFileSectionKind = ts.BundleFileSectionKind || (ts.BundleFileSectionKind = {}));
    var ListFormat;
    (function (ListFormat) {
        ListFormat[ListFormat["None"] = 0] = "None";
        // Line separators
        ListFormat[ListFormat["SingleLine"] = 0] = "SingleLine";
        ListFormat[ListFormat["MultiLine"] = 1] = "MultiLine";
        ListFormat[ListFormat["PreserveLines"] = 2] = "PreserveLines";
        ListFormat[ListFormat["LinesMask"] = 3] = "LinesMask";
        // Delimiters
        ListFormat[ListFormat["NotDelimited"] = 0] = "NotDelimited";
        ListFormat[ListFormat["BarDelimited"] = 4] = "BarDelimited";
        ListFormat[ListFormat["AmpersandDelimited"] = 8] = "AmpersandDelimited";
        ListFormat[ListFormat["CommaDelimited"] = 16] = "CommaDelimited";
        ListFormat[ListFormat["AsteriskDelimited"] = 32] = "AsteriskDelimited";
        ListFormat[ListFormat["DelimitersMask"] = 60] = "DelimitersMask";
        ListFormat[ListFormat["AllowTrailingComma"] = 64] = "AllowTrailingComma";
        // Whitespace
        ListFormat[ListFormat["Indented"] = 128] = "Indented";
        ListFormat[ListFormat["SpaceBetweenBraces"] = 256] = "SpaceBetweenBraces";
        ListFormat[ListFormat["SpaceBetweenSiblings"] = 512] = "SpaceBetweenSiblings";
        // Brackets/Braces
        ListFormat[ListFormat["Braces"] = 1024] = "Braces";
        ListFormat[ListFormat["Parenthesis"] = 2048] = "Parenthesis";
        ListFormat[ListFormat["AngleBrackets"] = 4096] = "AngleBrackets";
        ListFormat[ListFormat["SquareBrackets"] = 8192] = "SquareBrackets";
        ListFormat[ListFormat["BracketsMask"] = 15360] = "BracketsMask";
        ListFormat[ListFormat["OptionalIfUndefined"] = 16384] = "OptionalIfUndefined";
        ListFormat[ListFormat["OptionalIfEmpty"] = 32768] = "OptionalIfEmpty";
        ListFormat[ListFormat["Optional"] = 49152] = "Optional";
        // Other
        ListFormat[ListFormat["PreferNewLine"] = 65536] = "PreferNewLine";
        ListFormat[ListFormat["NoTrailingNewLine"] = 131072] = "NoTrailingNewLine";
        ListFormat[ListFormat["NoInterveningComments"] = 262144] = "NoInterveningComments";
        ListFormat[ListFormat["NoSpaceIfEmpty"] = 524288] = "NoSpaceIfEmpty";
        ListFormat[ListFormat["SingleElement"] = 1048576] = "SingleElement";
        ListFormat[ListFormat["SpaceAfterList"] = 2097152] = "SpaceAfterList";
        // Precomputed Formats
        ListFormat[ListFormat["Modifiers"] = 2359808] = "Modifiers";
        ListFormat[ListFormat["HeritageClauses"] = 512] = "HeritageClauses";
        ListFormat[ListFormat["SingleLineTypeLiteralMembers"] = 768] = "SingleLineTypeLiteralMembers";
        ListFormat[ListFormat["MultiLineTypeLiteralMembers"] = 32897] = "MultiLineTypeLiteralMembers";
        ListFormat[ListFormat["SingleLineTupleTypeElements"] = 528] = "SingleLineTupleTypeElements";
        ListFormat[ListFormat["MultiLineTupleTypeElements"] = 657] = "MultiLineTupleTypeElements";
        ListFormat[ListFormat["UnionTypeConstituents"] = 516] = "UnionTypeConstituents";
        ListFormat[ListFormat["IntersectionTypeConstituents"] = 520] = "IntersectionTypeConstituents";
        ListFormat[ListFormat["ObjectBindingPatternElements"] = 525136] = "ObjectBindingPatternElements";
        ListFormat[ListFormat["ArrayBindingPatternElements"] = 524880] = "ArrayBindingPatternElements";
        ListFormat[ListFormat["ObjectLiteralExpressionProperties"] = 526226] = "ObjectLiteralExpressionProperties";
        ListFormat[ListFormat["ImportClauseEntries"] = 526226] = "ImportClauseEntries";
        ListFormat[ListFormat["ArrayLiteralExpressionElements"] = 8914] = "ArrayLiteralExpressionElements";
        ListFormat[ListFormat["CommaListElements"] = 528] = "CommaListElements";
        ListFormat[ListFormat["CallExpressionArguments"] = 2576] = "CallExpressionArguments";
        ListFormat[ListFormat["NewExpressionArguments"] = 18960] = "NewExpressionArguments";
        ListFormat[ListFormat["TemplateExpressionSpans"] = 262144] = "TemplateExpressionSpans";
        ListFormat[ListFormat["SingleLineBlockStatements"] = 768] = "SingleLineBlockStatements";
        ListFormat[ListFormat["MultiLineBlockStatements"] = 129] = "MultiLineBlockStatements";
        ListFormat[ListFormat["VariableDeclarationList"] = 528] = "VariableDeclarationList";
        ListFormat[ListFormat["SingleLineFunctionBodyStatements"] = 768] = "SingleLineFunctionBodyStatements";
        ListFormat[ListFormat["MultiLineFunctionBodyStatements"] = 1] = "MultiLineFunctionBodyStatements";
        ListFormat[ListFormat["ClassHeritageClauses"] = 0] = "ClassHeritageClauses";
        ListFormat[ListFormat["ClassMembers"] = 129] = "ClassMembers";
        ListFormat[ListFormat["InterfaceMembers"] = 129] = "InterfaceMembers";
        ListFormat[ListFormat["EnumMembers"] = 145] = "EnumMembers";
        ListFormat[ListFormat["CaseBlockClauses"] = 129] = "CaseBlockClauses";
        ListFormat[ListFormat["NamedImportsOrExportsElements"] = 525136] = "NamedImportsOrExportsElements";
        ListFormat[ListFormat["JsxElementOrFragmentChildren"] = 262144] = "JsxElementOrFragmentChildren";
        ListFormat[ListFormat["JsxElementAttributes"] = 262656] = "JsxElementAttributes";
        ListFormat[ListFormat["CaseOrDefaultClauseStatements"] = 163969] = "CaseOrDefaultClauseStatements";
        ListFormat[ListFormat["HeritageClauseTypes"] = 528] = "HeritageClauseTypes";
        ListFormat[ListFormat["SourceFileStatements"] = 131073] = "SourceFileStatements";
        ListFormat[ListFormat["Decorators"] = 2146305] = "Decorators";
        ListFormat[ListFormat["TypeArguments"] = 53776] = "TypeArguments";
        ListFormat[ListFormat["TypeParameters"] = 53776] = "TypeParameters";
        ListFormat[ListFormat["Parameters"] = 2576] = "Parameters";
        ListFormat[ListFormat["IndexSignatureParameters"] = 8848] = "IndexSignatureParameters";
        ListFormat[ListFormat["JSDocComment"] = 33] = "JSDocComment";
    })(ListFormat = ts.ListFormat || (ts.ListFormat = {}));
    /* @internal */
    var PragmaKindFlags;
    (function (PragmaKindFlags) {
        PragmaKindFlags[PragmaKindFlags["None"] = 0] = "None";
        /**
         * Triple slash comment of the form
         * /// <pragma-name argname="value" />
         */
        PragmaKindFlags[PragmaKindFlags["TripleSlashXML"] = 1] = "TripleSlashXML";
        /**
         * Single line comment of the form
         * // @pragma-name argval1 argval2
         * or
         * /// @pragma-name argval1 argval2
         */
        PragmaKindFlags[PragmaKindFlags["SingleLine"] = 2] = "SingleLine";
        /**
         * Multiline non-jsdoc pragma of the form
         * /* @pragma-name argval1 argval2 * /
         */
        PragmaKindFlags[PragmaKindFlags["MultiLine"] = 4] = "MultiLine";
        PragmaKindFlags[PragmaKindFlags["All"] = 7] = "All";
        PragmaKindFlags[PragmaKindFlags["Default"] = 7] = "Default";
    })(PragmaKindFlags = ts.PragmaKindFlags || (ts.PragmaKindFlags = {}));
    // While not strictly a type, this is here because `PragmaMap` needs to be here to be used with `SourceFile`, and we don't
    //  fancy effectively defining it twice, once in value-space and once in type-space
    /* @internal */
    ts.commentPragmas = {
        "reference": {
            args: [
                { name: "types", optional: true, captureSpan: true },
                { name: "lib", optional: true, captureSpan: true },
                { name: "path", optional: true, captureSpan: true },
                { name: "no-default-lib", optional: true },
                { name: "resolution-mode", optional: true }
            ],
            kind: 1 /* PragmaKindFlags.TripleSlashXML */
        },
        "amd-dependency": {
            args: [{ name: "path" }, { name: "name", optional: true }],
            kind: 1 /* PragmaKindFlags.TripleSlashXML */
        },
        "amd-module": {
            args: [{ name: "name" }],
            kind: 1 /* PragmaKindFlags.TripleSlashXML */
        },
        "ts-check": {
            kind: 2 /* PragmaKindFlags.SingleLine */
        },
        "ts-nocheck": {
            kind: 2 /* PragmaKindFlags.SingleLine */
        },
        "jsx": {
            args: [{ name: "factory" }],
            kind: 4 /* PragmaKindFlags.MultiLine */
        },
        "jsxfrag": {
            args: [{ name: "factory" }],
            kind: 4 /* PragmaKindFlags.MultiLine */
        },
        "jsximportsource": {
            args: [{ name: "factory" }],
            kind: 4 /* PragmaKindFlags.MultiLine */
        },
        "jsxruntime": {
            args: [{ name: "factory" }],
            kind: 4 /* PragmaKindFlags.MultiLine */
        },
    };
})(ts || (ts = {}));
var ts;
(function (ts) {
    /**
     * djb2 hashing algorithm
     * http://www.cse.yorku.ca/~oz/hash.html
     */
    /* @internal */
    function generateDjb2Hash(data) {
        var acc = 5381;
        for (var i = 0; i < data.length; i++) {
            acc = ((acc << 5) + acc) + data.charCodeAt(i);
        }
        return acc.toString();
    }
    ts.generateDjb2Hash = generateDjb2Hash;
    /**
     * Set a high stack trace limit to provide more information in case of an error.
     * Called for command-line and server use cases.
     * Not called if TypeScript is used as a library.
     */
    /* @internal */
    function setStackTraceLimit() {
        if (Error.stackTraceLimit < 100) { // Also tests that we won't set the property if it doesn't exist.
            Error.stackTraceLimit = 100;
        }
    }
    ts.setStackTraceLimit = setStackTraceLimit;
    var FileWatcherEventKind;
    (function (FileWatcherEventKind) {
        FileWatcherEventKind[FileWatcherEventKind["Created"] = 0] = "Created";
        FileWatcherEventKind[FileWatcherEventKind["Changed"] = 1] = "Changed";
        FileWatcherEventKind[FileWatcherEventKind["Deleted"] = 2] = "Deleted";
    })(FileWatcherEventKind = ts.FileWatcherEventKind || (ts.FileWatcherEventKind = {}));
    /* @internal */
    var PollingInterval;
    (function (PollingInterval) {
        PollingInterval[PollingInterval["High"] = 2000] = "High";
        PollingInterval[PollingInterval["Medium"] = 500] = "Medium";
        PollingInterval[PollingInterval["Low"] = 250] = "Low";
    })(PollingInterval = ts.PollingInterval || (ts.PollingInterval = {}));
    /* @internal */
    ts.missingFileModifiedTime = new Date(0); // Any subsequent modification will occur after this time
    /* @internal */
    function getModifiedTime(host, fileName) {
        return host.getModifiedTime(fileName) || ts.missingFileModifiedTime;
    }
    ts.getModifiedTime = getModifiedTime;
    function createPollingIntervalBasedLevels(levels) {
        var _a;
        return _a = {},
            _a[PollingInterval.Low] = levels.Low,
            _a[PollingInterval.Medium] = levels.Medium,
            _a[PollingInterval.High] = levels.High,
            _a;
    }
    var defaultChunkLevels = { Low: 32, Medium: 64, High: 256 };
    var pollingChunkSize = createPollingIntervalBasedLevels(defaultChunkLevels);
    /* @internal */
    ts.unchangedPollThresholds = createPollingIntervalBasedLevels(defaultChunkLevels);
    /* @internal */
    function setCustomPollingValues(system) {
        if (!system.getEnvironmentVariable) {
            return;
        }
        var pollingIntervalChanged = setCustomLevels("TSC_WATCH_POLLINGINTERVAL", PollingInterval);
        pollingChunkSize = getCustomPollingBasedLevels("TSC_WATCH_POLLINGCHUNKSIZE", defaultChunkLevels) || pollingChunkSize;
        ts.unchangedPollThresholds = getCustomPollingBasedLevels("TSC_WATCH_UNCHANGEDPOLLTHRESHOLDS", defaultChunkLevels) || ts.unchangedPollThresholds;
        function getLevel(envVar, level) {
            return system.getEnvironmentVariable("".concat(envVar, "_").concat(level.toUpperCase()));
        }
        function getCustomLevels(baseVariable) {
            var customLevels;
            setCustomLevel("Low");
            setCustomLevel("Medium");
            setCustomLevel("High");
            return customLevels;
            function setCustomLevel(level) {
                var customLevel = getLevel(baseVariable, level);
                if (customLevel) {
                    (customLevels || (customLevels = {}))[level] = Number(customLevel);
                }
            }
        }
        function setCustomLevels(baseVariable, levels) {
            var customLevels = getCustomLevels(baseVariable);
            if (customLevels) {
                setLevel("Low");
                setLevel("Medium");
                setLevel("High");
                return true;
            }
            return false;
            function setLevel(level) {
                levels[level] = customLevels[level] || levels[level];
            }
        }
        function getCustomPollingBasedLevels(baseVariable, defaultLevels) {
            var customLevels = getCustomLevels(baseVariable);
            return (pollingIntervalChanged || customLevels) &&
                createPollingIntervalBasedLevels(customLevels ? __assign(__assign({}, defaultLevels), customLevels) : defaultLevels);
        }
    }
    ts.setCustomPollingValues = setCustomPollingValues;
    function pollWatchedFileQueue(host, queue, pollIndex, chunkSize, callbackOnWatchFileStat) {
        var definedValueCopyToIndex = pollIndex;
        // Max visit would be all elements of the queue
        for (var canVisit = queue.length; chunkSize && canVisit; nextPollIndex(), canVisit--) {
            var watchedFile = queue[pollIndex];
            if (!watchedFile) {
                continue;
            }
            else if (watchedFile.isClosed) {
                queue[pollIndex] = undefined;
                continue;
            }
            // Only files polled count towards chunkSize
            chunkSize--;
            var fileChanged = onWatchedFileStat(watchedFile, getModifiedTime(host, watchedFile.fileName));
            if (watchedFile.isClosed) {
                // Closed watcher as part of callback
                queue[pollIndex] = undefined;
                continue;
            }
            callbackOnWatchFileStat === null || callbackOnWatchFileStat === void 0 ? void 0 : callbackOnWatchFileStat(watchedFile, pollIndex, fileChanged);
            // Defragment the queue while we are at it
            if (queue[pollIndex]) {
                // Copy this file to the non hole location
                if (definedValueCopyToIndex < pollIndex) {
                    queue[definedValueCopyToIndex] = watchedFile;
                    queue[pollIndex] = undefined;
                }
                definedValueCopyToIndex++;
            }
        }
        // Return next poll index
        return pollIndex;
        function nextPollIndex() {
            pollIndex++;
            if (pollIndex === queue.length) {
                if (definedValueCopyToIndex < pollIndex) {
                    // There are holes from definedValueCopyToIndex to end of queue, change queue size
                    queue.length = definedValueCopyToIndex;
                }
                pollIndex = 0;
                definedValueCopyToIndex = 0;
            }
        }
    }
    /* @internal */
    function createDynamicPriorityPollingWatchFile(host) {
        var watchedFiles = [];
        var changedFilesInLastPoll = [];
        var lowPollingIntervalQueue = createPollingIntervalQueue(PollingInterval.Low);
        var mediumPollingIntervalQueue = createPollingIntervalQueue(PollingInterval.Medium);
        var highPollingIntervalQueue = createPollingIntervalQueue(PollingInterval.High);
        return watchFile;
        function watchFile(fileName, callback, defaultPollingInterval) {
            var file = {
                fileName: fileName,
                callback: callback,
                unchangedPolls: 0,
                mtime: getModifiedTime(host, fileName)
            };
            watchedFiles.push(file);
            addToPollingIntervalQueue(file, defaultPollingInterval);
            return {
                close: function () {
                    file.isClosed = true;
                    // Remove from watchedFiles
                    ts.unorderedRemoveItem(watchedFiles, file);
                    // Do not update polling interval queue since that will happen as part of polling
                }
            };
        }
        function createPollingIntervalQueue(pollingInterval) {
            var queue = [];
            queue.pollingInterval = pollingInterval;
            queue.pollIndex = 0;
            queue.pollScheduled = false;
            return queue;
        }
        function pollPollingIntervalQueue(queue) {
            queue.pollIndex = pollQueue(queue, queue.pollingInterval, queue.pollIndex, pollingChunkSize[queue.pollingInterval]);
            // Set the next polling index and timeout
            if (queue.length) {
                scheduleNextPoll(queue.pollingInterval);
            }
            else {
                ts.Debug.assert(queue.pollIndex === 0);
                queue.pollScheduled = false;
            }
        }
        function pollLowPollingIntervalQueue(queue) {
            // Always poll complete list of changedFilesInLastPoll
            pollQueue(changedFilesInLastPoll, PollingInterval.Low, /*pollIndex*/ 0, changedFilesInLastPoll.length);
            // Finally do the actual polling of the queue
            pollPollingIntervalQueue(queue);
            // Schedule poll if there are files in changedFilesInLastPoll but no files in the actual queue
            // as pollPollingIntervalQueue wont schedule for next poll
            if (!queue.pollScheduled && changedFilesInLastPoll.length) {
                scheduleNextPoll(PollingInterval.Low);
            }
        }
        function pollQueue(queue, pollingInterval, pollIndex, chunkSize) {
            return pollWatchedFileQueue(host, queue, pollIndex, chunkSize, onWatchFileStat);
            function onWatchFileStat(watchedFile, pollIndex, fileChanged) {
                if (fileChanged) {
                    watchedFile.unchangedPolls = 0;
                    // Changed files go to changedFilesInLastPoll queue
                    if (queue !== changedFilesInLastPoll) {
                        queue[pollIndex] = undefined;
                        addChangedFileToLowPollingIntervalQueue(watchedFile);
                    }
                }
                else if (watchedFile.unchangedPolls !== ts.unchangedPollThresholds[pollingInterval]) {
                    watchedFile.unchangedPolls++;
                }
                else if (queue === changedFilesInLastPoll) {
                    // Restart unchangedPollCount for unchanged file and move to low polling interval queue
                    watchedFile.unchangedPolls = 1;
                    queue[pollIndex] = undefined;
                    addToPollingIntervalQueue(watchedFile, PollingInterval.Low);
                }
                else if (pollingInterval !== PollingInterval.High) {
                    watchedFile.unchangedPolls++;
                    queue[pollIndex] = undefined;
                    addToPollingIntervalQueue(watchedFile, pollingInterval === PollingInterval.Low ? PollingInterval.Medium : PollingInterval.High);
                }
            }
        }
        function pollingIntervalQueue(pollingInterval) {
            switch (pollingInterval) {
                case PollingInterval.Low:
                    return lowPollingIntervalQueue;
                case PollingInterval.Medium:
                    return mediumPollingIntervalQueue;
                case PollingInterval.High:
                    return highPollingIntervalQueue;
            }
        }
        function addToPollingIntervalQueue(file, pollingInterval) {
            pollingIntervalQueue(pollingInterval).push(file);
            scheduleNextPollIfNotAlreadyScheduled(pollingInterval);
        }
        function addChangedFileToLowPollingIntervalQueue(file) {
            changedFilesInLastPoll.push(file);
            scheduleNextPollIfNotAlreadyScheduled(PollingInterval.Low);
        }
        function scheduleNextPollIfNotAlreadyScheduled(pollingInterval) {
            if (!pollingIntervalQueue(pollingInterval).pollScheduled) {
                scheduleNextPoll(pollingInterval);
            }
        }
        function scheduleNextPoll(pollingInterval) {
            pollingIntervalQueue(pollingInterval).pollScheduled = host.setTimeout(pollingInterval === PollingInterval.Low ? pollLowPollingIntervalQueue : pollPollingIntervalQueue, pollingInterval, pollingIntervalQueue(pollingInterval));
        }
    }
    ts.createDynamicPriorityPollingWatchFile = createDynamicPriorityPollingWatchFile;
    function createUseFsEventsOnParentDirectoryWatchFile(fsWatch, useCaseSensitiveFileNames) {
        // One file can have multiple watchers
        var fileWatcherCallbacks = ts.createMultiMap();
        var dirWatchers = new ts.Map();
        var toCanonicalName = ts.createGetCanonicalFileName(useCaseSensitiveFileNames);
        return nonPollingWatchFile;
        function nonPollingWatchFile(fileName, callback, _pollingInterval, fallbackOptions) {
            var filePath = toCanonicalName(fileName);
            fileWatcherCallbacks.add(filePath, callback);
            var dirPath = ts.getDirectoryPath(filePath) || ".";
            var watcher = dirWatchers.get(dirPath) ||
                createDirectoryWatcher(ts.getDirectoryPath(fileName) || ".", dirPath, fallbackOptions);
            watcher.referenceCount++;
            return {
                close: function () {
                    if (watcher.referenceCount === 1) {
                        watcher.close();
                        dirWatchers.delete(dirPath);
                    }
                    else {
                        watcher.referenceCount--;
                    }
                    fileWatcherCallbacks.remove(filePath, callback);
                }
            };
        }
        function createDirectoryWatcher(dirName, dirPath, fallbackOptions) {
            var watcher = fsWatch(dirName, 1 /* FileSystemEntryKind.Directory */, function (_eventName, relativeFileName, modifiedTime) {
                // When files are deleted from disk, the triggered "rename" event would have a relativefileName of "undefined"
                if (!ts.isString(relativeFileName))
                    return;
                var fileName = ts.getNormalizedAbsolutePath(relativeFileName, dirName);
                // Some applications save a working file via rename operations
                var callbacks = fileName && fileWatcherCallbacks.get(toCanonicalName(fileName));
                if (callbacks) {
                    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
                        var fileCallback = callbacks_1[_i];
                        fileCallback(fileName, FileWatcherEventKind.Changed, modifiedTime);
                    }
                }
            }, 
            /*recursive*/ false, PollingInterval.Medium, fallbackOptions);
            watcher.referenceCount = 0;
            dirWatchers.set(dirPath, watcher);
            return watcher;
        }
    }
    function createFixedChunkSizePollingWatchFile(host) {
        var watchedFiles = [];
        var pollIndex = 0;
        var pollScheduled;
        return watchFile;
        function watchFile(fileName, callback) {
            var file = {
                fileName: fileName,
                callback: callback,
                mtime: getModifiedTime(host, fileName)
            };
            watchedFiles.push(file);
            scheduleNextPoll();
            return {
                close: function () {
                    file.isClosed = true;
                    ts.unorderedRemoveItem(watchedFiles, file);
                }
            };
        }
        function pollQueue() {
            pollScheduled = undefined;
            pollIndex = pollWatchedFileQueue(host, watchedFiles, pollIndex, pollingChunkSize[PollingInterval.Low]);
            scheduleNextPoll();
        }
        function scheduleNextPoll() {
            if (!watchedFiles.length || pollScheduled)
                return;
            pollScheduled = host.setTimeout(pollQueue, PollingInterval.High);
        }
    }
    /* @internal */
    function createSingleFileWatcherPerName(watchFile, useCaseSensitiveFileNames) {
        var cache = new ts.Map();
        var callbacksCache = ts.createMultiMap();
        var toCanonicalFileName = ts.createGetCanonicalFileName(useCaseSensitiveFileNames);
        return function (fileName, callback, pollingInterval, options) {
            var path = toCanonicalFileName(fileName);
            var existing = cache.get(path);
            if (existing) {
                existing.refCount++;
            }
            else {
                cache.set(path, {
                    watcher: watchFile(fileName, function (fileName, eventKind, modifiedTime) { return ts.forEach(callbacksCache.get(path), function (cb) { return cb(fileName, eventKind, modifiedTime); }); }, pollingInterval, options),
                    refCount: 1
                });
            }
            callbacksCache.add(path, callback);
            return {
                close: function () {
                    var watcher = ts.Debug.checkDefined(cache.get(path));
                    callbacksCache.remove(path, callback);
                    watcher.refCount--;
                    if (watcher.refCount)
                        return;
                    cache.delete(path);
                    ts.closeFileWatcherOf(watcher);
                }
            };
        };
    }
    ts.createSingleFileWatcherPerName = createSingleFileWatcherPerName;
    /**
     * Returns true if file status changed
     */
    /*@internal*/
    function onWatchedFileStat(watchedFile, modifiedTime) {
        var oldTime = watchedFile.mtime.getTime();
        var newTime = modifiedTime.getTime();
        if (oldTime !== newTime) {
            watchedFile.mtime = modifiedTime;
            // Pass modified times so tsc --build can use it
            watchedFile.callback(watchedFile.fileName, getFileWatcherEventKind(oldTime, newTime), modifiedTime);
            return true;
        }
        return false;
    }
    ts.onWatchedFileStat = onWatchedFileStat;
    /*@internal*/
    function getFileWatcherEventKind(oldTime, newTime) {
        return oldTime === 0
            ? FileWatcherEventKind.Created
            : newTime === 0
                ? FileWatcherEventKind.Deleted
                : FileWatcherEventKind.Changed;
    }
    ts.getFileWatcherEventKind = getFileWatcherEventKind;
    /*@internal*/
    ts.ignoredPaths = ["/node_modules/.", "/.git", "/.#"];
    var curSysLog = ts.noop; // eslint-disable-line prefer-const
    /*@internal*/
    function sysLog(s) {
        return curSysLog(s);
    }
    ts.sysLog = sysLog;
    /*@internal*/
    function setSysLog(logger) {
        curSysLog = logger;
    }
    ts.setSysLog = setSysLog;
    /**
     * Watch the directory recursively using host provided method to watch child directories
     * that means if this is recursive watcher, watch the children directories as well
     * (eg on OS that dont support recursive watch using fs.watch use fs.watchFile)
     */
    /*@internal*/
    function createDirectoryWatcherSupportingRecursive(_a) {
        var watchDirectory = _a.watchDirectory, useCaseSensitiveFileNames = _a.useCaseSensitiveFileNames, getCurrentDirectory = _a.getCurrentDirectory, getAccessibleSortedChildDirectories = _a.getAccessibleSortedChildDirectories, fileSystemEntryExists = _a.fileSystemEntryExists, realpath = _a.realpath, setTimeout = _a.setTimeout, clearTimeout = _a.clearTimeout;
        var cache = new ts.Map();
        var callbackCache = ts.createMultiMap();
        var cacheToUpdateChildWatches = new ts.Map();
        var timerToUpdateChildWatches;
        var filePathComparer = ts.getStringComparer(!useCaseSensitiveFileNames);
        var toCanonicalFilePath = ts.createGetCanonicalFileName(useCaseSensitiveFileNames);
        return function (dirName, callback, recursive, options) { return recursive ?
            createDirectoryWatcher(dirName, options, callback) :
            watchDirectory(dirName, callback, recursive, options); };
        /**
         * Create the directory watcher for the dirPath.
         */
        function createDirectoryWatcher(dirName, options, callback) {
            var dirPath = toCanonicalFilePath(dirName);
            var directoryWatcher = cache.get(dirPath);
            if (directoryWatcher) {
                directoryWatcher.refCount++;
            }
            else {
                directoryWatcher = {
                    watcher: watchDirectory(dirName, function (fileName) {
                        if (isIgnoredPath(fileName, options))
                            return;
                        if (options === null || options === void 0 ? void 0 : options.synchronousWatchDirectory) {
                            // Call the actual callback
                            invokeCallbacks(dirPath, fileName);
                            // Iterate through existing children and update the watches if needed
                            updateChildWatches(dirName, dirPath, options);
                        }
                        else {
                            nonSyncUpdateChildWatches(dirName, dirPath, fileName, options);
                        }
                    }, /*recursive*/ false, options),
                    refCount: 1,
                    childWatches: ts.emptyArray
                };
                cache.set(dirPath, directoryWatcher);
                updateChildWatches(dirName, dirPath, options);
            }
            var callbackToAdd = callback && { dirName: dirName, callback: callback };
            if (callbackToAdd) {
                callbackCache.add(dirPath, callbackToAdd);
            }
            return {
                dirName: dirName,
                close: function () {
                    var directoryWatcher = ts.Debug.checkDefined(cache.get(dirPath));
                    if (callbackToAdd)
                        callbackCache.remove(dirPath, callbackToAdd);
                    directoryWatcher.refCount--;
                    if (directoryWatcher.refCount)
                        return;
                    cache.delete(dirPath);
                    ts.closeFileWatcherOf(directoryWatcher);
                    directoryWatcher.childWatches.forEach(ts.closeFileWatcher);
                }
            };
        }
        function invokeCallbacks(dirPath, fileNameOrInvokeMap, fileNames) {
            var fileName;
            var invokeMap;
            if (ts.isString(fileNameOrInvokeMap)) {
                fileName = fileNameOrInvokeMap;
            }
            else {
                invokeMap = fileNameOrInvokeMap;
            }
            // Call the actual callback
            callbackCache.forEach(function (callbacks, rootDirName) {
                var _a;
                if (invokeMap && invokeMap.get(rootDirName) === true)
                    return;
                if (rootDirName === dirPath || (ts.startsWith(dirPath, rootDirName) && dirPath[rootDirName.length] === ts.directorySeparator)) {
                    if (invokeMap) {
                        if (fileNames) {
                            var existing = invokeMap.get(rootDirName);
                            if (existing) {
                                (_a = existing).push.apply(_a, fileNames);
                            }
                            else {
                                invokeMap.set(rootDirName, fileNames.slice());
                            }
                        }
                        else {
                            invokeMap.set(rootDirName, true);
                        }
                    }
                    else {
                        callbacks.forEach(function (_a) {
                            var callback = _a.callback;
                            return callback(fileName);
                        });
                    }
                }
            });
        }
        function nonSyncUpdateChildWatches(dirName, dirPath, fileName, options) {
            // Iterate through existing children and update the watches if needed
            var parentWatcher = cache.get(dirPath);
            if (parentWatcher && fileSystemEntryExists(dirName, 1 /* FileSystemEntryKind.Directory */)) {
                // Schedule the update and postpone invoke for callbacks
                scheduleUpdateChildWatches(dirName, dirPath, fileName, options);
                return;
            }
            // Call the actual callbacks and remove child watches
            invokeCallbacks(dirPath, fileName);
            removeChildWatches(parentWatcher);
        }
        function scheduleUpdateChildWatches(dirName, dirPath, fileName, options) {
            var existing = cacheToUpdateChildWatches.get(dirPath);
            if (existing) {
                existing.fileNames.push(fileName);
            }
            else {
                cacheToUpdateChildWatches.set(dirPath, { dirName: dirName, options: options, fileNames: [fileName] });
            }
            if (timerToUpdateChildWatches) {
                clearTimeout(timerToUpdateChildWatches);
                timerToUpdateChildWatches = undefined;
            }
            timerToUpdateChildWatches = setTimeout(onTimerToUpdateChildWatches, 1000);
        }
        function onTimerToUpdateChildWatches() {
            timerToUpdateChildWatches = undefined;
            sysLog("sysLog:: onTimerToUpdateChildWatches:: ".concat(cacheToUpdateChildWatches.size));
            var start = ts.timestamp();
            var invokeMap = new ts.Map();
            while (!timerToUpdateChildWatches && cacheToUpdateChildWatches.size) {
                var result = cacheToUpdateChildWatches.entries().next();
                ts.Debug.assert(!result.done);
                var _a = result.value, dirPath = _a[0], _b = _a[1], dirName = _b.dirName, options = _b.options, fileNames = _b.fileNames;
                cacheToUpdateChildWatches.delete(dirPath);
                // Because the child refresh is fresh, we would need to invalidate whole root directory being watched
                // to ensure that all the changes are reflected at this time
                var hasChanges = updateChildWatches(dirName, dirPath, options);
                invokeCallbacks(dirPath, invokeMap, hasChanges ? undefined : fileNames);
            }
            sysLog("sysLog:: invokingWatchers:: Elapsed:: ".concat(ts.timestamp() - start, "ms:: ").concat(cacheToUpdateChildWatches.size));
            callbackCache.forEach(function (callbacks, rootDirName) {
                var existing = invokeMap.get(rootDirName);
                if (existing) {
                    callbacks.forEach(function (_a) {
                        var callback = _a.callback, dirName = _a.dirName;
                        if (ts.isArray(existing)) {
                            existing.forEach(callback);
                        }
                        else {
                            callback(dirName);
                        }
                    });
                }
            });
            var elapsed = ts.timestamp() - start;
            sysLog("sysLog:: Elapsed:: ".concat(elapsed, "ms:: onTimerToUpdateChildWatches:: ").concat(cacheToUpdateChildWatches.size, " ").concat(timerToUpdateChildWatches));
        }
        function removeChildWatches(parentWatcher) {
            if (!parentWatcher)
                return;
            var existingChildWatches = parentWatcher.childWatches;
            parentWatcher.childWatches = ts.emptyArray;
            for (var _i = 0, existingChildWatches_1 = existingChildWatches; _i < existingChildWatches_1.length; _i++) {
                var childWatcher = existingChildWatches_1[_i];
                childWatcher.close();
                removeChildWatches(cache.get(toCanonicalFilePath(childWatcher.dirName)));
            }
        }
        function updateChildWatches(parentDir, parentDirPath, options) {
            // Iterate through existing children and update the watches if needed
            var parentWatcher = cache.get(parentDirPath);
            if (!parentWatcher)
                return false;
            var newChildWatches;
            var hasChanges = ts.enumerateInsertsAndDeletes(fileSystemEntryExists(parentDir, 1 /* FileSystemEntryKind.Directory */) ? ts.mapDefined(getAccessibleSortedChildDirectories(parentDir), function (child) {
                var childFullName = ts.getNormalizedAbsolutePath(child, parentDir);
                // Filter our the symbolic link directories since those arent included in recursive watch
                // which is same behaviour when recursive: true is passed to fs.watch
                return !isIgnoredPath(childFullName, options) && filePathComparer(childFullName, ts.normalizePath(realpath(childFullName))) === 0 /* Comparison.EqualTo */ ? childFullName : undefined;
            }) : ts.emptyArray, parentWatcher.childWatches, function (child, childWatcher) { return filePathComparer(child, childWatcher.dirName); }, createAndAddChildDirectoryWatcher, ts.closeFileWatcher, addChildDirectoryWatcher);
            parentWatcher.childWatches = newChildWatches || ts.emptyArray;
            return hasChanges;
            /**
             * Create new childDirectoryWatcher and add it to the new ChildDirectoryWatcher list
             */
            function createAndAddChildDirectoryWatcher(childName) {
                var result = createDirectoryWatcher(childName, options);
                addChildDirectoryWatcher(result);
            }
            /**
             * Add child directory watcher to the new ChildDirectoryWatcher list
             */
            function addChildDirectoryWatcher(childWatcher) {
                (newChildWatches || (newChildWatches = [])).push(childWatcher);
            }
        }
        function isIgnoredPath(path, options) {
            return ts.some(ts.ignoredPaths, function (searchPath) { return isInPath(path, searchPath); }) ||
                isIgnoredByWatchOptions(path, options, useCaseSensitiveFileNames, getCurrentDirectory);
        }
        function isInPath(path, searchPath) {
            if (ts.stringContains(path, searchPath))
                return true;
            if (useCaseSensitiveFileNames)
                return false;
            return ts.stringContains(toCanonicalFilePath(path), searchPath);
        }
    }
    ts.createDirectoryWatcherSupportingRecursive = createDirectoryWatcherSupportingRecursive;
    /*@internal*/
    var FileSystemEntryKind;
    (function (FileSystemEntryKind) {
        FileSystemEntryKind[FileSystemEntryKind["File"] = 0] = "File";
        FileSystemEntryKind[FileSystemEntryKind["Directory"] = 1] = "Directory";
    })(FileSystemEntryKind = ts.FileSystemEntryKind || (ts.FileSystemEntryKind = {}));
    /*@internal*/
    function createFileWatcherCallback(callback) {
        return function (_fileName, eventKind, modifiedTime) { return callback(eventKind === FileWatcherEventKind.Changed ? "change" : "rename", "", modifiedTime); };
    }
    ts.createFileWatcherCallback = createFileWatcherCallback;
    function createFsWatchCallbackForFileWatcherCallback(fileName, callback, getModifiedTime) {
        return function (eventName, _relativeFileName, modifiedTime) {
            if (eventName === "rename") {
                // Check time stamps rather than file system entry checks
                modifiedTime || (modifiedTime = getModifiedTime(fileName) || ts.missingFileModifiedTime);
                callback(fileName, modifiedTime !== ts.missingFileModifiedTime ? FileWatcherEventKind.Created : FileWatcherEventKind.Deleted, modifiedTime);
            }
            else {
                // Change
                callback(fileName, FileWatcherEventKind.Changed, modifiedTime);
            }
        };
    }
    function isIgnoredByWatchOptions(pathToCheck, options, useCaseSensitiveFileNames, getCurrentDirectory) {
        return ((options === null || options === void 0 ? void 0 : options.excludeDirectories) || (options === null || options === void 0 ? void 0 : options.excludeFiles)) && (ts.matchesExclude(pathToCheck, options === null || options === void 0 ? void 0 : options.excludeFiles, useCaseSensitiveFileNames, getCurrentDirectory()) ||
            ts.matchesExclude(pathToCheck, options === null || options === void 0 ? void 0 : options.excludeDirectories, useCaseSensitiveFileNames, getCurrentDirectory()));
    }
    function createFsWatchCallbackForDirectoryWatcherCallback(directoryName, callback, options, useCaseSensitiveFileNames, getCurrentDirectory) {
        return function (eventName, relativeFileName) {
            // In watchDirectory we only care about adding and removing files (when event name is
            // "rename"); changes made within files are handled by corresponding fileWatchers (when
            // event name is "change")
            if (eventName === "rename") {
                // When deleting a file, the passed baseFileName is null
                var fileName = !relativeFileName ? directoryName : ts.normalizePath(ts.combinePaths(directoryName, relativeFileName));
                if (!relativeFileName || !isIgnoredByWatchOptions(fileName, options, useCaseSensitiveFileNames, getCurrentDirectory)) {
                    callback(fileName);
                }
            }
        };
    }
    /*@internal*/
    function createSystemWatchFunctions(_a) {
        var pollingWatchFile = _a.pollingWatchFile, getModifiedTime = _a.getModifiedTime, setTimeout = _a.setTimeout, clearTimeout = _a.clearTimeout, fsWatchWorker = _a.fsWatchWorker, fileSystemEntryExists = _a.fileSystemEntryExists, useCaseSensitiveFileNames = _a.useCaseSensitiveFileNames, getCurrentDirectory = _a.getCurrentDirectory, fsSupportsRecursiveFsWatch = _a.fsSupportsRecursiveFsWatch, getAccessibleSortedChildDirectories = _a.getAccessibleSortedChildDirectories, realpath = _a.realpath, tscWatchFile = _a.tscWatchFile, useNonPollingWatchers = _a.useNonPollingWatchers, tscWatchDirectory = _a.tscWatchDirectory, defaultWatchFileKind = _a.defaultWatchFileKind, inodeWatching = _a.inodeWatching, sysLog = _a.sysLog;
        var dynamicPollingWatchFile;
        var fixedChunkSizePollingWatchFile;
        var nonPollingWatchFile;
        var hostRecursiveDirectoryWatcher;
        var hitSystemWatcherLimit = false;
        return {
            watchFile: watchFile,
            watchDirectory: watchDirectory
        };
        function watchFile(fileName, callback, pollingInterval, options) {
            options = updateOptionsForWatchFile(options, useNonPollingWatchers);
            var watchFileKind = ts.Debug.checkDefined(options.watchFile);
            switch (watchFileKind) {
                case ts.WatchFileKind.FixedPollingInterval:
                    return pollingWatchFile(fileName, callback, PollingInterval.Low, /*options*/ undefined);
                case ts.WatchFileKind.PriorityPollingInterval:
                    return pollingWatchFile(fileName, callback, pollingInterval, /*options*/ undefined);
                case ts.WatchFileKind.DynamicPriorityPolling:
                    return ensureDynamicPollingWatchFile()(fileName, callback, pollingInterval, /*options*/ undefined);
                case ts.WatchFileKind.FixedChunkSizePolling:
                    return ensureFixedChunkSizePollingWatchFile()(fileName, callback, /* pollingInterval */ undefined, /*options*/ undefined);
                case ts.WatchFileKind.UseFsEvents:
                    return fsWatch(fileName, 0 /* FileSystemEntryKind.File */, createFsWatchCallbackForFileWatcherCallback(fileName, callback, getModifiedTime), 
                    /*recursive*/ false, pollingInterval, ts.getFallbackOptions(options));
                case ts.WatchFileKind.UseFsEventsOnParentDirectory:
                    if (!nonPollingWatchFile) {
                        nonPollingWatchFile = createUseFsEventsOnParentDirectoryWatchFile(fsWatch, useCaseSensitiveFileNames);
                    }
                    return nonPollingWatchFile(fileName, callback, pollingInterval, ts.getFallbackOptions(options));
                default:
                    ts.Debug.assertNever(watchFileKind);
            }
        }
        function ensureDynamicPollingWatchFile() {
            return dynamicPollingWatchFile || (dynamicPollingWatchFile = createDynamicPriorityPollingWatchFile({ getModifiedTime: getModifiedTime, setTimeout: setTimeout }));
        }
        function ensureFixedChunkSizePollingWatchFile() {
            return fixedChunkSizePollingWatchFile || (fixedChunkSizePollingWatchFile = createFixedChunkSizePollingWatchFile({ getModifiedTime: getModifiedTime, setTimeout: setTimeout }));
        }
        function updateOptionsForWatchFile(options, useNonPollingWatchers) {
            if (options && options.watchFile !== undefined)
                return options;
            switch (tscWatchFile) {
                case "PriorityPollingInterval":
                    // Use polling interval based on priority when create watch using host.watchFile
                    return { watchFile: ts.WatchFileKind.PriorityPollingInterval };
                case "DynamicPriorityPolling":
                    // Use polling interval but change the interval depending on file changes and their default polling interval
                    return { watchFile: ts.WatchFileKind.DynamicPriorityPolling };
                case "UseFsEvents":
                    // Use notifications from FS to watch with falling back to fs.watchFile
                    return generateWatchFileOptions(ts.WatchFileKind.UseFsEvents, ts.PollingWatchKind.PriorityInterval, options);
                case "UseFsEventsWithFallbackDynamicPolling":
                    // Use notifications from FS to watch with falling back to dynamic watch file
                    return generateWatchFileOptions(ts.WatchFileKind.UseFsEvents, ts.PollingWatchKind.DynamicPriority, options);
                case "UseFsEventsOnParentDirectory":
                    useNonPollingWatchers = true;
                // fall through
                default:
                    return useNonPollingWatchers ?
                        // Use notifications from FS to watch with falling back to fs.watchFile
                        generateWatchFileOptions(ts.WatchFileKind.UseFsEventsOnParentDirectory, ts.PollingWatchKind.PriorityInterval, options) :
                        // Default to do not use fixed polling interval
                        { watchFile: (defaultWatchFileKind === null || defaultWatchFileKind === void 0 ? void 0 : defaultWatchFileKind()) || ts.WatchFileKind.FixedPollingInterval };
            }
        }
        function generateWatchFileOptions(watchFile, fallbackPolling, options) {
            var defaultFallbackPolling = options === null || options === void 0 ? void 0 : options.fallbackPolling;
            return {
                watchFile: watchFile,
                fallbackPolling: defaultFallbackPolling === undefined ?
                    fallbackPolling :
                    defaultFallbackPolling
            };
        }
        function watchDirectory(directoryName, callback, recursive, options) {
            if (fsSupportsRecursiveFsWatch) {
                return fsWatch(directoryName, 1 /* FileSystemEntryKind.Directory */, createFsWatchCallbackForDirectoryWatcherCallback(directoryName, callback, options, useCaseSensitiveFileNames, getCurrentDirectory), recursive, PollingInterval.Medium, ts.getFallbackOptions(options));
            }
            if (!hostRecursiveDirectoryWatcher) {
                hostRecursiveDirectoryWatcher = createDirectoryWatcherSupportingRecursive({
                    useCaseSensitiveFileNames: useCaseSensitiveFileNames,
                    getCurrentDirectory: getCurrentDirectory,
                    fileSystemEntryExists: fileSystemEntryExists,
                    getAccessibleSortedChildDirectories: getAccessibleSortedChildDirectories,
                    watchDirectory: nonRecursiveWatchDirectory,
                    realpath: realpath,
                    setTimeout: setTimeout,
                    clearTimeout: clearTimeout
                });
            }
            return hostRecursiveDirectoryWatcher(directoryName, callback, recursive, options);
        }
        function nonRecursiveWatchDirectory(directoryName, callback, recursive, options) {
            ts.Debug.assert(!recursive);
            var watchDirectoryOptions = updateOptionsForWatchDirectory(options);
            var watchDirectoryKind = ts.Debug.checkDefined(watchDirectoryOptions.watchDirectory);
            switch (watchDirectoryKind) {
                case ts.WatchDirectoryKind.FixedPollingInterval:
                    return pollingWatchFile(directoryName, function () { return callback(directoryName); }, PollingInterval.Medium, 
                    /*options*/ undefined);
                case ts.WatchDirectoryKind.DynamicPriorityPolling:
                    return ensureDynamicPollingWatchFile()(directoryName, function () { return callback(directoryName); }, PollingInterval.Medium, 
                    /*options*/ undefined);
                case ts.WatchDirectoryKind.FixedChunkSizePolling:
                    return ensureFixedChunkSizePollingWatchFile()(directoryName, function () { return callback(directoryName); }, 
                    /* pollingInterval */ undefined, 
                    /*options*/ undefined);
                case ts.WatchDirectoryKind.UseFsEvents:
                    return fsWatch(directoryName, 1 /* FileSystemEntryKind.Directory */, createFsWatchCallbackForDirectoryWatcherCallback(directoryName, callback, options, useCaseSensitiveFileNames, getCurrentDirectory), recursive, PollingInterval.Medium, ts.getFallbackOptions(watchDirectoryOptions));
                default:
                    ts.Debug.assertNever(watchDirectoryKind);
            }
        }
        function updateOptionsForWatchDirectory(options) {
            if (options && options.watchDirectory !== undefined)
                return options;
            switch (tscWatchDirectory) {
                case "RecursiveDirectoryUsingFsWatchFile":
                    // Use polling interval based on priority when create watch using host.watchFile
                    return { watchDirectory: ts.WatchDirectoryKind.FixedPollingInterval };
                case "RecursiveDirectoryUsingDynamicPriorityPolling":
                    // Use polling interval but change the interval depending on file changes and their default polling interval
                    return { watchDirectory: ts.WatchDirectoryKind.DynamicPriorityPolling };
                default:
                    var defaultFallbackPolling = options === null || options === void 0 ? void 0 : options.fallbackPolling;
                    return {
                        watchDirectory: ts.WatchDirectoryKind.UseFsEvents,
                        fallbackPolling: defaultFallbackPolling !== undefined ?
                            defaultFallbackPolling :
                            undefined
                    };
            }
        }
        function fsWatch(fileOrDirectory, entryKind, callback, recursive, fallbackPollingInterval, fallbackOptions) {
            var lastDirectoryPartWithDirectorySeparator;
            var lastDirectoryPart;
            if (inodeWatching) {
                lastDirectoryPartWithDirectorySeparator = fileOrDirectory.substring(fileOrDirectory.lastIndexOf(ts.directorySeparator));
                lastDirectoryPart = lastDirectoryPartWithDirectorySeparator.slice(ts.directorySeparator.length);
            }
            /** Watcher for the file system entry depending on whether it is missing or present */
            var watcher = !fileSystemEntryExists(fileOrDirectory, entryKind) ?
                watchMissingFileSystemEntry() :
                watchPresentFileSystemEntry();
            return {
                close: function () {
                    // Close the watcher (either existing file system entry watcher or missing file system entry watcher)
                    if (watcher) {
                        watcher.close();
                        watcher = undefined;
                    }
                }
            };
            function updateWatcher(createWatcher) {
                // If watcher is not closed, update it
                if (watcher) {
                    sysLog("sysLog:: ".concat(fileOrDirectory, ":: Changing watcher to ").concat(createWatcher === watchPresentFileSystemEntry ? "Present" : "Missing", "FileSystemEntryWatcher"));
                    watcher.close();
                    watcher = createWatcher();
                }
            }
            /**
             * Watch the file or directory that is currently present
             * and when the watched file or directory is deleted, switch to missing file system entry watcher
             */
            function watchPresentFileSystemEntry() {
                if (hitSystemWatcherLimit) {
                    sysLog("sysLog:: ".concat(fileOrDirectory, ":: Defaulting to watchFile"));
                    return watchPresentFileSystemEntryWithFsWatchFile();
                }
                try {
                    var presentWatcher = fsWatchWorker(fileOrDirectory, recursive, inodeWatching ?
                        callbackChangingToMissingFileSystemEntry :
                        callback);
                    // Watch the missing file or directory or error
                    presentWatcher.on("error", function () {
                        callback("rename", "");
                        updateWatcher(watchMissingFileSystemEntry);
                    });
                    return presentWatcher;
                }
                catch (e) {
                    // Catch the exception and use polling instead
                    // Eg. on linux the number of watches are limited and one could easily exhaust watches and the exception ENOSPC is thrown when creating watcher at that point
                    // so instead of throwing error, use fs.watchFile
                    hitSystemWatcherLimit || (hitSystemWatcherLimit = e.code === "ENOSPC");
                    sysLog("sysLog:: ".concat(fileOrDirectory, ":: Changing to watchFile"));
                    return watchPresentFileSystemEntryWithFsWatchFile();
                }
            }
            function callbackChangingToMissingFileSystemEntry(event, relativeName) {
                // In some scenarios, file save operation fires event with fileName.ext~ instead of fileName.ext
                // To ensure we see the file going missing and coming back up (file delete and then recreated)
                // and watches being updated correctly we are calling back with fileName.ext as well as fileName.ext~
                // The worst is we have fired event that was not needed but we wont miss any changes
                // especially in cases where file goes missing and watches wrong inode
                var originalRelativeName;
                if (relativeName && ts.endsWith(relativeName, "~")) {
                    originalRelativeName = relativeName;
                    relativeName = relativeName.slice(0, relativeName.length - 1);
                }
                // because relativeName is not guaranteed to be correct we need to check on each rename with few combinations
                // Eg on ubuntu while watching app/node_modules the relativeName is "node_modules" which is neither relative nor full path
                if (event === "rename" &&
                    (!relativeName ||
                        relativeName === lastDirectoryPart ||
                        ts.endsWith(relativeName, lastDirectoryPartWithDirectorySeparator))) {
                    var modifiedTime = getModifiedTime(fileOrDirectory) || ts.missingFileModifiedTime;
                    if (originalRelativeName)
                        callback(event, originalRelativeName, modifiedTime);
                    callback(event, relativeName, modifiedTime);
                    if (inodeWatching) {
                        // If this was rename event, inode has changed means we need to update watcher
                        updateWatcher(modifiedTime === ts.missingFileModifiedTime ? watchMissingFileSystemEntry : watchPresentFileSystemEntry);
                    }
                    else if (modifiedTime === ts.missingFileModifiedTime) {
                        updateWatcher(watchMissingFileSystemEntry);
                    }
                }
                else {
                    if (originalRelativeName)
                        callback(event, originalRelativeName);
                    callback(event, relativeName);
                }
            }
            /**
             * Watch the file or directory using fs.watchFile since fs.watch threw exception
             * Eg. on linux the number of watches are limited and one could easily exhaust watches and the exception ENOSPC is thrown when creating watcher at that point
             */
            function watchPresentFileSystemEntryWithFsWatchFile() {
                return watchFile(fileOrDirectory, createFileWatcherCallback(callback), fallbackPollingInterval, fallbackOptions);
            }
            /**
             * Watch the file or directory that is missing
             * and switch to existing file or directory when the missing filesystem entry is created
             */
            function watchMissingFileSystemEntry() {
                return watchFile(fileOrDirectory, function (_fileName, eventKind, modifiedTime) {
                    if (eventKind === FileWatcherEventKind.Created) {
                        modifiedTime || (modifiedTime = getModifiedTime(fileOrDirectory) || ts.missingFileModifiedTime);
                        if (modifiedTime !== ts.missingFileModifiedTime) {
                            callback("rename", "", modifiedTime);
                            // Call the callback for current file or directory
                            // For now it could be callback for the inner directory creation,
                            // but just return current directory, better than current no-op
                            updateWatcher(watchPresentFileSystemEntry);
                        }
                    }
                }, fallbackPollingInterval, fallbackOptions);
            }
        }
    }
    ts.createSystemWatchFunctions = createSystemWatchFunctions;
    /**
     * patch writefile to create folder before writing the file
     */
    /*@internal*/
    function patchWriteFileEnsuringDirectory(sys) {
        // patch writefile to create folder before writing the file
        var originalWriteFile = sys.writeFile;
        sys.writeFile = function (path, data, writeBom) {
            return ts.writeFileEnsuringDirectories(path, data, !!writeBom, function (path, data, writeByteOrderMark) { return originalWriteFile.call(sys, path, data, writeByteOrderMark); }, function (path) { return sys.createDirectory(path); }, function (path) { return sys.directoryExists(path); });
        };
    }
    ts.patchWriteFileEnsuringDirectory = patchWriteFileEnsuringDirectory;
    function getNodeMajorVersion() {
        if (typeof process === "undefined") {
            return undefined;
        }
        var version = process.version;
        if (!version) {
            return undefined;
        }
        var dot = version.indexOf(".");
        if (dot === -1) {
            return undefined;
        }
        return parseInt(version.substring(1, dot));
    }
    ts.getNodeMajorVersion = getNodeMajorVersion;
    // TODO: GH#18217 this is used as if it's certainly defined in many places.
    // eslint-disable-next-line prefer-const
    ts.sys = (function () {
        // NodeJS detects "\uFEFF" at the start of the string and *replaces* it with the actual
        // byte order mark from the specified encoding. Using any other byte order mark does
        // not actually work.
        var byteOrderMarkIndicator = "\uFEFF";
        function getNodeSystem() {
            var nativePattern = /^native |^\([^)]+\)$|^(internal[\\/]|[a-zA-Z0-9_\s]+(\.js)?$)/;
            var _fs = require("fs");
            var _path = require("path");
            var _os = require("os");
            // crypto can be absent on reduced node installations
            var _crypto;
            try {
                _crypto = require("crypto");
            }
            catch (_a) {
                _crypto = undefined;
            }
            var activeSession;
            var profilePath = "./profile.cpuprofile";
            var Buffer = require("buffer").Buffer;
            var nodeVersion = getNodeMajorVersion();
            var isNode4OrLater = nodeVersion >= 4;
            var isLinuxOrMacOs = process.platform === "linux" || process.platform === "darwin";
            var platform = _os.platform();
            var useCaseSensitiveFileNames = isFileSystemCaseSensitive();
            var fsRealpath = !!_fs.realpathSync.native ? process.platform === "win32" ? fsRealPathHandlingLongPath : _fs.realpathSync.native : _fs.realpathSync;
            var fsSupportsRecursiveFsWatch = isNode4OrLater && (process.platform === "win32" || process.platform === "darwin");
            var getCurrentDirectory = ts.memoize(function () { return process.cwd(); });
            var _b = createSystemWatchFunctions({
                pollingWatchFile: createSingleFileWatcherPerName(fsWatchFileWorker, useCaseSensitiveFileNames),
                getModifiedTime: getModifiedTime,
                setTimeout: setTimeout,
                clearTimeout: clearTimeout,
                fsWatchWorker: fsWatchWorker,
                useCaseSensitiveFileNames: useCaseSensitiveFileNames,
                getCurrentDirectory: getCurrentDirectory,
                fileSystemEntryExists: fileSystemEntryExists,
                // Node 4.0 `fs.watch` function supports the "recursive" option on both OSX and Windows
                // (ref: https://github.com/nodejs/node/pull/2649 and https://github.com/Microsoft/TypeScript/issues/4643)
                fsSupportsRecursiveFsWatch: fsSupportsRecursiveFsWatch,
                getAccessibleSortedChildDirectories: function (path) { return getAccessibleFileSystemEntries(path).directories; },
                realpath: realpath,
                tscWatchFile: process.env.TSC_WATCHFILE,
                useNonPollingWatchers: process.env.TSC_NONPOLLING_WATCHER,
                tscWatchDirectory: process.env.TSC_WATCHDIRECTORY,
                defaultWatchFileKind: function () { var _a, _b; return (_b = (_a = sys).defaultWatchFileKind) === null || _b === void 0 ? void 0 : _b.call(_a); },
                inodeWatching: isLinuxOrMacOs,
                sysLog: sysLog,
            }), watchFile = _b.watchFile, watchDirectory = _b.watchDirectory;
            var nodeSystem = {
                args: process.argv.slice(2),
                newLine: _os.EOL,
                useCaseSensitiveFileNames: useCaseSensitiveFileNames,
                write: function (s) {
                    process.stdout.write(s);
                },
                getWidthOfTerminal: function () {
                    return process.stdout.columns;
                },
                writeOutputIsTTY: function () {
                    return process.stdout.isTTY;
                },
                readFile: readFile,
                writeFile: writeFile,
                watchFile: watchFile,
                watchDirectory: watchDirectory,
                resolvePath: function (path) { return _path.resolve(path); },
                fileExists: fileExists,
                directoryExists: directoryExists,
                createDirectory: function (directoryName) {
                    if (!nodeSystem.directoryExists(directoryName)) {
                        // Wrapped in a try-catch to prevent crashing if we are in a race
                        // with another copy of ourselves to create the same directory
                        try {
                            _fs.mkdirSync(directoryName);
                        }
                        catch (e) {
                            if (e.code !== "EEXIST") {
                                // Failed for some other reason (access denied?); still throw
                                throw e;
                            }
                        }
                    }
                },
                getExecutingFilePath: function () {
                    return __filename;
                },
                getCurrentDirectory: getCurrentDirectory,
                getDirectories: getDirectories,
                getEnvironmentVariable: function (name) {
                    return process.env[name] || "";
                },
                readDirectory: readDirectory,
                getModifiedTime: getModifiedTime,
                setModifiedTime: setModifiedTime,
                deleteFile: deleteFile,
                createHash: _crypto ? createSHA256Hash : generateDjb2Hash,
                createSHA256Hash: _crypto ? createSHA256Hash : undefined,
                getMemoryUsage: function () {
                    if (global.gc) {
                        global.gc();
                    }
                    return process.memoryUsage().heapUsed;
                },
                getFileSize: function (path) {
                    try {
                        var stat = statSync(path);
                        if (stat === null || stat === void 0 ? void 0 : stat.isFile()) {
                            return stat.size;
                        }
                    }
                    catch ( /*ignore*/_a) { /*ignore*/ }
                    return 0;
                },
                exit: function (exitCode) {
                    disableCPUProfiler(function () { return process.exit(exitCode); });
                },
                enableCPUProfiler: enableCPUProfiler,
                disableCPUProfiler: disableCPUProfiler,
                cpuProfilingEnabled: function () { return !!activeSession || ts.contains(process.execArgv, "--cpu-prof") || ts.contains(process.execArgv, "--prof"); },
                realpath: realpath,
                debugMode: !!process.env.NODE_INSPECTOR_IPC || !!process.env.VSCODE_INSPECTOR_OPTIONS || ts.some(process.execArgv, function (arg) { return /^--(inspect|debug)(-brk)?(=\d+)?$/i.test(arg); }),
                tryEnableSourceMapsForHost: function () {
                    try {
                        require("source-map-support").install();
                    }
                    catch (_a) {
                        // Could not enable source maps.
                    }
                },
                setTimeout: setTimeout,
                clearTimeout: clearTimeout,
                clearScreen: function () {
                    process.stdout.write("\x1Bc");
                },
                setBlocking: function () {
                    if (process.stdout && process.stdout._handle && process.stdout._handle.setBlocking) {
                        process.stdout._handle.setBlocking(true);
                    }
                },
                bufferFrom: bufferFrom,
                base64decode: function (input) { return bufferFrom(input, "base64").toString("utf8"); },
                base64encode: function (input) { return bufferFrom(input).toString("base64"); },
                require: function (baseDir, moduleName) {
                    try {
                        var modulePath = ts.resolveJSModule(moduleName, baseDir, nodeSystem);
                        return { module: require(modulePath), modulePath: modulePath, error: undefined };
                    }
                    catch (error) {
                        return { module: undefined, modulePath: undefined, error: error };
                    }
                }
            };
            return nodeSystem;
            /**
             * `throwIfNoEntry` was added so recently that it's not in the node types.
             * This helper encapsulates the mitigating usage of `any`.
             * See https://github.com/nodejs/node/pull/33716
             */
            function statSync(path) {
                // throwIfNoEntry will be ignored by older versions of node
                return _fs.statSync(path, { throwIfNoEntry: false });
            }
            /**
             * Uses the builtin inspector APIs to capture a CPU profile
             * See https://nodejs.org/api/inspector.html#inspector_example_usage for details
             */
            function enableCPUProfiler(path, cb) {
                if (activeSession) {
                    cb();
                    return false;
                }
                var inspector = require("inspector");
                if (!inspector || !inspector.Session) {
                    cb();
                    return false;
                }
                var session = new inspector.Session();
                session.connect();
                session.post("Profiler.enable", function () {
                    session.post("Profiler.start", function () {
                        activeSession = session;
                        profilePath = path;
                        cb();
                    });
                });
                return true;
            }
            /**
             * Strips non-TS paths from the profile, so users with private projects shouldn't
             * need to worry about leaking paths by submitting a cpu profile to us
             */
            function cleanupPaths(profile) {
                var externalFileCounter = 0;
                var remappedPaths = new ts.Map();
                var normalizedDir = ts.normalizeSlashes(__dirname);
                // Windows rooted dir names need an extra `/` prepended to be valid file:/// urls
                var fileUrlRoot = "file://".concat(ts.getRootLength(normalizedDir) === 1 ? "" : "/").concat(normalizedDir);
                for (var _i = 0, _a = profile.nodes; _i < _a.length; _i++) {
                    var node = _a[_i];
                    if (node.callFrame.url) {
                        var url = ts.normalizeSlashes(node.callFrame.url);
                        if (ts.containsPath(fileUrlRoot, url, useCaseSensitiveFileNames)) {
                            node.callFrame.url = ts.getRelativePathToDirectoryOrUrl(fileUrlRoot, url, fileUrlRoot, ts.createGetCanonicalFileName(useCaseSensitiveFileNames), /*isAbsolutePathAnUrl*/ true);
                        }
                        else if (!nativePattern.test(url)) {
                            node.callFrame.url = (remappedPaths.has(url) ? remappedPaths : remappedPaths.set(url, "external".concat(externalFileCounter, ".js"))).get(url);
                            externalFileCounter++;
                        }
                    }
                }
                return profile;
            }
            function disableCPUProfiler(cb) {
                if (activeSession && activeSession !== "stopping") {
                    var s_1 = activeSession;
                    activeSession.post("Profiler.stop", function (err, _a) {
                        var _b;
                        var profile = _a.profile;
                        if (!err) {
                            try {
                                if ((_b = statSync(profilePath)) === null || _b === void 0 ? void 0 : _b.isDirectory()) {
                                    profilePath = _path.join(profilePath, "".concat((new Date()).toISOString().replace(/:/g, "-"), "+P").concat(process.pid, ".cpuprofile"));
                                }
                            }
                            catch (_c) {
                                // do nothing and ignore fallible fs operation
                            }
                            try {
                                _fs.mkdirSync(_path.dirname(profilePath), { recursive: true });
                            }
                            catch (_d) {
                                // do nothing and ignore fallible fs operation
                            }
                            _fs.writeFileSync(profilePath, JSON.stringify(cleanupPaths(profile)));
                        }
                        activeSession = undefined;
                        s_1.disconnect();
                        cb();
                    });
                    activeSession = "stopping";
                    return true;
                }
                else {
                    cb();
                    return false;
                }
            }
            function bufferFrom(input, encoding) {
                // See https://github.com/Microsoft/TypeScript/issues/25652
                return Buffer.from && Buffer.from !== Int8Array.from
                    ? Buffer.from(input, encoding)
                    : new Buffer(input, encoding);
            }
            function isFileSystemCaseSensitive() {
                // win32\win64 are case insensitive platforms
                if (platform === "win32" || platform === "win64") {
                    return false;
                }
                // If this file exists under a different case, we must be case-insensitve.
                return !fileExists(swapCase(__filename));
            }
            /** Convert all lowercase chars to uppercase, and vice-versa */
            function swapCase(s) {
                return s.replace(/\w/g, function (ch) {
                    var up = ch.toUpperCase();
                    return ch === up ? ch.toLowerCase() : up;
                });
            }
            function fsWatchFileWorker(fileName, callback, pollingInterval) {
                _fs.watchFile(fileName, { persistent: true, interval: pollingInterval }, fileChanged);
                var eventKind;
                return {
                    close: function () { return _fs.unwatchFile(fileName, fileChanged); }
                };
                function fileChanged(curr, prev) {
                    // previous event kind check is to ensure we recongnize the file as previously also missing when it is restored or renamed twice (that is it disappears and reappears)
                    // In such case, prevTime returned is same as prev time of event when file was deleted as per node documentation
                    var isPreviouslyDeleted = +prev.mtime === 0 || eventKind === FileWatcherEventKind.Deleted;
                    if (+curr.mtime === 0) {
                        if (isPreviouslyDeleted) {
                            // Already deleted file, no need to callback again
                            return;
                        }
                        eventKind = FileWatcherEventKind.Deleted;
                    }
                    else if (isPreviouslyDeleted) {
                        eventKind = FileWatcherEventKind.Created;
                    }
                    // If there is no change in modified time, ignore the event
                    else if (+curr.mtime === +prev.mtime) {
                        return;
                    }
                    else {
                        // File changed
                        eventKind = FileWatcherEventKind.Changed;
                    }
                    callback(fileName, eventKind, curr.mtime);
                }
            }
            function fsWatchWorker(fileOrDirectory, recursive, callback) {
                // Node 4.0 `fs.watch` function supports the "recursive" option on both OSX and Windows
                // (ref: https://github.com/nodejs/node/pull/2649 and https://github.com/Microsoft/TypeScript/issues/4643)
                return _fs.watch(fileOrDirectory, fsSupportsRecursiveFsWatch ?
                    { persistent: true, recursive: !!recursive } : { persistent: true }, callback);
            }
            function readFileWorker(fileName, _encoding) {
                var buffer;
                try {
                    buffer = _fs.readFileSync(fileName);
                }
                catch (e) {
                    return undefined;
                }
                var len = buffer.length;
                if (len >= 2 && buffer[0] === 0xFE && buffer[1] === 0xFF) {
                    // Big endian UTF-16 byte order mark detected. Since big endian is not supported by node.js,
                    // flip all byte pairs and treat as little endian.
                    len &= ~1; // Round down to a multiple of 2
                    for (var i = 0; i < len; i += 2) {
                        var temp = buffer[i];
                        buffer[i] = buffer[i + 1];
                        buffer[i + 1] = temp;
                    }
                    return buffer.toString("utf16le", 2);
                }
                if (len >= 2 && buffer[0] === 0xFF && buffer[1] === 0xFE) {
                    // Little endian UTF-16 byte order mark detected
                    return buffer.toString("utf16le", 2);
                }
                if (len >= 3 && buffer[0] === 0xEF && buffer[1] === 0xBB && buffer[2] === 0xBF) {
                    // UTF-8 byte order mark detected
                    return buffer.toString("utf8", 3);
                }
                // Default is UTF-8 with no byte order mark
                return buffer.toString("utf8");
            }
            function readFile(fileName, _encoding) {
                ts.perfLogger.logStartReadFile(fileName);
                var file = readFileWorker(fileName, _encoding);
                ts.perfLogger.logStopReadFile();
                return file;
            }
            function writeFile(fileName, data, writeByteOrderMark) {
                ts.perfLogger.logEvent("WriteFile: " + fileName);
                // If a BOM is required, emit one
                if (writeByteOrderMark) {
                    data = byteOrderMarkIndicator + data;
                }
                var fd;
                try {
                    fd = _fs.openSync(fileName, "w");
                    _fs.writeSync(fd, data, /*position*/ undefined, "utf8");
                }
                finally {
                    if (fd !== undefined) {
                        _fs.closeSync(fd);
                    }
                }
            }
            function getAccessibleFileSystemEntries(path) {
                ts.perfLogger.logEvent("ReadDir: " + (path || "."));
                try {
                    var entries = _fs.readdirSync(path || ".", { withFileTypes: true });
                    var files = [];
                    var directories = [];
                    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                        var dirent = entries_1[_i];
                        // withFileTypes is not supported before Node 10.10.
                        var entry = typeof dirent === "string" ? dirent : dirent.name;
                        // This is necessary because on some file system node fails to exclude
                        // "." and "..". See https://github.com/nodejs/node/issues/4002
                        if (entry === "." || entry === "..") {
                            continue;
                        }
                        var stat = void 0;
                        if (typeof dirent === "string" || dirent.isSymbolicLink()) {
                            var name = ts.combinePaths(path, entry);
                            try {
                                stat = statSync(name);
                                if (!stat) {
                                    continue;
                                }
                            }
                            catch (e) {
                                continue;
                            }
                        }
                        else {
                            stat = dirent;
                        }
                        if (stat.isFile()) {
                            files.push(entry);
                        }
                        else if (stat.isDirectory()) {
                            directories.push(entry);
                        }
                    }
                    files.sort();
                    directories.sort();
                    return { files: files, directories: directories };
                }
                catch (e) {
                    return ts.emptyFileSystemEntries;
                }
            }
            function readDirectory(path, extensions, excludes, includes, depth) {
                return ts.matchFiles(path, extensions, excludes, includes, useCaseSensitiveFileNames, process.cwd(), depth, getAccessibleFileSystemEntries, realpath);
            }
            function fileSystemEntryExists(path, entryKind) {
                // Since the error thrown by fs.statSync isn't used, we can avoid collecting a stack trace to improve
                // the CPU time performance.
                var originalStackTraceLimit = Error.stackTraceLimit;
                Error.stackTraceLimit = 0;
                try {
                    var stat = statSync(path);
                    if (!stat) {
                        return false;
                    }
                    switch (entryKind) {
                        case 0 /* FileSystemEntryKind.File */: return stat.isFile();
                        case 1 /* FileSystemEntryKind.Directory */: return stat.isDirectory();
                        default: return false;
                    }
                }
                catch (e) {
                    return false;
                }
                finally {
                    Error.stackTraceLimit = originalStackTraceLimit;
                }
            }
            function fileExists(path) {
                return fileSystemEntryExists(path, 0 /* FileSystemEntryKind.File */);
            }
            function directoryExists(path) {
                return fileSystemEntryExists(path, 1 /* FileSystemEntryKind.Directory */);
            }
            function getDirectories(path) {
                return getAccessibleFileSystemEntries(path).directories.slice();
            }
            function fsRealPathHandlingLongPath(path) {
                return path.length < 260 ? _fs.realpathSync.native(path) : _fs.realpathSync(path);
            }
            function realpath(path) {
                try {
                    return fsRealpath(path);
                }
                catch (_a) {
                    return path;
                }
            }
            function getModifiedTime(path) {
                var _a;
                // Since the error thrown by fs.statSync isn't used, we can avoid collecting a stack trace to improve
                // the CPU time performance.
                var originalStackTraceLimit = Error.stackTraceLimit;
                Error.stackTraceLimit = 0;
                try {
                    return (_a = statSync(path)) === null || _a === void 0 ? void 0 : _a.mtime;
                }
                catch (e) {
                    return undefined;
                }
                finally {
                    Error.stackTraceLimit = originalStackTraceLimit;
                }
            }
            function setModifiedTime(path, time) {
                try {
                    _fs.utimesSync(path, time, time);
                }
                catch (e) {
                    return;
                }
            }
            function deleteFile(path) {
                try {
                    return _fs.unlinkSync(path);
                }
                catch (e) {
                    return;
                }
            }
            function createSHA256Hash(data) {
                var hash = _crypto.createHash("sha256");
                hash.update(data);
                return hash.digest("hex");
            }
        }
        var sys;
        if (typeof process !== "undefined" && process.nextTick && !process.browser && typeof require !== "undefined") {
            // process and process.nextTick checks if current environment is node-like
            // process.browser check excludes webpack and browserify
            sys = getNodeSystem();
        }
        if (sys) {
            // patch writefile to create folder before writing the file
            patchWriteFileEnsuringDirectory(sys);
        }
        return sys;
    })();
    /*@internal*/
    function setSys(s) {
        ts.sys = s;
    }
    ts.setSys = setSys;
    if (ts.sys && ts.sys.getEnvironmentVariable) {
        setCustomPollingValues(ts.sys);
        ts.Debug.setAssertionLevel(/^development$/i.test(ts.sys.getEnvironmentVariable("NODE_ENV"))
            ? 1 /* AssertionLevel.Normal */
            : 0 /* AssertionLevel.None */);
    }
    if (ts.sys && ts.sys.debugMode) {
        ts.Debug.isDebugging = true;
    }
})(ts || (ts = {}));
/* @internal */
var ts;
(function (ts) {
    /**
     * Internally, we represent paths as strings with '/' as the directory separator.
     * When we make system calls (eg: LanguageServiceHost.getDirectory()),
     * we expect the host to correctly handle paths in our specified format.
     */
    ts.directorySeparator = "/";
    ts.altDirectorySeparator = "\\";
    var urlSchemeSeparator = "://";
    var backslashRegExp = /\\/g;
    //// Path Tests
    /**
     * Determines whether a charCode corresponds to `/` or `\`.
     */
    function isAnyDirectorySeparator(charCode) {
        return charCode === 47 /* CharacterCodes.slash */ || charCode === 92 /* CharacterCodes.backslash */;
    }
    ts.isAnyDirectorySeparator = isAnyDirectorySeparator;
    /**
     * Determines whether a path starts with a URL scheme (e.g. starts with `http://`, `ftp://`, `file://`, etc.).
     */
    function isUrl(path) {
        return getEncodedRootLength(path) < 0;
    }
    ts.isUrl = isUrl;
    /**
     * Determines whether a path is an absolute disk path (e.g. starts with `/`, or a dos path
     * like `c:`, `c:\` or `c:/`).
     */
    function isRootedDiskPath(path) {
        return getEncodedRootLength(path) > 0;
    }
    ts.isRootedDiskPath = isRootedDiskPath;
    /**
     * Determines whether a path consists only of a path root.
     */
    function isDiskPathRoot(path) {
        var rootLength = getEncodedRootLength(path);
        return rootLength > 0 && rootLength === path.length;
    }
    ts.isDiskPathRoot = isDiskPathRoot;
    /**
     * Determines whether a path starts with an absolute path component (i.e. `/`, `c:/`, `file://`, etc.).
     *
     * ```ts
     * // POSIX
     * pathIsAbsolute("/path/to/file.ext") === true
     * // DOS
     * pathIsAbsolute("c:/path/to/file.ext") === true
     * // URL
     * pathIsAbsolute("file:///path/to/file.ext") === true
     * // Non-absolute
     * pathIsAbsolute("path/to/file.ext") === false
     * pathIsAbsolute("./path/to/file.ext") === false
     * ```
     */
    function pathIsAbsolute(path) {
        return getEncodedRootLength(path) !== 0;
    }
    ts.pathIsAbsolute = pathIsAbsolute;
    /**
     * Determines whether a path starts with a relative path component (i.e. `.` or `..`).
     */
    function pathIsRelative(path) {
        return /^\.\.?($|[\\/])/.test(path);
    }
    ts.pathIsRelative = pathIsRelative;
    /**
     * Determines whether a path is neither relative nor absolute, e.g. "path/to/file".
     * Also known misleadingly as "non-relative".
     */
    function pathIsBareSpecifier(path) {
        return !pathIsAbsolute(path) && !pathIsRelative(path);
    }
    ts.pathIsBareSpecifier = pathIsBareSpecifier;
    function hasExtension(fileName) {
        return ts.stringContains(getBaseFileName(fileName), ".");
    }
    ts.hasExtension = hasExtension;
    function fileExtensionIs(path, extension) {
        return path.length > extension.length && ts.endsWith(path, extension);
    }
    ts.fileExtensionIs = fileExtensionIs;
    function fileExtensionIsOneOf(path, extensions) {
        for (var _i = 0, extensions_1 = extensions; _i < extensions_1.length; _i++) {
            var extension = extensions_1[_i];
            if (fileExtensionIs(path, extension)) {
                return true;
            }
        }
        return false;
    }
    ts.fileExtensionIsOneOf = fileExtensionIsOneOf;
    /**
     * Determines whether a path has a trailing separator (`/` or `\\`).
     */
    function hasTrailingDirectorySeparator(path) {
        return path.length > 0 && isAnyDirectorySeparator(path.charCodeAt(path.length - 1));
    }
    ts.hasTrailingDirectorySeparator = hasTrailingDirectorySeparator;
    //// Path Parsing
    function isVolumeCharacter(charCode) {
        return (charCode >= 97 /* CharacterCodes.a */ && charCode <= 122 /* CharacterCodes.z */) ||
            (charCode >= 65 /* CharacterCodes.A */ && charCode <= 90 /* CharacterCodes.Z */);
    }
    function getFileUrlVolumeSeparatorEnd(url, start) {
        var ch0 = url.charCodeAt(start);
        if (ch0 === 58 /* CharacterCodes.colon */)
            return start + 1;
        if (ch0 === 37 /* CharacterCodes.percent */ && url.charCodeAt(start + 1) === 51 /* CharacterCodes._3 */) {
            var ch2 = url.charCodeAt(start + 2);
            if (ch2 === 97 /* CharacterCodes.a */ || ch2 === 65 /* CharacterCodes.A */)
                return start + 3;
        }
        return -1;
    }
    /**
     * Returns length of the root part of a path or URL (i.e. length of "/", "x:/", "//server/share/, file:///user/files").
     * If the root is part of a URL, the twos-complement of the root length is returned.
     */
    function getEncodedRootLength(path) {
        if (!path)
            return 0;
        var ch0 = path.charCodeAt(0);
        // POSIX or UNC
        if (ch0 === 47 /* CharacterCodes.slash */ || ch0 === 92 /* CharacterCodes.backslash */) {
            if (path.charCodeAt(1) !== ch0)
                return 1; // POSIX: "/" (or non-normalized "\")
            var p1 = path.indexOf(ch0 === 47 /* CharacterCodes.slash */ ? ts.directorySeparator : ts.altDirectorySeparator, 2);
            if (p1 < 0)
                return path.length; // UNC: "//server" or "\\server"
            return p1 + 1; // UNC: "//server/" or "\\server\"
        }
        // DOS
        if (isVolumeCharacter(ch0) && path.charCodeAt(1) === 58 /* CharacterCodes.colon */) {
            var ch2 = path.charCodeAt(2);
            if (ch2 === 47 /* CharacterCodes.slash */ || ch2 === 92 /* CharacterCodes.backslash */)
                return 3; // DOS: "c:/" or "c:\"
            if (path.length === 2)
                return 2; // DOS: "c:" (but not "c:d")
        }
        // URL
        var schemeEnd = path.indexOf(urlSchemeSeparator);
        if (schemeEnd !== -1) {
            var authorityStart = schemeEnd + urlSchemeSeparator.length;
            var authorityEnd = path.indexOf(ts.directorySeparator, authorityStart);
            if (authorityEnd !== -1) { // URL: "file:///", "file://server/", "file://server/path"
                // For local "file" URLs, include the leading DOS volume (if present).
                // Per https://www.ietf.org/rfc/rfc1738.txt, a host of "" or "localhost" is a
                // special case interpreted as "the machine from which the URL is being interpreted".
                var scheme = path.slice(0, schemeEnd);
                var authority = path.slice(authorityStart, authorityEnd);
                if (scheme === "file" && (authority === "" || authority === "localhost") &&
                    isVolumeCharacter(path.charCodeAt(authorityEnd + 1))) {
                    var volumeSeparatorEnd = getFileUrlVolumeSeparatorEnd(path, authorityEnd + 2);
                    if (volumeSeparatorEnd !== -1) {
                        if (path.charCodeAt(volumeSeparatorEnd) === 47 /* CharacterCodes.slash */) {
                            // URL: "file:///c:/", "file://localhost/c:/", "file:///c%3a/", "file://localhost/c%3a/"
                            return ~(volumeSeparatorEnd + 1);
                        }
                        if (volumeSeparatorEnd === path.length) {
                            // URL: "file:///c:", "file://localhost/c:", "file:///c$3a", "file://localhost/c%3a"
                            // but not "file:///c:d" or "file:///c%3ad"
                            return ~volumeSeparatorEnd;
                        }
                    }
                }
                return ~(authorityEnd + 1); // URL: "file://server/", "http://server/"
            }
            return ~path.length; // URL: "file://server", "http://server"
        }
        // relative
        return 0;
    }
    /**
     * Returns length of the root part of a path or URL (i.e. length of "/", "x:/", "//server/share/, file:///user/files").
     *
     * For example:
     * ```ts
     * getRootLength("a") === 0                   // ""
     * getRootLength("/") === 1                   // "/"
     * getRootLength("c:") === 2                  // "c:"
     * getRootLength("c:d") === 0                 // ""
     * getRootLength("c:/") === 3                 // "c:/"
     * getRootLength("c:\\") === 3                // "c:\\"
     * getRootLength("//server") === 7            // "//server"
     * getRootLength("//server/share") === 8      // "//server/"
     * getRootLength("\\\\server") === 7          // "\\\\server"
     * getRootLength("\\\\server\\share") === 8   // "\\\\server\\"
     * getRootLength("file:///path") === 8        // "file:///"
     * getRootLength("file:///c:") === 10         // "file:///c:"
     * getRootLength("file:///c:d") === 8         // "file:///"
     * getRootLength("file:///c:/path") === 11    // "file:///c:/"
     * getRootLength("file://server") === 13      // "file://server"
     * getRootLength("file://server/path") === 14 // "file://server/"
     * getRootLength("http://server") === 13      // "http://server"
     * getRootLength("http://server/path") === 14 // "http://server/"
     * ```
     */
    function getRootLength(path) {
        var rootLength = getEncodedRootLength(path);
        return rootLength < 0 ? ~rootLength : rootLength;
    }
    ts.getRootLength = getRootLength;
    function getDirectoryPath(path) {
        path = normalizeSlashes(path);
        // If the path provided is itself the root, then return it.
        var rootLength = getRootLength(path);
        if (rootLength === path.length)
            return path;
        // return the leading portion of the path up to the last (non-terminal) directory separator
        // but not including any trailing directory separator.
        path = removeTrailingDirectorySeparator(path);
        return path.slice(0, Math.max(rootLength, path.lastIndexOf(ts.directorySeparator)));
    }
    ts.getDirectoryPath = getDirectoryPath;
    function getBaseFileName(path, extensions, ignoreCase) {
        path = normalizeSlashes(path);
        // if the path provided is itself the root, then it has not file name.
        var rootLength = getRootLength(path);
        if (rootLength === path.length)
            return "";
        // return the trailing portion of the path starting after the last (non-terminal) directory
        // separator but not including any trailing directory separator.
        path = removeTrailingDirectorySeparator(path);
        var name = path.slice(Math.max(getRootLength(path), path.lastIndexOf(ts.directorySeparator) + 1));
        var extension = extensions !== undefined && ignoreCase !== undefined ? getAnyExtensionFromPath(name, extensions, ignoreCase) : undefined;
        return extension ? name.slice(0, name.length - extension.length) : name;
    }
    ts.getBaseFileName = getBaseFileName;
    function tryGetExtensionFromPath(path, extension, stringEqualityComparer) {
        if (!ts.startsWith(extension, "."))
            extension = "." + extension;
        if (path.length >= extension.length && path.charCodeAt(path.length - extension.length) === 46 /* CharacterCodes.dot */) {
            var pathExtension = path.slice(path.length - extension.length);
            if (stringEqualityComparer(pathExtension, extension)) {
                return pathExtension;
            }
        }
    }
    function getAnyExtensionFromPathWorker(path, extensions, stringEqualityComparer) {
        if (typeof extensions === "string") {
            return tryGetExtensionFromPath(path, extensions, stringEqualityComparer) || "";
        }
        for (var _i = 0, extensions_2 = extensions; _i < extensions_2.length; _i++) {
            var extension = extensions_2[_i];
            var result = tryGetExtensionFromPath(path, extension, stringEqualityComparer);
            if (result)
                return result;
        }
        return "";
    }
    function getAnyExtensionFromPath(path, extensions, ignoreCase) {
        // Retrieves any string from the final "." onwards from a base file name.
        // Unlike extensionFromPath, which throws an exception on unrecognized extensions.
        if (extensions) {
            return getAnyExtensionFromPathWorker(removeTrailingDirectorySeparator(path), extensions, ignoreCase ? ts.equateStringsCaseInsensitive : ts.equateStringsCaseSensitive);
        }
        var baseFileName = getBaseFileName(path);
        var extensionIndex = baseFileName.lastIndexOf(".");
        if (extensionIndex >= 0) {
            return baseFileName.substring(extensionIndex);
        }
        return "";
    }
    ts.getAnyExtensionFromPath = getAnyExtensionFromPath;
    function pathComponents(path, rootLength) {
        var root = path.substring(0, rootLength);
        var rest = path.substring(rootLength).split(ts.directorySeparator);
        if (rest.length && !ts.lastOrUndefined(rest))
            rest.pop();
        return __spreadArray([root], rest, true);
    }
    /**
     * Parse a path into an array containing a root component (at index 0) and zero or more path
     * components (at indices > 0). The result is not normalized.
     * If the path is relative, the root component is `""`.
     * If the path is absolute, the root component includes the first path separator (`/`).
     *
     * ```ts
     * // POSIX
     * getPathComponents("/path/to/file.ext") === ["/", "path", "to", "file.ext"]
     * getPathComponents("/path/to/") === ["/", "path", "to"]
     * getPathComponents("/") === ["/"]
     * // DOS
     * getPathComponents("c:/path/to/file.ext") === ["c:/", "path", "to", "file.ext"]
     * getPathComponents("c:/path/to/") === ["c:/", "path", "to"]
     * getPathComponents("c:/") === ["c:/"]
     * getPathComponents("c:") === ["c:"]
     * // URL
     * getPathComponents("http://typescriptlang.org/path/to/file.ext") === ["http://typescriptlang.org/", "path", "to", "file.ext"]
     * getPathComponents("http://typescriptlang.org/path/to/") === ["http://typescriptlang.org/", "path", "to"]
     * getPathComponents("http://typescriptlang.org/") === ["http://typescriptlang.org/"]
     * getPathComponents("http://typescriptlang.org") === ["http://typescriptlang.org"]
     * getPathComponents("file://server/path/to/file.ext") === ["file://server/", "path", "to", "file.ext"]
     * getPathComponents("file://server/path/to/") === ["file://server/", "path", "to"]
     * getPathComponents("file://server/") === ["file://server/"]
     * getPathComponents("file://server") === ["file://server"]
     * getPathComponents("file:///path/to/file.ext") === ["file:///", "path", "to", "file.ext"]
     * getPathComponents("file:///path/to/") === ["file:///", "path", "to"]
     * getPathComponents("file:///") === ["file:///"]
     * getPathComponents("file://") === ["file://"]
     */
    function getPathComponents(path, currentDirectory) {
        if (currentDirectory === void 0) { currentDirectory = ""; }
        path = combinePaths(currentDirectory, path);
        return pathComponents(path, getRootLength(path));
    }
    ts.getPathComponents = getPathComponents;
    //// Path Formatting
    /**
     * Formats a parsed path consisting of a root component (at index 0) and zero or more path
     * segments (at indices > 0).
     *
     * ```ts
     * getPathFromPathComponents(["/", "path", "to", "file.ext"]) === "/path/to/file.ext"
     * ```
     */
    function getPathFromPathComponents(pathComponents) {
        if (pathComponents.length === 0)
            return "";
        var root = pathComponents[0] && ensureTrailingDirectorySeparator(pathComponents[0]);
        return root + pathComponents.slice(1).join(ts.directorySeparator);
    }
    ts.getPathFromPathComponents = getPathFromPathComponents;
    //// Path Normalization
    /**
     * Normalize path separators, converting `\` into `/`.
     */
    function normalizeSlashes(path) {
        var index = path.indexOf("\\");
        if (index === -1) {
            return path;
        }
        backslashRegExp.lastIndex = index; // prime regex with known position
        return path.replace(backslashRegExp, ts.directorySeparator);
    }
    ts.normalizeSlashes = normalizeSlashes;
    /**
     * Reduce an array of path components to a more simplified path by navigating any
     * `"."` or `".."` entries in the path.
     */
    function reducePathComponents(components) {
        if (!ts.some(components))
            return [];
        var reduced = [components[0]];
        for (var i = 1; i < components.length; i++) {
            var component = components[i];
            if (!component)
                continue;
            if (component === ".")
                continue;
            if (component === "..") {
                if (reduced.length > 1) {
                    if (reduced[reduced.length - 1] !== "..") {
                        reduced.pop();
                        continue;
                    }
                }
                else if (reduced[0])
                    continue;
            }
            reduced.push(component);
        }
        return reduced;
    }
    ts.reducePathComponents = reducePathComponents;
    /**
     * Combines paths. If a path is absolute, it replaces any previous path. Relative paths are not simplified.
     *
     * ```ts
     * // Non-rooted
     * combinePaths("path", "to", "file.ext") === "path/to/file.ext"
     * combinePaths("path", "dir", "..", "to", "file.ext") === "path/dir/../to/file.ext"
     * // POSIX
     * combinePaths("/path", "to", "file.ext") === "/path/to/file.ext"
     * combinePaths("/path", "/to", "file.ext") === "/to/file.ext"
     * // DOS
     * combinePaths("c:/path", "to", "file.ext") === "c:/path/to/file.ext"
     * combinePaths("c:/path", "c:/to", "file.ext") === "c:/to/file.ext"
     * // URL
     * combinePaths("file:///path", "to", "file.ext") === "file:///path/to/file.ext"
     * combinePaths("file:///path", "file:///to", "file.ext") === "file:///to/file.ext"
     * ```
     */
    function combinePaths(path) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        if (path)
            path = normalizeSlashes(path);
        for (var _a = 0, paths_1 = paths; _a < paths_1.length; _a++) {
            var relativePath = paths_1[_a];
            if (!relativePath)
                continue;
            relativePath = normalizeSlashes(relativePath);
            if (!path || getRootLength(relativePath) !== 0) {
                path = relativePath;
            }
            else {
                path = ensureTrailingDirectorySeparator(path) + relativePath;
            }
        }
        return path;
    }
    ts.combinePaths = combinePaths;
    /**
     * Combines and resolves paths. If a path is absolute, it replaces any previous path. Any
     * `.` and `..` path components are resolved. Trailing directory separators are preserved.
     *
     * ```ts
     * resolvePath("/path", "to", "file.ext") === "path/to/file.ext"
     * resolvePath("/path", "to", "file.ext/") === "path/to/file.ext/"
     * resolvePath("/path", "dir", "..", "to", "file.ext") === "path/to/file.ext"
     * ```
     */
    function resolvePath(path) {
        var paths = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            paths[_i - 1] = arguments[_i];
        }
        return normalizePath(ts.some(paths) ? combinePaths.apply(void 0, __spreadArray([path], paths, false)) : normalizeSlashes(path));
    }
    ts.resolvePath = resolvePath;
    /**
     * Parse a path into an array containing a root component (at index 0) and zero or more path
     * components (at indices > 0). The result is normalized.
     * If the path is relative, the root component is `""`.
     * If the path is absolute, the root component includes the first path separator (`/`).
     *
     * ```ts
     * getNormalizedPathComponents("to/dir/../file.ext", "/path/") === ["/", "path", "to", "file.ext"]
     * ```
     */
    function getNormalizedPathComponents(path, currentDirectory) {
        return reducePathComponents(getPathComponents(path, currentDirectory));
    }
    ts.getNormalizedPathComponents = getNormalizedPathComponents;
    function getNormalizedAbsolutePath(fileName, currentDirectory) {
        return getPathFromPathComponents(getNormalizedPathComponents(fileName, currentDirectory));
    }
    ts.getNormalizedAbsolutePath = getNormalizedAbsolutePath;
    function normalizePath(path) {
        path = normalizeSlashes(path);
        // Most paths don't require normalization
        if (!relativePathSegmentRegExp.test(path)) {
            return path;
        }
        // Some paths only require cleanup of `/./` or leading `./`
        var simplified = path.replace(/\/\.\//g, "/").replace(/^\.\//, "");
        if (simplified !== path) {
            path = simplified;
            if (!relativePathSegmentRegExp.test(path)) {
                return path;
            }
        }
        // Other paths require full normalization
        var normalized = getPathFromPathComponents(reducePathComponents(getPathComponents(path)));
        return normalized && hasTrailingDirectorySeparator(path) ? ensureTrailingDirectorySeparator(normalized) : normalized;
    }
    ts.normalizePath = normalizePath;
    function getPathWithoutRoot(pathComponents) {
        if (pathComponents.length === 0)
            return "";
        return pathComponents.slice(1).join(ts.directorySeparator);
    }
    function getNormalizedAbsolutePathWithoutRoot(fileName, currentDirectory) {
        return getPathWithoutRoot(getNormalizedPathComponents(fileName, currentDirectory));
    }
    ts.getNormalizedAbsolutePathWithoutRoot = getNormalizedAbsolutePathWithoutRoot;
    function toPath(fileName, basePath, getCanonicalFileName) {
        var nonCanonicalizedPath = isRootedDiskPath(fileName)
            ? normalizePath(fileName)
            : getNormalizedAbsolutePath(fileName, basePath);
        return getCanonicalFileName(nonCanonicalizedPath);
    }
    ts.toPath = toPath;
    function removeTrailingDirectorySeparator(path) {
        if (hasTrailingDirectorySeparator(path)) {
            return path.substr(0, path.length - 1);
        }
        return path;
    }
    ts.removeTrailingDirectorySeparator = removeTrailingDirectorySeparator;
    function ensureTrailingDirectorySeparator(path) {
        if (!hasTrailingDirectorySeparator(path)) {
            return path + ts.directorySeparator;
        }
        return path;
    }
    ts.ensureTrailingDirectorySeparator = ensureTrailingDirectorySeparator;
    /**
     * Ensures a path is either absolute (prefixed with `/` or `c:`) or dot-relative (prefixed
     * with `./` or `../`) so as not to be confused with an unprefixed module name.
     *
     * ```ts
     * ensurePathIsNonModuleName("/path/to/file.ext") === "/path/to/file.ext"
     * ensurePathIsNonModuleName("./path/to/file.ext") === "./path/to/file.ext"
     * ensurePathIsNonModuleName("../path/to/file.ext") === "../path/to/file.ext"
     * ensurePathIsNonModuleName("path/to/file.ext") === "./path/to/file.ext"
     * ```
     */
    function ensurePathIsNonModuleName(path) {
        return !pathIsAbsolute(path) && !pathIsRelative(path) ? "./" + path : path;
    }
    ts.ensurePathIsNonModuleName = ensurePathIsNonModuleName;
    function changeAnyExtension(path, ext, extensions, ignoreCase) {
        var pathext = extensions !== undefined && ignoreCase !== undefined ? getAnyExtensionFromPath(path, extensions, ignoreCase) : getAnyExtensionFromPath(path);
        return pathext ? path.slice(0, path.length - pathext.length) + (ts.startsWith(ext, ".") ? ext : "." + ext) : path;
    }
    ts.changeAnyExtension = changeAnyExtension;
    //// Path Comparisons
    // check path for these segments: '', '.'. '..'
    var relativePathSegmentRegExp = /(?:\/\/)|(?:^|\/)\.\.?(?:$|\/)/;
    function comparePathsWorker(a, b, componentComparer) {
        if (a === b)
            return 0 /* Comparison.EqualTo */;
        if (a === undefined)
            return -1 /* Comparison.LessThan */;
        if (b === undefined)
            return 1 /* Comparison.GreaterThan */;
        // NOTE: Performance optimization - shortcut if the root segments differ as there would be no
        //       need to perform path reduction.
        var aRoot = a.substring(0, getRootLength(a));
        var bRoot = b.substring(0, getRootLength(b));
        var result = ts.compareStringsCaseInsensitive(aRoot, bRoot);
        if (result !== 0 /* Comparison.EqualTo */) {
            return result;
        }
        // NOTE: Performance optimization - shortcut if there are no relative path segments in
        //       the non-root portion of the path
        var aRest = a.substring(aRoot.length);
        var bRest = b.substring(bRoot.length);
        if (!relativePathSegmentRegExp.test(aRest) && !relativePathSegmentRegExp.test(bRest)) {
            return componentComparer(aRest, bRest);
        }
        // The path contains a relative path segment. Normalize the paths and perform a slower component
        // by component comparison.
        var aComponents = reducePathComponents(getPathComponents(a));
        var bComponents = reducePathComponents(getPathComponents(b));
        var sharedLength = Math.min(aComponents.length, bComponents.length);
        for (var i = 1; i < sharedLength; i++) {
            var result_2 = componentComparer(aComponents[i], bComponents[i]);
            if (result_2 !== 0 /* Comparison.EqualTo */) {
                return result_2;
            }
        }
        return ts.compareValues(aComponents.length, bComponents.length);
    }
    /**
     * Performs a case-sensitive comparison of two paths. Path roots are always compared case-insensitively.
     */
    function comparePathsCaseSensitive(a, b) {
        return comparePathsWorker(a, b, ts.compareStringsCaseSensitive);
    }
    ts.comparePathsCaseSensitive = comparePathsCaseSensitive;
    /**
     * Performs a case-insensitive comparison of two paths.
     */
    function comparePathsCaseInsensitive(a, b) {
        return comparePathsWorker(a, b, ts.compareStringsCaseInsensitive);
    }
    ts.comparePathsCaseInsensitive = comparePathsCaseInsensitive;
    function comparePaths(a, b, currentDirectory, ignoreCase) {
        if (typeof currentDirectory === "string") {
            a = combinePaths(currentDirectory, a);
            b = combinePaths(currentDirectory, b);
        }
        else if (typeof currentDirectory === "boolean") {
            ignoreCase = currentDirectory;
        }
        return comparePathsWorker(a, b, ts.getStringComparer(ignoreCase));
    }
    ts.comparePaths = comparePaths;
    function containsPath(parent, child, currentDirectory, ignoreCase) {
        if (typeof currentDirectory === "string") {
            parent = combinePaths(currentDirectory, parent);
            child = combinePaths(currentDirectory, child);
        }
        else if (typeof currentDirectory === "boolean") {
            ignoreCase = currentDirectory;
        }
        if (parent === undefined || child === undefined)
            return false;
        if (parent === child)
            return true;
        var parentComponents = reducePathComponents(getPathComponents(parent));
        var childComponents = reducePathComponents(getPathComponents(child));
        if (childComponents.length < parentComponents.length) {
            return false;
        }
        var componentEqualityComparer = ignoreCase ? ts.equateStringsCaseInsensitive : ts.equateStringsCaseSensitive;
        for (var i = 0; i < parentComponents.length; i++) {
            var equalityComparer = i === 0 ? ts.equateStringsCaseInsensitive : componentEqualityComparer;
            if (!equalityComparer(parentComponents[i], childComponents[i])) {
                return false;
            }
        }
        return true;
    }
    ts.containsPath = containsPath;
    /**
     * Determines whether `fileName` starts with the specified `directoryName` using the provided path canonicalization callback.
     * Comparison is case-sensitive between the canonical paths.
     *
     * Use `containsPath` if file names are not already reduced and absolute.
     */
    function startsWithDirectory(fileName, directoryName, getCanonicalFileName) {
        var canonicalFileName = getCanonicalFileName(fileName);
        var canonicalDirectoryName = getCanonicalFileName(directoryName);
        return ts.startsWith(canonicalFileName, canonicalDirectoryName + "/") || ts.startsWith(canonicalFileName, canonicalDirectoryName + "\\");
    }
    ts.startsWithDirectory = startsWithDirectory;
    //// Relative Paths
    function getPathComponentsRelativeTo(from, to, stringEqualityComparer, getCanonicalFileName) {
        var fromComponents = reducePathComponents(getPathComponents(from));
        var toComponents = reducePathComponents(getPathComponents(to));
        var start;
        for (start = 0; start < fromComponents.length && start < toComponents.length; start++) {
            var fromComponent = getCanonicalFileName(fromComponents[start]);
            var toComponent = getCanonicalFileName(toComponents[start]);
            var comparer = start === 0 ? ts.equateStringsCaseInsensitive : stringEqualityComparer;
            if (!comparer(fromComponent, toComponent))
                break;
        }
        if (start === 0) {
            return toComponents;
        }
        var components = toComponents.slice(start);
        var relative = [];
        for (; start < fromComponents.length; start++) {
            relative.push("..");
        }
        return __spreadArray(__spreadArray([""], relative, true), components, true);
    }
    ts.getPathComponentsRelativeTo = getPathComponentsRelativeTo;
    function getRelativePathFromDirectory(fromDirectory, to, getCanonicalFileNameOrIgnoreCase) {
        ts.Debug.assert((getRootLength(fromDirectory) > 0) === (getRootLength(to) > 0), "Paths must either both be absolute or both be relative");
        var getCanonicalFileName = typeof getCanonicalFileNameOrIgnoreCase === "function" ? getCanonicalFileNameOrIgnoreCase : ts.identity;
        var ignoreCase = typeof getCanonicalFileNameOrIgnoreCase === "boolean" ? getCanonicalFileNameOrIgnoreCase : false;
        var pathComponents = getPathComponentsRelativeTo(fromDirectory, to, ignoreCase ? ts.equateStringsCaseInsensitive : ts.equateStringsCaseSensitive, getCanonicalFileName);
        return getPathFromPathComponents(pathComponents);
    }
    ts.getRelativePathFromDirectory = getRelativePathFromDirectory;
    function convertToRelativePath(absoluteOrRelativePath, basePath, getCanonicalFileName) {
        return !isRootedDiskPath(absoluteOrRelativePath)
            ? absoluteOrRelativePath
            : getRelativePathToDirectoryOrUrl(basePath, absoluteOrRelativePath, basePath, getCanonicalFileName, /*isAbsolutePathAnUrl*/ false);
    }
    ts.convertToRelativePath = convertToRelativePath;
    function getRelativePathFromFile(from, to, getCanonicalFileName) {
        return ensurePathIsNonModuleName(getRelativePathFromDirectory(getDirectoryPath(from), to, getCanonicalFileName));
    }
    ts.getRelativePathFromFile = getRelativePathFromFile;
    function getRelativePathToDirectoryOrUrl(directoryPathOrUrl, relativeOrAbsolutePath, currentDirectory, getCanonicalFileName, isAbsolutePathAnUrl) {
        var pathComponents = getPathComponentsRelativeTo(resolvePath(currentDirectory, directoryPathOrUrl), resolvePath(currentDirectory, relativeOrAbsolutePath), ts.equateStringsCaseSensitive, getCanonicalFileName);
        var firstComponent = pathComponents[0];
        if (isAbsolutePathAnUrl && isRootedDiskPath(firstComponent)) {
            var prefix = firstComponent.charAt(0) === ts.directorySeparator ? "file://" : "file:///";
            pathComponents[0] = prefix + firstComponent;
        }
        return getPathFromPathComponents(pathComponents);
    }
    ts.getRelativePathToDirectoryOrUrl = getRelativePathToDirectoryOrUrl;
    function forEachAncestorDirectory(directory, callback) {
        while (true) {
            var result = callback(directory);
            if (result !== undefined) {
                return result;
            }
            var parentPath = getDirectoryPath(directory);
            if (parentPath === directory) {
                return undefined;
            }
            directory = parentPath;
        }
    }
    ts.forEachAncestorDirectory = forEachAncestorDirectory;
    function isNodeModulesDirectory(dirPath) {
        return ts.endsWith(dirPath, "/node_modules");
    }
    ts.isNodeModulesDirectory = isNodeModulesDirectory;
})(ts || (ts = {}));
// <auto-generated />
// generated from './diagnosticMessages.json' in 'src/compiler'
/* @internal */
var ts;
(function (ts) {
    function diag(code, category, key, message, reportsUnnecessary, elidedInCompatabilityPyramid, reportsDeprecated) {
        return { code: code, category: category, key: key, message: message, reportsUnnecessary: reportsUnnecessary, elidedInCompatabilityPyramid: elidedInCompatabilityPyramid, reportsDeprecated: reportsDeprecated };
    }
    ts.Diagnostics = {
        Unterminated_string_literal: diag(1002, ts.DiagnosticCategory.Error, "Unterminated_string_literal_1002", "Unterminated string literal."),
        Identifier_expected: diag(1003, ts.DiagnosticCategory.Error, "Identifier_expected_1003", "Identifier expected."),
        _0_expected: diag(1005, ts.DiagnosticCategory.Error, "_0_expected_1005", "'{0}' expected."),
        A_file_cannot_have_a_reference_to_itself: diag(1006, ts.DiagnosticCategory.Error, "A_file_cannot_have_a_reference_to_itself_1006", "A file cannot have a reference to itself."),
        The_parser_expected_to_find_a_1_to_match_the_0_token_here: diag(1007, ts.DiagnosticCategory.Error, "The_parser_expected_to_find_a_1_to_match_the_0_token_here_1007", "The parser expected to find a '{1}' to match the '{0}' token here."),
        Trailing_comma_not_allowed: diag(1009, ts.DiagnosticCategory.Error, "Trailing_comma_not_allowed_1009", "Trailing comma not allowed."),
        Asterisk_Slash_expected: diag(1010, ts.DiagnosticCategory.Error, "Asterisk_Slash_expected_1010", "'*/' expected."),
        An_element_access_expression_should_take_an_argument: diag(1011, ts.DiagnosticCategory.Error, "An_element_access_expression_should_take_an_argument_1011", "An element access expression should take an argument."),
        Unexpected_token: diag(1012, ts.DiagnosticCategory.Error, "Unexpected_token_1012", "Unexpected token."),
        A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma: diag(1013, ts.DiagnosticCategory.Error, "A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma_1013", "A rest parameter or binding pattern may not have a trailing comma."),
        A_rest_parameter_must_be_last_in_a_parameter_list: diag(1014, ts.DiagnosticCategory.Error, "A_rest_parameter_must_be_last_in_a_parameter_list_1014", "A rest parameter must be last in a parameter list."),
        Parameter_cannot_have_question_mark_and_initializer: diag(1015, ts.DiagnosticCategory.Error, "Parameter_cannot_have_question_mark_and_initializer_1015", "Parameter cannot have question mark and initializer."),
        A_required_parameter_cannot_follow_an_optional_parameter: diag(1016, ts.DiagnosticCategory.Error, "A_required_parameter_cannot_follow_an_optional_parameter_1016", "A required parameter cannot follow an optional parameter."),
        An_index_signature_cannot_have_a_rest_parameter: diag(1017, ts.DiagnosticCategory.Error, "An_index_signature_cannot_have_a_rest_parameter_1017", "An index signature cannot have a rest parameter."),
        An_index_signature_parameter_cannot_have_an_accessibility_modifier: diag(1018, ts.DiagnosticCategory.Error, "An_index_signature_parameter_cannot_have_an_accessibility_modifier_1018", "An index signature parameter cannot have an accessibility modifier."),
        An_index_signature_parameter_cannot_have_a_question_mark: diag(1019, ts.DiagnosticCategory.Error, "An_index_signature_parameter_cannot_have_a_question_mark_1019", "An index signature parameter cannot have a question mark."),
        An_index_signature_parameter_cannot_have_an_initializer: diag(1020, ts.DiagnosticCategory.Error, "An_index_signature_parameter_cannot_have_an_initializer_1020", "An index signature parameter cannot have an initializer."),
        An_index_signature_must_have_a_type_annotation: diag(1021, ts.DiagnosticCategory.Error, "An_index_signature_must_have_a_type_annotation_1021", "An index signature must have a type annotation."),
        An_index_signature_parameter_must_have_a_type_annotation: diag(1022, ts.DiagnosticCategory.Error, "An_index_signature_parameter_must_have_a_type_annotation_1022", "An index signature parameter must have a type annotation."),
        readonly_modifier_can_only_appear_on_a_property_declaration_or_index_signature: diag(1024, ts.DiagnosticCategory.Error, "readonly_modifier_can_only_appear_on_a_property_declaration_or_index_signature_1024", "'readonly' modifier can only appear on a property declaration or index signature."),
        An_index_signature_cannot_have_a_trailing_comma: diag(1025, ts.DiagnosticCategory.Error, "An_index_signature_cannot_have_a_trailing_comma_1025", "An index signature cannot have a trailing comma."),
        Accessibility_modifier_already_seen: diag(1028, ts.DiagnosticCategory.Error, "Accessibility_modifier_already_seen_1028", "Accessibility modifier already seen."),
        _0_modifier_must_precede_1_modifier: diag(1029, ts.DiagnosticCategory.Error, "_0_modifier_must_precede_1_modifier_1029", "'{0}' modifier must precede '{1}' modifier."),
        _0_modifier_already_seen: diag(1030, ts.DiagnosticCategory.Error, "_0_modifier_already_seen_1030", "'{0}' modifier already seen."),
        _0_modifier_cannot_appear_on_class_elements_of_this_kind: diag(1031, ts.DiagnosticCategory.Error, "_0_modifier_cannot_appear_on_class_elements_of_this_kind_1031", "'{0}' modifier cannot appear on class elements of this kind."),
        super_must_be_followed_by_an_argument_list_or_member_access: diag(1034, ts.DiagnosticCategory.Error, "super_must_be_followed_by_an_argument_list_or_member_access_1034", "'super' must be followed by an argument list or member access."),
        Only_ambient_modules_can_use_quoted_names: diag(1035, ts.DiagnosticCategory.Error, "Only_ambient_modules_can_use_quoted_names_1035", "Only ambient modules can use quoted names."),
        Statements_are_not_allowed_in_ambient_contexts: diag(1036, ts.DiagnosticCategory.Error, "Statements_are_not_allowed_in_ambient_contexts_1036", "Statements are not allowed in ambient contexts."),
        A_declare_modifier_cannot_be_used_in_an_already_ambient_context: diag(1038, ts.DiagnosticCategory.Error, "A_declare_modifier_cannot_be_used_in_an_already_ambient_context_1038", "A 'declare' modifier cannot be used in an already ambient context."),
        Initializers_are_not_allowed_in_ambient_contexts: diag(1039, ts.DiagnosticCategory.Error, "Initializers_are_not_allowed_in_ambient_contexts_1039", "Initializers are not allowed in ambient contexts."),
        _0_modifier_cannot_be_used_in_an_ambient_context: diag(1040, ts.DiagnosticCategory.Error, "_0_modifier_cannot_be_used_in_an_ambient_context_1040", "'{0}' modifier cannot be used in an ambient context."),
        _0_modifier_cannot_be_used_here: diag(1042, ts.DiagnosticCategory.Error, "_0_modifier_cannot_be_used_here_1042", "'{0}' modifier cannot be used here."),
        _0_modifier_cannot_appear_on_a_module_or_namespace_element: diag(1044, ts.DiagnosticCategory.Error, "_0_modifier_cannot_appear_on_a_module_or_namespace_element_1044", "'{0}' modifier cannot appear on a module or namespace element."),
        Top_level_declarations_in_d_ts_files_must_start_with_either_a_declare_or_export_modifier: diag(1046, ts.DiagnosticCategory.Error, "Top_level_declarations_in_d_ts_files_must_start_with_either_a_declare_or_export_modifier_1046", "Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier."),
        A_rest_parameter_cannot_be_optional: diag(1047, ts.DiagnosticCategory.Error, "A_rest_parameter_cannot_be_optional_1047", "A rest parameter cannot be optional."),
        A_rest_parameter_cannot_have_an_initializer: diag(1048, ts.DiagnosticCategory.Error, "A_rest_parameter_cannot_have_an_initializer_1048", "A rest parameter cannot have an initializer."),
        A_set_accessor_must_have_exactly_one_parameter: diag(1049, ts.DiagnosticCategory.Error, "A_set_accessor_must_have_exactly_one_parameter_1049", "A 'set' accessor must have exactly one parameter."),
        A_set_accessor_cannot_have_an_optional_parameter: diag(1051, ts.DiagnosticCategory.Error, "A_set_accessor_cannot_have_an_optional_parameter_1051", "A 'set' accessor cannot have an optional parameter."),
        A_set_accessor_parameter_cannot_have_an_initializer: diag(1052, ts.DiagnosticCategory.Error, "A_set_accessor_parameter_cannot_have_an_initializer_1052", "A 'set' accessor parameter cannot have an initializer."),
        A_set_accessor_cannot_have_rest_parameter: diag(1053, ts.DiagnosticCategory.Error, "A_set_accessor_cannot_have_rest_parameter_1053", "A 'set' accessor cannot have rest parameter."),
        A_get_accessor_cannot_have_parameters: diag(1054, ts.DiagnosticCategory.Error, "A_get_accessor_cannot_have_parameters_1054", "A 'get' accessor cannot have parameters."),
        Type_0_is_not_a_valid_async_function_return_type_in_ES5_SlashES3_because_it_does_not_refer_to_a_Promise_compatible_constructor_value: diag(1055, ts.DiagnosticCategory.Error, "Type_0_is_not_a_valid_async_function_return_type_in_ES5_SlashES3_because_it_does_not_refer_to_a_Prom_1055", "Type '{0}' is not a valid async function return type in ES5/ES3 because it does not refer to a Promise-compatible constructor value."),
        Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher: diag(1056, ts.DiagnosticCategory.Error, "Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher_1056", "Accessors are only available when targeting ECMAScript 5 and higher."),
        The_return_type_of_an_async_function_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: diag(1058, ts.DiagnosticCategory.Error, "The_return_type_of_an_async_function_must_either_be_a_valid_promise_or_must_not_contain_a_callable_t_1058", "The return type of an async function must either be a valid promise or must not contain a callable 'then' member."),
        A_promise_must_have_a_then_method: diag(1059, ts.DiagnosticCategory.Error, "A_promise_must_have_a_then_method_1059", "A promise must have a 'then' method."),
        The_first_parameter_of_the_then_method_of_a_promise_must_be_a_callback: diag(1060, ts.DiagnosticCategory.Error, "The_first_parameter_of_the_then_method_of_a_promise_must_be_a_callback_1060", "The first parameter of the 'then' method of a promise must be a callback."),
        Enum_member_must_have_initializer: diag(1061, ts.DiagnosticCategory.Error, "Enum_member_must_have_initializer_1061", "Enum member must have initializer."),
        Type_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method: diag(1062, ts.DiagnosticCategory.Error, "Type_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method_1062", "Type is referenced directly or indirectly in the fulfillment callback of its own 'then' method."),
        An_export_assignment_cannot_be_used_in_a_namespace: diag(1063, ts.DiagnosticCategory.Error, "An_export_assignment_cannot_be_used_in_a_namespace_1063", "An export assignment cannot be used in a namespace."),
        The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type_Did_you_mean_to_write_Promise_0: diag(1064, ts.DiagnosticCategory.Error, "The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type_Did_you_mean_to_wri_1064", "The return type of an async function or method must be the global Promise<T> type. Did you mean to write 'Promise<{0}>'?"),
        In_ambient_enum_declarations_member_initializer_must_be_constant_expression: diag(1066, ts.DiagnosticCategory.Error, "In_ambient_enum_declarations_member_initializer_must_be_constant_expression_1066", "In ambient enum declarations member initializer must be constant expression."),
        Unexpected_token_A_constructor_method_accessor_or_property_was_expected: diag(1068, ts.DiagnosticCategory.Error, "Unexpected_token_A_constructor_method_accessor_or_property_was_expected_1068", "Unexpected token. A constructor, method, accessor, or property was expected."),
        Unexpected_token_A_type_parameter_name_was_expected_without_curly_braces: diag(1069, ts.DiagnosticCategory.Error, "Unexpected_token_A_type_parameter_name_was_expected_without_curly_braces_1069", "Unexpected token. A type parameter name was expected without curly braces."),
        _0_modifier_cannot_appear_on_a_type_member: diag(1070, ts.DiagnosticCategory.Error, "_0_modifier_cannot_appear_on_a_type_member_1070", "'{0}' modifier cannot appear on a type member."),
        _0_modifier_cannot_appear_on_an_index_signature: diag(1071, ts.DiagnosticCategory.Error, "_0_modifier_cannot_appear_on_an_index_signature_1071", "'{0}' modifier cannot appear on an index signature."),
        A_0_modifier_cannot_be_used_with_an_import_declaration: diag(1079, ts.DiagnosticCategory.Error, "A_0_modifier_cannot_be_used_with_an_import_declaration_1079", "A '{0}' modifier cannot be used with an import declaration."),
        Invalid_reference_directive_syntax: diag(1084, ts.DiagnosticCategory.Error, "Invalid_reference_directive_syntax_1084", "Invalid 'reference' directive syntax."),
        Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher_Use_the_syntax_0: diag(1085, ts.DiagnosticCategory.Error, "Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher_Use_the_syntax_0_1085", "Octal literals are not available when targeting ECMAScript 5 and higher. Use the syntax '{0}'."),
        _0_modifier_cannot_appear_on_a_constructor_declaration: diag(1089, ts.DiagnosticCategory.Error, "_0_modifier_cannot_appear_on_a_constructor_declaration_1089", "'{0}' modifier cannot appear on a constructor declaration."),
        _0_modifier_cannot_appear_on_a_parameter: diag(1090, ts.DiagnosticCategory.Error, "_0_modifier_cannot_appear_on_a_parameter_1090", "'{0}' modifier cannot appear on a parameter."),
        Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement: diag(1091, ts.DiagnosticCategory.Error, "Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement_1091", "Only a single variable declaration is allowed in a 'for...in' statement."),
        Type_parameters_cannot_appear_on_a_constructor_declaration: diag(1092, ts.DiagnosticCategory.Error, "Type_parameters_cannot_appear_on_a_constructor_declaration_1092", "Type parameters cannot appear on a constructor declaration."),
        Type_annotation_cannot_appear_on_a_constructor_declaration: diag(1093, ts.DiagnosticCategory.Error, "Type_annotation_cannot_appear_on_a_constructor_declaration_1093", "Type annotation cannot appear on a constructor declaration."),
        An_accessor_cannot_have_type_parameters: diag(1094, ts.DiagnosticCategory.Error, "An_accessor_cannot_have_type_parameters_1094", "An accessor cannot have type parameters."),
        A_set_accessor_cannot_have_a_return_type_annotation: diag(1095, ts.DiagnosticCategory.Error, "A_set_accessor_cannot_have_a_return_type_annotation_1095", "A 'set' accessor cannot have a return type annotation."),
        An_index_signature_must_have_exactly_one_parameter: diag(1096, ts.DiagnosticCategory.Error, "An_index_signature_must_have_exactly_one_parameter_1096", "An index signature must have exactly one parameter."),
        _0_list_cannot_be_empty: diag(1097, ts.DiagnosticCategory.Error, "_0_list_cannot_be_empty_1097", "'{0}' list cannot be empty."),
        Type_parameter_list_cannot_be_empty: diag(1098, ts.DiagnosticCategory.Error, "Type_parameter_list_cannot_be_empty_1098", "Type parameter list cannot be empty."),
        Type_argument_list_cannot_be_empty: diag(1099, ts.DiagnosticCategory.Error, "Type_argument_list_cannot_be_empty_1099", "Type argument list cannot be empty."),
        Invalid_use_of_0_in_strict_mode: diag(1100, ts.DiagnosticCategory.Error, "Invalid_use_of_0_in_strict_mode_1100", "Invalid use of '{0}' in strict mode."),
        with_statements_are_not_allowed_in_strict_mode: diag(1101, ts.DiagnosticCategory.Error, "with_statements_are_not_allowed_in_strict_mode_1101", "'with' statements are not allowed in strict mode."),
        delete_cannot_be_called_on_an_identifier_in_strict_mode: diag(1102, ts.DiagnosticCategory.Error, "delete_cannot_be_called_on_an_identifier_in_strict_mode_1102", "'delete' cannot be called on an identifier in strict mode."),
        for_await_loops_are_only_allowed_within_async_functions_and_at_the_top_levels_of_modules: diag(1103, ts.DiagnosticCategory.Error, "for_await_loops_are_only_allowed_within_async_functions_and_at_the_top_levels_of_modules_1103", "'for await' loops are only allowed within async functions and at the top levels of modules."),
        A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement: diag(1104, ts.DiagnosticCategory.Error, "A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement_1104", "A 'continue' statement can only be used within an enclosing iteration statement."),
        A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement: diag(1105, ts.DiagnosticCategory.Error, "A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement_1105", "A 'break' statement can only be used within an enclosing iteration or switch statement."),
        The_left_hand_side_of_a_for_of_statement_may_not_be_async: diag(1106, ts.DiagnosticCategory.Error, "The_left_hand_side_of_a_for_of_statement_may_not_be_async_1106", "The left-hand side of a 'for...of' statement may not be 'async'."),
        Jump_target_cannot_cross_function_boundary: diag(1107, ts.DiagnosticCategory.Error, "Jump_target_cannot_cross_function_boundary_1107", "Jump target cannot cross function boundary."),
        A_return_statement_can_only_be_used_within_a_function_body: diag(1108, ts.DiagnosticCategory.Error, "A_return_statement_can_only_be_used_within_a_function_body_1108", "A 'return' statement can only be used within a function body."),
        Expression_expected: diag(1109, ts.DiagnosticCategory.Error, "Expression_expected_1109", "Expression expected."),
        Type_expected: diag(1110, ts.DiagnosticCategory.Error, "Type_expected_1110", "Type expected."),
        A_default_clause_cannot_appear_more_than_once_in_a_switch_statement: diag(1113, ts.DiagnosticCategory.Error, "A_default_clause_cannot_appear_more_than_once_in_a_switch_statement_1113", "A 'default' clause cannot appear more than once in a 'switch' statement."),
        Duplicate_label_0: diag(1114, ts.DiagnosticCategory.Error, "Duplicate_label_0_1114", "Duplicate label '{0}'."),
        A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement: diag(1115, ts.DiagnosticCategory.Error, "A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement_1115", "A 'continue' statement can only jump to a label of an enclosing iteration statement."),
        A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement: diag(1116, ts.DiagnosticCategory.Error, "A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement_1116", "A 'break' statement can only jump to a label of an enclosing statement."),
        An_object_literal_cannot_have_multiple_properties_with_the_same_name: diag(1117, ts.DiagnosticCategory.Error, "An_object_literal_cannot_have_multiple_properties_with_the_same_name_1117", "An object literal cannot have multiple properties with the same name."),
        An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name: diag(1118, ts.DiagnosticCategory.Error, "An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name_1118", "An object literal cannot have multiple get/set accessors with the same name."),
        An_object_literal_cannot_have_property_and_accessor_with_the_same_name: diag(1119, ts.DiagnosticCategory.Error, "An_object_literal_cannot_have_property_and_accessor_with_the_same_name_1119", "An object literal cannot have property and accessor with the same name."),
        An_export_assignment_cannot_have_modifiers: diag(1120, ts.DiagnosticCategory.Error, "An_export_assignment_cannot_have_modifiers_1120", "An export assignment cannot have modifiers."),
        Octal_literals_are_not_allowed_in_strict_mode: diag(1121, ts.DiagnosticCategory.Error, "Octal_literals_are_not_allowed_in_strict_mode_1121", "Octal literals are not allowed in strict mode."),
        Variable_declaration_list_cannot_be_empty: diag(1123, ts.DiagnosticCategory.Error, "Variable_declaration_list_cannot_be_empty_1123", "Variable declaration list cannot be empty."),
        Digit_expected: diag(1124, ts.DiagnosticCategory.Error, "Digit_expected_1124", "Digit expected."),
        Hexadecimal_digit_expected: diag(1125, ts.DiagnosticCategory.Error, "Hexadecimal_digit_expected_1125", "Hexadecimal digit expected."),
        Unexpected_end_of_text: diag(1126, ts.DiagnosticCategory.Error, "Unexpected_end_of_text_1126", "Unexpected end of text."),
        Invalid_character: diag(1127, ts.DiagnosticCategory.Error, "Invalid_character_1127", "Invalid character."),
        Declaration_or_statement_expected: diag(1128, ts.DiagnosticCategory.Error, "Declaration_or_statement_expected_1128", "Declaration or statement expected."),
        Statement_expected: diag(1129, ts.DiagnosticCategory.Error, "Statement_expected_1129", "Statement expected."),
        case_or_default_expected: diag(1130, ts.DiagnosticCategory.Error, "case_or_default_expected_1130", "'case' or 'default' expected."),
        Property_or_signature_expected: diag(1131, ts.DiagnosticCategory.Error, "Property_or_signature_expected_1131", "Property or signature expected."),
        Enum_member_expected: diag(1132, ts.DiagnosticCategory.Error, "Enum_member_expected_1132", "Enum member expected."),
        Variable_declaration_expected: diag(1134, ts.DiagnosticCategory.Error, "Variable_declaration_expected_1134", "Variable declaration expected."),
        Argument_expression_expected: diag(1135, ts.DiagnosticCategory.Error, "Argument_expression_expected_1135", "Argument expression expected."),
        Property_assignment_expected: diag(1136, ts.DiagnosticCategory.Error, "Property_assignment_expected_1136", "Property assignment expected."),
        Expression_or_comma_expected: diag(1137, ts.DiagnosticCategory.Error, "Expression_or_comma_expected_1137", "Expression or comma expected."),
        Parameter_declaration_expected: diag(1138, ts.DiagnosticCategory.Error, "Parameter_declaration_expected_1138", "Parameter declaration expected."),
        Type_parameter_declaration_expected: diag(1139, ts.DiagnosticCategory.Error, "Type_parameter_declaration_expected_1139", "Type parameter declaration expected."),
        Type_argument_expected: diag(1140, ts.DiagnosticCategory.Error, "Type_argument_expected_1140", "Type argument expected."),
        String_literal_expected: diag(1141, ts.DiagnosticCategory.Error, "String_literal_expected_1141", "String literal expected."),
        Line_break_not_permitted_here: diag(1142, ts.DiagnosticCategory.Error, "Line_break_not_permitted_here_1142", "Line break not permitted here."),
        or_expected: diag(1144, ts.DiagnosticCategory.Error, "or_expected_1144", "'{' or ';' expected."),
        or_JSX_element_expected: diag(1145, ts.DiagnosticCategory.Error, "or_JSX_element_expected_1145", "'{' or JSX element expected."),
        Declaration_expected: diag(1146, ts.DiagnosticCategory.Error, "Declaration_expected_1146", "Declaration expected."),
        Import_declarations_in_a_namespace_cannot_reference_a_module: diag(1147, ts.DiagnosticCategory.Error, "Import_declarations_in_a_namespace_cannot_reference_a_module_1147", "Import declarations in a namespace cannot reference a module."),
        Cannot_use_imports_exports_or_module_augmentations_when_module_is_none: diag(1148, ts.DiagnosticCategory.Error, "Cannot_use_imports_exports_or_module_augmentations_when_module_is_none_1148", "Cannot use imports, exports, or module augmentations when '--module' is 'none'."),
        File_name_0_differs_from_already_included_file_name_1_only_in_casing: diag(1149, ts.DiagnosticCategory.Error, "File_name_0_differs_from_already_included_file_name_1_only_in_casing_1149", "File name '{0}' differs from already included file name '{1}' only in casing."),
        const_declarations_must_be_initialized: diag(1155, ts.DiagnosticCategory.Error, "const_declarations_must_be_initialized_1155", "'const' declarations must be initialized."),
        const_declarations_can_only_be_declared_inside_a_block: diag(1156, ts.DiagnosticCategory.Error, "const_declarations_can_only_be_declared_inside_a_block_1156", "'const' declarations can only be declared inside a block."),
        let_declarations_can_only_be_declared_inside_a_block: diag(1157, ts.DiagnosticCategory.Error, "let_declarations_can_only_be_declared_inside_a_block_1157", "'let' declarations can only be declared inside a block."),
        Unterminated_template_literal: diag(1160, ts.DiagnosticCategory.Error, "Unterminated_template_literal_1160", "Unterminated template literal."),
        Unterminated_regular_expression_literal: diag(1161, ts.DiagnosticCategory.Error, "Unterminated_regular_expression_literal_1161", "Unterminated regular expression literal."),
        An_object_member_cannot_be_declared_optional: diag(1162, ts.DiagnosticCategory.Error, "An_object_member_cannot_be_declared_optional_1162", "An object member cannot be declared optional."),
        A_yield_expression_is_only_allowed_in_a_generator_body: diag(1163, ts.DiagnosticCategory.Error, "A_yield_expression_is_only_allowed_in_a_generator_body_1163", "A 'yield' expression is only allowed in a generator body."),
        Computed_property_names_are_not_allowed_in_enums: diag(1164, ts.DiagnosticCategory.Error, "Computed_property_names_are_not_allowed_in_enums_1164", "Computed property names are not allowed in enums."),
        A_computed_property_name_in_an_ambient_context_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: diag(1165, ts.DiagnosticCategory.Error, "A_computed_property_name_in_an_ambient_context_must_refer_to_an_expression_whose_type_is_a_literal_t_1165", "A computed property name in an ambient context must refer to an expression whose type is a literal type or a 'unique symbol' type."),
        A_computed_property_name_in_a_class_property_declaration_must_have_a_simple_literal_type_or_a_unique_symbol_type: diag(1166, ts.DiagnosticCategory.Error, "A_computed_property_name_in_a_class_property_declaration_must_have_a_simple_literal_type_or_a_unique_1166", "A computed property name in a class property declaration must have a simple literal type or a 'unique symbol' type."),
        A_computed_property_name_in_a_method_overload_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: diag(1168, ts.DiagnosticCategory.Error, "A_computed_property_name_in_a_method_overload_must_refer_to_an_expression_whose_type_is_a_literal_ty_1168", "A computed property name in a method overload must refer to an expression whose type is a literal type or a 'unique symbol' type."),
        A_computed_property_name_in_an_interface_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: diag(1169, ts.DiagnosticCategory.Error, "A_computed_property_name_in_an_interface_must_refer_to_an_expression_whose_type_is_a_literal_type_or_1169", "A computed property name in an interface must refer to an expression whose type is a literal type or a 'unique symbol' type."),
        A_computed_property_name_in_a_type_literal_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: diag(1170, ts.DiagnosticCategory.Error, "A_computed_property_name_in_a_type_literal_must_refer_to_an_expression_whose_type_is_a_literal_type__1170", "A computed property name in a type literal must refer to an expression whose type is a literal type or a 'unique symbol' type."),
        A_comma_expression_is_not_allowed_in_a_computed_property_name: diag(1171, ts.DiagnosticCategory.Error, "A_comma_expression_is_not_allowed_in_a_computed_property_name_1171", "A comma expression is not allowed in a computed property name."),
        extends_clause_already_seen: diag(1172, ts.DiagnosticCategory.Error, "extends_clause_already_seen_1172", "'extends' clause already seen."),
        extends_clause_must_precede_implements_clause: diag(1173, ts.DiagnosticCategory.Error, "extends_clause_must_precede_implements_clause_1173", "'extends' clause must precede 'implements' clause."),
        Classes_can_only_extend_a_single_class: diag(1174, ts.DiagnosticCategory.Error, "Classes_can_only_extend_a_single_class_1174", "Classes can only extend a single class."),
        implements_clause_already_seen: diag(1175, ts.DiagnosticCategory.Error, "implements_clause_already_seen_1175", "'implements' clause already seen."),
        Interface_declaration_cannot_have_implements_clause: diag(1176, ts.DiagnosticCategory.Error, "Interface_declaration_cannot_have_implements_clause_1176", "Interface declaration cannot have 'implements' clause."),
        Binary_digit_expected: diag(1177, ts.DiagnosticCategory.Error, "Binary_digit_expected_1177", "Binary digit expected."),
        Octal_digit_expected: diag(1178, ts.DiagnosticCategory.Error, "Octal_digit_expected_1178", "Octal digit expected."),
        Unexpected_token_expected: diag(1179, ts.DiagnosticCategory.Error, "Unexpected_token_expected_1179", "Unexpected token. '{' expected."),
        Property_destructuring_pattern_expected: diag(1180, ts.DiagnosticCategory.Error, "Property_destructuring_pattern_expected_1180", "Property destructuring pattern expected."),
        Array_element_destructuring_pattern_expected: diag(1181, ts.DiagnosticCategory.Error, "Array_element_destructuring_pattern_expected_1181", "Array element destructuring pattern expected."),
        A_destructuring_declaration_must_have_an_initializer: diag(1182, ts.DiagnosticCategory.Error, "A_destructuring_declaration_must_have_an_initializer_1182", "A destructuring declaration must have an initializer."),
        An_implementation_cannot_be_declared_in_ambient_contexts: diag(1183, ts.DiagnosticCategory.Error, "An_implementation_cannot_be_declared_in_ambient_contexts_1183", "An implementation cannot be declared in ambient contexts."),
        Modifiers_cannot_appear_here: diag(1184, ts.DiagnosticCategory.Error, "Modifiers_cannot_appear_here_1184", "Modifiers cannot appear here."),
        Merge_conflict_marker_encountered: diag(1185, ts.DiagnosticCategory.Error, "Merge_conflict_marker_encountered_1185", "Merge conflict marker encountered."),
        A_rest_element_cannot_have_an_initializer: diag(1186, ts.DiagnosticCategory.Error, "A_rest_element_cannot_have_an_initializer_1186", "A rest element cannot have an initializer."),
        A_parameter_property_may_not_be_declared_using_a_binding_pattern: diag(1187, ts.DiagnosticCategory.Error, "A_parameter_property_may_not_be_declared_using_a_binding_pattern_1187", "A parameter property may not be declared using a binding pattern."),
        Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement: diag(1188, ts.DiagnosticCategory.Error, "Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement_1188", "Only a single variable declaration is allowed in a 'for...of' statement."),
        The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer: diag(1189, ts.DiagnosticCategory.Error, "The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer_1189", "The variable declaration of a 'for...in' statement cannot have an initializer."),
        The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer: diag(1190, ts.DiagnosticCategory.Error, "The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer_1190", "The variable declaration of a 'for...of' statement cannot have an initializer."),
        An_import_declaration_cannot_have_modifiers: diag(1191, ts.DiagnosticCategory.Error, "An_import_declaration_cannot_have_modifiers_1191", "An import declaration cannot have modifiers."),
        Module_0_has_no_default_export: diag(1192, ts.DiagnosticCategory.Error, "Module_0_has_no_default_export_1192", "Module '{0}' has no default export."),
        An_export_declaration_cannot_have_modifiers: diag(1193, ts.DiagnosticCategory.Error, "An_export_declaration_cannot_have_modifiers_1193", "An export declaration cannot have modifiers."),
        Export_declarations_are_not_permitted_in_a_namespace: diag(1194, ts.DiagnosticCategory.Error, "Export_declarations_are_not_permitted_in_a_namespace_1194", "Export declarations are not permitted in a namespace."),
        export_Asterisk_does_not_re_export_a_default: diag(1195, ts.DiagnosticCategory.Error, "export_Asterisk_does_not_re_export_a_default_1195", "'export *' does not re-export a default."),
        Catch_clause_variable_type_annotation_must_be_any_or_unknown_if_specified: diag(1196, ts.DiagnosticCategory.Error, "Catch_clause_variable_type_annotation_must_be_any_or_unknown_if_specified_1196", "Catch clause variable type annotation must be 'any' or 'unknown' if specified."),
        Catch_clause_variable_cannot_have_an_initializer: diag(1197, ts.DiagnosticCategory.Error, "Catch_clause_variable_cannot_have_an_initializer_1197", "Catch clause variable cannot have an initializer."),
        An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive: diag(1198, ts.DiagnosticCategory.Error, "An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive_1198", "An extended Unicode escape value must be between 0x0 and 0x10FFFF inclusive."),
        Unterminated_Unicode_escape_sequence: diag(1199, ts.DiagnosticCategory.Error, "Unterminated_Unicode_escape_sequence_1199", "Unterminated Unicode escape sequence."),
        Line_terminator_not_permitted_before_arrow: diag(1200, ts.DiagnosticCategory.Error, "Line_terminator_not_permitted_before_arrow_1200", "Line terminator not permitted before arrow."),
        Import_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_import_Asterisk_as_ns_from_mod_import_a_from_mod_import_d_from_mod_or_another_module_format_instead: diag(1202, ts.DiagnosticCategory.Error, "Import_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_import_Asterisk_as_1202", "Import assignment cannot be used when targeting ECMAScript modules. Consider using 'import * as ns from \"mod\"', 'import {a} from \"mod\"', 'import d from \"mod\"', or another module format instead."),
        Export_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_export_default_or_another_module_format_instead: diag(1203, ts.DiagnosticCategory.Error, "Export_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_export_default_or__1203", "Export assignment cannot be used when targeting ECMAScript modules. Consider using 'export default' or another module format instead."),
        Re_exporting_a_type_when_the_isolatedModules_flag_is_provided_requires_using_export_type: diag(1205, ts.DiagnosticCategory.Error, "Re_exporting_a_type_when_the_isolatedModules_flag_is_provided_requires_using_export_type_1205", "Re-exporting a type when the '--isolatedModules' flag is provided requires using 'export type'."),
        Decorators_are_not_valid_here: diag(1206, ts.DiagnosticCategory.Error, "Decorators_are_not_valid_here_1206", "Decorators are not valid here."),
        Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name: diag(1207, ts.DiagnosticCategory.Error, "Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name_1207", "Decorators cannot be applied to multiple get/set accessors of the same name."),
        _0_cannot_be_compiled_under_isolatedModules_because_it_is_considered_a_global_script_file_Add_an_import_export_or_an_empty_export_statement_to_make_it_a_module: diag(1208, ts.DiagnosticCategory.Error, "_0_cannot_be_compiled_under_isolatedModules_because_it_is_considered_a_global_script_file_Add_an_imp_1208", "'{0}' cannot be compiled under '--isolatedModules' because it is considered a global script file. Add an import, export, or an empty 'export {}' statement to make it a module."),
        Invalid_optional_chain_from_new_expression_Did_you_mean_to_call_0: diag(1209, ts.DiagnosticCategory.Error, "Invalid_optional_chain_from_new_expression_Did_you_mean_to_call_0_1209", "Invalid optional chain from new expression. Did you mean to call '{0}()'?"),
        Code_contained_in_a_class_is_evaluated_in_JavaScript_s_strict_mode_which_does_not_allow_this_use_of_0_For_more_information_see_https_Colon_Slash_Slashdeveloper_mozilla_org_Slashen_US_Slashdocs_SlashWeb_SlashJavaScript_SlashReference_SlashStrict_mode: diag(1210, ts.DiagnosticCategory.Error, "Code_contained_in_a_class_is_evaluated_in_JavaScript_s_strict_mode_which_does_not_allow_this_use_of__1210", "Code contained in a class is evaluated in JavaScript's strict mode which does not allow this use of '{0}'. For more information, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode."),
        A_class_declaration_without_the_default_modifier_must_have_a_name: diag(1211, ts.DiagnosticCategory.Error, "A_class_declaration_without_the_default_modifier_must_have_a_name_1211", "A class declaration without the 'default' modifier must have a name."),
        Identifier_expected_0_is_a_reserved_word_in_strict_mode: diag(1212, ts.DiagnosticCategory.Error, "Identifier_expected_0_is_a_reserved_word_in_strict_mode_1212", "Identifier expected. '{0}' is a reserved word in strict mode."),
        Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_strict_mode: diag(1213, ts.DiagnosticCategory.Error, "Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_stric_1213", "Identifier expected. '{0}' is a reserved word in strict mode. Class definitions are automatically in strict mode."),
        Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode: diag(1214, ts.DiagnosticCategory.Error, "Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode_1214", "Identifier expected. '{0}' is a reserved word in strict mode. Modules are automatically in strict mode."),
        Invalid_use_of_0_Modules_are_automatically_in_strict_mode: diag(1215, ts.DiagnosticCategory.Error, "Invalid_use_of_0_Modules_are_automatically_in_strict_mode_1215", "Invalid use of '{0}'. Modules are automatically in strict mode."),
        Identifier_expected_esModule_is_reserved_as_an_exported_marker_when_transforming_ECMAScript_modules: diag(1216, ts.DiagnosticCategory.Error, "Identifier_expected_esModule_is_reserved_as_an_exported_marker_when_transforming_ECMAScript_modules_1216", "Identifier expected. '__esModule' is reserved as an exported marker when transforming ECMAScript modules."),
        Export_assignment_is_not_supported_when_module_flag_is_system: diag(1218, ts.DiagnosticCategory.Error, "Export_assignment_is_not_supported_when_module_flag_is_system_1218", "Export assignment is not supported when '--module' flag is 'system'."),
        Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_the_experimentalDecorators_option_in_your_tsconfig_or_jsconfig_to_remove_this_warning: diag(1219, ts.DiagnosticCategory.Error, "Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_t_1219", "Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning."),
        Generators_are_not_allowed_in_an_ambient_context: diag(1221, ts.DiagnosticCategory.Error, "Generators_are_not_allowed_in_an_ambient_context_1221", "Generators are not allowed in an ambient context."),
        An_overload_signature_cannot_be_declared_as_a_generator: diag(1222, ts.DiagnosticCategory.Error, "An_overload_signature_cannot_be_declared_as_a_generator_1222", "An overload signature cannot be declared as a generator."),
        _0_tag_already_specified: diag(1223, ts.DiagnosticCategory.Error, "_0_tag_already_specified_1223", "'{0}' tag already specified."),
        Signature_0_must_be_a_type_predicate: diag(1224, ts.DiagnosticCategory.Error, "Signature_0_must_be_a_type_predicate_1224", "Signature '{0}' must be a type predicate."),
        Cannot_find_parameter_0: diag(1225, ts.DiagnosticCategory.Error, "Cannot_find_parameter_0_1225", "Cannot find parameter '{0}'."),
        Type_predicate_0_is_not_assignable_to_1: diag(1226, ts.DiagnosticCategory.Error, "Type_predicate_0_is_not_assignable_to_1_1226", "Type predicate '{0}' is not assignable to '{1}'."),
        Parameter_0_is_not_in_the_same_position_as_parameter_1: diag(1227, ts.DiagnosticCategory.Error, "Parameter_0_is_not_in_the_same_position_as_parameter_1_1227", "Parameter '{0}' is not in the same position as parameter '{1}'."),
        A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods: diag(1228, ts.DiagnosticCategory.Error, "A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods_1228", "A type predicate is only allowed in return type position for functions and methods."),
        A_type_predicate_cannot_reference_a_rest_parameter: diag(1229, ts.DiagnosticCategory.Error, "A_type_predicate_cannot_reference_a_rest_parameter_1229", "A type predicate cannot reference a rest parameter."),
        A_type_predicate_cannot_reference_element_0_in_a_binding_pattern: diag(1230, ts.DiagnosticCategory.Error, "A_type_predicate_cannot_reference_element_0_in_a_binding_pattern_1230", "A type predicate cannot reference element '{0}' in a binding pattern."),
        An_export_assignment_must_be_at_the_top_level_of_a_file_or_module_declaration: diag(1231, ts.DiagnosticCategory.Error, "An_export_assignment_must_be_at_the_top_level_of_a_file_or_module_declaration_1231", "An export assignment must be at the top level of a file or module declaration."),
        An_import_declaration_can_only_be_used_at_the_top_level_of_a_namespace_or_module: diag(1232, ts.DiagnosticCategory.Error, "An_import_declaration_can_only_be_used_at_the_top_level_of_a_namespace_or_module_1232", "An import declaration can only be used at the top level of a namespace or module."),
        An_export_declaration_can_only_be_used_at_the_top_level_of_a_namespace_or_module: diag(1233, ts.DiagnosticCategory.Error, "An_export_declaration_can_only_be_used_at_the_top_level_of_a_namespace_or_module_1233", "An export declaration can only be used at the top level of a namespace or module."),
        An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file: diag(1234, ts.DiagnosticCategory.Error, "An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file_1234", "An ambient module declaration is only allowed at the top level in a file."),
        A_namespace_declaration_is_only_allowed_at_the_top_level_of_a_namespace_or_module: diag(1235, ts.DiagnosticCategory.Error, "A_namespace_declaration_is_only_allowed_at_the_top_level_of_a_namespace_or_module_1235", "A namespace declaration is only allowed at the top level of a namespace or module."),
        The_return_type_of_a_property_decorator_function_must_be_either_void_or_any: diag(1236, ts.DiagnosticCategory.Error, "The_return_type_of_a_property_decorator_function_must_be_either_void_or_any_1236", "The return type of a property decorator function must be either 'void' or 'any'."),
        The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any: diag(1237, ts.DiagnosticCategory.Error, "The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any_1237", "The return type of a parameter decorator function must be either 'void' or 'any'."),
        Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression: diag(1238, ts.DiagnosticCategory.Error, "Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression_1238", "Unable to resolve signature of class decorator when called as an expression."),
        Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression: diag(1239, ts.DiagnosticCategory.Error, "Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression_1239", "Unable to resolve signature of parameter decorator when called as an expression."),
        Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression: diag(1240, ts.DiagnosticCategory.Error, "Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression_1240", "Unable to resolve signature of property decorator when called as an expression."),
        Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression: diag(1241, ts.DiagnosticCategory.Error, "Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression_1241", "Unable to resolve signature of method decorator when called as an expression."),
        abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration: diag(1242, ts.DiagnosticCategory.Error, "abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration_1242", "'abstract' modifier can only appear on a class, method, or property declaration."),
        _0_modifier_cannot_be_used_with_1_modifier: diag(1243, ts.DiagnosticCategory.Error, "_0_modifier_cannot_be_used_with_1_modifier_1243", "'{0}' modifier cannot be used with '{1}' modifier."),
        Abstract_methods_can_only_appear_within_an_abstract_class: diag(1244, ts.DiagnosticCategory.Error, "Abstract_methods_can_only_appear_within_an_abstract_class_1244", "Abstract methods can only appear within an abstract class."),
        Method_0_cannot_have_an_implementation_because_it_is_marked_abstract: diag(1245, ts.DiagnosticCategory.Error, "Method_0_cannot_have_an_implementation_because_it_is_marked_abstract_1245", "Method '{0}' cannot have an implementation because it is marked abstract."),
        An_interface_property_cannot_have_an_initializer: diag(1246, ts.DiagnosticCategory.Error, "An_interface_property_cannot_have_an_initializer_1246", "An interface property cannot have an initializer."),
        A_type_literal_property_cannot_have_an_initializer: diag(1247, ts.DiagnosticCategory.Error, "A_type_literal_property_cannot_have_an_initializer_1247", "A type literal property cannot have an initializer."),
        A_class_member_cannot_have_the_0_keyword: diag(1248, ts.DiagnosticCategory.Error, "A_class_member_cannot_have_the_0_keyword_1248", "A class member cannot have the '{0}' keyword."),
        A_decorator_can_only_decorate_a_method_implementation_not_an_overload: diag(1249, ts.DiagnosticCategory.Error, "A_decorator_can_only_decorate_a_method_implementation_not_an_overload_1249", "A decorator can only decorate a method implementation, not an overload."),
        Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5: diag(1250, ts.DiagnosticCategory.Error, "Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_1250", "Function declarations are not allowed inside blocks in strict mode when targeting 'ES3' or 'ES5'."),
        Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Class_definitions_are_automatically_in_strict_mode: diag(1251, ts.DiagnosticCategory.Error, "Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Class_d_1251", "Function declarations are not allowed inside blocks in strict mode when targeting 'ES3' or 'ES5'. Class definitions are automatically in strict mode."),
        Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Modules_are_automatically_in_strict_mode: diag(1252, ts.DiagnosticCategory.Error, "Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Modules_1252", "Function declarations are not allowed inside blocks in strict mode when targeting 'ES3' or 'ES5'. Modules are automatically in strict mode."),
        A_const_initializer_in_an_ambient_context_must_be_a_string_or_numeric_literal_or_literal_enum_reference: diag(1254, ts.DiagnosticCategory.Error, "A_const_initializer_in_an_ambient_context_must_be_a_string_or_numeric_literal_or_literal_enum_refere_1254", "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference."),
        A_definite_assignment_assertion_is_not_permitted_in_this_context: diag(1255, ts.DiagnosticCategory.Error, "A_definite_assignment_assertion_is_not_permitted_in_this_context_1255", "A definite assignment assertion '!' is not permitted in this context."),
        A_required_element_cannot_follow_an_optional_element: diag(1257, ts.DiagnosticCategory.Error, "A_required_element_cannot_follow_an_optional_element_1257", "A required element cannot follow an optional element."),
        A_default_export_must_be_at_the_top_level_of_a_file_or_module_declaration: diag(1258, ts.DiagnosticCategory.Error, "A_default_export_must_be_at_the_top_level_of_a_file_or_module_declaration_1258", "A default export must be at the top level of a file or module declaration."),
        Module_0_can_only_be_default_imported_using_the_1_flag: diag(1259, ts.DiagnosticCategory.Error, "Module_0_can_only_be_default_imported_using_the_1_flag_1259", "Module '{0}' can only be default-imported using the '{1}' flag"),
        Keywords_cannot_contain_escape_characters: diag(1260, ts.DiagnosticCategory.Error, "Keywords_cannot_contain_escape_characters_1260", "Keywords cannot contain escape characters."),
        Already_included_file_name_0_differs_from_file_name_1_only_in_casing: diag(1261, ts.DiagnosticCategory.Error, "Already_included_file_name_0_differs_from_file_name_1_only_in_casing_1261", "Already included file name '{0}' differs from file name '{1}' only in casing."),
        Identifier_expected_0_is_a_reserved_word_at_the_top_level_of_a_module: diag(1262, ts.DiagnosticCategory.Error, "Identifier_expected_0_is_a_reserved_word_at_the_top_level_of_a_module_1262", "Identifier expected. '{0}' is a reserved word at the top-level of a module."),
        Declarations_with_initializers_cannot_also_have_definite_assignment_assertions: diag(1263, ts.DiagnosticCategory.Error, "Declarations_with_initializers_cannot_also_have_definite_assignment_assertions_1263", "Declarations with initializers cannot also have definite assignment assertions."),
        Declarations_with_definite_assignment_assertions_must_also_have_type_annotations: diag(1264, ts.DiagnosticCategory.Error, "Declarations_with_definite_assignment_assertions_must_also_have_type_annotations_1264", "Declarations with definite assignment assertions must also have type annotations."),
        A_rest_element_cannot_follow_another_rest_element: diag(1265, ts.DiagnosticCategory.Error, "A_rest_element_cannot_follow_another_rest_element_1265", "A rest element cannot follow another rest element."),
        An_optional_element_cannot_follow_a_rest_element: diag(1266, ts.DiagnosticCategory.Error, "An_optional_element_cannot_follow_a_rest_element_1266", "An optional element cannot follow a rest element."),
        Property_0_cannot_have_an_initializer_because_it_is_marked_abstract: diag(1267, ts.DiagnosticCategory.Error, "Property_0_cannot_have_an_initializer_because_it_is_marked_abstract_1267", "Property '{0}' cannot have an initializer because it is marked abstract."),
        An_index_signature_parameter_type_must_be_string_number_symbol_or_a_template_literal_type: diag(1268, ts.DiagnosticCategory.Error, "An_index_signature_parameter_type_must_be_string_number_symbol_or_a_template_literal_type_1268", "An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type."),
        Cannot_use_export_import_on_a_type_or_type_only_namespace_when_the_isolatedModules_flag_is_provided: diag(1269, ts.DiagnosticCategory.Error, "Cannot_use_export_import_on_a_type_or_type_only_namespace_when_the_isolatedModules_flag_is_provided_1269", "Cannot use 'export import' on a type or type-only namespace when the '--isolatedModules' flag is provided."),
        Decorator_function_return_type_0_is_not_assignable_to_type_1: diag(1270, ts.DiagnosticCategory.Error, "Decorator_function_return_type_0_is_not_assignable_to_type_1_1270", "Decorator function return type '{0}' is not assignable to type '{1}'."),
        Decorator_function_return_type_is_0_but_is_expected_to_be_void_or_any: diag(1271, ts.DiagnosticCategory.Error, "Decorator_function_return_type_is_0_but_is_expected_to_be_void_or_any_1271", "Decorator function return type is '{0}' but is expected to be 'void' or 'any'."),
        A_type_referenced_in_a_decorated_signature_must_be_imported_with_import_type_or_a_namespace_import_when_isolatedModules_and_emitDecoratorMetadata_are_enabled: diag(1272, ts.DiagnosticCategory.Error, "A_type_referenced_in_a_decorated_signature_must_be_imported_with_import_type_or_a_namespace_import_w_1272", "A type referenced in a decorated signature must be imported with 'import type' or a namespace import when 'isolatedModules' and 'emitDecoratorMetadata' are enabled."),
        _0_modifier_cannot_appear_on_a_type_parameter: diag(1273, ts.DiagnosticCategory.Error, "_0_modifier_cannot_appear_on_a_type_parameter_1273", "'{0}' modifier cannot appear on a type parameter"),
        _0_modifier_can_only_appear_on_a_type_parameter_of_a_class_interface_or_type_alias: diag(1274, ts.DiagnosticCategory.Error, "_0_modifier_can_only_appear_on_a_type_parameter_of_a_class_interface_or_type_alias_1274", "'{0}' modifier can only appear on a type parameter of a class, interface or type alias"),
        with_statements_are_not_allowed_in_an_async_function_block: diag(1300, ts.DiagnosticCategory.Error, "with_statements_are_not_allowed_in_an_async_function_block_1300", "'with' statements are not allowed in an async function block."),
        await_expressions_are_only_allowed_within_async_functions_and_at_the_top_levels_of_modules: diag(1308, ts.DiagnosticCategory.Error, "await_expressions_are_only_allowed_within_async_functions_and_at_the_top_levels_of_modules_1308", "'await' expressions are only allowed within async functions and at the top levels of modules."),
        The_current_file_is_a_CommonJS_module_and_cannot_use_await_at_the_top_level: diag(1309, ts.DiagnosticCategory.Error, "The_current_file_is_a_CommonJS_module_and_cannot_use_await_at_the_top_level_1309", "The current file is a CommonJS module and cannot use 'await' at the top level."),
        Did_you_mean_to_use_a_Colon_An_can_only_follow_a_property_name_when_the_containing_object_literal_is_part_of_a_destructuring_pattern: diag(1312, ts.DiagnosticCategory.Error, "Did_you_mean_to_use_a_Colon_An_can_only_follow_a_property_name_when_the_containing_object_literal_is_1312", "Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring pattern."),
        The_body_of_an_if_statement_cannot_be_the_empty_statement: diag(1313, ts.DiagnosticCategory.Error, "The_body_of_an_if_statement_cannot_be_the_empty_statement_1313", "The body of an 'if' statement cannot be the empty statement."),
        Global_module_exports_may_only_appear_in_module_files: diag(1314, ts.DiagnosticCategory.Error, "Global_module_exports_may_only_appear_in_module_files_1314", "Global module exports may only appear in module files."),
        Global_module_exports_may_only_appear_in_declaration_files: diag(1315, ts.DiagnosticCategory.Error, "Global_module_exports_may_only_appear_in_declaration_files_1315", "Global module exports may only appear in declaration files."),
        Global_module_exports_may_only_appear_at_top_level: diag(1316, ts.DiagnosticCategory.Error, "Global_module_exports_may_only_appear_at_top_level_1316", "Global module exports may only appear at top level."),
        A_parameter_property_cannot_be_declared_using_a_rest_parameter: diag(1317, ts.DiagnosticCategory.Error, "A_parameter_property_cannot_be_declared_using_a_rest_parameter_1317", "A parameter property cannot be declared using a rest parameter."),
        An_abstract_accessor_cannot_have_an_implementation: diag(1318, ts.DiagnosticCategory.Error, "An_abstract_accessor_cannot_have_an_implementation_1318", "An abstract accessor cannot have an implementation."),
        A_default_export_can_only_be_used_in_an_ECMAScript_style_module: diag(1319, ts.DiagnosticCategory.Error, "A_default_export_can_only_be_used_in_an_ECMAScript_style_module_1319", "A default export can only be used in an ECMAScript-style module."),
        Type_of_await_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: diag(1320, ts.DiagnosticCategory.Error, "Type_of_await_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member_1320", "Type of 'await' operand must either be a valid promise or must not contain a callable 'then' member."),
        Type_of_yield_operand_in_an_async_generator_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: diag(1321, ts.DiagnosticCategory.Error, "Type_of_yield_operand_in_an_async_generator_must_either_be_a_valid_promise_or_must_not_contain_a_cal_1321", "Type of 'yield' operand in an async generator must either be a valid promise or must not contain a callable 'then' member."),
        Type_of_iterated_elements_of_a_yield_Asterisk_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: diag(1322, ts.DiagnosticCategory.Error, "Type_of_iterated_elements_of_a_yield_Asterisk_operand_must_either_be_a_valid_promise_or_must_not_con_1322", "Type of iterated elements of a 'yield*' operand must either be a valid promise or must not contain a callable 'then' member."),
        Dynamic_imports_are_only_supported_when_the_module_flag_is_set_to_es2020_es2022_esnext_commonjs_amd_system_umd_node16_or_nodenext: diag(1323, ts.DiagnosticCategory.Error, "Dynamic_imports_are_only_supported_when_the_module_flag_is_set_to_es2020_es2022_esnext_commonjs_amd__1323", "Dynamic imports are only supported when the '--module' flag is set to 'es2020', 'es2022', 'esnext', 'commonjs', 'amd', 'system', 'umd', 'node16', or 'nodenext'."),
        Dynamic_imports_only_support_a_second_argument_when_the_module_option_is_set_to_esnext_node16_or_nodenext: diag(1324, ts.DiagnosticCategory.Error, "Dynamic_imports_only_support_a_second_argument_when_the_module_option_is_set_to_esnext_node16_or_nod_1324", "Dynamic imports only support a second argument when the '--module' option is set to 'esnext', 'node16', or 'nodenext'."),
        Argument_of_dynamic_import_cannot_be_spread_element: diag(1325, ts.DiagnosticCategory.Error, "Argument_of_dynamic_import_cannot_be_spread_element_1325", "Argument of dynamic import cannot be spread element."),
        This_use_of_import_is_invalid_import_calls_can_be_written_but_they_must_have_parentheses_and_cannot_have_type_arguments: diag(1326, ts.DiagnosticCategory.Error, "This_use_of_import_is_invalid_import_calls_can_be_written_but_they_must_have_parentheses_and_cannot__1326", "This use of 'import' is invalid. 'import()' calls can be written, but they must have parentheses and cannot have type arguments."),
        String_literal_with_double_quotes_expected: diag(1327, ts.DiagnosticCategory.Error, "String_literal_with_double_quotes_expected_1327", "String literal with double quotes expected."),
        Property_value_can_only_be_string_literal_numeric_literal_true_false_null_object_literal_or_array_literal: diag(1328, ts.DiagnosticCategory.Error, "Property_value_can_only_be_string_literal_numeric_literal_true_false_null_object_literal_or_array_li_1328", "Property value can only be string literal, numeric literal, 'true', 'false', 'null', object literal or array literal."),
        _0_accepts_too_few_arguments_to_be_used_as_a_decorator_here_Did_you_mean_to_call_it_first_and_write_0: diag(1329, ts.DiagnosticCategory.Error, "_0_accepts_too_few_arguments_to_be_used_as_a_decorator_here_Did_you_mean_to_call_it_first_and_write__1329", "'{0}' accepts too few arguments to be used as a decorator here. Did you mean to call it first and write '@{0}()'?"),
        A_property_of_an_interface_or_type_literal_whose_type_is_a_unique_symbol_type_must_be_readonly: diag(1330, ts.DiagnosticCategory.Error, "A_property_of_an_interface_or_type_literal_whose_type_is_a_unique_symbol_type_must_be_readonly_1330", "A property of an interface or type literal whose type is a 'unique symbol' type must be 'readonly'."),
        A_property_of_a_class_whose_type_is_a_unique_symbol_type_must_be_both_static_and_readonly: diag(1331, ts.DiagnosticCategory.Error, "A_property_of_a_class_whose_type_is_a_unique_symbol_type_must_be_both_static_and_readonly_1331", "A property of a class whose type is a 'unique symbol' type must be both 'static' and 'readonly'."),
        A_variable_whose_type_is_a_unique_symbol_type_must_be_const: diag(1332, ts.DiagnosticCategory.Error, "A_variable_whose_type_is_a_unique_symbol_type_must_be_const_1332", "A variable whose type is a 'unique symbol' type must be 'const'."),
        unique_symbol_types_may_not_be_used_on_a_variable_declaration_with_a_binding_name: diag(1333, ts.DiagnosticCategory.Error, "unique_symbol_types_may_not_be_used_on_a_variable_declaration_with_a_binding_name_1333", "'unique symbol' types may not be used on a variable declaration with a binding name."),
        unique_symbol_types_are_only_allowed_on_variables_in_a_variable_statement: diag(1334, ts.DiagnosticCategory.Error, "unique_symbol_types_are_only_allowed_on_variables_in_a_variable_statement_1334", "'unique symbol' types are only allowed on variables in a variable statement."),
        unique_symbol_types_are_not_allowed_here: diag(1335, ts.DiagnosticCategory.Error, "unique_symbol_types_are_not_allowed_here_1335", "'unique symbol' types are not allowed here."),
        An_index_signature_parameter_type_cannot_be_a_literal_type_or_generic_type_Consider_using_a_mapped_object_type_instead: diag(1337, ts.DiagnosticCategory.Error, "An_index_signature_parameter_type_cannot_be_a_literal_type_or_generic_type_Consider_using_a_mapped_o_1337", "An index signature parameter type cannot be a literal type or generic type. Consider using a mapped object type instead."),
        infer_declarations_are_only_permitted_in_the_extends_clause_of_a_conditional_type: diag(1338, ts.DiagnosticCategory.Error, "infer_declarations_are_only_permitted_in_the_extends_clause_of_a_conditional_type_1338", "'infer' declarations are only permitted in the 'extends' clause of a conditional type."),
        Module_0_does_not_refer_to_a_value_but_is_used_as_a_value_here: diag(1339, ts.DiagnosticCategory.Error, "Module_0_does_not_refer_to_a_value_but_is_used_as_a_value_here_1339", "Module '{0}' does not refer to a value, but is used as a value here."),
        Module_0_does_not_refer_to_a_type_but_is_used_as_a_type_here_Did_you_mean_typeof_import_0: diag(1340, ts.DiagnosticCategory.Error, "Module_0_does_not_refer_to_a_type_but_is_used_as_a_type_here_Did_you_mean_typeof_import_0_1340", "Module '{0}' does not refer to a type, but is used as a type here. Did you mean 'typeof import('{0}')'?"),
        Class_constructor_may_not_be_an_accessor: diag(1341, ts.DiagnosticCategory.Error, "Class_constructor_may_not_be_an_accessor_1341", "Class constructor may not be an accessor."),
        Type_arguments_cannot_be_used_here: diag(1342, ts.DiagnosticCategory.Error, "Type_arguments_cannot_be_used_here_1342", "Type arguments cannot be used here."),
        The_import_meta_meta_property_is_only_allowed_when_the_module_option_is_es2020_es2022_esnext_system_node16_or_nodenext: diag(1343, ts.DiagnosticCategory.Error, "The_import_meta_meta_property_is_only_allowed_when_the_module_option_is_es2020_es2022_esnext_system__1343", "The 'import.meta' meta-property is only allowed when the '--module' option is 'es2020', 'es2022', 'esnext', 'system', 'node16', or 'nodenext'."),
        A_label_is_not_allowed_here: diag(1344, ts.DiagnosticCategory.Error, "A_label_is_not_allowed_here_1344", "'A label is not allowed here."),
        An_expression_of_type_void_cannot_be_tested_for_truthiness: diag(1345, ts.DiagnosticCategory.Error, "An_expression_of_type_void_cannot_be_tested_for_truthiness_1345", "An expression of type 'void' cannot be tested for truthiness."),
        This_parameter_is_not_allowed_with_use_strict_directive: diag(1346, ts.DiagnosticCategory.Error, "This_parameter_is_not_allowed_with_use_strict_directive_1346", "This parameter is not allowed with 'use strict' directive."),
        use_strict_directive_cannot_be_used_with_non_simple_parameter_list: diag(1347, ts.DiagnosticCategory.Error, "use_strict_directive_cannot_be_used_with_non_simple_parameter_list_1347", "'use strict' directive cannot be used with non-simple parameter list."),
        Non_simple_parameter_declared_here: diag(1348, ts.DiagnosticCategory.Error, "Non_simple_parameter_declared_here_1348", "Non-simple parameter declared here."),
        use_strict_directive_used_here: diag(1349, ts.DiagnosticCategory.Error, "use_strict_directive_used_here_1349", "'use strict' directive used here."),
        Print_the_final_configuration_instead_of_building: diag(1350, ts.DiagnosticCategory.Message, "Print_the_final_configuration_instead_of_building_1350", "Print the final configuration instead of building."),
        An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal: diag(1351, ts.DiagnosticCategory.Error, "An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal_1351", "An identifier or keyword cannot immediately follow a numeric literal."),
        A_bigint_literal_cannot_use_exponential_notation: diag(1352, ts.DiagnosticCategory.Error, "A_bigint_literal_cannot_use_exponential_notation_1352", "A bigint literal cannot use exponential notation."),
        A_bigint_literal_must_be_an_integer: diag(1353, ts.DiagnosticCategory.Error, "A_bigint_literal_must_be_an_integer_1353", "A bigint literal must be an integer."),
        readonly_type_modifier_is_only_permitted_on_array_and_tuple_literal_types: diag(1354, ts.DiagnosticCategory.Error, "readonly_type_modifier_is_only_permitted_on_array_and_tuple_literal_types_1354", "'readonly' type modifier is only permitted on array and tuple literal types."),
        A_const_assertions_can_only_be_applied_to_references_to_enum_members_or_string_number_boolean_array_or_object_literals: diag(1355, ts.DiagnosticCategory.Error, "A_const_assertions_can_only_be_applied_to_references_to_enum_members_or_string_number_boolean_array__1355", "A 'const' assertions can only be applied to references to enum members, or string, number, boolean, array, or object literals."),
        Did_you_mean_to_mark_this_function_as_async: diag(1356, ts.DiagnosticCategory.Error, "Did_you_mean_to_mark_this_function_as_async_1356", "Did you mean to mark this function as 'async'?"),
        An_enum_member_name_must_be_followed_by_a_or: diag(1357, ts.DiagnosticCategory.Error, "An_enum_member_name_must_be_followed_by_a_or_1357", "An enum member name must be followed by a ',', '=', or '}'."),
        Tagged_template_expressions_are_not_permitted_in_an_optional_chain: diag(1358, ts.DiagnosticCategory.Error, "Tagged_template_expressions_are_not_permitted_in_an_optional_chain_1358", "Tagged template expressions are not permitted in an optional chain."),
        Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here: diag(1359, ts.DiagnosticCategory.Error, "Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here_1359", "Identifier expected. '{0}' is a reserved word that cannot be used here."),
        Class_constructor_may_not_be_a_generator: diag(1360, ts.DiagnosticCategory.Error, "Class_constructor_may_not_be_a_generator_1360", "Class constructor may not be a generator."),
        _0_cannot_be_used_as_a_value_because_it_was_imported_using_import_type: diag(1361, ts.DiagnosticCategory.Error, "_0_cannot_be_used_as_a_value_because_it_was_imported_using_import_type_1361", "'{0}' cannot be used as a value because it was imported using 'import type'."),
        _0_cannot_be_used_as_a_value_because_it_was_exported_using_export_type: diag(1362, ts.DiagnosticCategory.Error, "_0_cannot_be_used_as_a_value_because_it_was_exported_using_export_type_1362", "'{0}' cannot be used as a value because it was exported using 'export type'."),
        A_type_only_import_can_specify_a_default_import_or_named_bindings_but_not_both: diag(1363, ts.DiagnosticCategory.Error, "A_type_only_import_can_specify_a_default_import_or_named_bindings_but_not_both_1363", "A type-only import can specify a default import or named bindings, but not both."),
        Convert_to_type_only_export: diag(1364, ts.DiagnosticCategory.Message, "Convert_to_type_only_export_1364", "Convert to type-only export"),
        Convert_all_re_exported_types_to_type_only_exports: diag(1365, ts.DiagnosticCategory.Message, "Convert_all_re_exported_types_to_type_only_exports_1365", "Convert all re-exported types to type-only exports"),
        Split_into_two_separate_import_declarations: diag(1366, ts.DiagnosticCategory.Message, "Split_into_two_separate_import_declarations_1366", "Split into two separate import declarations"),
        Split_all_invalid_type_only_imports: diag(1367, ts.DiagnosticCategory.Message, "Split_all_invalid_type_only_imports_1367", "Split all invalid type-only imports"),
        Did_you_mean_0: diag(1369, ts.DiagnosticCategory.Message, "Did_you_mean_0_1369", "Did you mean '{0}'?"),
        This_import_is_never_used_as_a_value_and_must_use_import_type_because_importsNotUsedAsValues_is_set_to_error: diag(1371, ts.DiagnosticCategory.Error, "This_import_is_never_used_as_a_value_and_must_use_import_type_because_importsNotUsedAsValues_is_set__1371", "This import is never used as a value and must use 'import type' because 'importsNotUsedAsValues' is set to 'error'."),
        Convert_to_type_only_import: diag(1373, ts.DiagnosticCategory.Message, "Convert_to_type_only_import_1373", "Convert to type-only import"),
        Convert_all_imports_not_used_as_a_value_to_type_only_imports: diag(1374, ts.DiagnosticCategory.Message, "Convert_all_imports_not_used_as_a_value_to_type_only_imports_1374", "Convert all imports not used as a value to type-only imports"),
        await_expressions_are_only_allowed_at_the_top_level_of_a_file_when_that_file_is_a_module_but_this_file_has_no_imports_or_exports_Consider_adding_an_empty_export_to_make_this_file_a_module: diag(1375, ts.DiagnosticCategory.Error, "await_expressions_are_only_allowed_at_the_top_level_of_a_file_when_that_file_is_a_module_but_this_fi_1375", "'await' expressions are only allowed at the top level of a file when that file is a module, but this file has no imports or exports. Consider adding an empty 'export {}' to make this file a module."),
        _0_was_imported_here: diag(1376, ts.DiagnosticCategory.Message, "_0_was_imported_here_1376", "'{0}' was imported here."),
        _0_was_exported_here: diag(1377, ts.DiagnosticCategory.Message, "_0_was_exported_here_1377", "'{0}' was exported here."),
        Top_level_await_expressions_are_only_allowed_when_the_module_option_is_set_to_es2022_esnext_system_node16_or_nodenext_and_the_target_option_is_set_to_es2017_or_higher: diag(1378, ts.DiagnosticCategory.Error, "Top_level_await_expressions_are_only_allowed_when_the_module_option_is_set_to_es2022_esnext_system_n_1378", "Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher."),
        An_import_alias_cannot_reference_a_declaration_that_was_exported_using_export_type: diag(1379, ts.DiagnosticCategory.Error, "An_import_alias_cannot_reference_a_declaration_that_was_exported_using_export_type_1379", "An import alias cannot reference a declaration that was exported using 'export type'."),
        An_import_alias_cannot_reference_a_declaration_that_was_imported_using_import_type: diag(1380, ts.DiagnosticCategory.Error, "An_import_alias_cannot_reference_a_declaration_that_was_imported_using_import_type_1380", "An import alias cannot reference a declaration that was imported using 'import type'."),
        Unexpected_token_Did_you_mean_or_rbrace: diag(1381, ts.DiagnosticCategory.Error, "Unexpected_token_Did_you_mean_or_rbrace_1381", "Unexpected token. Did you mean `{'}'}` or `&rbrace;`?"),
        Unexpected_token_Did_you_mean_or_gt: diag(1382, ts.DiagnosticCategory.Error, "Unexpected_token_Did_you_mean_or_gt_1382", "Unexpected token. Did you mean `{'>'}` or `&gt;`?"),
        Only_named_exports_may_use_export_type: diag(1383, ts.DiagnosticCategory.Error, "Only_named_exports_may_use_export_type_1383", "Only named exports may use 'export type'."),
        Function_type_notation_must_be_parenthesized_when_used_in_a_union_type: diag(1385, ts.DiagnosticCategory.Error, "Function_type_notation_must_be_parenthesized_when_used_in_a_union_type_1385", "Function type notation must be parenthesized when used in a union type."),
        Constructor_type_notation_must_be_parenthesized_when_used_in_a_union_type: diag(1386, ts.DiagnosticCategory.Error, "Constructor_type_notation_must_be_parenthesized_when_used_in_a_union_type_1386", "Constructor type notation must be parenthesized when used in a union type."),
        Function_type_notation_must_be_parenthesized_when_used_in_an_intersection_type: diag(1387, ts.DiagnosticCategory.Error, "Function_type_notation_must_be_parenthesized_when_used_in_an_intersection_type_1387", "Function type notation must be parenthesized when used in an intersection type."),
        Constructor_type_notation_must_be_parenthesized_when_used_in_an_intersection_type: diag(1388, ts.DiagnosticCategory.Error, "Constructor_type_notation_must_be_parenthesized_when_used_in_an_intersection_type_1388", "Constructor type notation must be parenthesized when used in an intersection type."),
        _0_is_not_allowed_as_a_variable_declaration_name: diag(1389, ts.DiagnosticCategory.Error, "_0_is_not_allowed_as_a_variable_declaration_name_1389", "'{0}' is not allowed as a variable declaration name."),
        _0_is_not_allowed_as_a_parameter_name: diag(1390, ts.DiagnosticCategory.Error, "_0_is_not_allowed_as_a_parameter_name_1390", "'{0}' is not allowed as a parameter name."),
        An_import_alias_cannot_use_import_type: diag(1392, ts.DiagnosticCategory.Error, "An_import_alias_cannot_use_import_type_1392", "An import alias cannot use 'import type'"),
        Imported_via_0_from_file_1: diag(1393, ts.DiagnosticCategory.Message, "Imported_via_0_from_file_1_1393", "Imported via {0} from file '{1}'"),
        Imported_via_0_from_file_1_with_packageId_2: diag(1394, ts.DiagnosticCategory.Message, "Imported_via_0_from_file_1_with_packageId_2_1394", "Imported via {0} from file '{1}' with packageId '{2}'"),
        Imported_via_0_from_file_1_to_import_importHelpers_as_specified_in_compilerOptions: diag(1395, ts.DiagnosticCategory.Message, "Imported_via_0_from_file_1_to_import_importHelpers_as_specified_in_compilerOptions_1395", "Imported via {0} from file '{1}' to import 'importHelpers' as specified in compilerOptions"),
        Imported_via_0_from_file_1_with_packageId_2_to_import_importHelpers_as_specified_in_compilerOptions: diag(1396, ts.DiagnosticCategory.Message, "Imported_via_0_from_file_1_with_packageId_2_to_import_importHelpers_as_specified_in_compilerOptions_1396", "Imported via {0} from file '{1}' with packageId '{2}' to import 'importHelpers' as specified in compilerOptions"),
        Imported_via_0_from_file_1_to_import_jsx_and_jsxs_factory_functions: diag(1397, ts.DiagnosticCategory.Message, "Imported_via_0_from_file_1_to_import_jsx_and_jsxs_factory_functions_1397", "Imported via {0} from file '{1}' to import 'jsx' and 'jsxs' factory functions"),
        Imported_via_0_from_file_1_with_packageId_2_to_import_jsx_and_jsxs_factory_functions: diag(1398, ts.DiagnosticCategory.Message, "Imported_via_0_from_file_1_with_packageId_2_to_import_jsx_and_jsxs_factory_functions_1398", "Imported via {0} from file '{1}' with packageId '{2}' to import 'jsx' and 'jsxs' factory functions"),
        File_is_included_via_import_here: diag(1399, ts.DiagnosticCategory.Message, "File_is_included_via_import_here_1399", "File is included via import here."),
        Referenced_via_0_from_file_1: diag(1400, ts.DiagnosticCategory.Message, "Referenced_via_0_from_file_1_1400", "Referenced via '{0}' from file '{1}'"),
        File_is_included_via_reference_here: diag(1401, ts.DiagnosticCategory.Message, "File_is_included_via_reference_here_1401", "File is included via reference here."),
        Type_library_referenced_via_0_from_file_1: diag(1402, ts.DiagnosticCategory.Message, "Type_library_referenced_via_0_from_file_1_1402", "Type library referenced via '{0}' from file '{1}'"),
        Type_library_referenced_via_0_from_file_1_with_packageId_2: diag(1403, ts.DiagnosticCategory.Message, "Type_library_referenced_via_0_from_file_1_with_packageId_2_1403", "Type library referenced via '{0}' from file '{1}' with packageId '{2}'"),
        File_is_included_via_type_library_reference_here: diag(1404, ts.DiagnosticCategory.Message, "File_is_included_via_type_library_reference_here_1404", "File is included via type library reference here."),
        Library_referenced_via_0_from_file_1: diag(1405, ts.DiagnosticCategory.Message, "Library_referenced_via_0_from_file_1_1405", "Library referenced via '{0}' from file '{1}'"),
        File_is_included_via_library_reference_here: diag(1406, ts.DiagnosticCategory.Message, "File_is_included_via_library_reference_here_1406", "File is included via library reference here."),
        Matched_by_include_pattern_0_in_1: diag(1407, ts.DiagnosticCategory.Message, "Matched_by_include_pattern_0_in_1_1407", "Matched by include pattern '{0}' in '{1}'"),
        File_is_matched_by_include_pattern_specified_here: diag(1408, ts.DiagnosticCategory.Message, "File_is_matched_by_include_pattern_specified_here_1408", "File is matched by include pattern specified here."),
        Part_of_files_list_in_tsconfig_json: diag(1409, ts.DiagnosticCategory.Message, "Part_of_files_list_in_tsconfig_json_1409", "Part of 'files' list in tsconfig.json"),
        File_is_matched_by_files_list_specified_here: diag(1410, ts.DiagnosticCategory.Message, "File_is_matched_by_files_list_specified_here_1410", "File is matched by 'files' list specified here."),
        Output_from_referenced_project_0_included_because_1_specified: diag(1411, ts.DiagnosticCategory.Message, "Output_from_referenced_project_0_included_because_1_specified_1411", "Output from referenced project '{0}' included because '{1}' specified"),
        Output_from_referenced_project_0_included_because_module_is_specified_as_none: diag(1412, ts.DiagnosticCategory.Message, "Output_from_referenced_project_0_included_because_module_is_specified_as_none_1412", "Output from referenced project '{0}' included because '--module' is specified as 'none'"),
        File_is_output_from_referenced_project_specified_here: diag(1413, ts.DiagnosticCategory.Message, "File_is_output_from_referenced_project_specified_here_1413", "File is output from referenced project specified here."),
        Source_from_referenced_project_0_included_because_1_specified: diag(1414, ts.DiagnosticCategory.Message, "Source_from_referenced_project_0_included_because_1_specified_1414", "Source from referenced project '{0}' included because '{1}' specified"),
        Source_from_referenced_project_0_included_because_module_is_specified_as_none: diag(1415, ts.DiagnosticCategory.Message, "Source_from_referenced_project_0_included_because_module_is_specified_as_none_1415", "Source from referenced project '{0}' included because '--module' is specified as 'none'"),
        File_is_source_from_referenced_project_specified_here: diag(1416, ts.DiagnosticCategory.Message, "File_is_source_from_referenced_project_specified_here_1416", "File is source from referenced project specified here."),
        Entry_point_of_type_library_0_specified_in_compilerOptions: diag(1417, ts.DiagnosticCategory.Message, "Entry_point_of_type_library_0_specified_in_compilerOptions_1417", "Entry point of type library '{0}' specified in compilerOptions"),
        Entry_point_of_type_library_0_specified_in_compilerOptions_with_packageId_1: diag(1418, ts.DiagnosticCategory.Message, "Entry_point_of_type_library_0_specified_in_compilerOptions_with_packageId_1_1418", "Entry point of type library '{0}' specified in compilerOptions with packageId '{1}'"),
        File_is_entry_point_of_type_library_specified_here: diag(1419, ts.DiagnosticCategory.Message, "File_is_entry_point_of_type_library_specified_here_1419", "File is entry point of type library specified here."),
        Entry_point_for_implicit_type_library_0: diag(1420, ts.DiagnosticCategory.Message, "Entry_point_for_implicit_type_library_0_1420", "Entry point for implicit type library '{0}'"),
        Entry_point_for_implicit_type_library_0_with_packageId_1: diag(1421, ts.DiagnosticCategory.Message, "Entry_point_for_implicit_type_library_0_with_packageId_1_1421", "Entry point for implicit type library '{0}' with packageId '{1}'"),
        Library_0_specified_in_compilerOptions: diag(1422, ts.DiagnosticCategory.Message, "Library_0_specified_in_compilerOptions_1422", "Library '{0}' specified in compilerOptions"),
        File_is_library_specified_here: diag(1423, ts.DiagnosticCategory.Message, "File_is_library_specified_here_1423", "File is library specified here."),
        Default_library: diag(1424, ts.DiagnosticCategory.Message, "Default_library_1424", "Default library"),
        Default_library_for_target_0: diag(1425, ts.DiagnosticCategory.Message, "Default_library_for_target_0_1425", "Default library for target '{0}'"),
        File_is_default_library_for_target_specified_here: diag(1426, ts.DiagnosticCategory.Message, "File_is_default_library_for_target_specified_here_1426", "File is default library for target specified here."),
        Root_file_specified_for_compilation: diag(1427, ts.DiagnosticCategory.Message, "Root_file_specified_for_compilation_1427", "Root file specified for compilation"),
        File_is_output_of_project_reference_source_0: diag(1428, ts.DiagnosticCategory.Message, "File_is_output_of_project_reference_source_0_1428", "File is output of project reference source '{0}'"),
        File_redirects_to_file_0: diag(1429, ts.DiagnosticCategory.Message, "File_redirects_to_file_0_1429", "File redirects to file '{0}'"),
        The_file_is_in_the_program_because_Colon: diag(1430, ts.DiagnosticCategory.Message, "The_file_is_in_the_program_because_Colon_1430", "The file is in the program because:"),
        for_await_loops_are_only_allowed_at_the_top_level_of_a_file_when_that_file_is_a_module_but_this_file_has_no_imports_or_exports_Consider_adding_an_empty_export_to_make_this_file_a_module: diag(1431, ts.DiagnosticCategory.Error, "for_await_loops_are_only_allowed_at_the_top_level_of_a_file_when_that_file_is_a_module_but_this_file_1431", "'for await' loops are only allowed at the top level of a file when that file is a module, but this file has no imports or exports. Consider adding an empty 'export {}' to make this file a module."),
        Top_level_for_await_loops_are_only_allowed_when_the_module_option_is_set_to_es2022_esnext_system_node16_or_nodenext_and_the_target_option_is_set_to_es2017_or_higher: diag(1432, ts.DiagnosticCategory.Error, "Top_level_for_await_loops_are_only_allowed_when_the_module_option_is_set_to_es2022_esnext_system_nod_1432", "Top-level 'for await' loops are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher."),
        Decorators_may_not_be_applied_to_this_parameters: diag(1433, ts.DiagnosticCategory.Error, "Decorators_may_not_be_applied_to_this_parameters_1433", "Decorators may not be applied to 'this' parameters."),
        Unexpected_keyword_or_identifier: diag(1434, ts.DiagnosticCategory.Error, "Unexpected_keyword_or_identifier_1434", "Unexpected keyword or identifier."),
        Unknown_keyword_or_identifier_Did_you_mean_0: diag(1435, ts.DiagnosticCategory.Error, "Unknown_keyword_or_identifier_Did_you_mean_0_1435", "Unknown keyword or identifier. Did you mean '{0}'?"),
        Decorators_must_precede_the_name_and_all_keywords_of_property_declarations: diag(1436, ts.DiagnosticCategory.Error, "Decorators_must_precede_the_name_and_all_keywords_of_property_declarations_1436", "Decorators must precede the name and all keywords of property declarations."),
        Namespace_must_be_given_a_name: diag(1437, ts.DiagnosticCategory.Error, "Namespace_must_be_given_a_name_1437", "Namespace must be given a name."),
        Interface_must_be_given_a_name: diag(1438, ts.DiagnosticCategory.Error, "Interface_must_be_given_a_name_1438", "Interface must be given a name."),
        Type_alias_must_be_given_a_name: diag(1439, ts.DiagnosticCategory.Error, "Type_alias_must_be_given_a_name_1439", "Type alias must be given a name."),
        Variable_declaration_not_allowed_at_this_location: diag(1440, ts.DiagnosticCategory.Error, "Variable_declaration_not_allowed_at_this_location_1440", "Variable declaration not allowed at this location."),
        Cannot_start_a_function_call_in_a_type_annotation: diag(1441, ts.DiagnosticCategory.Error, "Cannot_start_a_function_call_in_a_type_annotation_1441", "Cannot start a function call in a type annotation."),
        Expected_for_property_initializer: diag(1442, ts.DiagnosticCategory.Error, "Expected_for_property_initializer_1442", "Expected '=' for property initializer."),
        Module_declaration_names_may_only_use_or_quoted_strings: diag(1443, ts.DiagnosticCategory.Error, "Module_declaration_names_may_only_use_or_quoted_strings_1443", "Module declaration names may only use ' or \" quoted strings."),
        _0_is_a_type_and_must_be_imported_using_a_type_only_import_when_preserveValueImports_and_isolatedModules_are_both_enabled: diag(1444, ts.DiagnosticCategory.Error, "_0_is_a_type_and_must_be_imported_using_a_type_only_import_when_preserveValueImports_and_isolatedMod_1444", "'{0}' is a type and must be imported using a type-only import when 'preserveValueImports' and 'isolatedModules' are both enabled."),
        _0_resolves_to_a_type_only_declaration_and_must_be_imported_using_a_type_only_import_when_preserveValueImports_and_isolatedModules_are_both_enabled: diag(1446, ts.DiagnosticCategory.Error, "_0_resolves_to_a_type_only_declaration_and_must_be_imported_using_a_type_only_import_when_preserveVa_1446", "'{0}' resolves to a type-only declaration and must be imported using a type-only import when 'preserveValueImports' and 'isolatedModules' are both enabled."),
        _0_resolves_to_a_type_only_declaration_and_must_be_re_exported_using_a_type_only_re_export_when_isolatedModules_is_enabled: diag(1448, ts.DiagnosticCategory.Error, "_0_resolves_to_a_type_only_declaration_and_must_be_re_exported_using_a_type_only_re_export_when_isol_1448", "'{0}' resolves to a type-only declaration and must be re-exported using a type-only re-export when 'isolatedModules' is enabled."),
        Preserve_unused_imported_values_in_the_JavaScript_output_that_would_otherwise_be_removed: diag(1449, ts.DiagnosticCategory.Message, "Preserve_unused_imported_values_in_the_JavaScript_output_that_would_otherwise_be_removed_1449", "Preserve unused imported values in the JavaScript output that would otherwise be removed."),
        Dynamic_imports_can_only_accept_a_module_specifier_and_an_optional_assertion_as_arguments: diag(1450, ts.DiagnosticCategory.Message, "Dynamic_imports_can_only_accept_a_module_specifier_and_an_optional_assertion_as_arguments_1450", "Dynamic imports can only accept a module specifier and an optional assertion as arguments"),
        Private_identifiers_are_only_allowed_in_class_bodies_and_may_only_be_used_as_part_of_a_class_member_declaration_property_access_or_on_the_left_hand_side_of_an_in_expression: diag(1451, ts.DiagnosticCategory.Error, "Private_identifiers_are_only_allowed_in_class_bodies_and_may_only_be_used_as_part_of_a_class_member__1451", "Private identifiers are only allowed in class bodies and may only be used as part of a class member declaration, property access, or on the left-hand-side of an 'in' expression"),
        resolution_mode_assertions_are_only_supported_when_moduleResolution_is_node16_or_nodenext: diag(1452, ts.DiagnosticCategory.Error, "resolution_mode_assertions_are_only_supported_when_moduleResolution_is_node16_or_nodenext_1452", "'resolution-mode' assertions are only supported when `moduleResolution` is `node16` or `nodenext`."),
        resolution_mode_should_be_either_require_or_import: diag(1453, ts.DiagnosticCategory.Error, "resolution_mode_should_be_either_require_or_import_1453", "`resolution-mode` should be either `require` or `import`."),
        resolution_mode_can_only_be_set_for_type_only_imports: diag(1454, ts.DiagnosticCategory.Error, "resolution_mode_can_only_be_set_for_type_only_imports_1454", "`resolution-mode` can only be set for type-only imports."),
        resolution_mode_is_the_only_valid_key_for_type_import_assertions: diag(1455, ts.DiagnosticCategory.Error, "resolution_mode_is_the_only_valid_key_for_type_import_assertions_1455", "`resolution-mode` is the only valid key for type import assertions."),
        Type_import_assertions_should_have_exactly_one_key_resolution_mode_with_value_import_or_require: diag(1456, ts.DiagnosticCategory.Error, "Type_import_assertions_should_have_exactly_one_key_resolution_mode_with_value_import_or_require_1456", "Type import assertions should have exactly one key - `resolution-mode` - with value `import` or `require`."),
        Matched_by_default_include_pattern_Asterisk_Asterisk_Slash_Asterisk: diag(1457, ts.DiagnosticCategory.Message, "Matched_by_default_include_pattern_Asterisk_Asterisk_Slash_Asterisk_1457", "Matched by default include pattern '**/*'"),
        File_is_ECMAScript_module_because_0_has_field_type_with_value_module: diag(1458, ts.DiagnosticCategory.Message, "File_is_ECMAScript_module_because_0_has_field_type_with_value_module_1458", "File is ECMAScript module because '{0}' has field \"type\" with value \"module\""),
        File_is_CommonJS_module_because_0_has_field_type_whose_value_is_not_module: diag(1459, ts.DiagnosticCategory.Message, "File_is_CommonJS_module_because_0_has_field_type_whose_value_is_not_module_1459", "File is CommonJS module because '{0}' has field \"type\" whose value is not \"module\""),
        File_is_CommonJS_module_because_0_does_not_have_field_type: diag(1460, ts.DiagnosticCategory.Message, "File_is_CommonJS_module_because_0_does_not_have_field_type_1460", "File is CommonJS module because '{0}' does not have field \"type\""),
        File_is_CommonJS_module_because_package_json_was_not_found: diag(1461, ts.DiagnosticCategory.Message, "File_is_CommonJS_module_because_package_json_was_not_found_1461", "File is CommonJS module because 'package.json' was not found"),
        The_import_meta_meta_property_is_not_allowed_in_files_which_will_build_into_CommonJS_output: diag(1470, ts.DiagnosticCategory.Error, "The_import_meta_meta_property_is_not_allowed_in_files_which_will_build_into_CommonJS_output_1470", "The 'import.meta' meta-property is not allowed in files which will build into CommonJS output."),
        Module_0_cannot_be_imported_using_this_construct_The_specifier_only_resolves_to_an_ES_module_which_cannot_be_imported_with_require_Use_an_ECMAScript_import_instead: diag(1471, ts.DiagnosticCategory.Error, "Module_0_cannot_be_imported_using_this_construct_The_specifier_only_resolves_to_an_ES_module_which_c_1471", "Module '{0}' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported with 'require'. Use an ECMAScript import instead."),
        catch_or_finally_expected: diag(1472, ts.DiagnosticCategory.Error, "catch_or_finally_expected_1472", "'catch' or 'finally' expected."),
        An_import_declaration_can_only_be_used_at_the_top_level_of_a_module: diag(1473, ts.DiagnosticCategory.Error, "An_import_declaration_can_only_be_used_at_the_top_level_of_a_module_1473", "An import declaration can only be used at the top level of a module."),
        An_export_declaration_can_only_be_used_at_the_top_level_of_a_module: diag(1474, ts.DiagnosticCategory.Error, "An_export_declaration_can_only_be_used_at_the_top_level_of_a_module_1474", "An export declaration can only be used at the top level of a module."),
        Control_what_method_is_used_to_detect_module_format_JS_files: diag(1475, ts.DiagnosticCategory.Message, "Control_what_method_is_used_to_detect_module_format_JS_files_1475", "Control what method is used to detect module-format JS files."),
        auto_Colon_Treat_files_with_imports_exports_import_meta_jsx_with_jsx_Colon_react_jsx_or_esm_format_with_module_Colon_node16_as_modules: diag(1476, ts.DiagnosticCategory.Message, "auto_Colon_Treat_files_with_imports_exports_import_meta_jsx_with_jsx_Colon_react_jsx_or_esm_format_w_1476", "\"auto\": Treat files with imports, exports, import.meta, jsx (with jsx: react-jsx), or esm format (with module: node16+) as modules."),
        An_instantiation_expression_cannot_be_followed_by_a_property_access: diag(1477, ts.DiagnosticCategory.Error, "An_instantiation_expression_cannot_be_followed_by_a_property_access_1477", "An instantiation expression cannot be followed by a property access."),
        Identifier_or_string_literal_expected: diag(1478, ts.DiagnosticCategory.Error, "Identifier_or_string_literal_expected_1478", "Identifier or string literal expected."),
        The_current_file_is_a_CommonJS_module_whose_imports_will_produce_require_calls_however_the_referenced_file_is_an_ECMAScript_module_and_cannot_be_imported_with_require_Consider_writing_a_dynamic_import_0_call_instead: diag(1479, ts.DiagnosticCategory.Error, "The_current_file_is_a_CommonJS_module_whose_imports_will_produce_require_calls_however_the_reference_1479", "The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"{0}\")' call instead."),
        To_convert_this_file_to_an_ECMAScript_module_change_its_file_extension_to_0_or_create_a_local_package_json_file_with_type_Colon_module: diag(1480, ts.DiagnosticCategory.Message, "To_convert_this_file_to_an_ECMAScript_module_change_its_file_extension_to_0_or_create_a_local_packag_1480", "To convert this file to an ECMAScript module, change its file extension to '{0}' or create a local package.json file with `{ \"type\": \"module\" }`."),
        To_convert_this_file_to_an_ECMAScript_module_change_its_file_extension_to_0_or_add_the_field_type_Colon_module_to_1: diag(1481, ts.DiagnosticCategory.Message, "To_convert_this_file_to_an_ECMAScript_module_change_its_file_extension_to_0_or_add_the_field_type_Co_1481", "To convert this file to an ECMAScript module, change its file extension to '{0}', or add the field `\"type\": \"module\"` to '{1}'."),
        To_convert_this_file_to_an_ECMAScript_module_add_the_field_type_Colon_module_to_0: diag(1482, ts.DiagnosticCategory.Message, "To_convert_this_file_to_an_ECMAScript_module_add_the_field_type_Colon_module_to_0_1482", "To convert this file to an ECMAScript module, add the field `\"type\": \"module\"` to '{0}'."),
        To_convert_this_file_to_an_ECMAScript_module_create_a_local_package_json_file_with_type_Colon_module: diag(1483, ts.DiagnosticCategory.Message, "To_convert_this_file_to_an_ECMAScript_module_create_a_local_package_json_file_with_type_Colon_module_1483", "To convert this file to an ECMAScript module, create a local package.json file with `{ \"type\": \"module\" }`."),
        The_types_of_0_are_incompatible_between_these_types: diag(2200, ts.DiagnosticCategory.Error, "The_types_of_0_are_incompatible_between_these_types_2200", "The types of '{0}' are incompatible between these types."),
        The_types_returned_by_0_are_incompatible_between_these_types: diag(2201, ts.DiagnosticCategory.Error, "The_types_returned_by_0_are_incompatible_between_these_types_2201", "The types returned by '{0}' are incompatible between these types."),
        Call_signature_return_types_0_and_1_are_incompatible: diag(2202, ts.DiagnosticCategory.Error, "Call_signature_return_types_0_and_1_are_incompatible_2202", "Call signature return types '{0}' and '{1}' are incompatible.", /*reportsUnnecessary*/ undefined, /*elidedInCompatabilityPyramid*/ true),
        Construct_signature_return_types_0_and_1_are_incompatible: diag(2203, ts.DiagnosticCategory.Error, "Construct_signature_return_types_0_and_1_are_incompatible_2203", "Construct signature return types '{0}' and '{1}' are incompatible.", /*reportsUnnecessary*/ undefined, /*elidedInCompatabilityPyramid*/ true),
        Call_signatures_with_no_arguments_have_incompatible_return_types_0_and_1: diag(2204, ts.DiagnosticCategory.Error, "Call_signatures_with_no_arguments_have_incompatible_return_types_0_and_1_2204", "Call signatures with no arguments have incompatible return types '{0}' and '{1}'.", /*reportsUnnecessary*/ undefined, /*elidedInCompatabilityPyramid*/ true),
        Construct_signatures_with_no_arguments_have_incompatible_return_types_0_and_1: diag(2205, ts.DiagnosticCategory.Error, "Construct_signatures_with_no_arguments_have_incompatible_return_types_0_and_1_2205", "Construct signatures with no arguments have incompatible return types '{0}' and '{1}'.", /*reportsUnnecessary*/ undefined, /*elidedInCompatabilityPyramid*/ true),
        The_type_modifier_cannot_be_used_on_a_named_import_when_import_type_is_used_on_its_import_statement: diag(2206, ts.DiagnosticCategory.Error, "The_type_modifier_cannot_be_used_on_a_named_import_when_import_type_is_used_on_its_import_statement_2206", "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement."),
        The_type_modifier_cannot_be_used_on_a_named_export_when_export_type_is_used_on_its_export_statement: diag(2207, ts.DiagnosticCategory.Error, "The_type_modifier_cannot_be_used_on_a_named_export_when_export_type_is_used_on_its_export_statement_2207", "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement."),
        This_type_parameter_might_need_an_extends_0_constraint: diag(2208, ts.DiagnosticCategory.Error, "This_type_parameter_might_need_an_extends_0_constraint_2208", "This type parameter might need an `extends {0}` constraint."),
        The_project_root_is_ambiguous_but_is_required_to_resolve_export_map_entry_0_in_file_1_Supply_the_rootDir_compiler_option_to_disambiguate: diag(2209, ts.DiagnosticCategory.Error, "The_project_root_is_ambiguous_but_is_required_to_resolve_export_map_entry_0_in_file_1_Supply_the_roo_2209", "The project root is ambiguous, but is required to resolve export map entry '{0}' in file '{1}'. Supply the `rootDir` compiler option to disambiguate."),
        The_project_root_is_ambiguous_but_is_required_to_resolve_import_map_entry_0_in_file_1_Supply_the_rootDir_compiler_option_to_disambiguate: diag(2210, ts.DiagnosticCategory.Error, "The_project_root_is_ambiguous_but_is_required_to_resolve_import_map_entry_0_in_file_1_Supply_the_roo_2210", "The project root is ambiguous, but is required to resolve import map entry '{0}' in file '{1}'. Supply the `rootDir` compiler option to disambiguate."),
        Add_extends_constraint: diag(2211, ts.DiagnosticCategory.Message, "Add_extends_constraint_2211", "Add `extends` constraint."),
        Add_extends_constraint_to_all_type_parameters: diag(2212, ts.DiagnosticCategory.Message, "Add_extends_constraint_to_all_type_parameters_2212", "Add `extends` constraint to all type parameters"),
        Duplicate_identifier_0: diag(2300, ts.DiagnosticCategory.Error, "Duplicate_identifier_0_2300", "Duplicate identifier '{0}'."),
        Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor: diag(2301, ts.DiagnosticCategory.Error, "Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor_2301", "Initializer of instance member variable '{0}' cannot reference identifier '{1}' declared in the constructor."),
        Static_members_cannot_reference_class_type_parameters: diag(2302, ts.DiagnosticCategory.Error, "Static_members_cannot_reference_class_type_parameters_2302", "Static members cannot reference class type parameters."),
        Circular_definition_of_import_alias_0: diag(2303, ts.DiagnosticCategory.Error, "Circular_definition_of_import_alias_0_2303", "Circular definition of import alias '{0}'."),
        Cannot_find_name_0: diag(2304, ts.DiagnosticCategory.Error, "Cannot_find_name_0_2304", "Cannot find name '{0}'."),
        Module_0_has_no_exported_member_1: diag(2305, ts.DiagnosticCategory.Error, "Module_0_has_no_exported_member_1_2305", "Module '{0}' has no exported member '{1}'."),
        File_0_is_not_a_module: diag(2306, ts.DiagnosticCategory.Error, "File_0_is_not_a_module_2306", "File '{0}' is not a module."),
        Cannot_find_module_0_or_its_corresponding_type_declarations: diag(2307, ts.DiagnosticCategory.Error, "Cannot_find_module_0_or_its_corresponding_type_declarations_2307", "Cannot find module '{0}' or its corresponding type declarations."),
        Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambiguity: diag(2308, ts.DiagnosticCategory.Error, "Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambig_2308", "Module {0} has already exported a member named '{1}'. Consider explicitly re-exporting to resolve the ambiguity."),
        An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements: diag(2309, ts.DiagnosticCategory.Error, "An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements_2309", "An export assignment cannot be used in a module with other exported elements."),
        Type_0_recursively_references_itself_as_a_base_type: diag(2310, ts.DiagnosticCategory.Error, "Type_0_recursively_references_itself_as_a_base_type_2310", "Type '{0}' recursively references itself as a base type."),
        Cannot_find_name_0_Did_you_mean_to_write_this_in_an_async_function: diag(2311, ts.DiagnosticCategory.Error, "Cannot_find_name_0_Did_you_mean_to_write_this_in_an_async_function_2311", "Cannot find name '{0}'. Did you mean to write this in an async function?"),
        An_interface_can_only_extend_an_object_type_or_intersection_of_object_types_with_statically_known_members: diag(2312, ts.DiagnosticCategory.Error, "An_interface_can_only_extend_an_object_type_or_intersection_of_object_types_with_statically_known_me_2312", "An interface can only extend an object type or intersection of object types with statically known members.");
    // Patch `ts.factory` because its public
    patchNodeFactory(ts.factory);
})(ts || (ts = {}));

//# sourceMappingURL=tsserverlibrary.js.map
