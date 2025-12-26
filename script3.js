
const tabs = document.querySelectorAll('.tab-item');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
       
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

       
        tab.classList.add('active');

       
        const target = tab.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});


const fileInput = document.getElementById('file-input');
const displayImg = document.getElementById('display-img');

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            displayImg.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});


const darkModeToggle = document.querySelector('#preferences input[type="checkbox"]');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// --- 2. تبديل اللغة ---
const langSelect = document.querySelector('.custom-select');
const translations = {
    'ar': {
        title: "الإعدادات",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        saveBtn: "حفظ التغييرات",
        edit: "ملف الشخصي",
        preference:"التفضيلات",
        security:"الامان",
        data:"خصوصية البيانات",
        email:"البريد الالكتروني",
        phone:"رقم الهاتف",
        recieve:" اعدادات الامان ستكون متاحة قريباً",
        recieve2:"إعدادات خصوصية البيانات ستكون متاحة قريباً.",


        dir: "rtl"
    },
    'en': {
        title: "Settings",
        firstName: "First Name",
        lastName: "Last Name",
        saveBtn: "Save Changes",
        edit:"Edit profile",
        preference:"preferences",
        security:"Security",
        data:"data privacy",
        email:"Email address",
        phone:"phone number",
        recieve:"security will be available soon",
        recieve2:"Data privacy will be available soon",

        dir: "ltr"
    }
};

langSelect.addEventListener('change', (e) => {
    const lang = e.target.value === 'English' ? 'en' : 'ar';
    updateLanguage(lang);
});

function updateLanguage(lang) {
   
    document.getElementById('firstName').innerText = translations[lang].firstName;
    document.getElementById('lastName').innerText = translations[lang].lastName;
    
    document.getElementById('edit').innerText = translations[lang].edit;
    document.getElementById('preference').innerText = translations[lang].preference;
    document.getElementById('security').innerText = translations[lang].security;
    document.getElementById('data').innerText = translations[lang].data;
    document.getElementById('email').innerText = translations[lang].email;
    document.getElementById('phone').innerText = translations[lang].phone;
    document.getElementById('saveBtn').innerText = translations[lang].saveBtn;
    document.getElementById('recieve').innerText = translations[lang].recieve;
    document.getElementById('recieve2').innerText = translations[lang].recieve2;

   
    document.documentElement.dir = translations[lang].dir;
    document.documentElement.lang = lang;
}


window.onload = () => {
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        darkModeToggle.checked = true;
    }
};










const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    
    // Optional: Change the icon from "bars" to "X" when open
    const icon = menuToggle.querySelector('i');
    if (sidebar.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});
