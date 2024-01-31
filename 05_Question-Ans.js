function packageCalculate(packages){
    let deliveryTime;

    switch (packages) {
        case "standard":
            deliveryTime = "3-5 Days"
            break;
        case "express":
            deliveryTime = "1-2 Days"
            break;
         case "overnight":
            deliveryTime = "tomorrow"
            break;
        default:
            deliveryTime = "not buy any package"
            break;
    }

    console.log(`The package was ${packages} and delivered in ${deliveryTime}`)
}

packageCalculate("standard");
packageCalculate("express");
packageCalculate("overnight");
packageCalculate("");