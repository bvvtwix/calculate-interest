      const calculateButton = document.getElementById("#calculate-button");
  
      calculateButton.addEventListener("click", calculateInterest);

      function calculateInterest() {
        const amount = parseFloat(document.getElementById("amount").value);
        const years = parseInt(document.getElementById("years").value);
        const isVip = document.getElementById("vip").checked;
        const hasExistingDeposit = document.getElementById("existing-deposit").checked;
        let interestRate = 0;

        // Calculate interest based on amount
        if (amount >= 1 && amount < 100) {
          interestRate += 1;
        } else if (amount >= 100 && amount < 200) {
          interestRate += 2;
        } else if (amount >= 200) {
          interestRate += 3;
        }

        // Calculate interest based on years
        if (years === 1) {
          interestRate += 1;
        } else if (years === 2) {
          interestRate += 2;
        }

        // Calculate interest based on VIP status
        if (isVip) {
          interestRate += 1;
        }

        // Calculate interest based on existing deposit
        if (hasExistingDeposit) {
          interestRate -= 3;
        } else {
          interestRate += 8;
        }

        document.getElementById("interest-rate").textContent = `${interestRate}%`;
      }
