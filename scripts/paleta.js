const colorsFixed = {
  cores: [
    {
      id: 0,
      nome: "Verde floresta",
      hex: "#173F13",
      rgb: {
        red: 23,
        green: 63,
        blue: 19,
      },
    },
    {
      id: 1,
      nome: "Pink",
      hex: "#FFC0CB",
      rgb: {
        red: 255,
        green: 192,
        blue: 203,
      },
    },
    {
      id: 2,
      nome: "Bordô",
      hex: "#800000",
      rgb: {
        red: 128,
        green: 0,
        blue: 0,
      },
    },
    {
      id: 3,
      nome: "Roxo Escuro",
      hex: "#660066",
      rgb: {
        red: 102,
        green: 0,
        blue: 102,
      },
    },
    {
      id: 4,
      nome: "Ciano",
      hex: "#00FFFF",
      rgb: {
        red: 0,
        green: 255,
        blue: 255,
      },
    },
    {
      id: 5,
      nome: "Amarelo Areia",
      hex: "#D9D972",
      rgb: {
        red: 217,
        green: 217,
        blue: 114,
      },
    },
    {
      id: 6,
      nome: "Verde Musgo",
      hex: "#1F4111",
      rgb: {
        red: 31,
        green: 65,
        blue: 17,
      },
    },
    {
      id: 7,
      nome: "Cinza Claro",
      hex: "#BDBDBD",
      rgb: {
        red: 189,
        green: 189,
        blue: 189,
      },
    },
  ],
};

let cores = colorsFixed.cores;
let currentColorId = 0;
const colors = document.querySelector(".colors");
const btnAdd = document.querySelector(".add_color");
const btnEdit = document.querySelector(".color_edit");
const btnDel = document.querySelector(".color_delete");
const btnSI = document.querySelector(".suggestion_color");
const btnSendInfosSI = document.querySelector(".btn_send_infos");
const containerForms = document.querySelector(".add_color_container");
const addForm = document.querySelector("#add_color_form");
const infoColor = document.querySelector(".info_content");
const editForm = document.querySelector("#edit_color_form");
const btnCloseAdd = document.querySelector(".btn_close_add_color");
const btnCloseUpdate = document.querySelector(".btn_close_edit_color");
const btnCloseSug = document.querySelector(".btn_close_suggestion_color");
const SIForm = document.querySelector("#suggestion_form");
const SIContent = document.querySelector(".SI_content");

infoColor.innerHTML = `
          <div class="color_demo max" style="background:${
            cores[currentColorId].hex
          }"></div>
          <h2 class="info_color_name">${cores[currentColorId].nome}</h2>
          <div class="info_values">
            <p>HEX: <span class="info_color_hex_val">${
              cores[currentColorId].hex
            }</span></p>
            <p>RGB: <span class="info_color_rgb_val">(${hexToRgb(
              cores[currentColorId].hex
            )})</span></p>
          </div>
    `;

btnAdd.addEventListener("click", (e) => {
  containerForms.style.display = "flex";
  addForm.style.display = "flex";
});

btnCloseAdd.addEventListener("click", (e) => {
  containerForms.style.display = "none";
  addForm.style.display = "none";
});

btnEdit.addEventListener("click", (e) => {
  containerForms.style.display = "flex";
  editForm.style.display = "flex";
  let colorName = document.querySelector("#name_color_edit");
  let colorVal = document.querySelector("#value_color_edit");
  colorName.value = cores[currentColorId].nome;
  colorVal.value = cores[currentColorId].hex;
});

btnCloseUpdate.addEventListener("click", (e) => {
  containerForms.style.display = "none";
  editForm.style.display = "none";
});

btnSI.addEventListener("click", () => {
  containerForms.style.display = "flex";
  SIForm.style.display = "flex";
});

btnCloseSug.addEventListener("click", () => {
  window.location.reload();
});

btnSendInfosSI.addEventListener("click", () => {
  SIContent.innerHTML = `
  <label>Baseado nas suas respostas eu sugiro essa cor:</label>
  <input
  type="color"
  name="value_color_suggestion"
  id="value_color_suggestion"
  disabled
  />
  <label class="suggestion_feedback">O que achou?</label>
  <div class="suggestion_btns">
      <button class="btn_suggestion_color" type="submit">Salvar</button>
      <button class="btn_nosuggestion_color" type="button">
        Não gostei
      </button>
  </div>
  `;
});

//Monta box com info da cor ativa
colors.addEventListener("click", (e) => {
  let currentColor = document.getElementById(`${currentColorId}`);
  currentColor.classList.remove("active");
  let elId = e.target.id[0];
  if (elId >= 0) {
    let color = document.getElementById(`${elId}`);
    color.classList.add("active");
    currentColorId = elId;
    infoColor.innerHTML = `
    <div class="color_demo max" style="background:${
      cores[currentColorId].hex
    }"></div>
    <h2 class="info_color_name">${cores[currentColorId].nome}</h2>
    <div class="info_values">
      <p>HEX: <span class="info_color_hex_val">${
        cores[currentColorId].hex
      }</span></p>
      <p>RGB: <span class="info_color_rgb_val">(${hexToRgb(
        cores[currentColorId].hex
      )})</span></p>
    </div>
            `;
  }
});

function hexToRgb(hex) {
  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `${r}, ${g}, ${b}`;
}

function setColorsFixed() {
  for (let i = 0; i < cores.length; i++) {
    if (i == 0) {
      colors.innerHTML += `
              <a href="#" class="color active" id="${cores[i].id}">
                <div class="color_demo min" id="${cores[i].id} demo" style="background:${cores[i].hex};"></div>
                <span class="color_hex" id="${cores[i].id} val">${cores[i].hex}</span>
              </a>
            `;
    } else {
      colors.innerHTML += `
              <a href="#" class="color" id="${cores[i].id}">
                <div class="color_demo min" id="${cores[i].id} demo" style="background:${cores[i].hex};"></div>
                <span class="color_hex" id="${cores[i].id} val">${cores[i].hex}</span>
              </a>
            `;
    }
  }
}

document.body.onload = setColorsFixed;
