const input = document.querySelector(".form-input");
const submit = document.querySelector(".form-submit");
const task = document.querySelector(".task");

submit.addEventListener("click", () => {
   const value = input.value;
   
   if (!value) return alert("empty");
   
   task.insertAdjacentHTML("afterbegin", `
        <div class="task-item">
            <input type="checkbox" class="task-checkbox">
            <span class="task-message">${value}</span>
        </div>
   `);
});
