/* -------------------------- Examples page -------------------------- */

const dropdowns = document.querySelectorAll('#dropdowns')
const dropdownsInnerHTML = [...dropdowns].map(item=>item.innerHTML).sort(()=>.5-Math.random())

Array.from(dropdowns).forEach((item, index)=>{

  item.innerHTML = dropdownsInnerHTML[index]

  const currentDropdown = item
  const currentContent = currentDropdown.querySelector('.dropdownContent')

  /* -------------------------- 
    1. 当鼠标移入currentDropdown时
    2. 检测currentContent底部和右边的边界是否超出屏幕
    3. 如果超出屏幕，则让content移动到标签上方去
  -------------------------- */

  currentDropdown.addEventListener('mouseover', ev=>{
    const contentRect = currentContent.getBoundingClientRect()
    const maxWidth = window.innerWidth - 20
    const maxHeight = window.innerHeight - 20

    if(contentRect.bottom > maxHeight && contentRect.right > maxWidth){
      currentContent.style.transform = `translateY(${-10-currentDropdown.offsetHeight-contentRect.height}px) translateX(${maxWidth-contentRect.right-15}px)`
    }else {
      if(contentRect.bottom > maxHeight){
        currentContent.style.transform = `translateY(${-10-currentDropdown.offsetHeight-contentRect.height}px)`
      }
      if(contentRect.right > maxWidth){
        currentContent.style.transform = `translateX(${maxWidth-contentRect.right-15}px)`
      }
    }

  })
})