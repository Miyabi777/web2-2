<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>

$(function(){
    $("img.ChangePhoto").click(function(){
        var ImgSrc = $(this).attr("src");
        var ImgAlt = $(this).attr("alt");
        $("img#MainPhoto").attr({src:ImgSrc,alt:ImgAlt});
        $("img#MainPhoto").hide();
        $("img#MainPhoto").fadeIn("slow");
        return false;
    });
});
