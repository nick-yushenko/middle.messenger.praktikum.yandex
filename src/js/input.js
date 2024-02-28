const init = () => {
  const inputs = document.querySelectorAll(".input")

  inputs.forEach(input => {
    const field = input.querySelector("input")
    const hint = input.querySelector(".hint")

    if (!field || !hint) return

    const __CLASSES__ = {
      focused: "focused",
      filled: "filled",
    }

    if (field.value)
      input.classList.add(__CLASSES__.filled)

    field.addEventListener("focus", () => {
      input.classList.add(__CLASSES__.focused)
    })
    field.addEventListener("blur", () => {
      input.classList.remove(__CLASSES__.focused)
    })
    field.addEventListener("change", () => {
      if (field.value.length === 0)
        input.classList.remove(__CLASSES__.filled)
      else
        input.classList.add(__CLASSES__.filled)
    })

  })

}

export default init;
