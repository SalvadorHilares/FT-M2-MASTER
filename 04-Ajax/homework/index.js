//listado amigos
$('#boton').click(()=>{
    //tomo el elemento que contiene la lista
    var list = $('#lista');
    //vacio la lista
    list.empty();
    //obtener la lista de nuestro servidor
    $.get('http://localhost:5000/amigos', (data)=>{
        //recorrer el array de objs
        for (let i = 0; i < data.length; i++) {
            //agregarlo(append..) al elemento de la lista
            list.append(`<li>${data[i].name}</li>`);
        }
    });
});

//busca un amigo por id
$('#search').click(()=>{
    //guardamos el valor del input
    let searchID = $('#input').val();
    //hacer request con ese valor
    $.get(`http://localhost:5000/amigos/${searchID}`, (data)=>{
        $('#amigo').text(data.name);
    });
});

//borrar un amigo
$('#delete').click(()=>{
    //guardamos el valor del input
    let deleteID = $('#inputDelete').val();

    //Mandar request a delete y borrar a nuestro examigo
    //VERSION MALA!!!!!
    // $.delete(`http://localhost:5000/amigos/${deleteID}`, (data)=>{
    //     console.log(data);
    //     //renderizar mensaje de exito
    //     let msgcont = $('#success').text('Tu ex amigo ha sido eleminado!');

    //     //rerenderizando la lista
    //     let list = $('#lista');
    //     list.empty();
    //     for (let i = 0; i < data.length; i++) {
    //         //agregarlo(append..) al elemento de la lista
    //         list.append(`<li>${data[i].name}</li>`);
    //     }
    // });
    $.ajax({
        url:`http://localhost:5000/amigos/${deleteID}`,
        type: "DELETE",
        success: ()=>{
            //renderizar mensaje de exito
            $('#success').text('Tu ex amigo ha sido eleminado!');

            //rerenderizando la lista
            $('#boton').click();

        }
    });
});