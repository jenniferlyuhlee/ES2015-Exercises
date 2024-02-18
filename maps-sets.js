//Quick Question 1
//{1, 2, 3, 4}

//Quick Question 2
//'ref'

//Quick Question 3
/*
0: {[1, 2, 3] => true}
1: {[1, 2, 3] => false}
*/


//hasDuplication
const hasDuplicate = (arr) => {
    const newArr = [...new Set(arr)];
    if (arr.length > newArr.length) return true;
    return false;
};

//vowelCount
const vowelCount = (string) => {
    const newStr = string.toLowerCase();
    const vowels = 'aeiou';
    const strMap = new Map();
    for (let char of newStr){
        if (vowels.includes(char)){
            if (strMap.has(char)){
                strMap.set(char, strMap.get(char)+1);
            }
            else{
                strMap.set(char, 1);
            }
        }
    }
    return strMap;
};