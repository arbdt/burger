// SCRIPT FOR JQUERY CLICK AND AJAX FOR CLIENT SIDE
$(document).ready(function(){

    // ajax for sending POST for create new burger -----
    $(".addBurgerBtn").on("click", function(event){
        event.preventDefault();
        let newBurgerName = {burger_name: $("#burger_name").val().trim()};
        // send ajax POST
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurgerName
        }).then(function(data){
            console.log(`${data.affectedRows} Burger has been added.`);
            // refresh the page
            location.reload();
        });
    });

    // ajax PUT to set burger to DEVOURED=TRUE; -----
    // button click
    $(".eatBurgerBtn").on("click", function(event){
        // get properties from page item
        let idAffected = $(this).data("id");
        let setDevoured = {devoured: true};
        console.log(`Burger ID: ${idAffected}; ` + JSON.stringify(setDevoured));
        let putUrl = "/api/burgers/" + idAffected;
        // send to ajax PUT
        $.ajax(putUrl,{
            type: "PUT",
            data: setDevoured
        }).then(
            function() {
            console.log("A burger has been devoured");
            // refresh page to re-GET the burger lists
            location.reload();
        });
    });

    // ajax for set burger to DEVOURED=FALSE;
    // button click
    $(".regurgitateBurgerBtn").on("click", function(event){
        // get properties from page item
        let idAffected = $(this).data("id");
        let setDevoured = {devoured: false};
        console.log(`Burger ID: ${idAffected}; ` + JSON.stringify(setDevoured));
        let putUrl = "/api/burgers/" + idAffected;
        // send to ajax PUT
        $.ajax({
            url: putUrl,
            type: "PUT",
            data: setDevoured
        }).then(
            function() {
            console.log("A burger has been regurgitated");
            // refresh page to re-GET the burger lists
            location.reload();
        });
    });
});