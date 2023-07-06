let global_css_url = "/assets/css/global.min.css"
let global_css = window.location.origin + global_css_url
function loadCSSIfNotAlreadyLoadedForSomeReason () {
    let style_sheets = document.styleSheets;
    let css_list = []
    for (var i = 0, max = style_sheets.length; i < max; i++) {
        css_list.push(style_sheets[i].href)
    }
    if(css_list.includes(global_css)){
        return
    }
    else{
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = global_css;
        link.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(link);
    }
}
loadCSSIfNotAlreadyLoadedForSomeReason()
// Get the current URL
var currentURL = window.location.href;
var canonicalLink = document.createElement('link');
canonicalLink.rel = 'canonical';
canonicalLink.href = currentURL;
var headElement = document.querySelector('head');
var existingCanonicalLink = document.querySelector('link[rel="canonical"]');
if (existingCanonicalLink) {
    existingCanonicalLink.parentNode.removeChild(existingCanonicalLink);
}
headElement.appendChild(canonicalLink);
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <style>
        * {
            font-family: 'Roboto', sans-serif;
        }

        .font-family-roboto {
            font-family: 'Roboto', sans-serif;
        }
    </style>

    <header class="header-main">
        <div class="header-container">
            <div class="header-contact-holder">
                <a href="#" class="head-contact-button">
                    <picture>
                        <source srcset="../assets/images/head-landline-icon.webp" type="image/webp">
                        <img fetchpriority="high" src="../assets/images/head-landline-icon.png" class="head-contact-icon" width="20" height="20" alt="Apex hospitals logo" title="Apex hospitals logo">
                    </picture>
                    <span class="head-contact-span">Landline</span>
                </a>
                <a href="#" class="head-contact-button">
                    <picture>
                        <source srcset="../assets/images/head-call-icon.webp" type="image/webp">
                        <img fetchpriority="high" src="assets/images/head-call-icon.png" class="head-contact-icon" width="20" height="20" alt="Apex hospitals logo" title="Apex hospitals logo">
                    </picture>
                    <span class="head-contact-span">contact us</span>
                </a>
                <a href="#" class="head-contact-button emergency">
                    <picture>
                        <source srcset="../assets/images/head-emergency-icon.webp" type="image/webp">
                        <img fetchpriority="high" src="assets/images/head-emergency-icon.png" class="head-contact-icon" width="20" height="20" alt="Apex hospitals logo" title="Apex hospitals logo">
                    </picture>
                    <span class="head-contact-span">emergency</span>
                </a>
                <a href="#" class="head-contact-button-lang">Hindi</a>
            </div>
            <nav class="header-navbar navbar nav-head-desk" id="main_nav">
                <a class="brand-logo" href="">
                    <picture>
                        <source srcset="../assets/images/home/apex_logo_head.webp" type="image/webp">
                        <img fetchpriority="high" src="assets/images/home/apex_logo_head.png" class="apex-logo" width="200" height="50" alt="Apex hospitals logo" title="Apex hospitals logo">
                    </picture>
                </a>
                <div class="header-menu-desk">
                    <div class="apexmenu-item accordian-main">
                        <div class="apexmenu-list-item">
                            <span class="apexmenu-list-text">Specialities</span>
                            <span class="menu-down-chevron"></span> 
                        </div>
                        <div class="apexmenu-dropdown specialities-dropdown" id="specialiy_dropdown">
                            <div class="apexmenu-dropdown-list">
                                <p class="apexmenu-dropdown-list-title">Centers of Excellence</p>
                                <div class="apexmenu-dropdown-list-content">
                                    <a href="#" class="apexmenu-dropdown-list-text">Nephrology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Cardiology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Neuroscience</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Oncology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Urology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Critical care - ICU</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Internal Medicine - GI Surgery</a>
                                </div>
                            </div>
                            <div class="apexmenu-dropdown-list">
                                <p class="apexmenu-dropdown-list-title">Other Specialities</p>
                                <div class="apexmenu-dropdown-list-content">
                                    <a href="#" class="apexmenu-dropdown-list-text">Audiology & Speach Therapy</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pain & Intervention</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="apexmenu-item accordian-main">
                        <div class="apexmenu-list-item">
                            <span class="apexmenu-list-text">location</span>
                            <span class="menu-down-chevron"></span> 
                        </div>
                        <div class="apexmenu-dropdown" id="location_dropdown">
                            <a href="#" class="apexmenu-dropdown-list-text">Malviya Nagar, Jaipur(Rajasthan)</a>
                            <a href="#" class="apexmenu-dropdown-list-text">Mansarovar, Jaipur(Rajasthan)</a>
                            <a href="#" class="apexmenu-dropdown-list-text">Sawai Madhopur(Rajasthan)</a>
                            <a href="#" class="apexmenu-dropdown-list-text">Jhunjhunu(Rajasthan)</a>
                            <a href="#" class="apexmenu-dropdown-list-text">Bikaner(Rajasthan)</a>
                        </div>
                    </div>
                    <a href="#" class="apexmenu-item head-doctor-button">Find a Doctor</a>
                    <div class="apexmenu-item accordian-main desktop-menu">
                        <div class="apexmenu-list-item">
                            <span class="apex-menuhead-icon"></span> 
                        </div>
                        <div class="apexmenu-dropdown" id="apexmain_dropdown">
                            <a href="#" class="apexmenu-dropdown-list-text">Doctors</a>
                            <a href="#" class="apexmenu-dropdown-list-text">About us</a>
                            <a href="#" class="apexmenu-dropdown-list-text">Academics</a>
                            <a href="#" class="apexmenu-dropdown-list-text">Careers</a>
                            <a href="#" class="apexmenu-dropdown-list-text">Blogs & Articles</a>
                            <a href="#" class="apexmenu-dropdown-list-text">News</a>
                            <a href="#" class="apexmenu-dropdown-list-text">Events</a>
                            <a href="#" class="apexmenu-dropdown-list-text">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div class="burger" id="burger">
                    <!-- <span class="burger-line"></span>
                    <span class="burger-line"></span>
                    <span class="burger-line"></span>
                    <span class="burger-line"></span> -->
                    <span class="apex-menuhead-icon"></span> 
                    <span class="menu-close-icon"></span> 
                </div>
                <div class="header-menu-mobile" id="apexmenu">
                    <div class="apex-mobile-menu">
                        <div class="apexmenu-item-mobile accordian-main">
                            <div class="apexmenu-list-item">
                                <span class="apexmenu-list-text">Specialities</span>
                                <span class="menu-down-chevron"></span> 
                            </div>
                            <div class="apexmenu-dropdown-mobile specialities-dropdown" id="specialiy_dropdown_mobile">
                                <div class="apexmenu-dropdown-list">
                                    <p class="apexmenu-dropdown-list-title">Centers of Excellence</p>
                                    <div class="apexmenu-dropdown-list-content">
                                        <a href="#" class="apexmenu-dropdown-list-text">Nephrology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Cardiology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Neuroscience</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Oncology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Urology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Critical care - ICU</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Internal Medicine - GI Surgery</a>
                                    </div>
                                </div>
                                <div class="apexmenu-dropdown-list">
                                    <p class="apexmenu-dropdown-list-title">Other Specialities</p>
                                    <div class="apexmenu-dropdown-list-content">
                                        <a href="#" class="apexmenu-dropdown-list-text">Audiology & Speach Therapy</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pain & Intervention</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                        <a href="#" class="apexmenu-dropdown-list-text">Pathology</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="apexmenu-item-mobile accordian-main">
                            <div class="apexmenu-list-item">
                                <span class="apexmenu-list-text">location</span>
                                <span class="menu-down-chevron"></span> 
                            </div>
                            <div class="apexmenu-dropdown-mobile" id="location_dropdown_mobile">
                                <a href="#" class="apexmenu-dropdown-list-text">Malviya Nagar, Jaipur(Rajasthan)</a>
                                <a href="#" class="apexmenu-dropdown-list-text">Mansarovar, Jaipur(Rajasthan)</a>
                                <a href="#" class="apexmenu-dropdown-list-text">Sawai Madhopur(Rajasthan)</a>
                                <a href="#" class="apexmenu-dropdown-list-text">Jhunjhunu(Rajasthan)</a>
                                <a href="#" class="apexmenu-dropdown-list-text">Bikaner(Rajasthan)</a>
                            </div>
                        </div>
                        <a href="#" class="apexmenu-dropdown-list-text2">Doctors</a>
                        <a href="#" class="apexmenu-dropdown-list-text2">About us</a>
                        <a href="#" class="apexmenu-dropdown-list-text2">Academics</a>
                        <a href="#" class="apexmenu-dropdown-list-text2">Careers</a>
                        <a href="#" class="apexmenu-dropdown-list-text2">Blogs & Articles</a>
                        <a href="#" class="apexmenu-dropdown-list-text2">News</a>
                        <a href="#" class="apexmenu-dropdown-list-text2">Events</a>
                        <a href="#" class="apexmenu-dropdown-list-text2">Contact Us</a>
                    </div>
                </div>
            </nav>
        </div>
        
    </header>
`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}
customElements.define('header-component', Header);