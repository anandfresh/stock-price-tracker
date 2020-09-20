import { useState, useEffect } from 'react';

const useNewUpdate = () => {
  const [newStockUpdate, setNewStockUpdate] = useState([]);
  const [updatedTime, setUpdatedTime] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('wss://ws.sfox.com/ws');
    socket.onmessage = (event) => {
      setNewStockUpdate(JSON.parse(event.data));
      setUpdatedTime(event.timeStamp);
    };

    socket.onerror = () => {
      console.log('error');
    };
  }, []);

  return [newStockUpdate, updatedTime];
};

export default useNewUpdate;
