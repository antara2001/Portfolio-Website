const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["A desinger", "Frontend DeveLoper", "Backend DeveLoper", "A student","A programmer"];
const typingDelay = 50;
const erasingDelay = 50;
const newTextDelay = 50; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 50);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 50);
});





$(document).ready(function(){
	var skillBar = $('.skill-body');
	$(window).scroll(function(){
		var SkillLocation = $("#Education-Skill").offset().top;
		var scrollLocation = $(this).scrollTop();

		skillBar.each(function(){
			if(SkillLocation - 800 <= scrollLocation)
			{
				$(this).find('.inner-skill-bar').animate({width:$(this).attr('data-percent')}, 2000);
			}
		});
	});
});