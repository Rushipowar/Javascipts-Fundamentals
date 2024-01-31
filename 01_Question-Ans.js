function OuterFunc(p){
    let a = 0;

    function InnerFunc(){
        a += 1
        console.log("a vlaue", a)
        p += 1
        console.log("p value", p)
    }

    return InnerFunc()
}


let MyFunc = OuterFunc(2)

