export function generateTrafoId(allId: { id: string }[]) {
  const lastCode = allId
    .map((code) => parseInt(code.id.split('-')[1], 10))
    .sort((a, b) => b - a)[0]; // ambil angka terbesar

  const next = (lastCode + 1).toString().padStart(4, '0'); // -> "0011"
  return next;
}
