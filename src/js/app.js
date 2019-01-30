var callToAction = document.getElementsByClassName('callToAction')[0];

window.addEventListener('load', function(){
    callToAction.style.opacity = 1;
})

function animateHTML(){
    // Elements to animate
    var stayProductive = document.getElementsByClassName('stayProductive_desc')[0];
    var getAccess = document.getElementsByClassName('getAccess')[0];

    var windowHeight;

    function init(){
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
    }
    function addEventHandlers(){
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    }
    function checkPosition(){
        // Animates the stayProductive description
        var positionFromTop = stayProductive.getBoundingClientRect().top;
        if(positionFromTop - windowHeight <= -100){
            stayProductive.style.opacity = 1;
        }else if(positionFromTop - windowHeight > 0){
            stayProductive.style.opacity = '';
        }
        // Animates the getAccess section
        var getAccessPositionFromTop = getAccess.getBoundingClientRect().top;
        if(getAccessPositionFromTop - windowHeight <= -100){
            getAccess.style.opacity = 1;
            getAccess.style.transform = 'scale(1)';
        }else if(getAccessPositionFromTop - windowHeight > 0){
            getAccess.style.opacity = '';
            getAccess.style.transform = 'scale(0.7)';
        }
    }
    return {
        init: init
    }
}

animateHTML().init();