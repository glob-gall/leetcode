function predictPartyVictory(senate: string): string {
  const senateParties = {
    R: [],
    D: [],
  } as {
    R: number[];
    D: number[];
  };

  for (let i = 0; i < senate.length; i++) {
    const party: "R" | "D" = senate.charAt(i) as "R" | "D";
    senateParties[party].push(i);
  }

  while (senateParties.R.length && senateParties.D.length) {
    const r = senateParties.R.shift() || 0;
    const d = senateParties.D.shift() || 0;
    if (r < d) senateParties.R.push(r + senate.length);
    else senateParties.D.push(d + senate.length);
  }

  return senateParties.R.length ? "Radiant" : "Dire";
}
