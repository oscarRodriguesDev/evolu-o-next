//recuperar dados da api
/* async function getData(){
//https://api.github.com/users/devfraga/repos
const response = await fetch('https://api.github.com/users/devfraga/repos'); 
return response.json()
} */
//tipagem do item que vai ser recuperado da api
import { OwnerRepo } from "@/components/ownerRepo";
import { MeasureMemoryMode } from "vm";

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

async function delayFetch(url: string, delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  const response = await fetch(url);
  return response.json();
}

async function getData() {
  const data = await delayFetch(
    "https://api.github.com/users/devfraga/repos",
    200
  );
  return data;
}

export default async function Home() {
  const data: DataProps[] = await getData();
  //console.log(data)
  return (
    <main>
      <h1>Pagina Home</h1>
      <span>Seje bem vindo a pagina home</span>
      <br />
      <h3>listando meus repositorios</h3>

      {data.map((item) => {
        return (
          <div key={item.id}>
            <strong>Repositorio:</strong> <a>item.name</a>
            <br />
            <OwnerRepo
           avatar_url = {item.owner.avatar_url}
           name = {item.owner.login}
            />
          </div>
        );
      })}
    </main>
  );
}
