//var apiUrl = 'http://www.statbureau.org/calculate-inflation-price-jsonp?jsoncallback=?';
var app = new Vue({
	el:"#app",
  data:{
  selected:0,
  //selected:{name:"Dmanai",currencySign:"$",avgInfl:.0312,flag:"X",val:0}, make selected an object?
  	countries:[
    	{name:"USA",currencySign:"$",avgInfl:.0312,flag:"X",val:0}, //avgInf = (105 / (2018_value - 1913_value)) (values in cents)
      {name:"DR",currencySign:"RD$",avgInfl:2.4,flag:"X",val:1},
      {name:"Japan",currencySign:"Y",avgInfl:1.09,flag:"X",val:2},
      {name:"Brazil",currencySign:"R",avgInfl:.32,flag:"X",val:3},
    ],
    startYear:1913,
    endYear:2018,
    amount_to_convert:100.0,
    new_amount:0.0,
  },
  methods:{
  	calc_avg_infl:function(){
    	let diff_years = this.startYear - this.endYear
      
    },
    calc_new_value:function(){
    		this.new_amount = (this.diff * this.countries[i].avgInfl)
    		return this.new_amount 
    }
  }
})
