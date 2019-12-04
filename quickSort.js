const partiton = (list, low, high) => {
    let i = low-1;
    let pivot = list[high];
    for (let j = low; j <= high-1; j++){
        if(list[j] <= pivot){
            i++;
            [list[i], list[j]] = [list[j], list[i]];
        }
    }
    [list[i+1], list[high]] = [list[high], list[i+1]];
    return i+1;
}

const quickSort = (list, low, high) => {
    if(low < high){
        let pi = partiton(list, low, high);
        quickSort(list, low, pi-1);
        quickSort(list, pi+1, high);
        return list;
    }
}