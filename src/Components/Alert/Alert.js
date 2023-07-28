import React, { useEffect } from "react"

function Alert({ type, msg, removeAlert, list }) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeOut)
  }, [list])
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
