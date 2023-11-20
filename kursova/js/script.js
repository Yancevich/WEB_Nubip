
const swiper = new Swiper('.slider-materials', {
	// Optional parameters
	loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},

	grabCursor: true,
});


window.addEventListener('scroll', function () {
	scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
});


var modal = document.getElementById('myModal');


var btn = document.getElementById("btn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
	document.body.style.overflow = "hidden";
	modal.style.display = "block";
}

span.onclick = function () {
	modal.style.display = "none";
	document.body.style.overflow = "auto";
}

window.onclick = function (event) {
	if (event.target == modal) {
		document.body.style.overflow = "auto";
		modal.style.display = "none";
	}
}

const TOKEN = "6936819596:AAHaz4yp8eAHoBCcbgqMk8NLUoYRul0_8zk";
const CHAT_ID = "-1002106268852";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let contactMethods = Array.from(this.querySelectorAll('input[name="contactMethod"]:checked'))
        .map(checkbox => checkbox.value)
        .join(', ');

    if (contactMethods.length === 0) {
        alert('Будь ласка, оберіть хоча б один варіант для зв\'язку.');
        return;
    }

    let massage = `<b>Заявка</b>\n`
    massage += `<b>Ім'я: </b> ${this.firstName.value}\n`;
    massage += `<b>Прізвище: </b> ${this.lastName.value}\n`;
    massage += `<b>Тип: </b> ${this.type.value}\n`;
    massage += `<b>Номер телефону: </b> ${this.phone.value}\n`;
    massage += `<b>Пошта: </b> ${this.email.value}\n`;
    massage += `<b>Як зв'язатись: </b> ${contactMethods}\n`;
    massage += `<b>Додаткова інформація: </b> ${this.additionalInfo.value}\n`;
    console.log(massage);

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: massage
    })
        .then(response => {
            alert('Дякуємо! Ваша заявка успішно надіслана.');
        })
        .catch(error => {
            alert('Сталася помилка при відправці форми. Спробуйте ще раз.');
        });
});


// function submitForm(event) {
// 	var checkboxes = document.querySelectorAll('input[name="contactMethod"]');
// 	var checked = Array.from(checkboxes).some(checkbox => checkbox.checked);

// 	if (!checked) {
// 		alert('Будь ласка, оберіть хоча б один варіант для зв\'язку.');
// 		return false;
// 	}
// }

// // axios

// const TOKEN = "6936819596:AAHaz4yp8eAHoBCcbgqMk8NLUoYRul0_8zk";
// const CHAT_ID = "-1002106268852";
// const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// document.getElementById('feedbackForm').addEventListener('submit', function (e) {
// 	e.preventDefault();

// 	let contactMethods = Array.from(this.querySelectorAll('input[name="contactMethod"]:checked'))
// 		.map(checkbox => checkbox.value)
// 		.join(', ');

// 	let massage = `<b>Заявка</b>\n`
// 	massage += `<b>Ім'я: </b> ${this.firstName.value}\n`;
// 	massage += `<b>Прізвище: </b> ${this.lastName.value}\n`;
// 	massage += `<b>Тип: </b> ${this.type.value}\n`;
// 	massage += `<b>Номер телефону: </b> ${this.phone.value}\n`;
// 	massage += `<b>Пошта: </b> ${this.email.value}\n`;
// 	massage += `<b>Як зв'язатись: </b> ${contactMethods}\n`;
// 	massage += `<b>Додаткова інформація: </b> ${this.additionalInfo.value}\n`;
// 	console.log(massage);

// 	axios.post(URI_API, {
// 		chat_id: CHAT_ID,
// 		parse_mode: 'html',
// 		text: massage
// 	})
// })
