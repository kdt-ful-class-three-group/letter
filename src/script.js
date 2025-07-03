async function load(){
  const res = await fetch('/card')
  const data = await res.json()

  const p = document.querySelector('section > p')
  p.textContent = ''
}

load()