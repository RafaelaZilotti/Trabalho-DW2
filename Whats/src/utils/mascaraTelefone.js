export function mascaraTelefone(valor) {
    valor = valor.replace(/\D/g, "");
    
    if (valor.length > 2 && valor.length <= 7) {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    } else if (valor.length > 7 && valor.length <11) {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 6)}-${valor.slice(6, 11)}`;
    } else if (valor.length >= 11){
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 12)}`;
    }
  
    return valor;
};