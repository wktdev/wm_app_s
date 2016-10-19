var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var matrix = [];



function findSurroundingLetters(alphabet, letter) {
    var rowOfLetters = [];
    var indexOfLetter = alphabet.indexOf(letter);

    var first = alphabet[indexOfLetter - 2];
    var second = alphabet[indexOfLetter - 1];

    var third = letter;

    var fourth = alphabet[indexOfLetter + 1];
    var fifth = alphabet[indexOfLetter + 2];

    if (second === undefined) {
        second = "z";
        first = "y"
    }

    if (first === undefined) {
        first = "z"
    }

    if (fourth === undefined) {
        fourth = "a";
        fifth = "b";
    }

    if (fifth === undefined) {
        fifth = "a"
    }

    rowOfLetters.push(first, second, third, fourth, fifth)
    console.log(rowOfLetters);



    return rowOfLetters

}


function createInterface(arr) {
    var numberOfRows = arr.length;
    $(".letter-containers").empty();

    arr.forEach(function(val, index, arr) {

        $(".letter-containers").append("<ul class ='letter-row'> </ul>")
        val.forEach(function(val2, index2, arr2) {


            $(".letter-row").eq(index).append("<li class='letter'>" + val2 + "</li>");


        })

    });


}


$(function() {
    $(".selected-word").on("mouseover", function() {
        $(this).css("background-color", "grey")
    });

    $(".selected-word").on("mouseout", function() {
        $(this).css("background-color", "transparent")
    })
    $(".selected-word").on("click", function() {
        matrix = [];
        var selectedWord = $(this).text();
        var selectedWordArr = selectedWord.split("");
        selectedWordArr.forEach(function(val, index, arr) {
            matrix.push(findSurroundingLetters(alphabet, val))
        });

        createInterface(matrix)
        console.log(getAnswers(matrix));
        $(".answer-list").empty();
        getAnswers(matrix).forEach(function(val) {
            $(".answer-list").append("<li>" + val + "  </li>")
        })
    });


    $("form").on("submit", function(e) {
        e.preventDefault();
        var userInput = $(".user-input").val();
        matrix = [];
        console.log(matrix);
        var selectedWord = userInput;
        var selectedWordArr = selectedWord.split("");
        selectedWordArr.forEach(function(val, index, arr) {
            matrix.push(findSurroundingLetters(alphabet, val))
        });
        createInterface(matrix);
        console.log(getAnswers(matrix));
        $(".answer-list").empty();
        getAnswers(matrix).forEach(function(val) {

            $(".answer-list").append("<li>" + "\"" + val + "\"" + "," + "</li>")
        })

    });





});