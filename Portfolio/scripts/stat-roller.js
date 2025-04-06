document.addEventListener("DOMContentLoaded", () => {
    const rollBtn = document.getElementById("rollStatsBtn");
    const statsList = document.getElementById("statsList");
  
    const stats = ["Health", "Mana", "Strength", "Defense", "Dodge Chance"];
  
    function rollStat(min = 5, max = 20) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    rollBtn.addEventListener("click", () => {
      statsList.innerHTML = ""; // clear existing list
  
      const rolledStats = stats.map(stat => {
        return {
          name: stat,
          value: rollStat()
        };
      });
  
      rolledStats.forEach(stat => {
        const li = document.createElement("li");
        li.textContent = `${stat.name}: ${stat.value}`;
        statsList.appendChild(li);
      });
    });
  });
  