const input = document.querySelector('input');
const digitadoDisplay = document.querySelector('#digitadoDisplay');
const tagPalindromo = document.querySelector('#palindromo');

input.addEventListener('keyup', e => {
    let string = e.target.value;
    digitadoDisplay.innerHTML = string;

    let [array, invertedArray] = arrays(string);
    const palindromo = isPalindrome(array, invertedArray);

    console.log(palindromo);
    if(palindromo){
        tagPalindromo.style.visibility = 'visible';
    }

});

function isPalindrome(arr, inv){
    let isPalindrome = false;

    if(arr.length>=2){
        isPalindrome = arr.every(letter => letter===inv[arr.indexOf(letter)] ? true : false);
    }
    
    return isPalindrome;
}

function arrays(str){
    let stringArray = str
        .replace(/\s/g, '')
        .split('');
    let reverseStringArray = [...stringArray].reverse();

    return [stringArray, reverseStringArray];
}