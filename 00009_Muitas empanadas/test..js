describe("Calcular somarMoedasDe25(6)", function() {
  it("deveria devolver 1.50", function() {
    somarMoedasDe25(6)
	assert.equal(console.toString(), 1.5)
  });
})
describe("Calcular somarMoedasDe25(4)", function() {
  it("deveria devolver 1", function() {
    (somarMoedasDe25(4)
	assert.equal(console.toString(), 1)
  });
})

describe("Calcular somar5MoedasDe25Centavos()", function() {
  it("deveria devolver por tela 1.25", function() {
    somar5MoedasDe25Centavos()
	assert.equal(console.toString(), "1.25\n")
  });
})