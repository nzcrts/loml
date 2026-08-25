document.addEventListener('DOMContentLoaded', function () {
    const passwordModal = document.getElementById('passwordModal');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const passwordInput = document.getElementById('passwordInput');
    const submitPassword = document.getElementById('submitPassword');

    submitPassword.addEventListener('click', function () {
        if (passwordInput.value === '2512028620') {    //PASSWORD HERE
            passwordModal.style.opacity = '0';
            setTimeout(() => {
                passwordModal.style.display = 'none';
                welcomeScreen.style.display = 'flex';
                setTimeout(() => {
                    welcomeScreen.style.opacity = '0';
                    setTimeout(() => {
                        welcomeScreen.style.display = 'none';
                        mainContent.style.display = 'block';
                    }, 800);
                }, 2500);
            }, 500);
        } else {
            passwordInput.value = '';
            passwordInput.placeholder = 'Try again, my love...';
            passwordInput.style.borderColor = '#ff4d4d';
            setTimeout(() => {
                passwordInput.style.borderColor = '#ffb7c5';
                passwordInput.placeholder = 'Our special word...';
            }, 1500);
        }
    });

    passwordInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') submitPassword.click();
    });

    // Tabs
    const tabsContainer = document.querySelector('.tabs');
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');

            // On mobile, keep the tapped tab scrolled into view within
            // the horizontally-scrolling tab strip
            if (tabsContainer) {
                tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        });
    });

    // Letter toggle
    const letter = document.getElementById('loveLetter');
    letter.addEventListener('click', () => {
        letter.classList.toggle('expanded');
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
});

// Music Controls
function playSong(id) {
    const song = document.getElementById(id);
    pauseAllSongs();
    song.play();
}

function pauseSong(id) {
    document.getElementById(id).pause();
}

function stopSong(id) {
    const song = document.getElementById(id);
    song.pause();
    song.currentTime = 0;
}

function pauseAllSongs() {
    document.querySelectorAll('audio').forEach(a => {
        a.pause();
        a.currentTime = 0;
    });
}
