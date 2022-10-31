// function formatDoc(cmd, value=null) {
// 	value ? document.execCommand(cmd, false, value) : document.execCommand(cmd);
// }

// function addLink() {
// 	const url = prompt('Insert url');
// 	formatDoc('createLink', url);
// }




const content = document.getElementById('content');

content.addEventListener('mouseenter', () => {
	const a = content.querySelectorAll('a');
	a.forEach(item => {
		item.addEventListener('mouseenter',  () => {
			content.setAttribute('contenteditable', false);
			item.target = '_blank';
		})
		item.addEventListener('mouseleave', () => {
			content.setAttribute('contenteditable', true);
		})
	})
})


const showCode = document.getElementById('show-code');
let active = false;

// showCode.addEventListener('click', () => {
// 	showCode.dataset.active = !active;
// 	active = !active
// 	if(active) {
// 		content.textContent = content.innerHTML;
// 		content.setAttribute('contenteditable', false);
// 	} else {
// 		content.innerHTML = content.textContent;
// 		content.setAttribute('contenteditable', true);
// 	}
// })



const filename = document.getElementById('filename');

function fileHandle(value) {
	switch(value) {
        case 'new':
            content.innerHTML = '';
            filename.value = 'untitled'
            break;
        case 'pdf':
		    html2pdf(content).save(filename.value);
            break;
	}
}