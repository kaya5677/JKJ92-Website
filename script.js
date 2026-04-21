const appData = {
  logoText: "LOGO",
  brandText: "JKJ92",
  langFlag: "🇬🇧",
  langText: "EN",
  tickerText: "the more you SHARE the more you GET! 😍 😘 😘  Banned all Funky Monkey Members",
  tabTitle: "Transaction",
  leftHeader: "Transaction",
  rightHeader: "Status",
  promoText: "🎁 FREE CREDIT 365 DAYS — JOIN US NOW",
  navLabels: {
    home: "Home",
    history: "History",
    chat: "Chat",
    settings: "Settings"
  },
  transactions: [
    {
      type: "Withdrawal",
      paymentMethod: "",
      amount: "RM5",
      datetime: "21 Apr 2026 11:20PM",
      status: "Approved"
    },
    {
      type: "Deposit",
      paymentMethod: "GXBank",
      amount: "RM5",
      datetime: "21 Apr 2026 10:23PM",
      status: "Approved"
    },
    {
      type: "Deposit Simpan Jumlah RM100",
      paymentMethod: "",
      amount: "",
      datetime: "Masa 21 Apr 2026 9:22PM",
      status: "Pending"
    },
    {
      type: "WITHDRAW SIMPAN RM3600",
      paymentMethod: "",
      amount: "",
      datetime: "Masa 21 Apr 2026 11:22PM",
      status: "Rejected"
    }
  ]
};

function getStatusClass(status) {
  const s = status.toLowerCase().trim();

  if (s === "approved" || s === "successful" || s === "success") {
    return "approved";
  }

  if (s === "pending") {
    return "pending";
  }

  if (s === "rejected" || s === "failed" || s === "unsuccessful") {
    return "rejected";
  }

  if (s === "processing") {
    return "processing";
  }

  return "approved";
}

function renderTransactions(transactions) {
  const list = document.getElementById("transactionList");
  list.innerHTML = "";

  transactions.forEach((item) => {
    const row = document.createElement("div");
    row.className = "tx-row";

    const left = document.createElement("div");
    const right = document.createElement("div");

    let leftHtml = `<div class="tx-type">${item.type || ""}</div>`;

    if (item.paymentMethod) {
      leftHtml += `<div class="tx-line">Deposit Method: ${item.paymentMethod}</div>`;
    }

    if (item.amount) {
      leftHtml += `<div class="tx-line">Total: ${item.amount}</div>`;
    }

    if (item.datetime) {
      leftHtml += `<div class="tx-line">${item.datetime}</div>`;
    }

    left.innerHTML = leftHtml;

    right.innerHTML = `
      <div class="status-box">
        <span class="dot ${getStatusClass(item.status || "")}"></span>
        <span>${item.status || ""}</span>
      </div>
    `;

    row.appendChild(left);
    row.appendChild(right);
    list.appendChild(row);
  });
}

function initPage() {
  document.getElementById("logoText").textContent = appData.logoText;
  document.getElementById("brandText").textContent = appData.brandText;
  document.getElementById("langFlag").textContent = appData.langFlag;
  document.getElementById("langText").textContent = appData.langText;
  document.getElementById("tickerText").textContent = appData.tickerText;
  document.getElementById("tabTitle").textContent = appData.tabTitle;
  document.getElementById("leftHeader").textContent = appData.leftHeader;
  document.getElementById("rightHeader").textContent = appData.rightHeader;
  document.getElementById("promoText").textContent = appData.promoText;

  document.getElementById("navHome").textContent = appData.navLabels.home;
  document.getElementById("navHistory").textContent = appData.navLabels.history;
  document.getElementById("navChat").textContent = appData.navLabels.chat;
  document.getElementById("navSettings").textContent = appData.navLabels.settings;

  renderTransactions(appData.transactions);

  document.getElementById("closePromoBtn").addEventListener("click", () => {
    document.getElementById("promoBanner").style.display = "none";
  });
}

initPage();
