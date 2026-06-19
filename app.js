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

        // Preenchendo o Lado Direito do Card e o ID
        empName.textContent = `${employeeData.firstName} ${employeeData.lastName}`;
        empTitle.textContent = employeeData.company.title;
        empDept.textContent = employeeData.company.department;
        empEmail.textContent = employeeData.email;
        empIdText.textContent = `ID: ${employeeData.id}`;

       // Obtendo o gênero para filtrar a segunda API
        const employeeGender = employeeData.gender;

        // API 2 - Obter foto coerente visualmente no Random User
        const response2 = await fetch(`https://randomuser.me/api/?gender=${employeeGender}`);
        const photoData = await response2.json();

        // Extraindo imagem de maior definição disponível (large)
        const photoUrl = photoData.results[0].picture.large;
        
        // Atualizando Lado Esquerdo do Card
        profilePic.src = photoUrl;

    } catch (error) {
        console.error("Erro na comunicação com as APIs:", error);
    }
}