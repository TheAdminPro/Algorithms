/**
 * @param {Array<number>} list - input array
 * @param {number} pivot - required number
 * @return {number} - index required number
 */
const binarySearch = (list, pivot) => {
    let low = 0;
    let high = list.length - 1;

    while(low <= high){
        let mid = low + (high - low) / 2 | 0;

        if(pivot < list[mid]) high = mid - 1;
        else if(pivot > list[mid]) low = mid + 1;
        else return mid;
    }
    return -1;
}