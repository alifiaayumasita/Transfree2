var products = {
    pln: ["PLN Prabayar", "PLN PrePaid Advice"],
    ewallet: ["DANA", "GoPay", "LinkAja", "OVO", "ShopeePay"],
    pulsa: ["Telkomsel", "Indosat Ooredoo Hutchison", "XL Axiata", "Smartfren"]    
}

var main = document.getElementById("product-form");
var sub = document.getElementById("provider-form");

main.addEventListener('change', function(){
  var selected_option = products[this.value];
  while(sub.options.length > 0){
    sub.options.remove(0);
  }
  
  Array.from(selected_option).forEach(function(el){
    let option = new Option(el, el);
    sub.appendChild(option);
  });
  
});
