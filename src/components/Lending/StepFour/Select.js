import React from 'react';

const entidadesBancarias = [
  { name: 'BANCO PICHINCHA' },
  { name: 'BANCO DE CREDITO' },
  { name: 'BBVA CONTINENTAL' },
  { name: 'BANCO INTERBANK' },
  { name: 'BANCO DE LA NACION' },
  { name: 'MI BANCO' },
  { name: 'SCOTIABANK' },
];

const select = ({ onChange, bankChoice }) => {
  const selected = entidadesBancarias.map(doc => (
    <select className="border-yellow-input" name="bank" value={bankChoice} onChange={onChange}>
      <option value={doc.name}>{doc.name}</option>
    </select>
  ));

  return (
    <>
      {selected}
    </>
  );
};


export default select;
