let buttons = document.querySelectorAll('button')

buttons.forEach((btns)=>{
  btns.addEventListener('click',()=>{
      const target = btns.getAttribute('data-target')

      document.querySelectorAll('div').forEach((div)=>{
        div.id == target? div.classList = 'active' : div.classList = ''
      })
      
  })
})

