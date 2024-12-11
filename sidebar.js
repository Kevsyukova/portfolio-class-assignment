document.getElementById('close-sidebar').addEventListener('click', function () {
    document.getElementById('sidebar').classList.add('hidden');
});

document.getElementById('open-sidebar').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('hidden');
});
