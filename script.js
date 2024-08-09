<script>
    // Add event listener for mousemove
    document.addEventListener("mousemove", function() {
        // Append '_mouse' to 'id'
        var new_id = "<?php echo $tracker; ?>" + '_mouse';

        // Update the URL with the new 'id'
         window.history.replaceState(null, null, "?id=" + new_id);

        // Send AJAX request to the server with the new 'id'
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "?id=" + new_id, true);
        xhr.send();
    }, {once: true});

    // For mobile devices
    document.addEventListener("touchmove", function() {
        // Append '_mobile' to 'id'
        var new_id = "<?php echo $tracker; ?>" + '_mobile';

        // Update the URL with the new 'id'
         window.history.replaceState(null, null, "?id=" + new_id);

        // Send AJAX request to the server with the new 'id'
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "?id=" + new_id, true);
        xhr.send();
    }, {once: true});

    // For keyboard events
    document.addEventListener("keydown", function() {
        // Append '_keyboard' to 'id'
        var new_id = "<?php echo $tracker; ?>" + '_keyboard';

        // Update the URL with the new 'id'
        window.history.replaceState(null, null, "?id=" + new_id);

        // Send AJAX request to the server with the new 'id'
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "?id=" + new_id, true);
        xhr.send();
    }, {once: true});
</script>
