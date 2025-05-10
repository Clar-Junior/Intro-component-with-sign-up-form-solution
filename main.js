const fName = document.getElementById("inFirstName")
const lName = document.getElementById("inLastName")
const inEmail = document.getElementById("inMail")
const inPassword = document.getElementById("inPassword")
const btnSubmit = document.getElementById("btnSubmit")

btnSubmit.addEventListener('click', () => {
    const firstName = fName.value
    const lastName = lName.value
    const email = inEmail.value
    const password = inPassword.value

    if (!firstName) {
        const fNameAlert = document.getElementById("fNameAlert")
        if (fNameAlert.childElementCount == 0) {
            const paragrafo = document.createElement("p")
            paragrafo.classList.add('text-red-500', 'text-end', 'py-2', 'text-[0.8rem]', 'italic')
            paragrafo.textContent = "First Name cannot be empty"
            fName.textContent = ""
            fName.placeholder = ""
            fName.classList.add('border-red-500', 'border-1', 'bg-[url(/images/icon-error.svg)]', 'bg-no-repeat', 'bg-position-[center_right_1.5rem]')
            fNameAlert.append(paragrafo)
        }
    }
    if (!lastName) {
        const lNameAlert = document.getElementById("lNameAlert")
        if (lNameAlert.childElementCount == 0) {
            const paragrafo = document.createElement("p")
            paragrafo.classList.add('text-red-500', 'text-end', 'py-2', 'text-[0.8rem]', 'italic')
            paragrafo.textContent = "Last Name cannot be empty"
            lName.textContent = ""
            lName.placeholder = ""
            lName.classList.add('border-red-500', 'border-1', 'bg-[url(/images/icon-error.svg)]', 'bg-no-repeat', 'bg-position-[center_right_1.5rem]')
            lNameAlert.append(paragrafo)
        }
    }
    if (!validarEmail(email)) {
        const emailAlert = document.getElementById("emailAlert")
        if (emailAlert.childElementCount == 0) {
            const paragrafo = document.createElement("p")
            paragrafo.classList.add('text-red-500', 'text-end', 'py-2', 'text-[0.8rem]', 'italic')
            paragrafo.textContent = "Looks like this is not an email"
            inEmail.textContent = ""
            inEmail.placeholder = "email@example/com"
            inEmail.classList.remove('placeholder:text-zinc-500')
            inEmail.classList.add('border-red-500', 'border-1', 'placeholder:text-red-500')
            emailAlert.append(paragrafo)
        }
    }
    if (!password) {
        const passwordAlert = document.getElementById("passwordAlert")
        if (passwordAlert.childElementCount == 0) {
            const paragrafo = document.createElement("p")
            paragrafo.classList.add('text-red-500', 'text-end', 'py-2', 'text-[0.8rem]', 'italic')
            paragrafo.textContent = "Password cannot be empty"
            inPassword.textContent = ""
            inPassword.placeholder = ""
            inPassword.classList.add('border-red-500', 'border-1', 'bg-[url(/images/icon-error.svg)]', 'bg-no-repeat', 'bg-position-[center_right_1.5rem]')
            passwordAlert.append(paragrafo)
        }
    }
})

// validacao de mail
function validarEmail(email) {
    const expressaoRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return expressaoRegular.test(email)
}