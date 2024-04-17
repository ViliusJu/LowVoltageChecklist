// Function to save chechbox stet to local storage
function saveCheckboxState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        localStorage.setItem('checkbox' + index, checkbox.checked);
    });
    updateProgress();
}

// Function to load checkbox state from local storage
function loadCheckboxState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        const isChecked = localStorage.getItem('checkbox' + index);
        if (isChecked === 'true') {
            checkbox.checked = true;
        }
    });
    updateProgress();
}

//Function to  save textarea value to local storage
 
function saveKomentarai(){
    const komentarai = document.querySelectorAll('.komentaras');

    komentarai.forEach(function(komentarai){
        let key = komentarai.id;
        let value = komentarai.value;
        localStorage.setItem(key, value); 
    });
 
}


//Function to load texrarea value from local storage

function loudKomentarai(){
    const komentarai = document.querySelectorAll('.komentaras');
    komentarai.forEach(function(komentarai){
        let key = komentarai.id;
        let savedText = localStorage.getItem(key);
        if(savedText !== null){
            komentarai.value = savedText;
        }
    });
}

// Update progress bar based on completed tasks
function updateProgress() {
    const totalTasks1 = document.querySelectorAll('input[type="checkbox"].gaisrinioPultovieta').length;
    const completedTasks1 = document.querySelectorAll('input[type="checkbox"].gaisrinioPultovieta:checked').length;
    const progress1 = Math.round((completedTasks1 / totalTasks1) * 100);
   // const progressSuccess = document.querySelectorAll('.test');
    //if ( progress1 > 50){
      //  progressSuccess.forEach(function valuation(color) {
        //    color.style.color = 'green';
        //})
   // }
 

    document.getElementById('progressBar1').value = progress1;
    

    const totalTasks2 = document.querySelectorAll('input[type="checkbox"].taskiniuJutikliuVieta').length;
    const completedTasks2 = document.querySelectorAll('input[type="checkbox"].taskiniuJutikliuVieta:checked').length;
    const progress2 = Math.round((completedTasks2 / totalTasks2) * 100);
    document.getElementById('progressBar2').value = progress2;

    const totalTasks3 = document.querySelectorAll('input[type="checkbox"].linijiniuJutikliuVieta').length;
    const completedTasks3 = document.querySelectorAll('input[type="checkbox"].linijiniuJutikliuVieta:checked').length;
    const progress3 = Math.round((completedTasks3/totalTasks3) * 100);
    document.getElementById('progressBar3').value = progress3;

    const totalTasks4 = document.querySelectorAll('input[type="checkbox"].gaisriniuMygtukuVieta').length;
    const completedTasks4 = document.querySelectorAll('input[type="checkbox"].gaisriniuMygtukuVieta:checked').length;
    const progress4 = Math.round((completedTasks4/totalTasks4) * 100);
    document.getElementById('progressBar3').value = progress4;
}

// Load checkbox state when the page loads
window.onload = function() {
    loadCheckboxState();
    loudKomentarai();
    
};

// Save checkbox state when a checkbox is clicked
document.getElementById('gaisrinesSignalizacija').addEventListener('click', function(event) {
    if (event.target.type === 'checkbox') {
        saveCheckboxState();
    }
});

