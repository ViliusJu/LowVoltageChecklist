function updateProgressBar1() {
    ////Gaisrinės signalizacijos pultas ir GSS sistema
  const totalDissabityTasks1 = document.querySelectorAll('input[type="checkbox"].disabilityTaskbBox').length;
  const completedDisaabilityTasks1 = document.querySelectorAll('input[type="checkbox"].disabilityTaskbBox:checked').length;

  const progress12 = (completedDisaabilityTasks1/ totalDissabityTasks1 ) * 100;
          

  document.getElementById('progressBarFill12').style.width = progress12 + '%';


}
 // Function to save checkbox state to localStorage
 function saveCheckboxState1(taskId, isChecked) {
    localStorage.setItem(taskId, isChecked);
    updateProgressBar1();
    
}

// Function to load checkbox state from localStorage
function loadCheckboxState1(taskId) {
    const isChecked = localStorage.getItem(taskId) === 'true';
    document.getElementById(taskId).querySelector('input[type="checkbox"]').checked = isChecked;
}

// Function to save comments to localStorage
function saveComment1(taskId, comment) {
    let comments = JSON.parse(localStorage.getItem(`${taskId}_comments`)) || [];
    comments.push(comment);
    localStorage.setItem(`${taskId}_comments`, JSON.stringify(comments));
}

// Function to load comments from localStorage
function loadComments1(taskId) {
    const comments = JSON.parse(localStorage.getItem(`${taskId}_comments`)) || [];
    const commentsList = document.getElementById(`comments_${taskId}`);
    commentsList.innerHTML = comments.map(comment => `<li>${comment}<button onclick="deleteComment1('${taskId}', '${comment}')">Delete</button></li>`).join('');
}

// Function to add a comment
function addComment1(taskId) {
    const comment = prompt("Enter your comment:");
    if (comment) {
        saveComment1(taskId, comment);
        loadComments1(taskId);
    }
}

// Function to delete a comment
function deleteComment1(taskId, comment) {
    let comments = JSON.parse(localStorage.getItem(`${taskId}_comments`)) || [];
    comments = comments.filter(c => c !== comment);
    localStorage.setItem(`${taskId}_comments`, JSON.stringify(comments));
    loadComments1(taskId);
}


window.onload = function () {
    loadCheckboxState1('taskID96'); 
    loadComments1('taskID96');
    loadCheckboxState1('taskID97'); 
    loadComments1('taskID97');
    updateProgressBar1();

}

      // Add event listeners to save checkbox state when it changes
      document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            saveCheckboxState1(this.parentElement.id, this.checked);
        });
    });




    