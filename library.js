// تأثير البحث (مجرد تفاعل بصري حالياً)
document.getElementById('movieSearch').addEventListener('input', function(e) {
    let term = e.target.value.toLowerCase();
    console.log("البحث عن: " + term);
    // هنا يمكنك إضافة كود لإخفاء/إظهار الكروت بناءً على الاسم
});

// التعامل مع روابط التصنيفات
const categoryButtons = document.querySelectorAll('.cat-btn');

categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // إزالة الكلاس النشط من الجميع
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // إضافته للزر المختار
        this.classList.add('active');
    });
});
