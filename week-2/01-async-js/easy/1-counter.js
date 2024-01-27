var count = 0;
const cbfunc = function(){
    console.log(count)
    count+=1;
}
setInterval(cbfunc,1000);
