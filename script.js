document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const nameInput = document.getElementById('nameInput');
    const ageInput = document.getElementById('ageInput');
    const pronounsInput = document.getElementById('pronounsInput');
    const displayName = document.getElementById('displayName');
    const displayAge = document.getElementById('displayAge');
    const displayPronouns = document.getElementById('displayPronouns');
    const resultDiv = document.getElementById('result');

    generateBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const age = ageInput.value.trim();
        const pronouns = pronounsInput.value.trim();

        if (name && age && pronouns) {
            displayName.textContent = name;
            displayAge.textContent = age;
            displayPronouns.textContent = pronouns;
            resultDiv.style.display = 'block';
        } else {
            alert('Please enter your name, age, and pronouns.');
            resultDiv.style.display = 'none';
        }
    });

    
    resultDiv.style.display = 'none';
});