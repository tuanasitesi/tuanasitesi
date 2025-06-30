switch(userData.role) {
  case 'admin':
    window.location.href = 'admin-panel.html';
    break;
  case 'yonetici':
    window.location.href = 'yonetici-panel.html';
    break;
  case 'malik':
    window.location.href = 'malik-panel.html';
    break;
  case 'kiraci':
    window.location.href = 'kiraci-panel.html';
    break;
  case 'kiracili-malikler':
    window.location.href = 'kiracili-malik-panel.html';
    break;
  default:
    document.getElementById("errorMsg").innerText = "Bilinmeyen kullanıcı rolü!";
    await firebase.auth().signOut();
}
