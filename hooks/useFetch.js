import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = ({ URL, method, body }) => {

  // loading, data, error
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let flag = false;
    const fetchData = async () => {
      try {
        const res = await axios(URL, {
          method,
          data: body,
        });
        if (!flag) {
          setData(res.data);
          setLoading(false);
        }
      } catch (error) {
        if (!flag) {
          setError(error);
          setLoading(false);
        }
      }
    }
    fetchData();
    return () => {
      flag = true;
    }
  }, []);

  return { loading, data, error };
};

export default UseFetch;
