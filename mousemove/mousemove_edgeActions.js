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
         this.onMove=function(posX, posY){
         timelinecontrol = Number(posX)*15;
         console.log(timelinecontrol);
         sym.stop(timelinecontrol);
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         this.onMove(e.pageX, e.pageY);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'logo'
   (function(symbolName) {   
   
   })("logo");
   //Edge symbol end:'logo'

   //=========================================================
   
   //Edge symbol: 'bottomText'
   (function(symbolName) {   
   
   })("bottomText");
   //Edge symbol end:'bottomText'

})(jQuery, AdobeEdge, "EDGE-19727300");