const transactions = [
  {
    type: "Withdrawal",
    lines: ["Total: RM5", "21 Apr 2026 11:20PM"],
    status: "Approved"
  },
  {
    type: "Deposit",
    lines: ["Deposit Method: GXBank", "Total: RM5", "21 Apr 2026 10:23PM"],
    status: "Approved"
  },
  {
    type: "Deposit Simpan Jumlah\nRM100",
    lines: ["Masa 21 Apr 2026 9:22PM"],
    status: "Pending"
  },
  {
    type: "WITHDRAW SIMPAN\nRM3600",
    lines: ["Masa 21 Apr 2026 11:22PM"],
    status: "Rejected"
  }
];

function getStatusClass(status) {
  const value = status.toLowerCase().trim();

  if (value === "approved" || value === "success" || value === "successful") {
    return "approved";
  }
  if (value === "pending") {
    return "pending";
  }
  if (value === "rejected" || value === "failed" || value === "unsuccessful") {
    return "rejected";
  }
  if (value === "processing") {
    return "processing";
  }
  return "approved";
}

function renderTransactions() {
  const container = document.getElementById("transactionList");
  container.innerHTML = "";

  transactions.forEach((item) => {
    const row = document.createElement("div");
    row.className = "tx-row";

    const left = document.createElement("div");
    const right = document.createElement("div");

    const title = document.createElement("div");
    title.className = "tx-title";
    title.textContent = item.type;

    left.appendChild(title);

    item.lines.forEach((line) => {
      const lineEl = document.createElement("div");
      lineEl.className = "tx-line";
      lineEl.textContent = line;
      left.appendChild(lineEl);
    });

    right.innerHTML = `
      <div class="status-box">
        <span class="dot ${getStatusClass(item.status)}"></span>
        <span>${item.status}</span>
      </div>
    `;

    row.appendChild(left);
    row.appendChild(right);
    container.appendChild(row);
  });
}

document.getElementById("closePromoBtn").addEventListener("click", () => {
  document.getElementById("promoBanner").style.display = "none";
});

renderTransactions();
