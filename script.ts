
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
      return  responseTime= 2 + (0.01 * promptLength);
    }

    if (modelType === "image"){
         return  responseTime= 5 + (0.02 * promptLength);
    }
    if (modelType === "code"){
       return  responseTime= 3 + (0.05 * promptLength);
    }
    responseTime =0;
    return responseTime.toFixed(1)
  
}
console.log(estimateResponseTime(100, "ere"))

export type Mail = {
    body: string,
    from: string,
    subject: string,
    to: string[],
    urgent: boolean,
}

export function processMail(mail:Mail) {
    return`
    From: ${mail.from}
    To: ${mail.to}
    Subject: ${mail.subject}
    Body: ${mail.body}
    Urgent: ${mail.urgent}
    `
}

   const student= { from:"FUTA",
    to:["akure"],
    subject:"math",
    body:"head",
    urgent: true}

console.log(processMail(student));

const set= new Set<boolean>();
set.add(true );

console.log(set);
const map =new Map<string,Mail>();
map.set("First",student)
console.log(map);

let a ="boy" as const



export type Ticket = readonly [id: number, comment: string, label?: string];

export function formatTicket(ticket: Ticket): string {
    const [id, comment, label] = ticket;
    return `#${id} ${comment} [${label ? label:""}]`;
}
console.log(formatTicket([23,"yererfe"]))

export function pluckEmails<T extends { email: string }>(arr: T[]) {
    return arr.map(a=>a.email);
}