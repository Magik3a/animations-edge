/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         yepnope({
         	load:"http://cdn.edgecommons.org/an/1.0.0/js/min/EdgeCommons.js",
         	complete: function(){
         		EC.debug("Commons ready: "+EC.VERSION);
         		EC.centerStage(sym);
         		EC.Parallax.setup(sym);
         	}
         });
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'pageTwo'
   (function(symbolName) {   
   
   })("pageTwo");
   //Edge symbol end:'pageTwo'

   //=========================================================
   
   //Edge symbol: 'page3'
   (function(symbolName) {   
   
   })("page3");
   //Edge symbol end:'page3'

   //=========================================================
   
   //Edge symbol: 'round'
   (function(symbolName) {   
   
   })("round");
   //Edge symbol end:'round'

   //=========================================================
   
   //Edge symbol: 'flower'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_MTLLboErc}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         sym.stop();
         

      });
      //Edge binding end

   })("flower");
   //Edge symbol end:'flower'

   //=========================================================
   
   //Edge symbol: 'pageOneBack'
   (function(symbolName) {   
   
   })("pageOneBack");
   //Edge symbol end:'pageOneBack'

   //=========================================================
   
   //Edge symbol: 'cloudText'
   (function(symbolName) {   
   
   })("cloudText");
   //Edge symbol end:'cloudText'

   //=========================================================
   
   //Edge symbol: 'stupidyti'
   (function(symbolName) {   
   
   })("stupidyti");
   //Edge symbol end:'stupidyti'

   //=========================================================
   
   //Edge symbol: 'minions'
   (function(symbolName) {   
   
   })("minions");
   //Edge symbol end:'minions'

   //=========================================================
   
   //Edge symbol: 'destroy'
   (function(symbolName) {   
   
   })("destroy");
   //Edge symbol end:'destroy'

   //=========================================================
   
   //Edge symbol: 'paralax'
   (function(symbolName) {   
   
   })("paralax");
   //Edge symbol end:'paralax'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

})(jQuery, AdobeEdge, "EDGE-6624565");