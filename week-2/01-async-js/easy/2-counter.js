var count = 0;
const cbfunc = function(){
    console.log(count)
    count+=1;
    setTimeout(cbfunc, 1000)
}
setTimeout(cbfunc, 0);