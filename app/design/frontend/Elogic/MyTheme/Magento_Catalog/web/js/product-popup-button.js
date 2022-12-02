define(["jquery"], function ($) {
    $(".get-info-button").click(function(){
        let clickedBtnID = $(this).data('id');
        console.log(clickedBtnID);
        $("#modal-"+clickedBtnID.toString()).addClass("active");
        $("#overlay").addClass("active");
    });

    $(".modal-button").click(function(){
        let crossId = $(this).data('id');
        console.log(crossId);
        $(".modal").removeClass("active");
        $("#overlay").removeClass("active");
    })
})
