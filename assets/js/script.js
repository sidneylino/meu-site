// show and hide navbar on mobile
toggleMenu = () => {
    const navLinks = document.querySelector('.navbar__links');
    navLinks.classList.toggle('show');
}

changeCertificates = (certificate) => {            
    const allCertificates = document.querySelectorAll(".container__certificate");
    allCertificates.forEach(el => {
        el.classList.remove("container__certificate--active");
    });

    switch (certificate) {
        case 'bradesco':
            document.querySelector(".container__certificate--one").classList.add("container__certificate--active");
            break;

        case 'pythonando':
            document.querySelector(".container__certificate--six").classList.add("container__certificate--active");
            break;      

        case 'hashtag':
            document.querySelector(".container__certificate--four").classList.add("container__certificate--active");
            break;      

        case 'empower':
            document.querySelector(".container__certificate--three").classList.add("container__certificate--active");
            break;      

        case 'rocket':
            document.querySelector(".container__certificate--two").classList.add("container__certificate--active");
            break;
        
        default:
            document.querySelector(".container__certificate--one").classList.add("container__certificate--active");
    }
}