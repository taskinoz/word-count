document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.getElementById('textArea');
    const result = document.getElementById('result');
    const countTypeRadios = document.getElementsByName('countType');

    const updateResult = () => {
        const countType = document.querySelector('input[name="countType"]:checked').value;
        const text = textArea.value.trim();
        let wordCount = text ? text.split(/\s+/).length : 0;
        let charCount = text.length;

        switch (countType) {
            case 'words':
                result.textContent = `Words: ${wordCount}`;
                break;
            case 'characters':
                result.textContent = `Characters: ${charCount}`;
                break;
            case 'both':
                result.textContent = `Words: ${wordCount}, Characters: ${charCount}`;
                break;
        }
    };

    textArea.addEventListener('input', updateResult);

    countTypeRadios.forEach(radio => {
        radio.addEventListener('change', updateResult);
    });
});
