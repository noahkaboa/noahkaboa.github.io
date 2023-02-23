const params = new URLSearchParams(window.location.search);
if (params.has('door')){
    document.getElementById("doorHeader").innerHTML = titleCase(params.get('door'));
    if (params.get('door') == "eyeron"){
        alert("You got the flag! flag{12345}");
    }
}


function titleCase(str) {
    str = str.toLowerCase()
             .split(' ')
             .map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
  });
   return str.join(' '); 
}

// const {MongoClient} = require('mongodb');

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`))
// }

// async function main() {
//     const uri = 'mongodb+srv://anon:anon@doors.4ozbh4f.mongodb.net/?retryWrites=true&w=majority';
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         await listDatabases(client);
//     } catch(e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }
// main().catch(console.error)