$(document).ready(function(){
    $('h2').after('<p> Fuck me! </p>');
    $('#button').click(function(){
        $(this).css("border","2px solid black");
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
        
    });
    $(document).on('click', '.item', function(){
	$(this).remove();
    });
});

