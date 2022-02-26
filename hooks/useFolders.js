import { useState, useEffect } from 'react';
import axios from 'axios';

const UseFolders = () => {

  const [folders, setFolders] = useState([]);
  const [loadingFolders, setLoadingFolders] = useState(true);

  const getFolders = async () => {
    const res = await axios.get('/api/folders');

    console.log(res.data);
    
    setFolders(res.data.folders);
    setLoadingFolders(false);
  }

  useEffect(getFolders, []);
  
  return { folders, setFolders, loadingFolders }
}

export default UseFolders
