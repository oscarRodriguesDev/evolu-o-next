
interface PageId{
    params:{
        id:string
    }
}
 async function getData(id:string){
//https://api.github.com/users/devfraga/repos
const response = await fetch('https://api.github.com/users/devfraga/repos'); 
console.log(id)
return response.json()
} 
const RepositorioID = async ({params}:PageId) => {
   const data = getData(params.id)
  return (
    <>
      <div>
        <h2>Pagina do usuario {params.id}</h2>
      </div>
    </>
  );
};


export default RepositorioID