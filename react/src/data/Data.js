
export const create = (item) => {
    let data = JSON.parse(localStorage.getItem('data'))
    if (data !== null) {
        let exist = data.find((element) => element.email === item.email)
        if (exist !== undefined) {
            alert('No puedes crear comentarios con este correo!');
            return false;
        }else{
            data.push(item)
        }
    } else {
        data = [];
        data.push(item)
    }
    localStorage.setItem('data', JSON.stringify(data))
    alert('registro creado!');
    return true
}

export const edit = (item) => {
    let data = JSON.parse(localStorage.getItem('data'));
    let index = data.indexOf(data.find((element) => element.email === item.email));
    let dataclone = [...data]
    dataclone[index] = item
    localStorage.setItem('data', JSON.stringify(dataclone))
}

export const list = () => {
    let data = JSON.parse(localStorage.getItem('data'));
    if (data !== null){
        return data;
    }
    return [];
}

export const filter = (keyword) => {
    let data = JSON.parse(localStorage.getItem('data'));
    if (data === null){
        return;
    }
    let dataFiltered = data.filter((element) =>{
       return (element.name === keyword || element.email === keyword || element.web === keyword);
    })
    return dataFiltered;
}

