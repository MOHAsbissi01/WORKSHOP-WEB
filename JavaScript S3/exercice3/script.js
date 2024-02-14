function generateStringList() {
    var string1 = "abc";
    var string2 = "de";
    var resultList = [];

    for (var i = 0; i < string1.length; i++) {
        for (var j = 0; j < string2.length; j++) {
            resultList.push(string1[i] + string2[j]);
        }
    }

    var outputDiv = document.getElementById('output');
    outputDiv.textContent = 'Liste générée : ' + resultList.join(', ');
}

// Call the function to generate the desired list
generateStringList();
