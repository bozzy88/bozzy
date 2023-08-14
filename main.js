const input = document.getElementById('input');
const lis = document.querySelectorAll('.products li, .product li');

  input.addEventListener('input', () => {
      const searchTerm = input.value.trim().toLowerCase();

      lis.forEach(li => {
          const span = li.querySelector('span');
          if (span.textContent.toLowerCase().includes(searchTerm)) {
              li.style.display = 'block';
              li.style.scale = 1;
              li.style.position = "fixed";
              li.style.top =  "670px";
              
           }
          else {
              li.style.display = 'none';
          }
      });
  });