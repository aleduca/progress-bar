var progressBar = document.querySelector('#progress-bar');
var percentText = document.querySelector('#percent');
var emailsSent = document.querySelector('#emails-sent');

var totalEmails = 500;
var totalPercent = 100;
var percentBar = totalPercent/totalEmails;

var percent = 0;
var sent = 0;
var interval = setInterval(() => {

  if(Number(percent.toFixed(2)) === Number(100.00)){ // !! para quando chegar a 100
    clearInterval(interval);
    console.log('stoped');
  }

  percentText.textContent = percent.toFixed(2)+'%'; // !! mostra a porcentagem
  emailsSent.textContent = sent + ' emails enviados'; // !! mostra emails enviados
  progressBar.setAttribute('value', percent); // !! numero da barra de progresso

  percent+=percentBar; // !! barra de progresso aumenta de acordo com esse valor
  sent++; // !! emails enviados
}, 100); // !! envia email a cada 1 segundo