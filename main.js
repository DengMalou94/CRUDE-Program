let contacts = [];
// Function to add a contact
let addContact = () =>{
    let name = prompt("Enter the Contact's name:");
    let phone =prompt("Enter the contact's phone number");
    let email = prompt("Enter the Contact's Email:");
    if(name && phone&&email){
        let contact={
            name:name,
            phone:phone,
            email:email
        };
        contacts.push(contact);
        alert('Contact added successfully');
    }
    else{
        alert('All fields are required');
    }
};

// Function to view contacts 
let viewContacts = ()=>{
    let contactList=document.getElementById('contactList');
    contactList.innerHTML="";// clear previous contacts 
    if(contacts.length===0){
        alert("No contacts Available");
    }
    else{
        contacts.forEach(contact=>{
            let listItem=document.createElement('li');
            listItem.textContent= `name:
            ${contact.name}, Phone:${contact.phone},Email:${contact.email}`;
            contactList.appendChild(listItem);
        });
    }
};

// Function to Search contact
let SearchContact=()=>{
    let searchName = prompt("Enter the name of the contact");
    let found =false;

    contacts.forEach(contact=>{
        if(contact.name.tolowerCase() === searchName.toLowerCase()){
            alert(`Contact Found:${contact.name},Phone:${contact.phone},Email:${contact.email}`);
            found =true;
        }
    });
    if(!found){
        alert("Contact not found");
    }
};
// Function to delete a contact
let deleteContact = ()=>{
        let deleteName = prompt("Enter the name of the contact to delete:");
        let indexToDelete=-1;
        contacts.forEach(contact,index=>{
            if(contact.name.toLowerCase()===deleteName.toLowerCase()){
                indexToDelete =index;
            }
        });
        if(indexToDelete !== -1){
            contacts.splice(indexToDelete,1);
            alert("Contact deleted successfully");
            viewContacts();// Refresh the contact list   
        }
        else{
            alert("Contact not found");
        }
    };

    //  Event Listeners for buttons
document.getElementById('addContactBtn').addEventListener('click',addContact);
document.getElementById('viewContactBtn').addEventListener('click',viewContacts);
document.getElementById('searchContactBtn').addEventListener('click',SearchContact);
document.getElementById('deleteContactBtn').addEventListener('click',deleteContact);

