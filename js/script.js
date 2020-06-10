$(document).ready(function() {
    $("#carouselExampleIndicators").carousel();
    $(".item").click(function() {
        $("#carouselExampleIndicators").carousel(1);
    });
    $(".carousel-control-prev").click(function() {
        $("#carouselExampleIndicators").carousel("prev");
    });
    $(".carousel-control-next").click(function() {
        $("#carouselExampleIndicators").carousel("next");
    });
    $(".timeline-panel-container1 .timeline-body").hide();
    $(".timeline-panel-container2 .timeline-body").hide();
    $(".timeline-panel-container-inverted2 .timeline-body").hide();
    $(".timeline-panel-container-inverted1 .timeline-body").hide();

    $(".timeline-panel-container1").on("click", function(event) {
        $(".timeline-panel-container1 .timeline-body").toggle(500);
    });
    $(".timeline-panel-container2").on("click", function(event) {
        $(".timeline-panel-container2 .timeline-body").toggle(500);
    });
    $(".timeline-panel-container-inverted1").on("click", function(event) {
        $(".timeline-panel-container-inverted1 .timeline-body").toggle(500);
    });
    $(".timeline-panel-container-inverted2").on("click", function(event) {
        $(".timeline-panel-container-inverted2 .timeline-body").toggle(500);
    });
    $(".timeline-panel-container2").on("click", function(event) {
        $(".timeline-body:not(.timeline-panel-container2 .timeline-body)").hide(500);
    });
    $(".timeline-panel-container1").on("click", function(event) {
        $(".timeline-body:not(.timeline-panel-container1 .timeline-body)").hide(500);
    });
    $(".timeline-panel-container-inverted1").on("click", function(event) {
        $(".timeline-body:not(.timeline-panel-container-inverted1 .timeline-body)").hide(500);
    });
    $(".timeline-panel-container-inverted2").on("click", function(event) {
        $(".timeline-body:not(.timeline-panel-container-inverted2 .timeline-body)").hide(500);
    });
    $(".navbar a, footer a").on("click", function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('body').animate({ scrollTop: $(hash).offset().top }, 900, function() { window.location.hash = hash; })
    });

})