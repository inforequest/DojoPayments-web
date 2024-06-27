document.addEventListener('DOMContentLoaded', function() {
    var popupModal = document.getElementById('popupModal');
    var calendlyModal = document.getElementById('calendlyModal');
    var popupModalContent = document.querySelector('#popupModal .modal-content');
    var calendlyModalContent = document.querySelector('#calendlyModal .modal-content');
    var continueButton = document.getElementById('continueButton');
  var closeModal = document.getElementById('closeModal');
    var button = document.querySelector('.button');
    var button1 = document.querySelector('.button1');

     calendlyModal.style.display = 'none';
    
    if (popupModal && continueButton) {
        continueButton.addEventListener('click', function() {
            popupModalContent.classList.add('float-out');
            popupModal.classList.add('fade-out');

            // Wait for the animation to finish before hiding the modal
            setTimeout(function() {
                popupModal.style.display = 'none';
            }, 250); // Match the duration of the animation
        });
    } else {
        console.log('Popup Modal or continue button not found');
    }

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

    if (button1) {
        button1.addEventListener('click', function() {
            calendlyModal.style.display = 'block';
            calendlyModalContent.classList.remove('float-out');
            calendlyModal.classList.remove('fade-out');
        });
    } else {
        console.log('Button1 not found');
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