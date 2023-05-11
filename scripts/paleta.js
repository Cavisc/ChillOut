const dbMock = {
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

var current;

function clicarCores() {
  let cor = document.getElementsByClassName("cor");

  for (let i = 0; i < cor.length; i++) {
    cor[i].addEventListener(
      "click",
      (cor_click = (event) => {
        if (!event.target.classList[0]) {
          const modal = document.querySelector("#menuNovaCor");
          const title = document.querySelector(".menuTitle");

          fechaForm();

          modal.style.display = "block";

          return;
        }

        let caixaPreview = document.getElementById("selectcolor");
        let nome = document.getElementById("corNome");
        let hex = document.getElementById("corHex");
        let rgb = document.getElementById("corRGB");

        current = dbMock.cores[i].id;

        caixaPreview.style.background = dbMock.cores[i].hex;
        caixaPreview.style.boxShadow = "inset 0 0 10px #292928";
        nome.innerText = dbMock.cores[i].nome;
        hex.innerText = `HEX: ${dbMock.cores[i].hex}`;
        rgb.innerText = `RGB: (${dbMock.cores[i].rgb.red},${dbMock.cores[i].rgb.green},${dbMock.cores[i].rgb.blue})`;

        exibirBotoes();
        exibirCores();
        clicarCores();
      })
    );
  }
}

function exibirCores() {
  let botao = `<div id="corbut" class="cor adccor">
    <span>+</span>
</div>`;
  let str = "";
  for (let i = 0; i < dbMock.cores.length; i++) {
    let cor = dbMock.cores[i];
    str += `<div class="cor" style="background: ${dbMock.cores[i].hex}"></div>\n`;
  }
  document.querySelector("#gridcores").innerHTML = str + botao;
}

function exibirBotoes() {
  const botoes = document.querySelectorAll(".botao");
  botoes[0].style.display = "inline-block";
  botoes[1].style.display = "inline-block";
}
function esconderBotoes() {
  const botoes = document.querySelectorAll(".botao");
  botoes[0].style.display = "none";
  botoes[1].style.display = "none";
}

const modal = document.querySelector("#menuNovaCor");

function rgbHex(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function addCor(nome, hex) {
  var rgb = rgbHex(hex);

  var novaCor = {
    id: dbMock.cores.length + 1,
    nome: nome,
    hex: hex,
    rgb: {
      red: rgb.r,
      green: rgb.g,
      blue: rgb.b,
    },
  };
  dbMock.cores.push(novaCor);
  localStorage.setItem("cores", JSON.stringify(dbMock.cores));
}

function removeCor(id) {
  let item = dbMock.cores.findIndex((obj) => {
    return obj.id == id;
  });
  dbMock.cores.splice(item, 1);
  localStorage.setItem("cores", JSON.stringify(dbMock.cores));

  exibirCores();
  clicarCores();
}

function editCor(id, nome, hex) {
  let item = dbMock.cores.findIndex((obj) => {
    return obj.id == id;
  });

  var rgb = rgbHex(hex);

  dbMock.cores[item].nome = nome;
  dbMock.cores[item].hex = hex;
  dbMock.cores[item].rgb.blue = rgb.b;
  dbMock.cores[item].rgb.green = rgb.g;
  dbMock.cores[item].rgb.red = rgb.r;

  localStorage.setItem("cores", JSON.stringify(dbMock.cores));
}

function reiniciarSeleção() {
  let caixaPreview = document.getElementById("selectcolor");
  let nome = document.getElementById("corNome");
  let hex = document.getElementById("corHex");
  let rgb = document.getElementById("corRGB");

  caixaPreview.style.background = "none";
  caixaPreview.style.boxShadow = "none";
  nome.innerText = "Selecione Cor";
  hex.innerText = `HEX`;
  rgb.innerText = `RGB`;
  esconderBotoes();
}

function fechaForm() {
  const modal = document.querySelector("#menuNovaCor");
  const nomeForm = document.querySelector(".nomeCor");
  const corForm = document.querySelector(".corCor");
  const title = document.querySelector(".menuTitle");

  modal.style.display = "none";
  nomeForm.value = "";
  corForm.value = "#ffffff";
  title.innerText = "Nova Cor";
  formType = 0;
}

window.onload = function () {
  var formType = 0;
  let db = localStorage;
  if (localStorage.getItem("cores") == null) {
    localStorage.setItem("cores", JSON.stringify(dbMock.cores));
    db = JSON.parse(localStorage.getItem("cores"));
  } else {
    db = JSON.parse(localStorage.getItem("cores"));
    dbMock.cores = db;
  }
  exibirCores();
  clicarCores();

  const modal = document.querySelector("#menuNovaCor");
  const nomeForm = document.querySelector(".nomeCor");
  const corForm = document.querySelector(".corCor");
  const enviarForm = document.querySelector(".buttonForm");
  const deleteBut = document.querySelector("#remover");
  const editBut = document.querySelector("#editar");
  const title = document.querySelector(".menuTitle");

  modal.addEventListener("click", (event) => {
    const clickClass = event.target.classList[0];
    const clickId = event.target.id;
    if (clickClass == "menuFecha" || clickId == "menuNovaCor") {
      fechaForm();
    } else if (clickClass == "buttonForm") {
      if (formType == 0) {
        modal.style.display = "none";
        addCor(nomeForm.value, corForm.value);
        exibirCores();
        clicarCores();
      } else if (formType == 1) {
        modal.style.display = "none";
        editCor(current, nomeForm.value, corForm.value);
        exibirCores();
        clicarCores();
        formType = 0;
        reiniciarSeleção();
      }
    }
  });

  deleteBut.addEventListener("click", () => {
    if (!current) return;
    removeCor(current);

    reiniciarSeleção();
  });

  editBut.addEventListener("click", () => {
    let item = dbMock.cores.findIndex((obj) => {
      return obj.id == current;
    });

    formType = 1;

    const modal = document.querySelector("#menuNovaCor");

    modal.style.display = "block";

    title.innerText = "Editar";

    nomeForm.value = dbMock.cores[item].nome;
    corForm.value = dbMock.cores[item].hex;
  });
};
