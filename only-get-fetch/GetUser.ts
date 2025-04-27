import axios from 'axios';

export const getUser = ({currentPage, setIsLoading, setUsers, users}) => {
  setIsLoading(true);
  axios
    .get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
    .then(res => {
      setUsers([...users, ...res.data.results]);
      console.log(JSON.stringify(users,null,2))
      setIsLoading(false);
    });
};
