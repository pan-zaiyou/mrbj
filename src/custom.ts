// src/custom.ts

export const handleMobileClick = () => {
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Blackberry|WebOS|Symbian|Windows Phone|Phone)/i)) {
        document.body.classList.remove('sidebar-open');
    }
};
