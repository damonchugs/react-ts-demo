import {useEffect, useState} from 'react';
import axios from 'axios'

const useUrlLoading = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>({message: ''})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setData({ message: "https://images.dog.ceo/breeds/bouvier/n02106382_3856.jpg", status: "success" })
      setLoading(false)
    }, 1000);
    // axios.get(url).then(Response => {
    //   setData(Response.data)
    //   setLoading(false)
    // })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return [data, loading];
};

export default useUrlLoading;
