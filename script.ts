function getTicketInfo(id: string | number) {
    if (typeof id ==="string"){
        const parsedID=id.split("-")[1]
        const numberID =parseInt(parsedID)
        return `Processing ticket : ${numberID}`

    }
     return `Processing ticket : ${id}`
    
}

export function calculateApiCost(numReqs: number, tier?: string ) {
   if (tier ==="pro"){
       let APICost: number;
       APICost = 0.05 * numReqs;
       return APICost;

   }
    if (tier ==="enterprise"){
        let APICost: number;
        APICost = 0.03 * numReqs;
        return APICost;

    }
    let APICost: number;
    APICost = 0.1 * numReqs;
    return APICost;
}


console.log(calculateApiCost(23,"pro"));
console.log(getTicketInfo("support-34"));

export const estimateResponseTime = (promptLength: number =100, modelType:string ="text") => {
    let responseTime: number;
    if (modelType === "text"){
       responseTime= 2 + (0.01 * promptLength);
    }

    if (modelType === "image"){
        responseTime= 5 + (0.02 * promptLength);
    }
    if (modelType === "code"){
        responseTime= 3 + (0.05 * promptLength);
    }
    responseTime =0;
    return responseTime.toFixed(1)
  
}
console.log(estimateResponseTime(100, "ere"))