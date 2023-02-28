const invoicingDistributorDatas = require("./dados.json");

// const values = [
//   {
//     dia: 1,
//     valor: 22174.1664,
//   },
//   {
//     dia: 2,
//     valor: 24537.6698,
//   },
//   {
//     dia: 3,
//     valor: 26139.6134,
//   },
// ];

function getMaxInvoicingValueInAMonthDay(invoicingDistributorDatas) {
  const maxValue = invoicingDistributorDatas.reduce(function (prev, current) {
    return prev.valor > current.valor ? prev : current;
  });

  return `O maior valor de faturamento do mês ocorreu no ${maxValue.dia} e é equivalente a R$ ${maxValue.valor}`;
}

function getMinInvoicingValueInAMonthDay(invoicingDistributorDatas) {
  const minValue = invoicingDistributorDatas.reduce(function (prev, current) {
    return current.valor < prev.valor ? current : prev;
  });

  return `O menor valor de faturamento do mês ocorreu no ${minValue.dia} e é equivalente a R$ ${minValue.valor}`;
}

function daysQuantitiesWithBiggerInvoicing(invoicingDistributorDatas) {
  let somaMensal = 0.0,
    mediaMensal = 0.0;
  let countOffDays = 0;
  let countDaysWithBiggerInvoicing = 0;

  for (let i = 0; i < invoicingDistributorDatas.length; i++) {
    if (parseFloat(invoicingDistributorDatas[i].valor, 2) !== 0.0) {
      somaMensal =
        somaMensal + parseFloat(invoicingDistributorDatas[i].valor, 2);
      countOffDays++;
    }
  }

  mediaMensal = (somaMensal / countOffDays).toFixed(3);

  for (let i = 0; i < invoicingDistributorDatas.length; i++) {
    if (invoicingDistributorDatas[i].valor > mediaMensal) {
      countDaysWithBiggerInvoicing++;
    }
  }

  return `${countDaysWithBiggerInvoicing} in months with bigger invoicing than the
  monthly average`;
}

//FUNCTIONS CALLS
console.log(getMaxInvoicingValueInAMonthDay(invoicingDistributorDatas));
console.log(getMinInvoicingValueInAMonthDay(invoicingDistributorDatas));
console.log(daysQuantitiesWithBiggerInvoicing(invoicingDistributorDatas));
