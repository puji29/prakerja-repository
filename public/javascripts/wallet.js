// Data pengguna e-wallet
const users = {
    user1: { identity: 1, username: 'Puji', saldo: 1000 },
    user2: { identity: 2, username: 'Ahmad', saldo: 500 },
    user3: { identity: 3, username: 'Bambang', saldo: 750 },
};

// Fungsi untuk menampilkan semua data pengguna dalam tabel
function displayAllUserData() {
    const userData = document.getElementById('userData');
    userData.innerHTML = '';

    for (const userId in users) {
        const user = users[userId];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.identity}</td>
            <td>${user.username}</td>
            <td>${user.saldo}</td>
        `;
        userData.appendChild(row);
    }
}

// Inisialisasi
displayAllUserData();

// Fungsi untuk menambah saldo pengguna
document.getElementById('topupButton').addEventListener('click', function () {
    const selectedUser = document.getElementById('user').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount)) {
        users[selectedUser].saldo += amount;
        displayAllUserData();
    }
});

// Fungsi untuk mentransfer saldo antara pengguna
document.getElementById('transferButton').addEventListener('click', function () {
    const sender = document.getElementById('user').value;
    const recipient = document.getElementById('recipient').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount)) {
        if (users[sender].saldo >= amount) {
            users[sender].saldo -= amount;
            users[recipient].saldo += amount;
            displayAllUserData();
        } else {
            alert('Saldo pengirim tidak mencukupi');
        }
    }
});