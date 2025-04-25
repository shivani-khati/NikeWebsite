let currentScroll = 0;
const scrollAmount = 320; // Adjust based on card width + gap
const track = document.querySelector('.slide-track');
const slider = document.querySelector('.slider');

function plusDivs(n) {
  const maxScroll = track.scrollWidth - slider.offsetWidth;

  currentScroll += n * scrollAmount;

  if (currentScroll < 0) currentScroll = 0;
  if (currentScroll > maxScroll) currentScroll = maxScroll;

  track.style.transform = `translateX(-${currentScroll}px)`;
}


