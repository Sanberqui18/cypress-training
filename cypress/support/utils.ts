//Add Data test function
function dataTestFormat(product: string): string {
  const result = product.replace(/\s+/g, "-").toLowerCase();

  return result;
}

export { dataTestFormat };
