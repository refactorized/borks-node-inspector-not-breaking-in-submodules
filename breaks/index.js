/*jshint debug:true */
// break executed on require:
//debugger;
console.log('post-require break, should have happened by now');

function cb(){
  debugger;
  console.log('break inside of a called back function should have happened by now');
}

function doCb(cb){
  cb();
}

module.exports = {
  simpleCall : function(){
    debugger;
    console.log('break inside of simple function should have happened by now');
  },
  deferredCall : function(){
    setTimeout(function(){
        debugger;
        console.log('break inside of a nested/deferred call should have happened by now');
    }, 1);
  },
  calledBack : function(){
    doCb(cb);
  }
};
