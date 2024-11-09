// querySelector
var itemList = document.querySelector("li")
console.log(itemList)

var firstHeader = document.querySelector("h1")
console.log(firstHeader)

var firstParagraph = document.querySelector("p")
console.log(firstParagraph)

var list = document.querySelectorAll("li")
console.log(list)

var similarID = document.getElementById("domlist")
console.log(similarID)

var fClass = document.getElementsByClassName("word")
console.log(fClass)

var fTag = document.getElementsByTagName("h3")
console.log(fTag)

var audioTag = document.querySelector("audio")
console.log(audioTag)
// var audioAttribute = audioTag.getAttribute("controls")
// console.log(audioAttribute)
audioTag.setAttribute("controls","true")
// audioTag.removeAttribute("controls")

var videoTag = document.querySelector("video")
console.log(videoTag)
videoTag.setAttribute("controls", "true")
// videoTag.removeAttribute("controls")