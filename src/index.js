// -- GLOBAL
import "./styles/main.scss";
import "./styles/fonts.scss";
import "./styles/mixins.scss";
import "./styles/page.scss";
import "./styles/button.scss";
// -- HEADER
import "./styles/main-nav.scss";
// -- MAIN
import "./styles/main-container.scss";
import "./styles/hero.scss";
import "./styles/hero-title.scss";
import "./styles/collaboration.scss";
import "./styles/new.scss";
import "./styles/new-link.scss";
import "./styles/promo.scss";
import "./styles/promo-title.scss";
import "./styles/favourite.scss";
import "./styles/favourite-link.scss";
import "./styles/download.scss";
import "./styles/download-container.scss";
import "./styles/subscribe.scss";
import "./styles/subscribe-form.scss";
//-- mobile_app
import "./styles/mobile-app.scss";
import "./styles/mobile-item.scss";
import "./styles/toolbar.scss";
// --FOOTER
import "./styles/main-footer.scss";
import "./styles/social.scss";
import "./styles/footer-navigation.scss";

    document.getElementById("emailForm").addEventListener("submit", function(event) {
        // Ваш код для проверки формы
        alert("Форма отправлена");
        event.preventDefault(); // Предотвращение стандартного поведения отправки формы
    });
