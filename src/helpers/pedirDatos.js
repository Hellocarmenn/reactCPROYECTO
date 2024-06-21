import data from "/src/data/data.json";

export const pedirDatos = () => {
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(data)
        },500)
    })
}