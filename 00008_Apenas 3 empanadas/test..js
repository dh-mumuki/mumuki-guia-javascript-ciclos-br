describe("Calcular somar5MoedasDe25Centavos()", function() {
  it("deveria devolver por tela 1.25", function() {
    somar5MoedasDe25Centavos()
	assert.equal(console.toString(), "1.25\n")
  });
})
