const attack = (name, dmg, isCritical = false) => `Creature ${name} dealt with ${isCritical ? dmg * 2 : dmg} damage`;

module.exports = attack;