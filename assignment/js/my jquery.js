$(document).ready(function() {

  /* =====================
   Your jQuery code here
  ===================== */
  $('#text-input1').prop('disabled',false);
  $('#text-input2').prop('disabled',false);
  $('#text-input3').prop('disabled',false);

  $('#text-input2').attr('type', "number");
  $('#text-input3').attr('type', "number");

  $('button').click(function(){
    var dat={
      dataset:$('#text-input1').val(),
      lat:$('#text-input2').val(),
      long: $('#text-input3').val(),
    };
    console.log(dat);
  });


var obj = {
  dataset: 'https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-solar-installations.json',
  lat: 39.966179,
  long: -75.193481,
};

var matchobj=function(obj){
  $('#text-input1').val(obj.dataset);
  $('#text-input2').val(obj.lat);
  $('#text-input3').val(obj.long);

  var obj2= {
    dataset: obj.dataset,
    lat: obj.lat,
    long: obj.long,
  };
  $('button').click(function(){
    L.marker([$('#text-input2').val(),$('#text-input3').val()]).addTo(map);
    console.log('obj',obj);
    console.log('obj2',obj2);
    console.log('obj and obj2 are equal:',_.isEqual(obj, obj2));
  });

};

matchobj(obj);
});
