function applyGhibliFilter() {
    let canvas = document.getElementById('photoCanvas');
    let ctx = canvas.getContext('2d');

    // Example filter effect (Sepia Tone for Ghibli look)
    ctx.filter = 'sepia(1) contrast(1.2)';
    ctx.drawImage(canvas, 0, 0);
}

function downloadImage() {
    let canvas = document.getElementById('photoCanvas');
    let link = document.createElement('a');
    link.download = 'edited-ghibli-photo.png';
    link.href = canvas.toDataURL();
    link.click();
}

document.getElementById('whatsappButton').addEventListener('click', function() {
    let message = encodeURIComponent("Hey! I edited my photo and want a T-shirt print.");
    window.open(`https://wa.me/919800229356?text=${message}`);
});

