// @ts-check

const encodeGetParams = p => 
  Object.entries(p).map(kv => kv.map(encodeURIComponent).join("=")).join("&");

async function flagCheck(flag, chal){
    if (!flag.startsWith("flag{")){
        return false;
    }
    const url = new URL("https://flag-checker.noahkaboa.workers.dev")
    url.searchParams.set("chal", chal)
    url.searchParams.set("flag", flag)


    const flag_check = await fetch(url).then(r => r.text());

    return flag_check == "true"
}

let btn = document.querySelectorAll("button.modal-button");
/** @type {NodeListOf<HTMLDivElement>} */
let modals = document.querySelectorAll(".modal");
let spans = document.getElementsByClassName("close");
let flag_btns = document.querySelectorAll("button.flag-btn");
let hint_btns = document.querySelectorAll("button.hint-button");
let hints = document.querySelectorAll(".hint");

let wrong = document.querySelector(".wrong-modal");
let wrong_closer = document.querySelector(".close-wrong");
let right = document.querySelector(".right-modal");
let right_closer = document.querySelector(".close-right");

right_closer.onclick = function () {
    right.style.display = "none";
}
wrong_closer.onclick = function () {
    wrong.style.display = "none";
}
for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', (e) => {
        e.preventDefault();
        const href = btn[i].getAttribute("href");
        if (!href) return
        /** @type {HTMLDivElement | null} */
        const modal = document.querySelector(href);
        if (!modal) return
        modal.style.display = "block";
    })
}

for (let i = 0; i < spans.length; i++){
    spans[i].addEventListener('click', () => {
        for (let index in modals) {
            if (typeof modals[index].style !== "undefined") modals[index].style.display = "none";
        }
    })
}
for (const btn of flag_btns){
    btn.addEventListener('click', async (e) => {
        e.preventDefault();
        let chal = btn.id;
        if (!btn.parentElement) return
        /** @type {HTMLInputElement | null} */
        let flag_txt = btn.parentElement.querySelector('.flag')
        if (!flag_txt) return
        if (flag_txt.value) {
            const flag_submission = flag_txt.value;
            const isFlag = await flagCheck(flag_submission, chal)
            if (isFlag) {
                right.style.display = "block";
                for (let index in modals) {
                    if (typeof modals[index].style !== "undefined") modals[index].style.display = "none";
                }
                // btn.parentNode.parentNode.parentNode.firstElementChild.style.backgroundColor = "#6bb57f"
            } else {
                wrong.style.display = "block";
                //other stuff
            }
        }  
    })
}
window.onclick = function(event) {
    if (event.target.classList.contains('challenge_modal')) {
        for (let index in modals) {
            if (typeof modals[index].style !== "undefined") modals[index].style.display="none";
        }
    }
}

for (let i = 0; i < hint_btns.length; i++){
    hint_btns[i].addEventListener('click', (e) => {
        e.preventDefault();
        let this_btn = hint_btns[i]
        // @ts-ignore
        const hint = document.querySelector(e.target.getAttribute("href"));
        if (hint.style.display !== "block") {
            hints.forEach(h => {
                h.style.display = "none";
            })
            // this_btn.style.background-color = "#00A398"
            hint.style.display = "block";
        } else {
            hints.forEach(h => {
                h.style.display = "none";
            })
            hint.style.display = "none";
            // this_btn.style.background-color = "#00A398"
        }
    })
}