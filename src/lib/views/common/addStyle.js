const tableStyle = `
      table, th, td {
        border: 1px solid black;
      }
  `;
export default () => {
  const $head = document.querySelector("head");
  $head.innerHTML = `<style>
      ${tableStyle}
    </style>`;
};
