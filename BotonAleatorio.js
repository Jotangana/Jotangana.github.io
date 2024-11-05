         const paginas = [
            'PlayaPatos.html',
            'AcantiladosGigantes.html',
            'https://www.google.com',
            'https://www.youtube.com',
            'https://www.facebook.com'
        ];

        function irAPaginaAleatoria() {
            const indiceAleatorio = Math.floor(Math.random() * paginas.length);
            window.location.href = paginas[indiceAleatorio];
        }