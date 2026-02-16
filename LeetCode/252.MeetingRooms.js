function canAttentAllMeeting(arr) {
    arr.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1][1] > arr[i][0]) {
            return false;
        }
    }

    return true;
}
