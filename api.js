
// Open Data
async function openData() {
    const data = await fetch('https://github.com/FA25-CS300-SarahJefferson/FA25-CS300-SarahJefferson.github.io');
    const open_data = await data.json();
    console.log("Open data: ", open_data);
}

openData();
