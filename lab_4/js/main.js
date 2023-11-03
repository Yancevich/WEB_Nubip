const countries = {
    'ukraine': {
        'regions': ['Вінницька', 'Волинська', 'Дніпропетровська', 'Донецька', 'Житомирська', 'Закарпатська', 'Запорізька', 'Івано-Франківська', 'Київська', 'Кіровоградська', 'Луганська', 'Львівська', 'Миколаївська', 'Одеська', 'Полтавська', 'Рівненська', 'Сумська', 'Тернопільська', 'Харківська', 'Херсонська', 'Хмельницька', 'Черкаська', 'Чернівецька', 'Чернігівська'],
        'cities': {
            'Вінницька': ['Вінниця', 'Жмеринка', 'Козятин'],
            'Волинська': ['Луцьк', 'Ковель', 'Нововолинськ'],
            'Київська': ['Київ', 'Бровари', 'Березань', 'Бориспіль'],
            'Рівненська': ['Рівне', 'Здолбунів', 'Остріг', 'Квасилів', 'Дубно']
        }
    },
    'poland': {
        'regions': ['Dolnośląskie', 'Kujawsko-Pomorskie', 'Łódzkie', 'Lubelskie', 'Lubuskie', 'Małopolskie', 'Mazowieckie', 'Opolskie', 'Podkarpackie', 'Podlaskie', 'Pomorskie', 'Śląskie', 'Świętokrzyskie', 'Warmińsko-Mazurskie', 'Wielkopolskie', 'Zachodniopomorskie'],
        'cities': {
            'Dolnośląskie': ['Wrocław', 'Legnica', 'Wałbrzych'],
            'Kujawsko-Pomorskie': ['Bydgoszcz', 'Toruń', 'Włocławek']
        }
    }
};

const countrySelect = document.getElementById('country');
const regionSelect = document.getElementById('region');
const citySelect = document.getElementById('city');
const phoneInput = document.getElementById('phone');

countrySelect.addEventListener('change', () => {
    const selectedCountry = countrySelect.value;
    if (selectedCountry === 'default') {
        // Очищаємо поля вибору області та міста
        regionSelect.innerHTML = '';
        citySelect.innerHTML = '';
    } else {
        const regions = countries[selectedCountry].regions;
        populateDropdown(regionSelect, regions);
        // Після кожного вибору країни, оновлюємо подію "change" для області
        regionSelect.dispatchEvent(new Event('change'));
        updatePhoneCode(selectedCountry);
    }
});

regionSelect.addEventListener('change', () => {
    const selectedCountry = countrySelect.value;
    populateCityDropdown(selectedCountry);
});

function populateDropdown(select, options) {
    select.innerHTML = '';
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
}

function populateCityDropdown(selectedCountry) {
    const selectedRegion = regionSelect.value;
    const cities = countries[selectedCountry].cities[selectedRegion] || [];
    populateDropdown(citySelect, cities);
}

function updatePhoneCode(country) {
    const phoneCodes = {
        'ukraine': '+380',
        'poland': '+48'
    };
    phoneInput.placeholder = phoneCodes[country] + ' (XX)XXXXXXX';
}

function downloadFormData() {
    const fullName = document.getElementById('full-name').value;
    const birthday = document.getElementById('birthday').value;
    const photo = document.getElementById('photo').value;
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value;
    const region = document.getElementById('region').value;
    const city = document.getElementById('city').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const formDataText = `ПІБ: ${fullName}\nДата народження: ${birthday}\nФото: ${photo}\nСтать: ${gender}\nКраїна: ${country}\nОбласть: ${region}\nМісто: ${city}\nНомер телефону: ${phone}\nПошта: ${email}`;

    const fileName = 'registration_data.txt';
    downloadFile(fileName, formDataText);
}

function downloadFile(fileName, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    downloadFormData();
    console.log('Форма була відправлена та дані були збережені у файл');
});
