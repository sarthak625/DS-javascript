var arr = [1,88,213,1100,20123,25000,123213,123123123];

Array.prototype.binarySearch = function (value) {
    var a = this;
    if (a.length == 0 || a.length == 1) {
        if (a.length == 1 && a[0] === value) return value;
        return false;
    }
    console.log(a);
    var mid = Math.round((0 + a.length - 1) / 2);
    console.log(mid);
    if (a[mid] === value) return value;
    else if (a[mid] > value) return a.slice(0, mid).binarySearch(value);
    else return a.slice(mid, a.length).binarySearch(value);
}

if (arr.binarySearch(88)) console.log("Found");
else console.log("Not Found");
