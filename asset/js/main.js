
$(document).ready(function () {
    /********pop up for confairmation */
    $(".Register").click(function(){
        $(".waitConfirm").css("display","block");
        $(".overlay").css("display","block");

    });
    $(".CloseC").click(function(){
        $(".waitConfirm").css("display","none");
        $(".overlay").css("display","none");
    });
    
    /**********show editable in     My Order */
    /**$(".showMore").click(function(){
        $(this).parent.parent.closest('tr').next('tr.medicinDiv').css("display","block");
        $(this).css("display","none");
        $(".hideMore").css("display","block");
      }); */
      $('.showMore').click(function () {
        $(this).parent().parent().next().find(".medicinDiv").slideToggle(400);
        $(this).css("display","none");
        $(this).parent().find(".hideMore").css("display","block");
    });
    $('.hideMore').click(function () {
        $(this).parent().parent().next().find(".medicinDiv").slideToggle(400);
        $(this).css("display","none");
        $(this).parent().find(".showMore").css("display","block");
    });
  /*********************************** */
  $('.overlay').click(function () {
    $(this).css("display","none");
    $(this).parent().find(".showMore").css("display","block");
});
/******************************** */

      $(".Duration").click(function() {
        $(".DurationBox").css("display","block");
       
      });
      
      $(".notification").click(function() {
        $(".notificationBox").slideToggle(400);

      });
      $(".orderNotification").click(function() {
            $(".notificationBox").slideToggle(400);

          });
          $(".doctornotification").click(function() {
            $(".notificationBox").css( "display","block");
            $(".DoctorNotify").css( "display","block");
          });
          $(".optionbtn").click(function() {
            $(this).parent().find(".statusBox").toggle();
                        
          });
          $(".moreDetailsOrder").click(function(){
            $(this).parent().find(".PatientBox").css("display","block");
            $(".overlay").css("display","block");
    
        });
          /******************** */
          $(".addNewpharmacy").click(function(){
            $(".addNewPharmacyBox").css("display","block");
            $(".overlay").css("display","block");
    
        });
          
      /********* popup for edit Patient ******************  */  
      $(".newOrder").click(function(){
        $(".PatientBox").css("display","block");
        $(".overlay").css("display","block");
    });
    $(".closePatient").click(function(){
        $(".PatientBox").css("display","none");
        $(".overlay").css("display","none");
    });
    $(".AddDiagnos").click(function(){
        $(".addDiagnosiscomment").css("display","block");
    });
    $(".frequency").click(function(){
        $(".frequencyBox").css("display","block");
    });
    $(".AddComment").click(function(){
        $(".commentBox").css("display","block");
    });

    $(".CloseC").click(function(){
        $(".commentBox").css("display","none");
        $(".overlay").css("display","none");
    });
    $(".Addmedication").click(function(){
        $(".medicationBox").css("display","block");
    });
    $(".medicationBox").click(function(){
        $(this).css("display","none");
    });
    
   
    $(document).ready(function () {
        $(".pagination").rPage();
    });
    $('.numberPicker').owlCarousel({
        autoplay: false,
        loop: true,
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items:7,
            },
            1000:{
                items:7,
                margin:20,
            }
          
        }
});


});