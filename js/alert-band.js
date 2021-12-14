(function($){
    var existingIdsString = ('; '+document.cookie).split('; alert-band=').pop().split(';').shift();
    var existingIds = existingIdsString.split(',');
    
    $(document).ready(function() {
        $('.paragraph--alert-band .wrapper .action').each(function() {
            var tempAlertId = $(this).attr('data-id');
            if (existingIds.indexOf(tempAlertId) !== -1) {
                $(this).parent().parent().addClass('is-closed');
            }
        });

        $('.paragraph--alert-band .wrapper .action').off().on('click', function() {
            var alertId = $(this).attr('data-id');
            $(this).parent().parent().addClass('is-closed');

            // id does not exist, so add it to the cookies
            if (existingIds.indexOf(alertId) === -1) {
                existingIds.push(alertId);
                var expires = new Date();
                expires.setTime(expires.getTime() + (14 * 24 * 60 * 60 * 1000));
                document.cookie = 'alert-band=' + existingIds.join(',') + '; path=/; expires=' + expires.toUTCString();    
            }
        });
    });
})(jQuery);
