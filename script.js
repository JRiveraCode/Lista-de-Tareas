document.addEventListener('DOMContentLoaded', function() {
  const addBtn = document.getElementById('add-btn');
  const newTaskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');
  const deleteCompletedBtn = document.getElementById('delete-completed-btn');

  addBtn.addEventListener('click', function() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      li.textContent = taskText;
      li.addEventListener('click', function() {
        li.classList.toggle('completed');
      });
      taskList.appendChild(li);
      newTaskInput.value = '';
    }
  });

  newTaskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addBtn.click();
    }
  });

  deleteCompletedBtn.addEventListener('click', function() {
    const completedTasks = document.querySelectorAll('#task-list li.completed');
    completedTasks.forEach(function(task) {
      task.remove();
    });
  });
});