"use strict";

function getValue(text, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    });
}

getValue("Hello 2000", 2000).then((data) => {
    console.log(data);
});
getValue("Hello 5000", 5000).then((data) => {
    console.log(data);
});
