        // Function to calculate progress and update the progress bar
        function updateProgressBar() {
            ////Gaisrinės signalizacijos pultas ir GSS sistema
          const totalTasks1 = document.querySelectorAll('input[type="checkbox"].pultasTaskbBox').length;
          const completedTasks1 = document.querySelectorAll('input[type="checkbox"].pultasTaskbBox:checked').length;
            // taškiniai jutikliai
          const totalTasks2 = document.querySelectorAll('input[type="checkbox"].taskiniaiTaskbBox').length;
          const completedTasks2 = document.querySelectorAll('input[type="checkbox"].taskiniaiTaskbBox:checked').length;
                // Linijiniai jutikliai
          const totalTasks3 = document.querySelectorAll('input[type="checkbox"].linijiniaiTaskbBox').length;
          const completedTasks3 = document.querySelectorAll('input[type="checkbox"].linijiniaiTaskbBox:checked').length;
          // Gaisro pavojaus mygtukai
          const totalTasks4 = document.querySelectorAll('input[type="checkbox"].mygtukaiTaskbBox').length;
          const completedTasks4 = document.querySelectorAll('input[type="checkbox"].mygtukaiTaskbBox:checked').length;
          // Sirenos
          const totalTasks5 = document.querySelectorAll('input[type="checkbox"].sirenosTaskbBox').length;
          const completedTasks5 = document.querySelectorAll('input[type="checkbox"].sirenosTaskbBox:checked').length;
          // signalia ir automatika
          const totalTasks6 = document.querySelectorAll('input[type="checkbox"].signalaiTaskbBox').length;
          const completedTasks6 = document.querySelectorAll('input[type="checkbox"].signalaiTaskbBox:checked').length;
          //Kabeliavimas ir autimatka
          const totalTasks7 = document.querySelectorAll('input[type="checkbox"].kabeliaiTaskbBox').length;
          const completedTasks7 = document.querySelectorAll('input[type="checkbox"].kabeliaiTaskbBox:checked').length
           //aIŠkinamasis raštas
          const totalTasks8 = document.querySelectorAll('input[type="checkbox"].rastasTaskbBox').length;
          const completedTasks8 = document.querySelectorAll('input[type="checkbox"].rastasTaskbBox:checked').length
          //Techninės specfikacijos
          const totalTasks9 = document.querySelectorAll('input[type="checkbox"]._TS_TaskbBox').length;
          const completedTasks9 = document.querySelectorAll('input[type="checkbox"]._TS_TaskbBox:checked').length
                    //Sąnaudų žiniaraštis
          const totalTasks10 = document.querySelectorAll('input[type="checkbox"]._SZ_TaskbBox').length;
          const completedTasks10 = document.querySelectorAll('input[type="checkbox"]._SZ_TaskbBox:checked').length
                    //Brėžiniai 
         const totalTasks11 = document.querySelectorAll('input[type="checkbox"]._BR_TaskbBox').length;
         const completedTasks11 = document.querySelectorAll('input[type="checkbox"]._BR_TaskbBox:checked').length

         const totalTasks12 = document.querySelectorAll('input[type="checkbox"].neigalijuIrangaTaskbBox').length;
         const completedTasks12 = document.querySelectorAll('input[type="checkbox"].neigalijuIrangaTaskbBox:checked').length

          const progress1 = (completedTasks1 / totalTasks1) * 100;
          const progress2 = (completedTasks2 / totalTasks2) * 100;
          const progress3 = (completedTasks3 / totalTasks3) * 100;
          const progress4 = (completedTasks4 / totalTasks4) * 100;
          const progress5 = (completedTasks5 / totalTasks5) * 100;
          const progress6 = (completedTasks6 / totalTasks6) * 100;
          const progress7 = (completedTasks7 / totalTasks7) * 100;
          const progress8 = (completedTasks8 / totalTasks8) * 100;
          const progress9 = (completedTasks9 / totalTasks9) * 100;
          const progress10 = (completedTasks10 / totalTasks10) * 100;
          const progress11 = (completedTasks11 / totalTasks11) * 100;
          const progress12 = (completedTasks12 / totalTasks12) * 100;

          document.getElementById('progressBarFill1').style.width = progress1 + '%';
          document.getElementById('progressBarFill2').style.width = progress2 + '%';
          document.getElementById('progressBarFill3').style.width = progress3 + '%';
          document.getElementById('progressBarFill4').style.width = progress4 + '%';
          document.getElementById('progressBarFill5').style.width = progress5 + '%';
          document.getElementById('progressBarFill6').style.width = progress6 + '%';
          document.getElementById('progressBarFill7').style.width = progress7 + '%';
          document.getElementById('progressBarFill8').style.width = progress8 + '%';
          document.getElementById('progressBarFill9').style.width = progress9 + '%';
          document.getElementById('progressBarFill10').style.width = progress10 + '%';
          document.getElementById('progressBarFill11').style.width = progress11 + '%';

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


      window.onload = function() {
        for (var i = 1; i <= 95; i++) {
            var taskId = 'taskID' + (i < 10 ? '0' + i : i); // Ensures the task ID is always two digits
            loadCheckboxState(taskId);
            loadComments(taskId);
        }
        updateProgressBar();
    };

      // Add event listeners to save checkbox state when it changes
      document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
          checkbox.addEventListener('change', function () {
              saveCheckboxState(this.parentElement.id, this.checked);
          });
      });