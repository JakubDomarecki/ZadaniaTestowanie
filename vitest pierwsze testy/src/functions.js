export function multiply(a, b) {
  return a * b;
}

export function isAdult(age) {
  return age >= 18;
}

export function getUsername(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ id: 1, name: "John Doe" });
      } else {
        reject(new Error("User not found"));
      }
    }, 100);
  });
}
