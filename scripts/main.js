const btnLogin = document.querySelector(".btn_login");
const btnCloseLogin = document.querySelector(".close_login");
const btnCloseCadastro = document.querySelector(".close_cadastro");
const btnCloseCadastroList = document.querySelector(".btn_close_list_cadastro");
const btnCadastroList = document.querySelector(".btn_add_list");
const linkCadastro = document.querySelector(".link_cadastro");
const main = document.querySelector("main");
const loginScreen = document.querySelector(".login");
const cadastroScreen = document.querySelector(".cadastro");
const cadastroListScreen = document.querySelector(".list_cadastro");

btnLogin.addEventListener("click", () => {
  switchScreens(loginScreen, main);
});

linkCadastro.addEventListener("click", () => {
  switchScreens(cadastroScreen, loginScreen);
});

btnCloseCadastro.addEventListener("click", () => {
  switchScreens(loginScreen, cadastroScreen);
});

btnCloseLogin.addEventListener("click", () => {
  switchScreens(main, loginScreen);
});

function switchScreens(screenVisible, screenHidden) {
  screenHidden.style.display = "none";
  screenVisible.style.display = "flex";
}

function visibilityScreen(screenVisible) {
  screenVisible.style.display = "flex";
}

function addUsernameToPath(form_name, base_url) {
  var your_form = document.getElementById(form_name);
  var username = your_form.elements.namedItem("username").value;
  action_src = base_url + username;
  your_form.action = action_src;
}
