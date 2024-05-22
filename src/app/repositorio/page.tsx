'use client'
import { useEffect, useState } from "react";

interface DataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };
}

const Repositorio = () => {
  const [repos, setRepos] = useState<DataProps[]>([]);

  useEffect(() => {
    function getData() {
      fetch('https://api.github.com/users/devfraga/repos')
        .then(response => response.json())
        .then((data: DataProps[]) => {
          setRepos(data);
        })
        .catch(error => {
          console.error('Erro ao buscar dados:', error);
        });
    }

    getData();
  }, []);

  return (
    <div>
      <h1>Pagina Repositorio</h1>
      {repos.map((item) => (
        <div key={item.id}>
          <strong>Repositorio:</strong> <a>{item.name}</a>
        </div>
      ))}
    </div>
  );
};

export default Repositorio;
