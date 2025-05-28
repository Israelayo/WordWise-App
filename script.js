//Modal pop-up
const openModal = document.querySelector(".cta-btn");
const notifyModal = document.querySelector(".notify-modal");
const closeBtn = document.getElementById("closeFormbtn");

openModal.addEventListener('click', () => {
    notifyModal.classList.remove('hidden')
});

closeBtn.addEventListener('click', () => {
    notifyModal.classList.add('hidden')
})


//Form Handling
const form = document.querySelector(".notify-form");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); 

    const formData = new FormData(form);

    try{
        const response = await fetch("mail.php", {
            method: "POST",
            body: formData
        });

        const result = await response.text();
        alert(result);
        form.reset();
    } catch (error){
        alert("Something went wrong. Please try again");
    }
  });


  //Escape key & Outside Modal function
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        notifyModal.classList.add ('hidden')
    }
})

notifyModal.addEventListener('click', (e) => {
    if (e.target === notifyModal){
        notifyModal.classList.add('hidden')
    }
})

