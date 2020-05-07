/** .Question: you're given a linked list. Return the list reversed
 *
 * 3->5->45->3->7->0->null
 **/
//

function LinkedListNode(data) {
    this.data = data;
    this.next = null;
}

function reverseLL(head) {
    if (head === "undefined") {
        return head;
    }

    let node = head;
    let previous;
    let temp;
    while (node) {
        //store the next in the temp variable
        temp = node.next;
        // point previous to next
        node.next = previous;

        // set the data for the next loop
        previous = node;
        node = temp;
    }

    return previous;
}
