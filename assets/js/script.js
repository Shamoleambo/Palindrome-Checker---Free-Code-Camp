const input = document.querySelector('input');
const p = document.querySelector('p');

input.addEventListener('keyup', e => {
    let string = e.target.value;

    let stringArray = string
        .replace(/\s/g, '')
        .split('');
    let reverseStringArray = [...stringArray].reverse();
    let isPalindrome = false;

    if(stringArray.length>=2){
        isPalindrome = stringArray.every(letter => letter===reverseStringArray[stringArray.indexOf(letter)] ? true : false);
    
        console.log(isPalindrome);
    }
    
});