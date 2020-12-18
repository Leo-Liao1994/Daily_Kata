function ranking(input) {
  input.sort((a, b) => {
    if (a.points === b.points) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return nameA.localeCompare(nameB);
    }
    return b.points - a.points;
  });

  const positioned = input.map((person, i) => {
    return Object.assign(person, { position: i+1 });
  });

  const tie = positioned.map((person, i) => {
    if (!i) {
      return person;
    }
    if (person.points === positioned[i-1].points) {
      return Object.assign(person, { position: positioned[i-1].position });
    }
    return person;
  });

  return tie;
}