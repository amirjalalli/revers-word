var word = prompt("enter the word: ")

var charractersArray = word.split('')
var reversCharractersArray = charractersArray.reverse()

var reversWord = reversCharractersArray.join('')


if (word == reversWord) {
    alert("از هر دو جهت به یک شکل خوانده میشود")
} else {
    alert("از هر جهت به یک شکل خوانده نمیشود")
}