//globals
if(!window.console){
    console={log:function(){}};
}

// Kick-off
jQuery(init);


/**
 * Fetch config and start timer.
 *
 */
function init() {


    /* hide everything and only show it if it's explicitly shown */
    jQuery("h1").remove(); //get rid of placeholder

    console.debug("loading config...");

    /* download configuration and attempt to launch the whole process */
    jQuery.ajax({
        type: "GET",
        url: "config.json",
        dataType: "json",
        error: function(xhr, errmesg, e) {
            setTimeout(init, 30000);
            fail("config broken: "+e);
        },
        success: processConfig
    });

    setInterval(ticktock, 1000);
};

/**
 *
 */
function processConfig(data) {
    console.log("config data:"+data);

}


/**
 * Timer call back
 */
function ticktock() {
    console.log("tick");

}

/**
 * Display a new slide.
 *
 */
function showSlide() {
    console.log("show slide:", typeof exhibHTML);

    console.log("show:");
    jQuery('#display').html('TODO');

}