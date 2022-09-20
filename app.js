// https://www.omnicalculator.com/health/pg-e2-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ratioPgE2orPE2Radio = document.getElementById('ratioPgE2orPE2Radio');
const progesteroneRadio = document.getElementById('progesteroneRadio');
const estradiolRadio = document.getElementById('estradiolRadio');

let ratioPgE2orPE2;
let progesterone = v1;
let estradiol = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

ratioPgE2orPE2Radio.addEventListener('click', function() {
  variable1.textContent = 'Progesterone';
  variable2.textContent = 'Estradiol';
  progesterone = v1;
  estradiol = v2;
  result.textContent = '';
});

progesteroneRadio.addEventListener('click', function() {
  variable1.textContent = 'Ratio (Pg/E2 or P/E2)';
  variable2.textContent = 'Estradiol';
  ratioPgE2orPE2 = v1;
  estradiol = v2;
  result.textContent = '';
});

estradiolRadio.addEventListener('click', function() {
  variable1.textContent = 'Ratio (Pg/E2 or P/E2)';
  variable2.textContent = 'Progesterone';
  ratioPgE2orPE2 = v1;
  progesterone = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ratioPgE2orPE2Radio.checked)
    result.textContent = `Ratio (Pg/E2 or P/E2) = ${computeratioPgE2orPE2().toFixed(2)}`;

  else if(progesteroneRadio.checked)
    result.textContent = `Progesterone = ${computeprogesterone().toFixed(2)}`;

  else if(estradiolRadio.checked)
    result.textContent = `Estradiol = ${computeestradiol().toFixed(2)}`;
})

// calculation

function computeratioPgE2orPE2() {
  return (Number(progesterone.value) / Number(estradiol.value)) * 1000;
}

function computeprogesterone() {
  return (Number(ratioPgE2orPE2.value) / 1000) * Number(estradiol.value);
}

function computeestradiol() {
  return Number(progesterone.value) / (Number(ratioPgE2orPE2.value) / 1000);
}