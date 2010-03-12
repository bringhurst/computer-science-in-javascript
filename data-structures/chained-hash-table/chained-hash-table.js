/*global LinkedList */
/*jslint onevar: false, nomen: false */

/*
 * Chained hash table implementation in JavaScript
 * Copyright (c) 2010 Jonathan Bringhurst
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Constructor for a chained hash table implementation in JavaScript.
 *
 * This constructor has complexity of O(m), where m is the number of buckets in
 * the chained hash table. The initilization runs in a constant amount of time
 * except for the initialization of buckets.
 *
 * @param {number} numberOfBuckets the number of buckets to create.
 * @param {Function} hashFunction a hash function to use for creating keys.
 * @param {Function} keyMatchFunction a function to compare two keys.
 * @constructor
 */
function ChainedHashTable(numberOfBuckets, hashFunction, compareFunction) {
    this._numberOfBuckets = numberOfBuckets;
    this._hashFunction = hashFunction;
    this._compareFunction = compareFunction;

    // A new hash table will not contain any elements.
    this._size = 0;

    // Setup the array of buckets.
    this._table = new LinkedList();

    // Initialize each bucket.
    var i = this._numberOfBuckets;

    while (i > 0) {
        this._table.add(new LinkedList());
        i = i - 1;
    }
}

ChainedHashTable.prototype = {

    // Copy the constructor to this prototype object.
    constructor: ChainedHashTable,
    
    /**
     * Insert an element into the chained hash table.
     *
     * Complexity of insert is O(1).
     *
     * @param {Object} data the data to be inserted.
     * @this {ChainedHashTable}
     */
    insert: function (data) {
        // Do nothing if the element is already in the hash table.
        if (this.lookup(data)) {
            return;
        }

        // Hash the key.
        var bucket = this._hashFunction(data) % this._numberOfBuckets;

        // Insert the data into the bucket.
        this._table.item(bucket).add(data);
    },

    /**
     * Removes the element matching data from the chained hash table.
     *
     * Complexity of remove is O(1).
     *
     * @param {Object} data the element to delete from the hash table.
     * @return {boolean} true if the element was removed, false otherwise.
     * @this {ChainedHashTable}
     */
    remove: function (data) {
        // Hash the key.
        var bucket = this._hashFunction(data) % this._numberOfBuckets;

        // Keep track of the element in the list we're comparing to.
        var current = null;

        // Keep track of the previous element as we search.
        var previous = null;

        for (current = this._table.item(bucket); current; current = current.next) {
            if (this._matchFunction(data, current.data)) {
                // Remove the data from the bucket.
                if (this._table.removeNext(previous)) {
                    this._size = this._size = 1;
                    return true;
                } else {
                    return false;
                }
            }

            previous = current;
        }

        return false;
    },

    /**
     * Determines whether an element exists in the hash table that matches the
     * element specified.
     *
     * Complexity of lookup is O(1).
     *
     * @param {Object} data the element to look for in the hash table.
     * @return {Object} the element data if it is found, otherwise null.
     * @this {ChainedHashTable}
     */
    lookup: function (data) {
        // Hash the key.
        var bucket = this._hashFunction(data) % this._numberOfBuckets;

        // Keep track of the element in the list we're comparing to.
        var current = null;

        // Search for the data in the bucket.
        for (current = this._table.item(bucket); current; current = current.next) {
            if (this._matchFunction(data, current.data)) {
                // Pass the data from the table back.
                return current.data;
            }
        }

        return null;
    },

    /**
     * Complexity of size is O(1).
     *
     * @return {number} the number of elementes contained in the hash table.
     * @this {ChainedHashTable}
     */
    size: function () {
        return this._size;
    }
};
