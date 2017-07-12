<script language="JavaScript">
<!--
  $.cssRule({ "ol.links": "list-style-type: none;list-style-image: none; text-align: center" });
 
  var RollCirclePalce = null;
  var RollCircleBounds = [];
  var RollCirclePos = null;
  var RollCircleTimer = null;
  var RollCircleOffSetAng = 0;
  var RollCircleEnabled = true;
  var RollCircleRad = (Math.PI / 180);
  var RollCircleCircleRad = 50;
 
  RollCircle = function(){
    if(RollCircleTimer){
      clearTimeout(RollCircleTimer);
      RollCircleTimer = 0;
    }
    if(RollCircleEnabled){
      RollCircleOffSetAng++;
      if(RollCircleOffSetAng >= 360)
        RollCircleOffSetAng = 0;
      $(".links li").each(function(){
        $li = $(this);
        index = parseInt($li.data("li_index"));
        ang = ((360 / LIMaxIndex) * index) + (360 - RollCircleOffSetAng);
 
        $li.css("left", (Math.sin(ang * RollCircleRad) * (RollCircleBounds[0] / 2)) +
          (RollCircleBounds[0] / 2) + RollCirclePos.left);
        $li.css("top", (Math.cos(ang * RollCircleRad) * (RollCircleBounds[1] / 2)) + RollCirclePos.top);
      });
    }
    RollCircleTimer = setTimeout("RollCircle()", 100);
  }
 
  var LIIndex = 0;
  var LIMaxIndex = 0;
  $(function(){
    RollCirclePalce = $(".links");
    RollCircleBounds[0] = RollCirclePalce.width();
    RollCircleBounds[1] = RollCirclePalce.height();
    RollCirclePalce.css("height", RollCircleBounds[1]);
 
    $.cssRule({ "ol.links li": "position: absolute; top: 0px; left: 0px" });
 
    RollCirclePos = RollCirclePalce.position();
 
    LIIndex = 0;
    $(".links li").each(function(){ $(this).data("li_index", "" + (LIIndex++)); });
 
    LIMaxIndex = LIIndex;
    $(".links li").each(function(){
      $li = $(this);
      index = parseInt($li.data("li_index"));
      ang = ((360 / LIMaxIndex) * index);
 
      $li.css("left", (Math.sin(ang * RollCircleRad) * (RollCircleBounds[0] / 2)) +
        (RollCircleBounds[0] / 2) + RollCirclePos.left);
      $li.css("top", (Math.cos(ang * RollCircleRad) * (RollCircleBounds[1] / 2)) + RollCirclePos.top);
    });
 
    $(".links li").hover(
      function(){
        RollCircleEnabled = false;
      }, function(){
        RollCircleEnabled = true;
      }
    );
 
    RollCircle();
  });
//-->
</script>