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
 * the chained hash table.
 *
 * @param {number} numberOfBuckets the number of buckets to create.
 * @param {Function} hashFunction a hash function to use for creating keys.
 * @param {Function} keyMatchFunction a function to compare two keys.
 * @constructor
 */
function ChainedHashTable(numberOfBuckets, hashFunction, compareFunction) {
    this.numberOfBuckets = numberOfBuckets;
    this.hashFunction = hashFunction;
    this.compareFunction = compareFunction;
}

ChainedHashTable.prototype = {

    // Copy the constructor to this prototype object.
    constructor: ChainedHashTable,
    
    /**
     * Release references to external objects.
     *
     * Complexity of destroy is O(m), where m is the number of buckets.
     *
     * @this {ChainedHashTable}
     */
    destroy: function () {
        if (this.numberOfBuckets) {
            delete this.numberOfBuckets;
        }

        if (this.hashFunction) {
            delete this.hashFunction;
        }

        if (this.compareFunction) {
            delete this.compareFunction;
        }
    },
    
    /**
     * Insert an element into the chained hash table.
     *
     * Complexity of insert is O(1).
     *
     * @param {Object} data the data to be inserted.
     * @return {boolean} true if the insertion was successful, false otherwise.
     * @this {ChainedHashTable}
     */
    insert: function (data) {
        // TODO
    },

    /**
     * Removes the element matching data from the chained hash table.
     *
     * Complexity of remove is O(1).
     *
     * @param {Object} data the element to delete from the hash table.
     * @return {Object} a reference to the element that was removed.
     * @this {ChainedHashTable}
     */
    remove: function (data) {
        // TODO
    },

    /**
     * Determines whether an element exists in the hash table that matches the
     * element specified.
     *
     * Complexity of lookup is O(1).
     *
     * @param {Object} data the element to look for in the hash table.
     * @return {boolean} true if the element was found, false otherwise.
     * @this {ChainedHashTable}
     */
    lookup: function () {
        // TODO
    },

    /**
     * Complexity of size is O(1).
     *
     * @return {number} the number of elementes contained in the hash table.
     * @this {ChainedHashTable}
     */
    size: function () {
        // TODO
    }
};
