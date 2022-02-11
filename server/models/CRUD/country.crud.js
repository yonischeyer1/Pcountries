
import { Country } from "../country.js";

export function Create () {

}

export async function ReadAll() {
    return new Promise((resolve ,reject)=>{
        Country.findAll ({}).then(function (result) {
            resolve(result)
        }).catch((err)=>{
            reject(err);
        });
    })
}

export async function Read ({offset, size}) {
return new Promise((resolve ,reject)=>{
    Country.findAndCountAll ({
        raw: true,
        limit: size,
        offset: offset,
    }).then(function (result) {
        resolve(result)
    }).catch((err)=>{
        reject(err);
    });
})
}

export function Update (country) {
    const countryId = country.id;
    delete country.id
    return new Promise((resolve, reject)=>{
    Country.update(
        { ...country },
        { where: { id: countryId } }
      )
        .then(result =>
            resolve(result)
        )
        .catch(err =>
            reject(err)
        )
})
}

export function Delete (id) {
    return new Promise((resolve, reject)=>{
    Country.destroy({
        where: {id}
    }).then((result)=>{
        resolve(result)
    }).catch((err)=>{
        reject(err)
    })
})
}