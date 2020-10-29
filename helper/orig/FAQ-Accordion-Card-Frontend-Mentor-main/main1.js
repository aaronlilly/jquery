const questions = document.querySelectorAll("qna");

questions.forEach((q) => {
    const icon = q.querySelector(".icon");
    const title = q.querySelector("question");

    icon.classList.toggle("rotate");

    //Event Listener for the questions.
    title.addEventListener("click", () => {
        /* showAnswer(); */ 
        
        //For Trial Purposes - Even this won't work
        alert("hey");
    });

    //Event Listener for Buttons.
    icon.addEventListener("click", () => {
        showAnswer();
    });

    function showAnswer() {
        questions.forEach((item) => {
            if (item != q) {
                item.classList.remove("visible");
            }
        });
        quest.classList.toggle("visible");
    }

});