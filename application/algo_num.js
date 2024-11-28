function generateCombinations(inputConditions) {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let possibleCombinations = [];
    let cachedResult = null;
    let usedCachedResult = false;

    // 生成所有可能的組合（3位數字且不重複）
    function permute(arr, m = []) {
        if (m.length === 3) {
            possibleCombinations.push(m);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            permute(arr.slice(0, i).concat(arr.slice(i + 1)), m.concat(arr[i]));
        }
    }

    permute(digits);

    // 按條件篩選組合
    for (const { input, correct, misplaced } of inputConditions) {
        possibleCombinations = possibleCombinations.filter((combination) => {
            let correctCount = 0;
            let misplacedCount = 0;

            for (let i = 0; i < 3; i++) {
                if (combination[i] === input[i]) {
                    correctCount++;
                } else if (input.includes(combination[i])) {
                    misplacedCount++;
                }
            }

            return correctCount === correct && misplacedCount === misplaced;
        });

        if (possibleCombinations.length === 0 && cachedResult) {
            possibleCombinations = cachedResult;
            usedCachedResult = true;
            break;
        }

        cachedResult = [...possibleCombinations];
        
    }

    return { combinations: possibleCombinations, count: possibleCombinations.length, usedCachedResult };
}

// 測試範例
// const inputConditions = [
//     { input: [1, 2, 3], correct: 0, misplaced: 0 }, // 第一次輸入條件
// ];



const algo_num = (inputConditions) => {
    //console.log(inputConditions)
    let output = generateCombinations(inputConditions)
    return output;
} 


export default algo_num;

// const output = generateCombinations(inputConditions);
// console.log("所有符合條件的組合：", output.combinations);
// console.log("符合條件的組合數量：", output.count);
