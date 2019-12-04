/**
 * @param {Array<number>} list - input array
 * @return {Array<number>} list - sorted array
 */
const bubbleSort = list => {
    for(let i = list.length-1; i >= 0; i--){
        for (let j = 0; j < i; j++){
            if (list[j] > list[j+1]){
                [list[j], list[j+1]] = [list[j+1], list[j]];
            }
        }
    }
    return list;
}