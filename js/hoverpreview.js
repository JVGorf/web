const hoverLink = document.getElementById('hover-link');
const hoverPreview = document.getElementById('hover-preview');

hoverLink.addEventListener('mouseenter', (e) => {
    const rect = hoverLink.getBoundingClientRect();
    hoverPreview.style.left = rect.right + 'px';
    hoverPreview.style.top = rect.top + 'px';

    const iframe = document.createElement('iframe');
    iframe.src = hoverLink.href;
    hoverPreview.appendChild(iframe);
    hoverPreview.style.display = 'block';
});

hoverLink.addEventListener('mouseleave', () => {
    hoverPreview.innerHTML = '';
    hoverPreview.style.display = 'none';
});