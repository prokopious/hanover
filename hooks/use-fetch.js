import { useState } from "react"
import { useEffect } from "react"

export default function useFetch() {
  const [todo, setTodo] = useState([])

  useEffect(() => {
    let isComponentMounted = true
    const fetchData = async () => {
      const response = await fetch(
        "http://www.localhost:3000/api/users"
      )
      const newData = await response.json()
      if (isComponentMounted) {
        setTodo(newData)
      }
    }
    fetchData()
    return () => {
      isComponentMounted = false
    }
  }, [])
  return todo;
}
