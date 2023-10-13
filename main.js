function toggleDetails(itemId) {
    var details = document.getElementById('details' + itemId.substr(4));

    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        details.style.display = 'block';
    }
}