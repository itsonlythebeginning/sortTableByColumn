


let tableOne = document.querySelector(".table_one")


function sortTableByColumn(table, column, asr = true){

    let dirModifier

    if (asr === true) {

        dirModifier = 1

    }

    else {

        dirModifier = -1

    }

    let tbody = tableOne.tBodies[0]

    let rows = Array.from(tbody.querySelectorAll("tr"))

    let sortedRows = rows.sort(function (a, b) {

        let aSortElement = a.querySelectorAll("td")[`${column}`].textContent.trim()
        let bSortElement = b.querySelectorAll("td")[`${column}`].textContent.trim()

        if (aSortElement > bSortElement) {

            return dirModifier * 1

        }

        else {

            return dirModifier * (-1)

        }
    })

    for (let i = 0; i < rows.length; i ++) {
        rows[i].remove()
    }

    tbody.append(...sortedRows)

}


let tableHead = tableOne.tHead.querySelector("tr")

let tableHeadArr = Array.from(tableHead.querySelectorAll("th"))

for (let i = 0; i < tableHeadArr.length; i++) {

    tableHeadArr[i].addEventListener("click", function (event) {


        if (tableHeadArr[i].querySelector(".thead_title").classList.contains("active")) {

            tableHeadArr[i].querySelector(".thead_title").classList.remove("active")
            asr = true
        }

        else {

            tableHeadArr[i].querySelector(".thead_title").classList.add("active")
            asr = false
        }

        sortTableByColumn(tableOne, i, asr)

    })

}


