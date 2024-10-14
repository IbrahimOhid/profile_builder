// selector
const showDataElm = document.querySelector("#showData");
const getDataElm = document.querySelector("#getData");

async function handelUserData() {
  const res = await fetch("/json/user.json");
  const userData = await res.json();
  let dataHtml = "";
  userData.forEach((user) => {
    const {id, name, age, email, profession, experience} = user;
    dataHtml += `
        <div class="card text-white mb-3 py-2" style="max-width: 19rem;">
            <div class="card-header"><h4>USER ID : <span class="text-warning">${id}</span></h4></div>
                <div class="card-body">
                    <h5 class="card-title">Name: ${name}</h5>
                        <p class="card-text">Age: ${age}</p>
                        <p class="card-text">Email: ${email}</p>
                        <p class="card-text">Profession: ${profession}</p>
                        <p class="card-text">Experience: ${experience}</p>
                </div>
        </div>
        `;
  });
  showDataElm.innerHTML = dataHtml;
  getDataElm.style.display = 'none';
}

getDataElm.addEventListener("click", handelUserData);
