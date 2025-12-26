function applyGlobalSettings() {
    // التأكد من الوضع الليلي
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // التأكد من اللغة والاتجاه
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'en') {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'ar';
    }
}

// تشغيل الوظيفة بمجرد تحميل أي صفحة
document.addEventListener('DOMContentLoaded', applyGlobalSettings);



const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

if (menuToggle && sidebar) {
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
}
