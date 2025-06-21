import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Add = ({ token }) => {
  const navigate = useNavigate()

  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)
  const [image4, setImage4] = useState(null)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const toggleSize = (size) => {
    setSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!token) {
      toast.error("You are not logged in.")
      navigate('/login')
      return
    }

    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('category', category)
    formData.append('subCategory', subCategory)
    formData.append('bestseller', bestseller)
    formData.append('sizes', JSON.stringify(sizes))
    if (image1) formData.append('image1', image1)
    if (image2) formData.append('image2', image2)
    if (image3) formData.append('image3', image3)
    if (image4) formData.append('image4', image4)

    try {
      const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      })

      if (response.data.success) {
        toast.success("Product added successfully!")
        // reset form
        setName("")
        setDescription("")
        setPrice("")
        setCategory("Men")
        setSubCategory("Topwear")
        setBestseller(false)
        setSizes([])
        setImage1(null)
        setImage2(null)
        setImage3(null)
        setImage4(null)
      } else {
        toast.error(response.data.message || "Product add failed.")
      }

    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Not authorized. Please login again.")
        localStorage.removeItem('token')
        navigate('/login')
      } else {
        console.error("Error adding product:", error)
        toast.error("Server error. Could not add product.")
      }
    }
  }

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0]
    if (file) setImage(file)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-4xl mx-auto gap-6 px-4 py-6">
      <div>
        <p className="mb-3 text-lg font-medium text-gray-800">Upload Images</p>
        <div className="flex gap-4 flex-wrap">
          {[1, 2, 3, 4].map((n) => {
            const image = n === 1 ? image1 : n === 2 ? image2 : n === 3 ? image3 : image4
            const setImage = n === 1 ? setImage1 : n === 2 ? setImage2 : n === 3 ? setImage3 : setImage4
            return (
              <label key={n} htmlFor={`image${n}`} className="cursor-pointer">
                <img
                  className="w-24 h-24 object-cover border-2 border-dashed border-gray-300 rounded hover:border-pink-400 transition"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt={`Upload ${n}`}
                />
                <input
                  type="file"
                  id={`image${n}`}
                  hidden
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setImage)}
                />
              </label>
            )
          })}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">Product Name</p>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
          className="w-full max-w-2xl px-4 py-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">Description</p>
        <textarea
          rows={4}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter product description"
          className="w-full max-w-2xl px-4 py-2 border border-gray-300 rounded resize-none"
        ></textarea>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <p className="mb-2 text-sm font-medium text-gray-700">Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 border rounded"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Children</option>
          </select>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium text-gray-700">Subcategory</p>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="px-3 py-2 border rounded"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium text-gray-700">Price</p>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="₹1200"
            className="px-3 py-2 border rounded"
          />
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">Select Sizes</p>
        <div className="flex gap-3 flex-wrap">
          {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
            <p
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-3 py-1 cursor-pointer rounded border ${sizes.includes(size) ? 'bg-black text-white' : 'bg-slate-200'}`}
            >
              {size}
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={() => setBestseller(!bestseller)}
        />
        <label htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button
        type="submit"
        className="w-28 py-3 mt-4 bg-black text-white hover:bg-pink-600 transition rounded"
      >
        ADD
      </button>
    </form>
  )
}

export default Add
