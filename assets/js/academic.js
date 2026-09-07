document.querySelectorAll('.abstract-toggle').forEach((button) => {
  const abstract = document.getElementById(button.getAttribute('aria-controls'));
  if (!abstract) return;
  abstract.hidden = true;
  button.hidden = false;
  button.addEventListener('click', () => {
    abstract.hidden = !abstract.hidden;
    button.setAttribute('aria-expanded', String(!abstract.hidden));
  });
});
