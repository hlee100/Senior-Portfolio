document.addEventListener("DOMContentLoaded", () => {
    const typeWriterText = document.querySelector('.typewriter p');
    const blurBackground = document.querySelector('.blur-background');

    typeWriterText.addEventListener('animationstart', () => {
        blurBackground.classList.add('blur-background');
    });

    typeWriterText.addEventListener('animationend', (e) => {
        if (e.animationName === 'typing') {
            setTimeout(() => {
                typeWriterText.style.opacity = 0;
                typeWriterText.style.transition = 'opacity 2s ease';

                setTimeout(() => {
                    typeWriterText.style.visibility = 'hidden';
                    typeWriterText.style.display = 'none';
                }, 2000);
                
                blurBackground.classList.remove('blur-background');
                blurBackground.style.transition = 'filter 0.5s ease';
            }, 500);
        }
    });
});
