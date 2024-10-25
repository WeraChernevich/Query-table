new AirDatepicker('#calendar1', {
    inline: true,
    range: true,
    multipleDatesSeparator: ' - '
})

new AirDatepicker('#calendar2', {
    inline: true,
    range: true,
    multipleDatesSeparator: ' - '
})

new AirDatepicker('#calendar3', {
    inline: true,
    range: true,
    multipleDatesSeparator: ' - '
});

let buttons = document.querySelectorAll('.open-modal');

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const modal = document.getElementById('modal' + (index+1));
        modal.classList.toggle('open');
    });   
});

function handleClick() {
    console.log("Кнопка была нажата")
}


document.getElementById('selectAll').addEventListener('change', function(){
    var checkboxes = document.querySelectorAll('#checkbox');
    var deleteButton = document.querySelector('.table-loader__button-none');
    for(var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
    }

    if(this.checked) {
        deleteButton.style.display = 'block';
    } else {
        deleteButton.style.display = 'none';
    }
});

document.querySelectorAll('#checkbox').forEach(function(checkbox) {
    checkbox.addEventListener('change', function(){
        var checkboxes=document.querySelectorAll('#checkbox');
        var deleteButton = document.querySelector('.table-loader__button-none');
        var areAllChecked=false;

        for(var i=0; i<checkboxes.length;i++) {
            if(checkboxes[i].checked) {
                areAllChecked = true;
                break;
        }
    }


    if(areAllChecked) {
        deleteButton.style.display = 'block';
    } else {
        deleteButton.style.display = 'none';
    }
    });
});

