document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const downloadButton = document.getElementById('download-cv');
    const { jsPDF } = window.jspdf;

    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    themeToggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', '');
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    downloadButton.addEventListener('click', () => {
        const doc = new jsPDF();

        doc.text("Juan Carlos Ronaldo González Miranda", 10, 10);
        doc.text("Ingeniería de Sistemas", 10, 20);
        doc.text("Email: jc.gonza202@gmail.com", 10, 30);
        doc.save('Hoja_de_Vida_Juan_Carlos_Ronaldo.pdf');
    });
});


