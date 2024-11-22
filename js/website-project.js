// get all the section images -- the img tags that we want to animate
imgArr = document.querySelectorAll('section img');
// console.log(imgArr.length);
// console.log(imgArr[0]); // first image
// console.log(imgArr); // all images
txtArr = document.querySelectorAll('section .text');
// console.log(txtArr.length);
// console.log(txtArr[0]); // first div
// console.log(txtArr); // all divs


for (i = 0; i < imgArr.length; i++) {
    let img = imgArr[i];
    let txt = txtArr[i];
    // every time the loop runs (which is 3x) animate the current img-text div pair
    // use % to alternate odd-even movement
    let xStartPos = 200;
    if (i % 2 == 0) { // if even number item
        xStartPos *= -1;
    }
    // animate the image
    gsap.from(img, {
        scrollTrigger: {
            trigger: img,  
            start: 'top 85%', 
            end: 'bottom 80%', 
            scrub: 1, 
            markers: false
    }, 
    x: xStartPos, opacity: 0,
});
// animate the image's companion text div
    gsap.from(txt, {
        scrollTrigger: {
            trigger: txt,  
            start: 'top 91%', 
            end: 'bottom 80%', 
            scrub: 1, 
            markers: false
    }, 
    x: -xStartPos, opacity: 0,
});
} // end for loop