/**
 * Created by lee on 4/29/17.
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLinks = function (l1,l2) {

    var dunmy = new ListNode(-1);
    var runner = dunmy;

    while(l1 && l2 && l1.val != undefined && l2.val != undefined) {
        if(l1.val < l2.val) {
            runner.next = l1;
            l1 = l1.next;
        } else  {
            runner.next = l2;
            l2 = l2.next;
        }
        runner = runner.next; // 机器重要，要不runner不会走
    }

    if(l1 && l1.val != undefined) {
        runner.next = l1;
    }
    if(l2 && l2.val != undefined) {
        runner.next = l2;
    }

    return dunmy.next || null;

}