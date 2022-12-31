var products = {
    ecommerce: ["Blibli", "Bukalapak", "Lazada", "Shopee Indonesia", "Tokopedia", "Zalora" ],
    kartukredit: ["MANDIRI", "BNI", "CIMB Niaga", "Citibank", "Danamon", "Permata" ],
    internet: ["CBN", "First Media", "K Vision", "MNC Vision", "MyRepublic", "Vidio"],
    tiket: ["AirAsia", "Citilink Ticket", "Garuda Indonesia", "KAI", "PegiPegi", "Sriwijaya Air"],     
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
