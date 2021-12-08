/* Helping instument */

function getValue (idName){
const getInputId = document.getElementById(idName);
const getInput = getInputId.innerText;
const getInputValue = parseInt(getInput);
return getInputValue;
}

/* Main operations */

function common (buttonID, targetID, price){
    document.getElementById(buttonID).addEventListener('click', function(){
        const targetInput = document.getElementById(targetID);
        targetInput.innerText = price;  

       const basePrice= getValue('base-price');
       const memoPrice= getValue('extra-memo');
       const storePrice= getValue('extra-sto');
       const shippingPrice= getValue('extra-dlc');
       const costSum = document.getElementById('sub-total');
       costSum.innerText = basePrice + memoPrice + storePrice + shippingPrice;
       const total = document.getElementById('total');
       total.innerText = costSum.innerText;
       
    });

}

/* Price value using variables */
const baseMemo = 0;
const extraMemo = 100;
const basestore = 0;
const mediumstore = 100;
const extrastore = 180;
const freeshipping = 0;
const extrashipping = 20;

/* markup set by functions */

common('base-memo','extra-memo', baseMemo,);
common('paid-memo','extra-memo', extraMemo,);
common('base-sto','extra-sto', basestore);
common('center-sto','extra-sto', mediumstore);
common('paid-sto','extra-sto', extrastore);
common('base-deli','extra-dlc', freeshipping);
common('paid-deli','extra-dlc', extrashipping);

/* Promo Code Set */
document.getElementById('promo-apply').addEventListener('click', function(){
    const promoInput = document.getElementById('promo-input');
    const promoValue = promoInput.value;

    if (promoValue == 'stevekaku'){
        
        const Promototal = document.getElementById('total');
        const PromoTotalInput = Promototal.innerText;
        const PTotalInValue = parseInt(PromoTotalInput);
        const PTotalFinalValue = PTotalInValue * 0.2
        const finalPrice = PTotalInValue - PTotalFinalValue
        const fixPrice = parseInt(finalPrice);
        Promototal.innerText = fixPrice;
        
    }

})
