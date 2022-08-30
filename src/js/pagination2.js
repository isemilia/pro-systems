function getPageList(totalPages, page, maxLength){
    function range(start, end){
        return Array.from(Array(end-start + 1), (_,i) => i + start);
    }
    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 -3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 -3) >> 1;

    if (totalPages <= maxLength){
        return range(1, totalPages);
    }
    if (page <= maxLength - sideWidth - 1 - rightWidth){
        return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }
    if (page >= totalPages - sideWidth - 1 - rightWidth){
        return range(1, sideWidth).concat(0, range(totalPages- sideWidth - 1 - rightWidth - leftWidth, totalPages));

    }
    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth +1, totalPages));
    
}
$(function(){
    var numberOfItems = $('.card2-content .card2').length;
    var limitPerPage = 4;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 7;
    var currentPage;

    function showPage(whichPage){
        if(whichPage < 1 || whichPage > totalPages) return false;
        
        currentPage = whichPage;

        $('.card2-content .card2').hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        $('.pagination2 li').slice(1,-1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $('<li>').addClass('page-item2').addClass(item ? 'current-page2':'dots').toggleClass('active3', item === currentPage).append($('<a>').addClass('page-link2').attr({href: 'javascript:void(0)'}).text(item || '...')).insertBefore('.next-page2');
        });

        $('.previous-page2').toggleClass('disable', currentPage === 1 );
        $('.next-page2').toggleClass('disable', currentPage === totalPages );
        return true;
    }
    $('.pagination2').append(
        $('<li>').addClass('page-item2').addClass('previous-page2').append($('<img>').addClass('page-link2').attr({src:'../../icons/Vectorleft.png'})),
        $('<li>').addClass('page-item2').addClass('next-page2').append($('<img>').addClass('page-link2').attr({src:'../icons/Vector.png'}))
    );
    $('.card2-content').show();
    showPage(1);

    $(document).on('click', '.pagination2 li.current-page2:not(.active3)', function(){
        return showPage(+$(this).text());
    });
    $('.next-page2').on('click', function(){
        return showPage(currentPage + 1);
    });
    $('.previous-page2').on('click', function(){
        return showPage(currentPage - 1);
    });
});