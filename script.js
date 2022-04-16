let highlightBtn = document.querySelector('.highlight-btn');
let codeBlock = document.getElementById('codediv');


    highlightBtn.addEventListener('click', function() {

        window.getSelection().selectAllChildren(
            codeBlock
        );

        console.log('Code selected');
    })


