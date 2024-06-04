
const URL = `http://localhost:8080/users`;

/* export async function getUsers() { //! cache mekanizması ile yaptık database değişsse bile uı a basılan veri değişmedi
    const res = await fetch(URL)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   const data = await res.json();

    return data;
  } */


/* export async function getUsers() {
    const res = await fetch(URL, {next:{revalidate:10}}) //! revalitede ile 20 sn sonra kullanıcı kendi isteği ile sayfaya gelirse istek at manasına geliyor, otamatik istek atmıyor.
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   const data = await res.json();

    return data;
  } */


export async function getUsers() {
    const res = await fetch(URL, { cache:"no-store"}) //! no-store mekanizması ile veri her refresh te güncelleniyor.
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   const data = await res.json();

    return data;
  }