//изменение картинки по клику
const slideImg = document.querySelector('.section-two-span3-img')
const btnNextSlideImg = document.querySelector('.section-two-btn-next')
const btnLastSlideImg = document.querySelector('.section-two-btn-last')

const srcImg = [
    {
        src: 'image/auto-slide-sect2.png',
        nameImg: 'auto-logo-slide-sect2'
    },
    {
        src: 'image/sea-slide-sect2.png',
        nameImg: 'sea-logo-slide-sect2'
    },
    {
        src: 'image/train-slide-sect2.png',
        nameImg: 'train-logo-slide-sect2'
    },
    {
        src: 'image/airplane-slide-sect2.png',
        nameImg: 'airplane-logo-slide-sect2'
    }
]

const sld = elm => {
    slideImg.src = elm.src
    slideImg.alt = elm.nameImg
}
sld(srcImg[0])

let count = 0

btnNextSlideImg.addEventListener('click', sliderNext)

function sliderNext() {
    if (count === srcImg.length - 1) {
        count = 0
    } else {
        count += 1
    }
    sld(srcImg[count])
}

btnLastSlideImg.addEventListener('click', sliderLast)

function sliderLast() {
    if (count === 0) {
        count = srcImg.length - 1
    } else {
        count -= 1
    }
    sld(srcImg[count])
}

//модалка
const modalEl = document.querySelector(".modal");
const btnSubject = document.querySelector('.section-two-btn')

btnSubject.addEventListener('click', modalWindowForm)
function modalWindowForm() {
    modalEl.innerHTML = `
        <div class="modal-inner">
            <div class="btnclosemodal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    viewBox="0 0 16 16">
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z">
                    </path>
                </svg>
            </div>
            <div class="modal-info">
                <h2 class="modal-title">Need some help?</h2>
                <p class="modal-text">Book a callback and we'll call back for a consultation in 2 minutes</p>
            </div>
            <form id="inputApll">
                <input onkeypress="return inputCorrection()" onpaste="return false" class="inputtext" type="text" name="number" id="input-number" placeholder="Enter your phone number">
                <button class="btnmessage">Waiting for a call</button>
            </form>
        </div>
    `
    modalEl.classList.add("modal--show");
    document.body.classList.add("stop-scrolling");
    document.querySelector('.btnclosemodal').addEventListener('click', closeModal)

    const btnMessageForm = document.querySelector('.btnmessage')
    const inputForm = document.querySelector('.inputtext')
    function disabledForm() {
        if (inputForm.value.length > 0) {
            btnMessageForm.disabled = false
        } else {
            btnMessageForm.disabled = true
        }
    }
    disabledForm()

    inputForm.addEventListener('input', disabledForm)
}

function inputCorrection() {
    return !isNaN(event.key)
}



function closeModal() {
    modalEl.classList.remove("modal--show");
    document.body.classList.remove("stop-scrolling");
}

window.addEventListener("click", (e) => {
    if (e.target === modalEl) {
        closeModal();
    }
})

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
        closeModal();
    }
})

//якорь
const sect_servicec = document.querySelector(".section-three")
const scroll_services = document.querySelector(".scroll-services")
const scroll_about_company = document.querySelector(".scroll-about-company")
const sect_about = document.querySelector('.section-four')

const footer_logo = document.querySelector('.footer-logo')
const header = document.querySelector('header')

scroll_services.addEventListener('click', () => scrolling(sect_servicec))
scroll_about_company.addEventListener('click', () => scrolling(sect_about))
footer_logo.addEventListener('click', () => scrolling(header))

function scrolling(elm) {
    const topPosition = elm.getBoundingClientRect().top + window.pageYOffset

    window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
    });
}