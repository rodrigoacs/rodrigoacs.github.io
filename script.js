function toggleDark() {
    var mainElement = document.getElementById("mainElement");
    mainElement.classList.toggle("light");

    var lightSectionAboutMe = document.getElementById("sectionAboutMe");
    lightSectionAboutMe.classList.toggle("sectionStyle");
    lightSectionAboutMe.classList.toggle("lightGlass");

    var lightSectionProjects = document.getElementById("sectionProjects");
    lightSectionProjects.classList.toggle("sectionStyle");
    lightSectionProjects.classList.toggle("lightGlass");

    var lightSectionContact = document.getElementById("sectionContact");
    lightSectionContact.classList.toggle("sectionStyle");
    lightSectionContact.classList.toggle("lightGlass");

    var lightNav = document.getElementById("navStyle");
    lightNav.classList.toggle("navLight");

    var lightLink = document.getElementById("linkOne");
    lightLink.classList.toggle("navLink");
    lightLink.classList.toggle("navLightLink");

    lightLink = document.getElementById("linkTwo");
    lightLink.classList.toggle("navLink");
    lightLink.classList.toggle("navLightLink");

    lightLink = document.getElementById("linkThree");
    lightLink.classList.toggle("navLink");
    lightLink.classList.toggle("navLightLink");

}