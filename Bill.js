let data = {
    companyName: 'Katawut',
    companyAddr: ["1912 Harvest Lane", "New York, NY 12210"],
    billToName: "john smith",
    billToAddress: ["1912 Harvest Lane", "New York, NY 12210"],
    billDate: "6/15/96 to 7/14/96",
    biiAccount:"Account Number 000-001",

    item: [
        {
            name: "Air Conditioning",
            price: "44.38",
            low: "7.76",
            med: "15.64",
            high: "9.23",
            avg: "1.53"
        },
        {
            name: "Water Heater",
            price: "23.92",
            low: "12.43",
            med: "15.38",
            high: "0",
            avg: "0.82"
        },
        {
            name: "Dryer",
            price: "8.54",
            low: "2.87",
            med: "5.67",
            high: "0",
            avg: "0.29"
        },
        {
            name: "Other",
            price: "22.77",
            low: "3.62",
            med: "12.23",
            high: "4.58",
            avg: "0.79"
        },
        {
            name: "MONTHLYTOTAL",
            price: "99.61",
            low: "26.68",
            med: "48.92",
            high: "13.81",
            avg: "3.43"
        }
    ]
}

window.addEventListener("DOMContentLoaded", () => {
     document.getElementById('company-name').innerText = data.companyName

     let str = ''
     for (let i = 0; i < data.companyAddr.length; i++) {
         str = str + data.companyAddr[i] + '<br>'
     }
     console.log(str)
     document.getElementById('company-addresses').innerHTML = str

     document.getElementById('bill-to-name').innerHTML = data.billToName
     document.getElementById('bill-to-addresses').innerHTML = data.billToAddress
     document.getElementById('bill-to-date').innerHTML = data.billDate
     document.getElementById('bill-to-account').innerHTML = data.biiAccount




 str = ''
 data.item.forEach((item) => {
    let rowClass = item.name === "MONTHLYTOTAL" ? "body1" : "body";
    str += `
    <tr class="${rowClass}">
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td>$${item.low}</td>
        <td>$${item.med}</td>
        <td>$${item.high}</td>
        <td>$${item.avg}</td>
    </tr>
    `;
    document.getElementById('items').innerHTML = str;
});



 
})



