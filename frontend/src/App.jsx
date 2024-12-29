import bgImage from "./assets/gradient.jpg";
import Display from "./components/Display";
import Form from "./components/Form";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_Backend_url}/image/upload`,
        {
          image: file
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
      );
      if (response.data === 0) return alert("unable to send data")
      toast.success(response.data);
      getData();
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  };

  async function getData() {
    setLoading(true)
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_Backend_url}/image`);
      setImages(response.data);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${import.meta.env.VITE_APP_Backend_url}/image/delete/${id}`);
      toast.success(response.data)
      getData()
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="w-[100vw] min-h-screen bg-cover flex flex-col items-center gap-4 font-Nuntio p-2 lg:flex-row lg:p-10 overflow-y-auto lg:items-start lg:h-[100vh]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Form handleSubmit={handleSubmit} setFile={setFile} loading={loading} />
      <Display images={images} handleDelete={handleDelete} loading={loading} />
      <ToastContainer />
    </div>
  );
}
