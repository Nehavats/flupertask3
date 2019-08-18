window.addEventListener('DOMContentLoaded', () => {
    startTimer()
    scrollToElement(count)
});

var allBoxes = document.querySelectorAll('.left-box')
var rightImage = document.getElementById('rightImage');
var indicators = document.querySelectorAll('.left-indicator-item')

var maxCount = allBoxes.length - 1
var count = 1, sliderTimer


// Slider timer --> Go to view after each 2 seconds
var startTimer = function () {
    console.log(maxCount)

    sliderTimer = setInterval(function () {
        if (count >= maxCount) {
            count = 1
        } else {
            count++
        }
        scrollToElement(count)
    }, 2000)
}


// Go to perticular view
var scrollToElement = function (count) {
    console.log(count)
    
    allBoxes[count - 1].scrollIntoView({
        behavior: 'smooth'
    })

    if (count == 1) {

        rightImage.style.backgroundImage = "url('./images/img1.jpg')";
        $("#rightImage").css('display', 'none')
        $("#rightImage").slideDown(1000);
    }
    if (count == 2) {

        rightImage.style.backgroundImage = "url('./images/img2.jpg')";
        $("#rightImage").css('display', 'none')
        $("#rightImage").slideDown(1000);
    }
    if (count == 3) {
        rightImage.style.backgroundImage = "url('./images/img3.jpeg')";
        $("#rightImage").css('display', 'none')
        $("#rightImage").slideDown(1000);
    }
    if (count == 4) {
        rightImage.style.backgroundImage = "url('./images/img4.jpg')";
        $("#rightImage").css('display', 'none')
        $("#rightImage").slideDown(1000);
    }


    
}


// Indicator Mapping -  Clear timer and go to view
indicators.forEach(function (element) {
    element.addEventListener('click', function (event) {
        var newCount = event.target.dataset['count']
        if (count) {
            count = newCount

            // Clear Slider
            clearInterval(sliderTimer)
            scrollToElement(count)
        }
    })
})
