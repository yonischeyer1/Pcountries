import  {Create, Read, Update, Delete, ReadAll} from '../models/CRUD/country.crud.js'

export async function getCountry(factors) {
    try {
        await Read().catch(err => {throw err})
    } catch(err) {
        throw err
    }
}

export async function getCountries(options) {
    try {
        const offset = (options.page - 1) * options.size 
        const result = await Read({offset, size:options.size}).catch(err => {throw err})
        return result;
    } catch(err) {
        throw err
    }
}


export async function getAllCountries() {
    const result = await ReadAll().catch(err => {throw err})
    return result;
}

export async function editCountry(data) {
    try {
       const country = await Update(data).catch(err => {throw err})
       return country;
    } catch(err) {
        throw err
    }
}

export async function removeCountry(id) {
    try {
        await Delete(id).catch(err => {throw err})
    } catch(err) {
        throw err
    }
}
