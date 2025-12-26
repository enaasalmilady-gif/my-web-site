const ctx = document.getElementById('mainChart').getContext('2d');


const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)');
gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

const mainChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2015', '2018', '2021', '2023', '2025'],
        datasets: [{
            label: 'نشاط الأفلام',
            data: [40, 65, 55, 80, 84],
            borderColor: '#ff0000',
            borderWidth: 3,
            fill: true,
            backgroundColor: gradient,
            tension: 0.4,
            pointRadius: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { display: false },
            x: { display: false }
        }
    }
});




