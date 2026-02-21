const data = [
    [0, 13],
    [3, 8],
    [6, 10],
    [12, 15],
];

function maxAttentMeeting(arr) {
    if (!arr.length) {
        return 0;
    }
    arr.sort((a, b) => a[1] - b[1]);
    let lastEnd = arr[0][1],
        counter = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] > lastEnd) {
            counter++;
            lastEnd = arr[i][1];
        }
    }

    return counter;
}

const result = maxAttentMeeting(data);
console.log(result);
