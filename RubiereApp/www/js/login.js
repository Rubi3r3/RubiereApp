document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
    
        // Check if username and password match
        if (username === 'rubiere' && password === 'Password123!') {
            // Redirect to Leaflet map page on successful login
            window.location.href = 'map.html';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });