const btnAddTask = document.querySelector(".btn_add_task");
const cadastroTaskScreen = document.querySelector(".tasks_cadastro");

btnAddTask.addEventListener("click", () => {
  cadastroTaskScreen.innerHTML += `<div class="task_cadastro">
  <label class="urgency">Urgência</label>
  <select name="urgency">
    <option class="nao-emergencia" value="nao-emergencia">
      Não Urgente
    </option>
    <option class="pouca-emergencia" value="pouca-emergencia">
      Pouco Urgente
    </option>
    <option class="emergencia" value="emergencia">Urgente</option>
  </select>
  <label class="description" for="description_task">Descrição</label>
  <input type="text" id="description_task" />
</div>`;
});

btnCadastroList.addEventListener("click", () => {
  visibilityScreen(cadastroListScreen);
});

btnCloseCadastroList.addEventListener("click", () => {
  switchScreens(main, cadastroListScreen);
});
