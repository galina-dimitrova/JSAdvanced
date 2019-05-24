
function solve(arr, str) {
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = +price;
            this.status = status
        }
        
    }
    let tickets = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split('|');
        let ticket = new Ticket(tokens[0], tokens[1], tokens[2]);
        tickets.push(ticket);
    }
    return sortArr(str)

    function sortArr(criteria) {
        // return tickets.sort((a,b) => a[criteria]>b[criteria])

        if (criteria === 'destination') {
            return tickets.sort((a,b) => a.destination>b.destination)
        } else if (criteria === 'price') {
            return tickets.sort((a,b) => a.price-b.price)
        }else if (criteria === 'status') {
            return tickets.sort((a,b) => a.status>b.status)
        }
    }
    // sortedTickets.forEach(ticket=> {
    //     console.log(JSON.stringify(ticket));
    // });
    
}

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|available',
'Philadelphia|132.20|departed',
'Chicago|140.20|available',
'Dallas|144.60|sold',
'New York City|206.20|sold',
'New York City|240.20|departed',
'New York City|305.20|departed'],
'price')