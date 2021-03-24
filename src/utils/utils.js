const isEmpty = (item) => {
    if(item === '' || item === undefined || item == null) {
        return true;
    } else{
        return false;
    }
}

export {
    isEmpty
}