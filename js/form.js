function submitData(){
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-messege').value

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);


    if (name == ''){
        return alert("silahkan isi nama")
    } else if (email == '' ){
        return alert("silahkan isikan email")
    } else if (phone == '' ){
        return alert("silahkan isi no telepon")
    } else if(subject == '' ){
        return alert("silahkan isi subject") 
    } else if (message == '' ){
        return alert("silahkan tuliskan pesan anda")
    }


        //let emailReciver = 'tprayoga707@gmail.com'

    let a = document.createElement ('a')

    a.href = `mailto:${email}?subject=${subject}&body=Hallo my name ${name} ${message} please call me ${phone}`

    a.click ()

    let dataObject ={
        namaLengkap : name,
        email : email,
        phone : phone,
        subject : subject,
        komentar : message,
     }

        console.log(dataObject);
        window.location.reload();
    }