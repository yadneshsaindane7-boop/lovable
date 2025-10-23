// Long developer-themed typewriter effect for message.html
const text = `Coding is not just my profession, it's my passion and my sanctuary. With every line I write, I create a world where creativity meets logic —  
a place where problems transform into solutions and ideas take flight.  
Each function, each algorithm, is a love letter to innovation and the art of building something meaningful from nothing.  
Through endless nights and countless trials, I find joy in crafting code that breathes life into dreams.  
This is my true love — the language of the future, my forever muse.`;
let i = 0;
const speed = 45;
function typeWriter() {
  if (i < text.length) {
    const currentChar = text.charAt(i);
    if (currentChar === "\n") {
      document.getElementById('typewriter').innerHTML += "<br/>";
    } else {
      document.getElementById('typewriter').innerHTML += currentChar;
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = function () {
  typeWriter();
};
