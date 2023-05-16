const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const item4 = document.querySelector('.item4')
const item5 = document.querySelector('.item5')
const sub1 = document.querySelector('.one')
const sub2 = document.querySelector('.two')
const sub3 = document.querySelector('.three')
const sub4 = document.querySelector('.four')
const sub5 = document.querySelector('.five')

item1.addEventListener('click', function () {
  if (sub1.style.display === 'none') {
    sub1.style.display = 'flex'
  } else {
    sub1.style.display = 'none'
  }
})

item2.addEventListener('click', function () {
  if (sub2.style.display === 'none') {
    sub2.style.display = 'flex'
  } else {
    sub2.style.display = 'none'
  }
})

item3.addEventListener('click', function () {
  if (sub3.style.display === 'none') {
    sub3.style.display = 'flex'
  } else {
    sub3.style.display = 'none'
  }
})
item4.addEventListener('click', function () {
  if (sub4.style.display === 'none') {
    sub4.style.display = 'flex'
  } else {
    sub4.style.display = 'none'
  }
})

item5.addEventListener('click', function () {
  if (sub5.style.display === 'none') {
    sub5.style.display = 'flex'
  } else {
    sub5.style.display = 'none'
  }
})
