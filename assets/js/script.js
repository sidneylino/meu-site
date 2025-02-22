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

    const allCertificatesIcons = document.querySelectorAll(".container__icon");
    allCertificatesIcons.forEach(el => {
        el.classList.remove("container__background");
    });

    switch (certificate) {
        case 'bradesco':
            document.querySelector(".container__certificate--one").classList.add("container__certificate--active");
            document.querySelector(".container__icon--one").classList.add("container__background");
            break;

        case 'pythonando':
            document.querySelector(".container__certificate--five").classList.add("container__certificate--active");
            document.querySelector(".container__icon--two").classList.add("container__background");
            break;      

        case 'hashtag':
            document.querySelector(".container__certificate--four").classList.add("container__certificate--active");
            document.querySelector(".container__icon--five").classList.add("container__background");
            break;      

        case 'empower':
            document.querySelector(".container__certificate--three").classList.add("container__certificate--active");
            document.querySelector(".container__icon--three").classList.add("container__background");
            break;      

        case 'rocket':
            document.querySelector(".container__certificate--two").classList.add("container__certificate--active");
            document.querySelector(".container__icon--four").classList.add("container__background");
            break;
        
        default:
            document.querySelector(".container__certificate--four").classList.add("container__certificate--active");
            document.querySelector(".container__icon--four").classList.add("container__background");
    }
}