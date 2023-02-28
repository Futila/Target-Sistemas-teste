// let SP = parseFloat(67.83643);
// let RJ = parseFloat(36.67866);
// let MG = parseFloat(29.22988);
// let ES = parseFloat(27.16548);
// let Outros = parseFloat(19.84953);

const states = [
  { name: "SP", faturamento: parseFloat(67.83643) },
  { name: "RJ", faturamento: parseFloat(36.67866) },
  { name: "MG", faturamento: parseFloat(29.22988) },
  { name: "ES", faturamento: parseFloat(27.16548) },
  { name: "Outros", faturamento: parseFloat(19.84953) },
];

function getStatesRespresentationPercentual(states) {
  const somaTotalFaturamento = states.reduce((acc, state) => {
    return acc + state.faturamento;
  }, 0.0);

  let statesRepresentationPercentual = [];

  for (let i = 0; i < states.length; i++) {
    let percentual = (
      (states[i].faturamento / somaTotalFaturamento) *
      100
    ).toFixed(2);
    statesRepresentationPercentual.push({
      state: states[i].name,
      percentual: `${percentual} %`,
    });
  }

  return statesRepresentationPercentual;
}

let statesRepresentatioPercentual = getStatesRespresentationPercentual(states);

console.log(statesRepresentatioPercentual);
