
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
    $("#showedit").click(function(){
        $(".medicinDiv").css("display","block");
      });

      $(".Duration").click(function() {
        $(".DurationBox").css("display","block");
       
      });
      

      $(".orderNotification").click(function() {
            $(".notificationBox").slideDown( );

          });
          $(".doctornotification").click(function() {
            $(".notificationBox").css( "display","block");
            $(".DoctorNotify").css( "display","block");
          });
          $(".statusoptions").click(function() {
            $(".statusBox").css( "display","block");
          });
          $(".moreDetailsOrder").click(function(){
            $("PatientBox").css("display","block");
            $(".overlay").css("display","block");
    
        });
          /******************** */
          $(".addNewpharmacy").click(function(){
            $("addNewPharmacyBox").css("display","block");
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
    
});