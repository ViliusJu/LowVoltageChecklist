function updateProgressBar1() {
    ////Gaisrinės signalizacijos pultas ir GSS sistema
  const totalDissabityTasks1 = document.querySelectorAll('input[type="checkbox"].disabilityTaskbBox').length;
  const completedDisaabilityTasks1 = document.querySelectorAll('input[type="checkbox"].disabilityTaskbBox:checked').length;

  const progress12 = (completedDisaabilityTasks1/ totalDissabityTasks1 ) * 100;
          

  document.getElementById('progressBarFill12').style.width = progress12 + '%';


}
 // Function to save checkbox state to localStorage
 function saveCheckboxState1(d_taskId, isChecked) {
    localStorage.setItem(d_taskId, isChecked);
    updateProgressBar1();
    
}

// Function to load checkbox state from localStorage
function loadCheckboxState1(d_taskId) {
    const isChecked = localStorage.getItem(d_taskId) === 'true';
    document.getElementById(d_taskId).querySelector('input[type="checkbox"]').checked = isChecked;
}

// Function to save comments to localStorage
function saveComment1(d_taskId, comment) {
    let comments = JSON.parse(localStorage.getItem(`${d_taskId}_comments`)) || [];
    comments.push(comment);
    localStorage.setItem(`${d_taskId}_comments`, JSON.stringify(comments));
}

// Function to load comments from localStorage
function loadComments1(d_taskId) {
    const comments = JSON.parse(localStorage.getItem(`${d_taskId}_comments`)) || [];
    const commentsList = document.getElementById(`comments_${d_taskId}`);
    commentsList.innerHTML = comments.map(comment => `<li>${comment}<button onclick="deleteComment1('${d_taskId}', '${comment}')">Delete</button></li>`).join('');
}

// Function to add a comment
function addComment1(d_taskId) {
    const comment = prompt("Enter your comment:");
    if (comment) {
        saveComment1(d_taskId, comment);
        loadComments1(d_taskId);
    }
}

// Function to delete a comment
function deleteComment1(d_taskId, comment) {
    let comments = JSON.parse(localStorage.getItem(`${d_taskId}_comments`)) || [];
    comments = comments.filter(c => c !== comment);
    localStorage.setItem(`${d_taskId}_comments`, JSON.stringify(comments));
    loadComments1(d_taskId);
}


window.onload = function () {
    loadCheckboxState1('d_taskId01'); 
    loadComments1('d_taskId01');
    loadCheckboxState1('d_taskId02'); 
    loadComments1('d_taskId02');
    loadCheckboxState1('d_taskId03'); 
    loadComments1('d_taskId03');
    updateProgressBar1();

}

      // Add event listeners to save checkbox state when it changes
      document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            saveCheckboxState1(this.parentElement.id, this.checked);
        });
    });




    