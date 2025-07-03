let currentIndex = 0
let messages=[]

async function load(){
  const res = await fetch('/card')
  messages = await res.json()

  showCard()
}

function showCard(){
  const p = document.querySelector('section p')
  if (currentIndex < messages.length){
    const msg = messages[currentIndex]
    p.textContent = msg.content || ''

    // 이미지 위치
    const imgDiv = document.getElementById('charac')
    const maxRight = 75; //마지막 위치
    const step = (maxRight) / (messages.length -1);
    const newStep = 10 + currentIndex*step

    imgDiv.style.left = `${newStep}%`
  } else {
    console.log('카드 완료')
  }
  
}

// 클릭이벤트
// document.addEventListener('DOMContentLoaded',()=>{
  const img = document.querySelector('#charac img');
  img.addEventListener('click',()=>{
    currentIndex++;
    if(currentIndex<messages.length){
      showCard()
    }
  })
// })

load()

