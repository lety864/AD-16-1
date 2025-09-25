const form = document.getElementById("form1");

form.addEventListener("submit", (event) =>{

    event.preventDefault();

    const firstName = event.target.elements["fname"].value;
    const lastName = event.target.elements["lname"].value;
    console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
});

function getFormvalue(){
    // esta función ya no es necesaria porque el listener la reemplaza
}