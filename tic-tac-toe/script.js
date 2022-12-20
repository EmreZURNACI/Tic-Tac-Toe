let refresh = document.querySelector(".refreshButton");
let sayi = 0;
window.addEventListener("load", () => {
    window.alert("Now We Start With X");
})
function play(id) {
    sayi++;
    let x = `fa-solid fa-xmark`;
    let o = `fa-solid fa-circle`;
    let container = document.querySelector(".container");
    let conContents = document.querySelectorAll(".card p")
    let contents1 = document.querySelectorAll(".card p i");
    if (contents1[id].classList == "") {
        if (sayi % 2 == 1) {
            container.classList.remove("cursorX");
            container.classList.add("cursorCircle");
            contents1[id].classList = x;
        }
        else if (sayi % 2 == 0) {
            container.classList.add("cursorX");
            container.classList.remove("cursorCircle");
            contents1[id].classList = o;
        }
        conContents[id].classList.add("eventNone");
        contents1[id].classList.add("eventsNone");
    }
    WinTheGame();
}
function WinTheGame() {
    let cards = document.querySelectorAll(".card");
    let newContents = document.querySelectorAll(".card p i[class]");
    let contents = document.querySelectorAll(".card p i");
    let yatay2 =
        `
    <div class="yatayContainer2 alignment">
        <div class="düzçizgi"></div>
    </div>
    `;
    let dikey2 =
        `
    <div class="dikeyContainer alignment">
        <div class="düzçizgi"></div>
    </div>
    `;
    let sağCapraz =
        `
    <div class="SagçaprazContainer alignment">
        <div class="düzçizgi"></div>
    </div>
    `;
    let solçapraz =
        `
    <div class="SolçaprazContainer alignment">
        <div class="düzçizgi"></div>
    </div>
    `;
    if ((contents[0].classList.contains("fa-xmark")) && (contents[1].classList.contains("fa-xmark")) && (contents[2].classList.contains("fa-xmark"))) {
        cards[1].insertAdjacentHTML("beforeend", yatay2);
        WonX();
    }
    else if ((contents[3].classList.contains("fa-xmark")) && (contents[4].classList.contains("fa-xmark")) && (contents[5].classList.contains("fa-xmark"))) {
        cards[4].insertAdjacentHTML("beforeend", yatay2);
        WonX();
    }
    else if ((contents[6].classList.contains("fa-xmark")) && (contents[7].classList.contains("fa-xmark")) && (contents[8].classList.contains("fa-xmark"))) {
        cards[7].insertAdjacentHTML("beforeend", yatay2);
        WonX();
    }
    else if ((contents[0].classList.contains("fa-xmark")) && (contents[3].classList.contains("fa-xmark")) && (contents[6].classList.contains("fa-xmark"))) {
        cards[3].insertAdjacentHTML("beforeend", dikey2); WonX();
    }
    else if ((contents[1].classList.contains("fa-xmark")) && (contents[4].classList.contains("fa-xmark")) && (contents[7].classList.contains("fa-xmark"))) {
        cards[4].insertAdjacentHTML("beforeend", dikey2); WonX();
    }
    else if ((contents[2].classList.contains("fa-xmark")) && (contents[5].classList.contains("fa-xmark")) && (contents[8].classList.contains("fa-xmark"))) {
        cards[5].insertAdjacentHTML("beforeend", dikey2); WonX();
    }
    else if ((contents[0].classList.contains("fa-xmark")) && (contents[4].classList.contains("fa-xmark")) && (contents[8].classList.contains("fa-xmark"))) {
        cards[4].insertAdjacentHTML("beforeend", solçapraz); WonX();
    }
    else if ((contents[2].classList.contains("fa-xmark")) && (contents[4].classList.contains("fa-xmark")) && (contents[6].classList.contains("fa-xmark"))) {
        cards[4].insertAdjacentHTML("beforeend", sağCapraz); WonX();
    }
    else if ((contents[0].classList.contains("fa-circle")) && (contents[1].classList.contains("fa-circle")) && (contents[2].classList.contains("fa-circle"))) {
        cards[1].insertAdjacentHTML("beforeend", yatay2);
        WonCircle();
    }
    else if ((contents[3].classList.contains("fa-circle")) && (contents[4].classList.contains("fa-circle")) && (contents[5].classList.contains("fa-circle"))) {
        cards[4].insertAdjacentHTML("beforeend", yatay2);
        WonCircle();
    }
    else if ((contents[6].classList.contains("fa-circle")) && (contents[7].classList.contains("fa-circle")) && (contents[8].classList.contains("fa-circle"))) {
        cards[7].insertAdjacentHTML("beforeend", yatay2);
        WonCircle();
    }
    else if ((contents[0].classList.contains("fa-circle")) && (contents[3].classList.contains("fa-circle")) && (contents[6].classList.contains("fa-circle"))) {
        cards[3].insertAdjacentHTML("beforeend", dikey2); WonCircle();
    }
    else if ((contents[1].classList.contains("fa-circle")) && (contents[4].classList.contains("fa-circle")) && (contents[7].classList.contains("fa-circle"))) {
        cards[4].insertAdjacentHTML("beforeend", dikey2); WonCircle();
    }
    else if ((contents[2].classList.contains("fa-circle")) && (contents[5].classList.contains("fa-circle")) && (contents[8].classList.contains("fa-circle"))) {
        cards[5].insertAdjacentHTML("beforeend", dikey2); WonCircle();
    }
    else if ((contents[0].classList.contains("fa-circle")) && (contents[4].classList.contains("fa-circle")) && (contents[8].classList.contains("fa-circle"))) {
        cards[4].insertAdjacentHTML("beforeend", solçapraz); WonCircle();
    }
    else if ((contents[2].classList.contains("fa-circle")) && (contents[4].classList.contains("fa-circle")) && (contents[6].classList.contains("fa-circle"))) {
        cards[4].insertAdjacentHTML("beforeend", sağCapraz); WonCircle();
    }
    else if (newContents.length == 9) {
        window.alert("Draw");
        document.querySelector(".container").classList.add("eventsNone");
        refresh.classList.add("block");
    }
}
function forRefresh() {
    location.reload();
}
function WonX() {
    window.alert("X won");
    document.querySelector(".container").classList.add("eventsNone");
    refresh.classList.add("block");
}
function WonCircle() {
    window.alert("O won");
    document.querySelector(".container").classList.add("eventsNone");
    refresh.classList.add("block");
}