let currentScroll = 0;
const scrollAmount = 320;
const track = document.querySelector('.slide-track');
const slider = document.querySelector('.slider');

function plusDivs(n) {
  const maxScroll = track.scrollWidth - slider.offsetWidth;

  currentScroll += n * scrollAmount;

  if (currentScroll < 0) currentScroll = 0;
  if (currentScroll > maxScroll) currentScroll = maxScroll;

  track.style.transform = `translateX(-${currentScroll}px)`;
}

let currentScroll2 = 0;
const track2 = document.querySelector('.slide-track2');
const slider2 = document.querySelector('.slider2');
function plusDivs2(n) {
  
  const maxScroll = track2.scrollWidth - slider2.offsetWidth;
  currentScroll2 += n * scrollAmount;

  if (currentScroll2 < 0) currentScroll2 = 0;
  if (currentScroll2 > maxScroll) currentScroll2 = maxScroll;

  track2.style.transform = `translateX(-${currentScroll2}px)`;
}

let currentScroll3 = 0;
const track3 = document.querySelector('.slide-track3');
const slider3 = document.querySelector('.slider3');
function plusDivs3(n) {
  
  const maxScroll = track3.scrollWidth - slider3.offsetWidth;
  currentScroll3 += n * scrollAmount;

  if (currentScroll3 < 0) currentScroll3 = 0;
  if (currentScroll3 > maxScroll) currentScroll3 = maxScroll;

  track3.style.transform = `translateX(-${currentScroll3}px)`;
}

document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const city = document.getElementById('city').value;


  const phonePattern = /^[0-9]{10}$/;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
  }

  if (!emailPattern.test(email)) {
      alert("Please enter a valid email.");
      return;
  }


  alert(`Form Details:\nName: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nCity: ${city}`);

 
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
      <h2>Form Details:</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <p><strong>City:</strong> ${city}</p>
  `;
});

