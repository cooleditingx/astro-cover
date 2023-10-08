var factList = [
    "A Total Lunar Eclipse can reveal stars that are usually hidden by the Moon's glow.",
    "The white wisps around the Moon during a Total Solar Eclipse are part of the Sun's outer atmosphere,known as the Corona.",
    "Remember,it's important to never look directly at the Sun.",
    "The U.S. will experience the next two solar eclipses: an annular eclipse in October 2023,and a total eclipsein April 2024.",
    "An eclipse season is one of only two periods each year when the Sun, the Moon and Earth are aligned, allowing eclipses to occur.",
    "Each season lasts about 35 days and repeats just short of six months later!",
]
var fact = document.getElementById ("fact");
var myButton = document.getElementById ("myButton");
var count = 0;
myButton.addEventListener ("click", displayFact);

function displayFact (){
    fact.innerHTML = factList[count];
    count++;
    if (count == factList.length) {
        count = 0;
    }
}
