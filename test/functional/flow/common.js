'use strict';
module.exports = function common(nemo) {
    return {
        "login": function(email, psswd) {
            var login = nemo.view.addView('login');
            nemo.driver.get(nemo.props.targetBaseUrl);
            //login
            login.loginFormWait();
            login.email().sendKeys(email);
            login.password().sendKeys(psswd);
            return login.loginButton().click();
        },
        "logout": function() {
            var nav = nemo.view.addView('nav');
            return nav.logoutLink().click();
        }
    };
};
