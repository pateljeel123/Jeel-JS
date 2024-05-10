// Fetch Data
fetch('https://api.rootnet.in/covid19-in/stats/latest').then(res => res.json()).then(data => getData(data.data.regional))

// Show Data
function getData(data) {
    let store = data.map((el) => showData_inDOM(el.loc, el.confirmedCasesIndian, el.discharged, el.deaths))
    document.querySelector('.to').innerHTML = store.join('');
}

// Show Data in DOM
function showData_inDOM(loc, confirmedCasesIndian, discharged, deaths) {
    let my = `
    <div class="mini-3 d-flex m-auto">
            <div class="state col-lg-3 col-md-4 col-sm-4 col-7 border text-center ">
                <h3>${loc}</h3>
            </div>
            <div class="state col-lg-3 col-md-4 col-sm-4 col-7 border text-center ">
                <h3>${confirmedCasesIndian}</h3>
            </div>
            <div class="state col-lg-3 col-md-4 col-sm-4 col-7 border text-center ">
                <h3>${discharged}</h3>
            </div>
            <div class="state col-lg-3 col-md-4 col-sm-4 col-7 border text-center ">
                <h3>${deaths}</h3>
            </div>
        </div>
    `
    return my;
}