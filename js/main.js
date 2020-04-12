
function exportCSV(records) {
  const data = records.map((record)=>record.join(',')).join('\r\n');

  const bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
  const blob = new Blob([bom, data], {type: 'text/csv'});
  const url = (window.URL || window.webkitURL).createObjectURL(blob);
  const link = document.createElement('a');
  link.download = 'result.csv';
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



const holder = document.querySelector('.member-list')
names.forEach(name => {
  const li = document.createElement('div')
  li.textContent = `・${name}`
  holder.appendChild(li)
})
const memberNnum = names.length
document.querySelector('#member-num').textContent = `対象者（${memberNnum}名）`

const data = [
  ["aaaa","cccc"],
  ["bbbb","dddd"],
]
document.querySelector('#done').addEventListener('click',() => {
  exportCSV(data)
})
