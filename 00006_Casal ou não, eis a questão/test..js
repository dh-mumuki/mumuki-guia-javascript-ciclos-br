describe("Imprimir passandoPelosPares()", function() {
  it("deve imprimir 'aqui i tem o valor de 0','aqui i tem o valor de 2','aqui i tem o valor de 4','aqui i tem o valor de 6'", function() {
	passandoPelosPares();
	assert.equal(console.toString(), "aqui i tem o valor de 0\naqui i tem o valor de 2\naqui i tem o valor de 4\naqui i tem o valor de 6\n")
  });
})
