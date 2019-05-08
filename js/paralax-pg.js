//? When we scroll the page create parallax
//? we want to move certain tags, based on how far away they are from the anchor point
//? make the anchor the middle of the screen
//? find the ratio the distance scrolled from the anchor point

//! 1. Add in the '.pg-scroll' on the wrapper div
//! 2. Add in '[data-pg-speed]' to all items that you want to have parallax
    //todo positive go in the direction of the scroll and negative go opposite
    //todo the higher the number the faster the speed of the animation

    const pgScroll = document.querySelectorAll('.pg-scroll')

    function parallaxPgScroll(){
        const topViewport = window.pageYOffset;
        const midViewport = topViewport + (window.innerHeight / 2);
    
        pgScroll.forEach( pg => {       
            // Run this if it already has a data attribute set
            const topSection = pg.offsetTop;
            const midSection = topSection + (pg.offsetHeight / 2);
    
            const distanceToSection = midViewport - midSection;
    
            const tags = pg.querySelectorAll('[data-pg-speed]');
    
            tags.forEach(tag => {
                const pgSpeed = parseFloat(tag.getAttribute('data-pg-speed'));
    
                tag.style.transform = `translate(0, ${(distanceToSection * pgSpeed) / 5}px)`;
                tag.style.transition = "transform ease"
            })
            
        })
    }

    document.addEventListener('scroll', () => {
        parallaxPgScroll()
        // console.log('parallax working')
    });



    const heroImg = document.querySelectorAll('.hero-img');

    heroImg.forEach(img => {
        img.style.opacity = "0.21";
    })
