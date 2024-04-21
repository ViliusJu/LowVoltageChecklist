        // Function to calculate progress and update the progress bar
        function updateProgressBar() {
          const totalTasks1 = document.querySelectorAll('input[type="checkbox"].pultasTaskbBox').length;
          const completedTasks1 = document.querySelectorAll('input[type="checkbox"].pultasTaskbBox:checked').length;
          const totalTasks2 = document.querySelectorAll('input[type="checkbox"].taskiniaiTaskbBox').length;
          const completedTasks2 = document.querySelectorAll('input[type="checkbox"].taskiniaiTaskbBox:checked').length;
          const totalTasks3 = document.querySelectorAll('input[type="checkbox"].linijiniaiTaskbBox').length;
          const completedTasks3 = document.querySelectorAll('input[type="checkbox"].linijiniaiTaskbBox:checked').length;
          const totalTasks4 = document.querySelectorAll('input[type="checkbox"].mygtukaiTaskbBox').length;
          const completedTasks4 = document.querySelectorAll('input[type="checkbox"].mygtukaiTaskbBox:checked').length;
          const totalTasks5 = document.querySelectorAll('input[type="checkbox"].sirenosTaskbBox').length;
          const completedTasks5 = document.querySelectorAll('input[type="checkbox"].sirenosTaskbBox:checked').length;
          const totalTasks6 = document.querySelectorAll('input[type="checkbox"].signalaiTaskbBox').length;
          const completedTasks6 = document.querySelectorAll('input[type="checkbox"].signalaiTaskbBox:checked').length;
          const progress1 = (completedTasks1 / totalTasks1) * 100;
          const progress2 = (completedTasks2 / totalTasks2) * 100;
          const progress3 = (completedTasks3 / totalTasks3) * 100;
          const progress4 = (completedTasks4 / totalTasks4) * 100;
          const progress5 = (completedTasks5 / totalTasks5) * 100;
          const progress6 = (completedTasks6 / totalTasks6) * 100;
          document.getElementById('progressBarFill1').style.width = progress1 + '%';
          document.getElementById('progressBarFill2').style.width = progress2 + '%';
          document.getElementById('progressBarFill3').style.width = progress3 + '%';
          document.getElementById('progressBarFill4').style.width = progress4 + '%';
          document.getElementById('progressBarFill5').style.width = progress5 + '%';
          document.getElementById('progressBarFill6').style.width = progress6 + '%';
      }
 

      // Function to save checkbox state to localStorage
      function saveCheckboxState(taskId, isChecked) {
          localStorage.setItem(taskId, isChecked);
          updateProgressBar();
          
      }

      // Function to load checkbox state from localStorage
      function loadCheckboxState(taskId) {
          const isChecked = localStorage.getItem(taskId) === 'true';
          document.getElementById(taskId).querySelector('input[type="checkbox"]').checked = isChecked;
      }

      // Function to save comments to localStorage
      function saveComment(taskId, comment) {
          let comments = JSON.parse(localStorage.getItem(`${taskId}_comments`)) || [];
          comments.push(comment);
          localStorage.setItem(`${taskId}_comments`, JSON.stringify(comments));
      }

      // Function to load comments from localStorage
      function loadComments(taskId) {
          const comments = JSON.parse(localStorage.getItem(`${taskId}_comments`)) || [];
          const commentsList = document.getElementById(`comments_${taskId}`);
          commentsList.innerHTML = comments.map(comment => `<li>${comment}<button onclick="deleteComment('${taskId}', '${comment}')">Delete</button></li>`).join('');
      }

      // Function to add a comment
      function addComment(taskId) {
          const comment = prompt("Enter your comment:");
          if (comment) {
              saveComment(taskId, comment);
              loadComments(taskId);
          }
      }

      // Function to delete a comment
      function deleteComment(taskId, comment) {
          let comments = JSON.parse(localStorage.getItem(`${taskId}_comments`)) || [];
          comments = comments.filter(c => c !== comment);
          localStorage.setItem(`${taskId}_comments`, JSON.stringify(comments));
          loadComments(taskId);
      }

      // Load checkbox states and comments when the page loads
      window.onload = function () {
          loadCheckboxState('taskID01'); 
          loadComments('taskID01');
          loadCheckboxState('taskID02'); 
          loadComments('taskID02');
         loadCheckboxState('taskID03'); 
          loadComments('taskID03');
       //   loadCheckboxState('taskID04'); 
       //  loadComments('taskID04');
          loadCheckboxState('taskID05'); 
          loadComments('taskID05');
          loadCheckboxState('taskID06'); 
          loadComments('taskID06');
          loadCheckboxState('taskID07'); 
          loadComments('taskID07');
          loadCheckboxState('taskID08'); 
          loadComments('taskID08');
          loadCheckboxState('taskID09'); 
          loadComments('taskID09');
          loadCheckboxState('taskID10'); 
          loadComments('taskID10');
          loadCheckboxState('taskID11'); 
          loadComments('taskID11');
          loadCheckboxState('taskID12'); 
          loadComments('taskID12');
          loadCheckboxState('taskID13'); 
          loadComments('taskID13');
          loadCheckboxState('taskID14'); 
          loadComments('taskID14');
          loadCheckboxState('taskID15'); 
          loadComments('taskID15');
          loadCheckboxState('taskID16'); 
          loadComments('taskID16');
          loadCheckboxState('taskID17'); 
          loadComments('taskID17');
          loadCheckboxState('taskID18'); 
          loadComments('taskID18');
          loadCheckboxState('taskID19'); 
          loadComments('taskID19');
          loadCheckboxState('taskID20'); 
          loadComments('taskID20');
          loadCheckboxState('taskID21'); 
          loadComments('taskID21');
          loadCheckboxState('taskID22'); 
          loadComments('taskID22');
          loadCheckboxState('taskID23'); 
          loadComments('taskID23');
          loadCheckboxState('taskID24'); 
          loadComments('taskID24');
          loadCheckboxState('taskID25'); 
          loadComments('taskID25');
          loadCheckboxState('taskID26'); 
          loadComments('taskID26');
          loadCheckboxState('taskID27'); 
          loadComments('taskID27');
          loadCheckboxState('taskID28'); 
          loadComments('taskID28');
          loadCheckboxState('taskID29'); 
          loadComments('taskID29');
          loadCheckboxState('taskID30'); 
          loadComments('taskID30');
          loadCheckboxState('taskID31'); 
          loadComments('taskID31');
          loadCheckboxState('taskID32'); 
          loadComments('taskID32');
          loadCheckboxState('taskID33'); 
          loadComments('taskID33');
          loadCheckboxState('taskID34'); 
          loadComments('taskID34');
          loadCheckboxState('taskID35'); 
          loadComments('taskID35');
          loadCheckboxState('taskID36'); 
          loadComments('taskID36');
          loadCheckboxState('taskID37'); 
          loadComments('taskID37');
          loadCheckboxState('taskID37'); 
          loadComments('taskID37');
          loadCheckboxState('taskID38'); 
          loadComments('taskID38');
          loadCheckboxState('taskID39'); 
          loadComments('taskID39');
          loadCheckboxState('taskID40'); 
          loadComments('taskID40');
          loadCheckboxState('taskID41'); 
          loadComments('taskID41');
          loadCheckboxState('taskID42'); 
          loadComments('taskID42');
          loadCheckboxState('taskID43'); 
          loadComments('taskID43');



          updateProgressBar();
      };

      // Add event listeners to save checkbox state when it changes
      document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
          checkbox.addEventListener('change', function () {
              saveCheckboxState(this.parentElement.id, this.checked);
          });
      });
