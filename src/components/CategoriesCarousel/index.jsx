/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import api from '../../services/api'

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategoris() {
      const res = await api.get('/categories')

      console.log(res)
    }
    loadCategoris()
  }, []);


  return (
    <div>
      <h1>OK</h1>
    </div>
  )
}
