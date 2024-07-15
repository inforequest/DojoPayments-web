document.addEventListener('DOMContentLoaded', function() {
    var calendlyModal = document.getElementById('calendlyModal');
    var calendlyModalContent = document.querySelector('#calendlyModal .modal-content');
    var continueButton = document.getElementById('continueButton');
  var closeModal = document.getElementById('closeModal');
    var button = document.querySelector('.button');

     calendlyModal.style.display = 'none';
    

   if (calendlyModal && closeModal) {
        closeModal.addEventListener('click', function() {
            calendlyModalContent.classList.add('float-out');
            calendlyModal.classList.add('fade-out');

            // Wait for the animation to finish before hiding the modal
            setTimeout(function() {
                calendlyModal.style.display = 'none';
            }, 250); // Match the duration of the animation
        });
    } else {
        console.log('Calendly Modal or back button not found');
    }

    if (button) {
        button.addEventListener('click', function() {
            calendlyModal.style.display = 'block';
            calendlyModalContent.classList.remove('float-out');
            calendlyModal.classList.remove('fade-out');
        });
    } else {
        console.log('Button not found');
    }

    window.addEventListener('click', function(event) {
        if (event.target === popupModal) {
            popupModal.style.display = 'none';
        }
        if (event.target === calendlyModal) {
            calendlyModal.style.display = 'none';
        }
    });
});