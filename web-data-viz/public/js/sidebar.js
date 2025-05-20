fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('sidebar').innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar a barra de navegação lateral:', error));