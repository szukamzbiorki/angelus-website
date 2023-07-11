export default defineNuxtRouteMiddleware((to, from) => {
  setTimeout(()=>{
    console.log(to.name)
    let all = document.querySelectorAll(".headerlink")
    all.forEach(one => {
      one.classList.remove("on")
    })
    if(to.name != "index"){
      let name = to.name!.toString();
      let chosen = document.querySelector("." + name)
      chosen!.classList.add("on")
    }
  }, 200)

})