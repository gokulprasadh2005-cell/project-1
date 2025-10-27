function navigate(pageId) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const room = document.getElementById('roomType').value;
  alert(`Thank you, ${name}! Your ${room} has been booked successfully.`);
  navigate('home');
});