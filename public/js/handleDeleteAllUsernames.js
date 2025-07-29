const deleteAllUsernamesForm = document.getElementById('deleteAllUsernames-form');

deleteAllUsernamesForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('deleteAllUsernamesForm submitted');


    const result = confirm('Are you sure?');
    console.log('result', result);

    if (result) {
       try {
         const response = await fetch('/deleteAllUsernames', {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Response.ok all usernames deleted');
            window.location.reload();
        }
       }
       catch (error) {
        console.log('Could not delete');
       }
    }
    return;
})