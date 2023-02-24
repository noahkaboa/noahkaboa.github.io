const params = new URLSearchParams(window.location.search);
if (params.has('door')){
    document.getElementById("doorHeader").innerHTML = titleCase(params.get('door'));
    const door = params.get('door')
    var imgLink = "";
    if (door == "eyeron"){
        const flag = "flag{1_2_3_4_5}"
        document.getElementById("doorHeader").innerHTML = "IDOR";
        imgLink = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/eyes-everywhere-door-decor-1592255354.jpg"
        // alert("You got the flag! flag{12345}");
        document.getElementById("flagTxt").innerHTML = flag;
    } else if (door == "oak"){
        imgLink = "data:image/jpeg;base64,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";
    } else if (door == "spruce"){
        imgLink = "data:image/jpeg;base64,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";
    } else if (door == "birch"){
        imgLink = "data:image/jpeg;base64,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";
    } else if (door == "jungle"){
        imgLink = "data:image/jpeg;base64,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";
    } else if (door == "acacia"){
        imgLink = "data:image/jpeg;base64,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";
    } else if (door == "dark"){
        imgLink = "data:image/jpeg;base64,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";
    }
    document.getElementById("doorImg").src = imgLink;

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