let textareaH;

function textareaHeightFunction(event) {
    let textarea = event.target;

    textarea.style.height = `${textareaH}px`;
    textarea.style.height = `${textarea.scrollHeight}px`;
    textarea.style.minHeight = `4rem`;
}

export default {
    bind: function(el) {
        textareaH = el.offsetHeight;
        el.addEventListener('input', textareaHeightFunction);
    },
    unbind: function(el) {
        el.removeEventListener('input', textareaHeightFunction);   
    },
}