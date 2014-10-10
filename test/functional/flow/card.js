'use strict';
module.exports = function card(nemo) {
    return {
        "addSucess": function(ccNum, ccType) {
            var addCard = nemo.view.addView('addCard');
            addCard.addCardFormWait();
            addCard.cardNumber().sendKeys(ccNum);
            addCard.cardTypeOptionText(ccType);
            addCard.addCardButton().click();
            //wait for addcard success
            return addCard.addCardSuccessWait();
        },
        "addFailure": function(ccNum, ccType) {
            var addCard = nemo.view.addView('addCard');
            console.log('addCard', addCard);
            addCard.addCardFormWait();
            addCard.cardNumber().sendKeys(ccNum);
            addCard.cardTypeOptionText(ccType);
            addCard.addCardButton().click();
            //wait for addcard success
            return addCard.addCardFailureWait();
        }
    };
};
