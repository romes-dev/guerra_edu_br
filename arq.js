let fixedItem = null;

function fixImage(element) {
  if (fixedItem) {
    fixedItem.classList.remove('fixed'); // Remove o zoom fixado da imagem anterior
  }
  if (fixedItem === element) {
    fixedItem = null; // Desfixa se clicar na mesma imagem
  } else {
    element.classList.add('fixed'); // Aplica zoom e fixa
    fixedItem = element;
  }
}
