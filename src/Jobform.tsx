import { useEffect } from "react"

export const Jobform = () => {

  useEffect(() => {
    const navbar = document.getElementById("navbar")
    if (navbar) {
      navbar.style.position = "sticky"
      navbar.style.top = "0"
    }

    return () => {
      if (navbar) {
        navbar.style.position = "static"
      }
    }
  }, [])

  return (
    <div className="flex-col flex-aic">
      <div className="form-container">
        <a>← <u>Back to Job Postings</u></a>
        <h2>PLACEHOLDER</h2>
      </div>
    </div>
  )
}
