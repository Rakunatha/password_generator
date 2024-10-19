document.getElementById('generate').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value);

    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeDigits = document.getElementById('digits').checked;
    const includeSpecial = document.getElementById('special').checked;

    let characters = '';

    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeDigits) characters += '0123456789';
    if (includeSpecial) characters += '!@#$%^&*()_+[]{}|;:",.<>?';

    if (!characters) {
        document.getElementById('result').innerText = 'Please select at least one character type.';
        return;
    }

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('result').innerText = `Generated Password: ${password}`;
});