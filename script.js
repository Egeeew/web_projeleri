let calisiyor = 0;
let sonuc = "0";
let oncekiOp = null;
let islem = null;

const ekran = document.querySelector(".sonuc");

function tikla(deger) {
  if (isNaN(deger)) {
    islemTut(deger);
  } else {
    sayiTut(deger);
  }
  ekran.innerText = sonuc;
}

function islemTut(islem) {
  switch (islem) {
    case "C":
      sonuc = "0";
      calisiyor = 0;
      oncekiOp = null;
      islem = null;
      break;
    case "=":
      if (oncekiOp === null) {
        return;
      }
      mat(oncekiOp);
      oncekiOp = null;
      sonuc = calisiyor.toString();
      calisiyor = 0;
      islem = null;
      break;
    case "←":
      if (sonuc.length === 1) {
        sonuc = "0";
      } else {
        sonuc = sonuc.toString().substring(0, sonuc.length - 1);
      }
      break;
    case "+":
    case "-":
    case "x":
    case "÷":
      mat(islem);
      break;
  }
}

function mat(islem) {
  if (sonuc === "0") {
    return;
  }
  const intSonuc = parseInt(sonuc);
  if (calisiyor === 0) {
    calisiyor = intSonuc;
  } else {
    islemler(intSonuc, islem);
  }
  oncekiOp = islem;
}

function islemler(intSonuc, islem){
    if (islem === "+") {
        calisiyor += intSonuc;
    } else if (islem === "-") {
        calisiyor -= intSonuc;
    } else if (islem === "x") {
        calisiyor *= intSonuc;
    } else if (islem === "÷") {
        calisiyor /= intSonuc;
        calisiyor = calisiyor.toFixed(2);
    }
}


function sayiTut(sayi) {
    if (sonuc === "0") {
      sonuc = sayi;
    } else {
      sonuc = sonuc.slice() + sayi;
    }
  }
  

function ic_kisim() {
  document.querySelector(".düğmeler").addEventListener("click", function(event) {
    tikla(event.target.innerText);
  });
}

ic_kisim();