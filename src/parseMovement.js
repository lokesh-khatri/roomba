function parseMovement(movement) {
  const movementType = {
    N: { x: 0, y: 1 },
    S: { x: 0, y: -1 },
    W: { x: -1, y: 0 },
    E: { x: 1, y: 0 }
  };

  return movementType[movement] || { x: 0, y: 0 };
}

module.exports = parseMovement;
