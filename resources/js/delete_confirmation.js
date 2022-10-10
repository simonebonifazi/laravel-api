const deleteForms = document.querySelectorAll('.delete-form');
deleteForms.forEach( form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        const hasConfirmed = confirm('Vuoi davvero eliminare il post?');
        if(hasConfirmed) form.submit();
    });
});