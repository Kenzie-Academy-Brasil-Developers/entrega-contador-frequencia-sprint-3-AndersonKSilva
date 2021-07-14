let check = true
const button = document.getElementById("contButton");
button.addEventListener("click", function(){
const letterCounts = {}
const wordsCounts = {}
const letters = document.getElementById("lettersDiv");
const wordss = document.getElementById("wordsDiv");
   if(check !== true){
      letters.innerText = '';
      wordss.innerText = '';  
   }
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g,"")

    for(let i= 0;i<typedText.length;i++){
      currentLetter = typedText[i]
      counter(letterCounts, currentLetter)
    }

   for (let letter in letterCounts) { 
      const span = document.createElement("span"); 
      const textContent = `"${letter}": ${letterCounts[letter]}, `;
      span.innerText = textContent; 
      letters.appendChild(span); 
   }

   words = typedText.split(/\s/);

   for(let i = 0; i<words.length;i++){
      currentWord = words[i]
      counter(wordsCounts, currentWord)
   }

   for(word in wordsCounts){
      const span = document.createElement("span");
      const textContent = `"${word}": ${wordsCounts[word]}, `;
      span.innerText = textContent;
      wordss.appendChild(span)
   }
   check = false;
});
const counter = (x, y)=>{
   if (x[y] === undefined) {
      x[y] = 1; 
   } else { 
      x[y]++; 
   }
};