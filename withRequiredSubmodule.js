var breaks = require('breaks');

breaks.simpleCall();
breaks.deferredCall();
breaks.calledBack();

// don't exit
process.on('exit', function(){
  console.log('looping forever... ctrl+c to break');
  while(true);
});
