function toggleContent(id) {
    var input = document.getElementById(id + "input");
    var h2 = document.getElementById(id);
    if (input.style.display === "none") {
        input.style.display = "block";
        h2.style.fontSize = "50px"; // Double the font size
    } else {
        input.style.display = "none";
        h2.style.fontSize = ""; // Reset font size to default
    }
}


//DESCRIPTION
var isSecondPageVisible = false;

    document.getElementById("description").addEventListener("click", function() {
        var container = document.getElementById("descriptioninput");

        if (isSecondPageVisible) {
            // If the second page is visible, hide it
            container.style.display = 'none';
        } else {
            // If the second page is hidden, load and show it
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'CSS PROPERTY.html', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    container.innerHTML = xhr.responseText;
                    container.style.display = 'block';
                }
            };
            xhr.send();
        }

        // Toggle the visibility flag
        isSecondPageVisible = !isSecondPageVisible;
});



//TEXT
var isSecondPageVisible = false;

    document.getElementById("heading1").addEventListener("click", function() {
        var container = document.getElementById("heading1input");

        if (isSecondPageVisible) {
            // If the second page is visible, hide it
            container.style.display = 'none';
        } else {
            // If the second page is hidden, load and show it
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'TEXT CSS.html', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    container.innerHTML = xhr.responseText;
                    container.style.display = 'block';
                }
            };
            xhr.send();
        }

        // Toggle the visibility flag
        isSecondPageVisible = !isSecondPageVisible;
});



//COLOR
var isSecondPageVisible = false;

    document.getElementById("heading2").addEventListener("click", function() {
        var container = document.getElementById("heading2input");

        if (isSecondPageVisible) {
            // If the second page is visible, hide it
            container.style.display = 'none';
        } else {
            // If the second page is hidden, load and show it
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'COLOR CSS.html', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    container.innerHTML = xhr.responseText;
                    container.style.display = 'block';
                }
            };
            xhr.send();
        }

        // Toggle the visibility flag
        isSecondPageVisible = !isSecondPageVisible;
});



//SIZE
var isSecondPageVisible = false;

    document.getElementById("heading3").addEventListener("click", function() {
        var container = document.getElementById("heading3input");

        if (isSecondPageVisible) {
            // If the second page is visible, hide it
            container.style.display = 'none';
        } else {
            // If the second page is hidden, load and show it
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'SIZE CSS.html', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    container.innerHTML = xhr.responseText;
                    container.style.display = 'block';
                }
            };
            xhr.send();
        }

        // Toggle the visibility flag
        isSecondPageVisible = !isSecondPageVisible;
});



//BOX MODEL
var isSecondPageVisible = false;

    document.getElementById("heading4").addEventListener("click", function() {
        var container = document.getElementById("heading4input");

        if (isSecondPageVisible) {
            // If the second page is visible, hide it
            container.style.display = 'none';
        } else {
            // If the second page is hidden, load and show it
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'BOX MODEL CSS.html', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    container.innerHTML = xhr.responseText;
                    container.style.display = 'block';
                }
            };
            xhr.send();
        }

        // Toggle the visibility flag
        isSecondPageVisible = !isSecondPageVisible;
});



//DISPLAY
var isSecondPageVisible = false;

    document.getElementById("heading5").addEventListener("click", function() {
        var container = document.getElementById("heading5input");

        if (isSecondPageVisible) {
            // If the second page is visible, hide it
            container.style.display = 'none';
        } else {
            // If the second page is hidden, load and show it
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'DISPLAY CSS.html', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    container.innerHTML = xhr.responseText;
                    container.style.display = 'block';
                }
            };
            xhr.send();
        }

        // Toggle the visibility flag
        isSecondPageVisible = !isSecondPageVisible;
});



//POSITION
var isSecondPageVisible = false;

    document.getElementById("heading6").addEventListener("click", function() {
        var container = document.getElementById("heading6input");

        if (isSecondPageVisible) {
            // If the second page is visible, hide it
            container.style.display = 'none';
        } else {
            // If the second page is hidden, load and show it
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'POSITION CSS.html', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    container.innerHTML = xhr.responseText;
                    container.style.display = 'block';
                }
            };
            xhr.send();
        }

        // Toggle the visibility flag
        isSecondPageVisible = !isSecondPageVisible;
});



//MEDIA
var isSecondPageVisible = false;

    document.getElementById("heading7").addEventListener("click", function() {
        var container = document.getElementById("heading7input");

        if (isSecondPageVisible) {
            // If the second page is visible, hide it
            container.style.display = 'none';
        } else {
            // If the second page is hidden, load and show it
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'MEDIA CSS.html', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    container.innerHTML = xhr.responseText;
                    container.style.display = 'block';
                }
            };
            xhr.send();
        }

        // Toggle the visibility flag
        isSecondPageVisible = !isSecondPageVisible;
});



//ANIMATION
var isSecondPageVisible = false;

    document.getElementById("heading8").addEventListener("click", function() {
        var container = document.getElementById("heading8input");

        if (isSecondPageVisible) {
            // If the second page is visible, hide it
            container.style.display = 'none';
        } else {
            // If the second page is hidden, load and show it
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'ANIMATION CSS.html', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    container.innerHTML = xhr.responseText;
                    container.style.display = 'block';
                }
            };
            xhr.send();
        }

        // Toggle the visibility flag
        isSecondPageVisible = !isSecondPageVisible;
});



//RESPONSIVE
var isSecondPageVisible = false;

    document.getElementById("heading9").addEventListener("click", function() {
        var container = document.getElementById("heading9input");

        if (isSecondPageVisible) {
            // If the second page is visible, hide it
            container.style.display = 'none';
        } else {
            // If the second page is hidden, load and show it
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'RESPONSIVE CSS.html', true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    container.innerHTML = xhr.responseText;
                    container.style.display = 'block';
                }
            };
            xhr.send();
        }

        // Toggle the visibility flag
        isSecondPageVisible = !isSecondPageVisible;
});