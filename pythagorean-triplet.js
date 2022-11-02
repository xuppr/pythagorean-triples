/**
 * Author: Lorenzo Calvello
 *
 * Optimized solution based on Euclid's formula.
 */

const coprime = (a, b) => {
  let A;
  let B;
  a < b ? (A = a) && (B = b) : (A = b) && (B = a);
  const divisors = getDivisors(A);

  return divisors.every((divisor) => B % divisor !== 0);
};

const getDivisors = (n) => {
  const divisors = [];

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      const m = n / i;
      if (m === i) {
        divisors.push(i);
      } else {
        divisors.push(i, m);
      }
    }
  }

  return divisors;
};

export function triplets({ minFactor = 0, maxFactor = Infinity, sum }) {
  const sumDivisors = [1].concat(getDivisors(sum / 2));

  const tripletsArray = [];
  const tripletsSet = new Set();

  sumDivisors.forEach((k, i, arr) => {
    arr.forEach((m) => {
      if ((sum / 2) % (k * m) === 0) {
        const n = sum / (2 * m * k) - m;

        let a = k * (m ** 2 - n ** 2);
        let b = k * 2 * m * n;
        const c = k * (m ** 2 + n ** 2);
        if (
          n > 0 &&
          a > minFactor &&
          b > minFactor &&
          c < maxFactor &&
          coprime(m, n) &&
          (m % 2 === 0 || n % 2 === 0)
        ) {
          const tmp = a;
          a > b ? (a = b) && (b = tmp) : null;

          const tripletStr = `${a},${b},${c}`;

          if (!tripletsSet.has(tripletStr)) {
            tripletsArray.push(new Triplet(a, b, c));
            tripletsSet.add(tripletStr);
          }
        }
      }
    });
  });

  // useless, needed because some tests require a sorted array
  tripletsArray.sort((a, b) => a.a - b.a);

  return tripletsArray;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
