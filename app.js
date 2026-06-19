const searchInput = document.getElementById('searchInput');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

document.addEventListener('DOMContentLoaded', () => {
    fetchEmployeeData(currentEmployeeId);
});

btnNext.addEventListener('click', () => {
    currentEmployeeId++;
    fetchEmployeeData(currentEmployeeId);
});

btnPrev.addEventListener('click', () => {
    if (currentEmployeeId > 1) {
        currentEmployeeId--;
        fetchEmployeeData(currentEmployeeId);
    }
});


searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const searchedId = parseInt(searchInput.value);
        if (searchedId >= 1) {
            currentEmployeeId = searchedId;
            fetchEmployeeData(currentEmployeeId);
        }
    }
});

async function fetchEmployeeData(id) {
    try {
        // API 1 - Obter dados cadastrais no DummyJSON
        const response1 = await fetch(`https://dummyjson.com/users/${id}`);
        const employeeData = await response1.json();

        // Tratamento caso ID não exista
        if (!employeeData.id) {
            alert("Funcionário não encontrado!");
            return;
        }


