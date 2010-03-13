/*jslint onevar: false, nomen: false */

/*
 * Linked List implementation in JavaScript
 * Copyright (c) 2009 Nicholas C. Zakas
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
 * A linked list implementation in JavaScript.
 *
 * The complexity of the list initialization is O(1).
 *
 * @constructor
 */
function LinkedList() {

    /**
     * The number of items in the list.
     *
     * @type {number}
     * @private
     */
    this._size = 0;
    
    /**
     * Pointer to first item in the list.
     *
     * @type {Object}
     * @private
     */
    this._head = null;

    /**
     * Pointer to the last item in the list.
     *
     * @type {Object}
     * @private
     */
    this._tail = null;
}

LinkedList.prototype = {

    // Copy the constructor to this new prototype object.
    constructor: LinkedList,
    
    /**
     * Inserts an element just after element in the list. If the element is
     * null or undefined, the new element is inserted at the head of the list.
     *
     * The complexity of insertNext is O(1).
     *
     * @this {LinkedList}
     * @param {Object} element the element before the new element.
     * @param {Object} data the new element data to add.
     */
    insertNext: function (element, data) {
        // Initialize the new element.
        var newElement = {
            "data" : data,
            "next" : null
        };

        if (!element) {
            // Update the tail if this is the first element added.
            if (this._size === 0) {
                this._tail = newElement;
            }

            // Handle insertion at the head of the list.
            newElement.next = this._head;
            this._head = newElement;
        } else {
            // Handle insertion at the tail.
            if (!element.next) {
                this._tail = newElement;
            }

            // Handle insertion after a valid element.
            newElement.next = element.next;
            element.next = newElement;
        }

        // Adjust the size of the list to account for the new element.
        this._size = this._size + 1;
    },

    /**
     * Removes the element just after element in the list. If the element is
     * null or undefined, the element at the head of the list is removed.
     *
     * The complexity of removeNext is O(1).
     *
     * @this {LinkedList}
     * @param {Object} element the element before the element to be removed.
     */
    removeNext: function (element) {

    },

    /**
     * Determines if the specified element is the head of the list.
     *
     * The complexity of isHead is O(1).
     *
     * @this {LinkedList}
     * @param {Object} element the element to check.
     * @return {boolean} true if the element is the head, false otherwise.
     */
    isHead: function (element) {

    },

    /**
     * Determines if the specified element is the tail of the list.
     *
     * The complexity if isTail is O(1).
     *
     * @this {LinkedList}
     * @param {Object} element the element to check.
     * @return {boolean} true if the element is the tail, false otherwise.
     */
    isTail: function (element) {

    },

    /**
     * Accessor for the head element of the list.
     *
     * The complexity of getHead is O(1).
     *
     * @this {LinkedList}
     * @return {Object} the head of the list.
     */
    getHead: function () {
        return this._head;
    },

    /**
     * Accessor for the tail element of the list.
     *
     * The complexity of getTail is O(1).
     *
     * @this {LinkedList}
     * @return {Object} the tail of the list.
     */
    getTail: function () {
        return this._tail;
    },
    
    /**
     * Returns the number of items in the list.
     *
     * The complexity of getSize is O(1).
     *
     * @this {LinkedList}
     * @return {number} the number of items in the list.
     */
    getSize: function () {
        return this._size;
    },
    
    /**
     * Converts the list into an array.
     *
     * The complexity of toArray is O(n).
     *
     * @this {LinkedList}
     * @return {Array.<Object>} an array containing all of the data in the list.
     */
    toArray: function () {
        var result = [],
            current = this._head;
        
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        
        return result;
    },
    
    /**
     * Converts the list into a string representation.
     *
     * @override
     * @this {LinkedList}
     * @return {String} a string representation of the list.
     */
    toString: function () {
        return this.toArray().toString();
    }
};
