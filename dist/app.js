"use strict";
let anyFlag;
const globalVar = 'Message';
function logInfo(data, _) {
    console.log(data);
    anyFlag = true;
    console.log(anyFlag);
}
logInfo('I am log string');
function multiple(a, b) {
    if (a && b) {
        return a * b;
    }
    return 0;
}
