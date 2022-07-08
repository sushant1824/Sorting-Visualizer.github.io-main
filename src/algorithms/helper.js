export function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

export function insertStep(arr, position, steps) {
	let currentStep = steps[steps.length - 1].slice();
	currentStep.splice(position, arr.length, ...arr);
	steps.push(currentStep);
}