/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import api from '../../services/api'

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategoris() {
      const { data } = await api.get('/categories')

      setCategories(data);
      console.log(data);
    }
    
    loadCategoris()
  }, []);


  return (
    <div>
      <h1>OK</h1>
    </div>
  )
}
