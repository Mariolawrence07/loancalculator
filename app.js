// listen for submit
document.getElementById('loan-form').addEventListener('submit', function( e) {
    document.getElementById('loan-form').style.display=none;
    document.querySelector('.results').style.display = none;

    
    e.preventDefault();
});


// calculate results
function calculateResults(){
    const amount = document.getElementById('amount');
    const intrest = document.getElementById('intrest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalIntrest = document.getElementById('total-intrest');
    
    const principal = parseFloat(amount.value);
    const calculatedIntrest = parseFloat(intrest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) *12;
    
    
    // compute monthly payment
    const x = Math.pow(1+calculatedIntrest, calculatedPayments);
    const monthly = (principal*x*calculatedIntrest)/(x-1);
    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalIntrest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    } else {
        alert('please check your numbers'); 
    }
    
    

}