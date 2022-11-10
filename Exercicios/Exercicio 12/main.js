var Dados = [
    {
        Nome: "João Resende",
        Idade: "18",
        Telefone: "916806250",
        Email: "joaoresende24@hotmail.com",
        localidade: "Porto",
        CodigoPostal: "4450",
    },
    {
        Nome: "João Paulo",
        Idade: "19",
        Telefone: "916549234",
        Email: "joaopaulo24@hotmail.com",
        localidade: "Alverca",
        CodigoPostal: "2300",
    },  
];

function ver() {
   
    Dados.forEach(mostrar);
}

function mostrar(Dados){
    const {Nome,Idade,Telefone,Email,localidade,CodigoPostal } = Dados;

    document.getElementById("div1").innerHTML += `
    <p id="Nome"> Nome: ${Nome}</p>
    <p id="Idade"> Idade: ${Idade} </p>
        <p id="p1"> Telefone: ${Telefone} </p>
        <p id="p2"> Email:${Email} </p>
        <p id="p3"> Localidade: ${localidade} </p>
        <p id="p4"> Codigo Postal: ${CodigoPostal}</p>

<hr />
`;
};